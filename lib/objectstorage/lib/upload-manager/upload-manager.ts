/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { ObjectStorageClient } from "../client";
import { models } from "../../index";
import { OciError, LOG } from "oci-common";
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
 * NodeJS V8 Engine have a buffer size limitation, 2GB for 64-bit machine and 1GB for 32-bit machine.
 * Do not make the partSize greater than the buffer size limitation.
 */

export class UploadManager {
  private readonly options: UploadOptions;

  // uploadSize will be a dictionary that keeps track of uploadSize per uploadId. This helps prevent mismatch uploadSize with
  // different upload when uploading multiple things in parallel.
  private uploadSize: { [key: string]: number } = {};

  public constructor(
    private readonly client: ObjectStorageClient,
    options?: Partial<UploadOptions>
  ) {
    this.options = { ...UploadManager.defaultUploadOptions, ...options };
  }

  public get logger() {
    return LOG.logger;
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

  public async upload(request: UploadRequest, callback?: Function): Promise<UploadResponse> {
    const content = getContent(request.content, this.options);
    if (this.shouldUseMultipartUpload(content)) {
      return this.multiUpload(request.requestDetails, content, callback);
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
    if (this.logger) this.logger.debug("uploading using single upload");
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
    semaphore: Semaphore,
    totalSize: number,
    callback?: Function
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
        const uploadSize = (this.uploadSize[uploadId] += content.size);
        const progress = (uploadSize / totalSize) * 100;
        const result = {
          etag: response.eTag,
          partNum: uploadPartNum,
          progress: progress.toFixed()
        };
        if (callback) {
          callback(result);
        }
        return result;
      });
    } catch (ex) {
      if (this.logger) this.logger.error(`Upload of part: ${uploadPartNum} failed due to ${ex}`);
      throw ex;
    }
  }

  private async multiUpload(
    requestDetails: RequestDetails,
    content: UploadableBlob,
    callback?: Function
  ): Promise<UploadResponse> {
    const createUploadResponse = await this.client.createMultipartUpload({
      ...UploadManager.composeRequestDetails(requestDetails),
      createMultipartUploadDetails: {
        object: requestDetails.objectName,
        storageTier: requestDetails.storageTier
          ? requestDetails.storageTier
          : models.StorageTier.Standard
      }
    });
    const uploadId = createUploadResponse.multipartUpload.uploadId;
    this.uploadSize[uploadId] = 0;
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
          this.triggerUploadPart(
            slicedContent,
            requestDetails,
            uploadId,
            uploadPartNum,
            semaphore,
            totalSize,
            callback
          )
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
        if (this.logger)
          this.logger.info(
            `Not aborting failed multipart upload as per configuration, client must manually abort it`
          );
      } else {
        if (this.logger) this.logger.error(`Aborting multi-part upload ${uploadId}`);
        await this.client.abortMultipartUpload({
          ...UploadManager.composeRequestDetails(requestDetails),
          uploadId: uploadId
        });
        if (this.logger) this.logger.error(`Abort complete`);
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
