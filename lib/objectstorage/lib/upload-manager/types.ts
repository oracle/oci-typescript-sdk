/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { RequireOnlyOne } from "oci-common";
import { requests } from "oci-objectstorage";
import { Readable } from "stream";

export type BinaryBody = Uint8Array | Buffer | Readable | ReadableStream | string | Blob;

export interface ContentTypes {
  blob?: Blob;
  filePath?: string;
  stream?: BinaryBody;
}

type PutObjectContent = "putObjectBody" | "contentLength";
type UploadPartContent = "uploadPartBody" | "contentLength";
type ContentMD5HashDetails<T extends { contentMD5?: string }> = Pick<T, "contentMD5">;
type uploadPartData = "uploadId" | "uploadPartNum";

export type Content = RequireOnlyOne<ContentTypes>;
export type PutObjectContentDetails = Pick<requests.PutObjectRequest, PutObjectContent>;
export type UploadPartContentDetails = Pick<requests.UploadPartRequest, UploadPartContent>;
export type PutObjectContentMD5HashDetails = ContentMD5HashDetails<requests.PutObjectRequest>;
export type UploadPartContentMD5HashDetails = ContentMD5HashDetails<requests.UploadPartRequest>;
export type UploadPartDetails = Pick<requests.UploadPartRequest, uploadPartData>;
export type RequestDetails = Omit<requests.PutObjectRequest, PutObjectContent>;
