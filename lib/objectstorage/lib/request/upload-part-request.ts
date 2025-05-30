/**
 *
 *
 * OpenAPI spec version: 20160918
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");
import stream = require("stream");

/**
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/objectstorage/UploadPart.ts.html |here} to see how to use UploadPartRequest.
 */
export interface UploadPartRequest extends common.BaseRequest {
  /**
   * The Object Storage namespace used for the request.
   */
  "namespaceName": string;
  /**
   * The name of the bucket. Avoid entering confidential information.
   * Example: {@code my-new-bucket1}
   *
   */
  "bucketName": string;
  /**
   * The name of the object. Avoid entering confidential information.
   * Example: {@code test/object1.log}
   *
   */
  "objectName": string;
  /**
   * The upload ID for a multipart upload.
   */
  "uploadId": string;
  /**
   * The part number that identifies the object part currently being uploaded.
   */
  "uploadPartNum": number;
  /**
   * The content length of the body.
   */
  "contentLength"?: number;
  /**
   * The part being uploaded to the Object Storage service.
   */
  "uploadPartBody": Uint8Array | Buffer | Blob | stream.Readable | ReadableStream | string;
  /**
   * The client request ID for tracing.
   */
  "opcClientRequestId"?: string;
  /**
   * The entity tag (ETag) to match with the ETag of an existing resource. If the specified ETag matches the ETag of
   * the existing resource, GET and HEAD requests will return the resource and PUT and POST requests will upload
   * the resource.
   *
   */
  "ifMatch"?: string;
  /**
   * The entity tag (ETag) to avoid matching. The only valid value is '*', which indicates that the request should
   * fail if the resource already exists.
   *
   */
  "ifNoneMatch"?: string;
  /**
   * A value of {@code 100-continue} requests preliminary verification of the request method, path, and headers before the request body is sent.
   * If no error results from such verification, the server will send a 100 (Continue) interim response to indicate readiness for the request body.
   * The only allowed value for this parameter is \"100-Continue\" (case-insensitive).
   *
   */
  "expect"?: string;
  /**
 * The optional header that defines the base64-encoded MD5 hash of the body. If the optional Content-MD5 header is present, Object
* Storage performs an integrity check on the body of the HTTP request by computing the MD5 hash for the body and comparing it to the
* MD5 hash supplied in the header. If the two hashes do not match, the object is rejected and an HTTP-400 Unmatched Content MD5 error
* is returned with the message:
* <p>
\"The computed MD5 of the request body (ACTUAL_MD5) does not match the Content-MD5 header (HEADER_MD5)\"
* 
 */
  "contentMD5"?: string;
  /**
   * The optional checksum algorithm to use to compute and store the checksum of the body of the HTTP request (or the parts in case of multipart uploads),
   * in addition to the default MD5 checksum.
   *
   */
  "opcChecksumAlgorithm"?: model.ChecksumAlgorithm;
  /**
 * Applicable only if CRC32C is specified in the opc-checksum-algorithm request header.
* <p>
The optional header that defines the base64-encoded, 32-bit CRC32C (Castagnoli) checksum of the body. If the optional opc-content-crc32c header
* is present, Object Storage performs an integrity check on the body of the HTTP request by computing the CRC32C checksum for the body and comparing
* it to the CRC32C checksum supplied in the header. If the two checksums do not match, the object is rejected and an HTTP-400 Unmatched Content CRC32C error
* is returned with the message:
* <p>
\"The computed CRC32C of the request body (ACTUAL_CRC32C) does not match the opc-content-crc32c header (HEADER_CRC32C)\"
* 
 */
  "opcContentCrc32c"?: string;
  /**
 * Applicable only if SHA256 is specified in the opc-checksum-algorithm request header.
* <p>
The optional header that defines the base64-encoded SHA256 hash of the body. If the optional opc-content-sha256 header is present, Object
* Storage performs an integrity check on the body of the HTTP request by computing the SHA256 hash for the body and comparing it to the
* SHA256 hash supplied in the header. If the two hashes do not match, the object is rejected and an HTTP-400 Unmatched Content SHA256 error
* is returned with the message:
* <p>
\"The computed SHA256 of the request body (ACTUAL_SHA256) does not match the opc-content-sha256 header (HEADER_SHA256)\"
* 
 */
  "opcContentSha256"?: string;
  /**
 * Applicable only if SHA384 is specified in the opc-checksum-algorithm request header.
* <p>
The optional header that defines the base64-encoded SHA384 hash of the body. If the optional opc-content-sha384 header is present, Object
* Storage performs an integrity check on the body of the HTTP request by computing the SHA384 hash for the body and comparing it to the
* SHA384 hash supplied in the header. If the two hashes do not match, the object is rejected and an HTTP-400 Unmatched Content SHA384 error
* is returned with the message:
* <p>
\"The computed SHA384 of the request body (ACTUAL_SHA384) does not match the opc-content-sha384 header (HEADER_SHA384)\"
* 
 */
  "opcContentSha384"?: string;
  /**
   * The optional header that specifies \"AES256\" as the encryption algorithm. For more information, see
   * [Using Your Own Keys for Server-Side Encryption](https://docs.oracle.com/iaas/Content/Object/Tasks/usingyourencryptionkeys.htm).
   *
   */
  "opcSseCustomerAlgorithm"?: string;
  /**
   * The optional header that specifies the base64-encoded 256-bit encryption key to use to encrypt or
   * decrypt the data. For more information, see
   * [Using Your Own Keys for Server-Side Encryption](https://docs.oracle.com/iaas/Content/Object/Tasks/usingyourencryptionkeys.htm).
   *
   */
  "opcSseCustomerKey"?: string;
  /**
   * The optional header that specifies the base64-encoded SHA256 hash of the encryption key. This
   * value is used to check the integrity of the encryption key. For more information, see
   * [Using Your Own Keys for Server-Side Encryption](https://docs.oracle.com/iaas/Content/Object/Tasks/usingyourencryptionkeys.htm).
   *
   */
  "opcSseCustomerKeySha256"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of a master encryption key used to call the Key
   * Management service to generate a data encryption key or to encrypt or decrypt a data encryption key.
   *
   */
  "opcSseKmsKeyId"?: string;
}
