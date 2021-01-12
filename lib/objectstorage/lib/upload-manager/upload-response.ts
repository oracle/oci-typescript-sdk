/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

export interface UploadResponse {
  /**
   * The etag of the object uploaded.
   */
  eTag: string;
  /**
   * The MD5 of the object uploaded.
   * <p>
   * Will be undefined if the object was uploaded using multi-part.
   */
  contentMd5?: string;
  /**
   * The multipart MD5 of the object uploaded.
   * <p>
   * Will be undefined if the object was uploaded using standard put-object.
   */
  multipartMd5?: string;
  /**
   * The opc-request-id associated with either the PutObject call
   * or the final CommitMultipartUpload call (if multi-part upload
   * was used).
   */
  opcRequestId: string;
  /**
   * The opc-client-request-id sent with every request, if provided.
   */
  opcClientRequestId: string;
}
