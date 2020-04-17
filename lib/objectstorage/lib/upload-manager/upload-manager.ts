import { ObjectStorageClient } from "../client";
import { models } from "../../index";
import { OciError } from "oci-common";
import { UploadResponse } from "./upload-response";
import { Semaphore } from "await-semaphore";
import { UploadableBlob } from "./uploadable-blob";
import { getContent } from "./blob-factory";
import { UploadRequest } from "./upload-request";
import {
  PutObjectContentDetails,
  UploadPartContentDetails,
  PutObjectContentMD5HashDetails,
  UploadPartContentMD5HashDetails,
  UploadPartDetails,
  RequestDetails
} from "./types";
import { UploadOptions } from "./upload-options";

/**
 * UploadManager simplifies interaction with the Object Storage service by abstracting away the method used
 * to upload objects.  Depending on the configuration parameters(UploadOptions), UploadManager may choose to do a single
 * PutObject request, or break up the upload into multiple parts and utilize multi-part uploads.
 * <p>
 * An advantage of using multi-part uploads is the ability to be able to upload parts in parallel to reduce upload time.
 * <p>
 * Callers still have full control over how the UploadManager decides to perform the upload using UploadOptions.
 */

export class UploadManager {
  private readonly options: UploadOptions;

  public constructor(
    private readonly client: ObjectStorageClient,
    options?: Partial<UploadOptions>
  ) {
    this.options = { ...UploadManager.defaultUploadOptions, ...options };
  }

  private static defaultUploadOptions: UploadOptions = {
    partSize: 20 * 1024 * 1024,
    maxConcurrentUploads: 5,
    allowedMemoryUsage: 5 * 20 * 1024 * 1024,
    enforceMD5: false,
    isDisableAutoAbort: false
  };

  private shouldUseMultipartUpload(content: UploadableBlob): boolean {
    return content.size > this.options.partSize;
  }

  /**
   * Initiates a new upload request.  The upload manager will decide whether to use
   * a single PutObject call or multi-part uploads depending on the UploadOptions
   * specified.
   * <p>
   * Note, if a multi-part upload attempt fails, the UploadManager will attempt to
   * abort the upload to avoid leaving partially complete uploads and parts
   * (unless explicitly disabled via uploadOptions).
   *
   * @param request The upload request.
   * @return The UploadResponse.
   * @throws OciError if the upload fails for any reason.
   */

  public async upload(request: UploadRequest): Promise<UploadResponse> {
    const content = getContent(request.content, this.options);
    if (this.shouldUseMultipartUpload(content)) {
      return this.multiUpload(request.requestDetails, content);
    }
    return this.singleUpload(request.requestDetails, content);
  }

  private async singleUpload(
    requestDetails: RequestDetails,
    content: UploadableBlob
  ): Promise<UploadResponse> {
    const contentDetails: PutObjectContentDetails = {
      putObjectBody: await content.getData(),
      contentLength: content.size
    };
    const contentMD5Hash: PutObjectContentMD5HashDetails = this.options.enforceMD5
      ? { contentMD5: await content.getMD5Hash() }
      : {};
    console.log("uploading using single upload");
    const response = await this.client.putObject({
      ...requestDetails,
      ...contentDetails,
      ...contentMD5Hash
    });
    return {
      eTag: response.eTag,
      contentMd5: response.opcContentMd5,
      opcRequestId: response.opcRequestId,
      opcClientRequestId: response.opcClientRequestId
    };
  }

  private async triggerUploadPart(
    content: UploadableBlob,
    requestDetails: RequestDetails,
    uploadId: string,
    uploadPartNum: number,
    semaphore: Semaphore
  ): Promise<models.CommitMultipartUploadPartDetails> {
    try {
      return await semaphore.use(async () => {
        const contentDetails: UploadPartContentDetails = {
          uploadPartBody: await content.getData(),
          contentLength: content.size
        };
        const contentMD5Hash: UploadPartContentMD5HashDetails = this.options.enforceMD5
          ? { contentMD5: await content.getMD5Hash() }
          : {};
        const uploadPartDetails: UploadPartDetails = {
          uploadId: uploadId,
          uploadPartNum: uploadPartNum
        };
        const response = await this.client.uploadPart({
          ...requestDetails,
          ...uploadPartDetails,
          ...contentDetails,
          ...contentMD5Hash
        });
        return { etag: response.eTag, partNum: uploadPartNum };
      });
    } catch (ex) {
      console.error(`Upload of part: ${uploadPartNum} failed due to ${ex}`);
      throw ex;
    }
  }

  private async multiUpload(
    requestDetails: RequestDetails,
    content: UploadableBlob
  ): Promise<UploadResponse> {
    const createUploadResponse = await this.client.createMultipartUpload({
      ...UploadManager.composeRequestDetails(requestDetails),
      createMultipartUploadDetails: {
        object: requestDetails.objectName
      }
    });
    const uploadId = createUploadResponse.multipartUpload.uploadId;

    try {
      const totalSize = content.size;
      const partUploadPromises = new Array<Promise<models.CommitMultipartUploadPartDetails>>();
      let uploadPartNum = 1;
      const semaphore = new Semaphore(this.options.maxConcurrentUploads);
      for (
        let currentChunkStart = 0;
        currentChunkStart < totalSize;
        currentChunkStart += this.options.partSize
      ) {
        const slicedContent = content.slice(
          currentChunkStart,
          currentChunkStart + this.options.partSize
        );
        partUploadPromises.push(
          this.triggerUploadPart(slicedContent, requestDetails, uploadId, uploadPartNum, semaphore)
        );
        uploadPartNum++;
      }

      const uploadPartDetails = await Promise.all(partUploadPromises);
      const response = await this.client.commitMultipartUpload({
        ...UploadManager.composeRequestDetails(requestDetails),
        commitMultipartUploadDetails: {
          partsToCommit: uploadPartDetails
        },
        uploadId: uploadId
      });
      return {
        eTag: response.eTag,
        multipartMd5: response.opcMultipartMd5,
        opcRequestId: response.opcRequestId,
        opcClientRequestId: response.opcClientRequestId
      };
    } catch (ex) {
      if (this.options.isDisableAutoAbort) {
        console.log(
          `Not aborting failed multipart upload as per configuration, client must manually abort it`
        );
      } else {
        console.error(`Aborting multi-part upload ${uploadId}`);
        await this.client.abortMultipartUpload({
          ...UploadManager.composeRequestDetails(requestDetails),
          uploadId: uploadId
        });
        console.error(`Abort complete`);
      }
      if (ex instanceof OciError) throw ex;
      throw new OciError(
        -1,
        "Unknown code",
        `Failed to upload object using multi-part uploads due to ${ex}`,
        null
      );
    }
  }

  private static composeRequestDetails(requestDetails: RequestDetails) {
    return {
      namespaceName: requestDetails.namespaceName,
      bucketName: requestDetails.bucketName,
      objectName: requestDetails.objectName,
      opcClientRequestId: requestDetails.opcClientRequestId
    };
  }
}
