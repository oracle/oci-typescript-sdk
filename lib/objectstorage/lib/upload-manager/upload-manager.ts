/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { ObjectStorageClient } from "../client";
import { models } from "../../index";
import { version } from "../../package.json";
import os from "os";
import {
  OciError,
  LOG,
  getChunk,
  RetryConfiguration,
  NoRetryConfigurationDetails
} from "oci-common";
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
  RequestDetails,
  BinaryBody
} from "./types";
import { UploadOptions } from "./upload-options";
import { UploadableStream } from "./uploadable-stream";
import { NodeFSBlob } from "./node-fs-blob";

const CLIENT_VERSION = `Oracle-TypeScriptSDK/${version}`;

const OS_VERSION = `${os.type()} ${os.release()} ${os.platform()}`;
const UPLOAD_MANAGER_DEBUG_INFORMATION_LOG = `Client Version: ${CLIENT_VERSION}, OS Version: ${OS_VERSION}, See https://docs.oracle.com/iaas/Content/API/Concepts/sdk_troubleshooting.htm for common issues and steps to resolve them. If you need to contact support, or file a GitHub issue, please include this full error message.`;

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

export interface RawData {
  size: number;
  data: BinaryBody;
  md5Hash: string;
}

export class UploadManager {
  private readonly options: UploadOptions;
  // uploadSize will be a dictionary that keeps track of uploadSize per uploadId. This helps prevent mismatch uploadSize with
  // different upload when uploading multiple things in parallel.
  private uploadSize: { [key: string]: number } = {};
  private MAX_PARTS = 10000; // Object storage multipart upload does not allow more than 10000 parts.
  private MAX_READ_SIZE = Number.MAX_SAFE_INTEGER;
  // numberOfRetries will be a dictionary that keeps track of numberOfRetries per uploadId. This helps prevent mismatch numberOfRetries with
  // different upload when uploading multiple things in parallel.
  private numberOfRetries: { [key: string]: number } = {};
  private uploadRetryConfiguration = { retryConfiguration: NoRetryConfigurationDetails };

  private numberOfSingleUploadRetry = 0;
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
    isDisableAutoAbort: false,
    disableBufferingForFiles: true
  };

  private shouldUseMultipartUpload(
    content: UploadableBlob | UploadableStream,
    singleUpload?: boolean
  ): boolean {
    if (singleUpload || content.size == 0) {
      // Return false to force the upload to be a single upload,
      // multi-upload does not support sending a 0 sized part. Need to use single upload to handle 0 sized streams
      return false;
    }
    if (!content.size) {
      // Always use multiupload if content.size is not able to initially calculated.
      return true;
    }
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
    const content = await getContent(request.content, this.options);
    if (this.shouldUseMultipartUpload(content, request.singleUpload)) {
      return this.multiUpload(request.requestDetails, content, callback);
    } else {
      let body = await content.getData();
      const dataFeeder = getChunk(body, this.MAX_READ_SIZE);
      const dataPart = (await dataFeeder.next()).value as RawData;
      return this.singleUpload(request.requestDetails, dataPart);
    }
  }

  private async singleUpload(
    requestDetails: RequestDetails,
    content: RawData
  ): Promise<UploadResponse> {
    const contentDetails: PutObjectContentDetails = {
      putObjectBody: content.data,
      contentLength: content.size
    };
    const contentMD5Hash: PutObjectContentMD5HashDetails = this.options.enforceMD5
      ? { contentMD5: content.md5Hash }
      : {};
    if (this.logger) this.logger.debug("uploading using single upload");
    try {
      const response = await this.client.putObject({
        ...requestDetails,
        ...contentDetails,
        ...contentMD5Hash,
        ...this.uploadRetryConfiguration
      });
      this.numberOfSingleUploadRetry = 0;
      return {
        eTag: response.eTag,
        contentMd5: response.opcContentMd5,
        opcRequestId: response.opcRequestId,
        opcClientRequestId: response.opcClientRequestId
      };
    } catch (e) {
      if (this.numberOfSingleUploadRetry < 3) {
        console.log(`putObject failed, will retry. Last known error: ${e}`);
        this.numberOfSingleUploadRetry += 1;
        return await this.singleUpload(requestDetails, content);
      } else {
        console.log(
          `putObject failed to retry ${this.numberOfSingleUploadRetry} times. Error: ${e}`
        );
        const error = {
          message: `putObject failed to retry ${this.numberOfSingleUploadRetry} times. Error: ${e}`,
          troubleShootingInfo: UPLOAD_MANAGER_DEBUG_INFORMATION_LOG
        };
        throw error;
      }
    }
  }

  private async triggerUploadPart(
    content: RawData | UploadableBlob,
    requestDetails: RequestDetails,
    uploadId: string,
    uploadPartNum: number,
    semaphore: Semaphore,
    totalSize: number,
    callback?: Function
  ): Promise<models.CommitMultipartUploadPartDetails> {
    try {
      return await semaphore.use(async () => {
        let contentDetails: UploadPartContentDetails = <UploadPartContentDetails>{};
        let contentMD5Hash: UploadPartContentMD5HashDetails = <UploadPartContentMD5HashDetails>{};
        if (content instanceof NodeFSBlob) {
          contentDetails = {
            uploadPartBody: await content.getData(),
            contentLength: content.size
          };

          contentMD5Hash = this.options.enforceMD5
            ? { contentMD5: await content.getMD5Hash() }
            : {};
        } else if ("data" in content) {
          contentDetails = {
            uploadPartBody: content.data,
            contentLength: content.size
          };
          contentMD5Hash = this.options.enforceMD5 ? { contentMD5: content.md5Hash } : {};
        }
        const uploadPartDetails: UploadPartDetails = {
          uploadId: uploadId,
          uploadPartNum: uploadPartNum
        };
        let response = await this.client.uploadPart({
          ...requestDetails,
          ...uploadPartDetails,
          ...contentDetails,
          ...contentMD5Hash,
          ...this.uploadRetryConfiguration
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
      this.numberOfRetries[uploadId] = this.numberOfRetries[uploadId]
        ? (this.numberOfRetries[uploadId] += 1)
        : 1;
      if (this.numberOfRetries[uploadId] < 4) {
        console.log(`Upload part failed, will retry. Last known error: ${ex}`);
        return await this.triggerUploadPart(
          content,
          requestDetails,
          uploadId,
          uploadPartNum,
          semaphore,
          totalSize,
          callback
        );
      } else {
        const error = {
          message: `Upload part retried ${this.numberOfRetries[uploadId]} times and failed. Upload of part: ${uploadPartNum} failed due to ${ex}`,
          troubleShootingInfo: UPLOAD_MANAGER_DEBUG_INFORMATION_LOG
        };
        throw error;
      }
    }
  }

  private async pushUploadParts(
    totalSize: number,
    requestDetails: RequestDetails,
    uploadId: string,
    content: UploadableBlob | UploadableStream,
    callback?: Function
  ) {
    let uploadPartNum = 1;
    const semaphore = new Semaphore(this.options.maxConcurrentUploads);
    const partUploadPromises = [];
    let dataFeeder;
    if (this.options.disableBufferingForFiles && content instanceof NodeFSBlob) {
      dataFeeder = getFileChunk(content, this.options.partSize);
    } else {
      let body = await content.getData();
      dataFeeder = getChunk(body, this.options.partSize);
    }
    for await (const dataPart of dataFeeder) {
      if (partUploadPromises.length > this.MAX_PARTS) {
        throw new Error(
          `Exceeded ${this.MAX_PARTS} as part of the upload to ${requestDetails.bucketName}. ${UPLOAD_MANAGER_DEBUG_INFORMATION_LOG}`
        );
      }
      if (dataPart.size === 0) {
        // If we have a 0 length part, we don't want to upload this.
        continue;
      }
      // let partToUpload = new StreamBlob(dataPart.data, this.options.partSize);
      partUploadPromises.push(
        this.triggerUploadPart(
          dataPart,
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
    // }
    return partUploadPromises;
  }

  private async multiUpload(
    requestDetails: RequestDetails,
    content: UploadableBlob | UploadableStream,
    callback?: Function
  ): Promise<UploadResponse> {
    const timestamp = Date.now().toString();
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

      const partUploadPromises = await this.pushUploadParts(
        totalSize,
        requestDetails,
        uploadId,
        content,
        callback
      );
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
      const error = {
        message: `Failed to upload due to ${ex}`,
        troubleShootingInfo: UPLOAD_MANAGER_DEBUG_INFORMATION_LOG
      };
      throw error;
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

function getFileChunk(content: NodeFSBlob, partSize: number) {
  return FileChunk(content, partSize);
}

async function* FileChunk(content: NodeFSBlob, partSize: number) {
  let totalSize = content.size;
  for (let currentChunkStart = 0; currentChunkStart < totalSize; currentChunkStart += partSize) {
    yield content.slice(currentChunkStart, currentChunkStart + partSize);
  }
}
