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

/**
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/objectstorage/CopyObject.ts.html |here} to see how to use CopyObjectRequest.
 */
export interface CopyObjectRequest extends common.BaseRequest {
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
   * The source and destination of the object to be copied.
   */
  "copyObjectDetails": model.CopyObjectDetails;
  /**
   * The client request ID for tracing.
   */
  "opcClientRequestId"?: string;
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
   * The optional header that specifies \"AES256\" as the encryption algorithm to use to decrypt the source
   * object. For more information, see
   * [Using Your Own Keys for Server-Side Encryption](https://docs.oracle.com/iaas/Content/Object/Tasks/usingyourencryptionkeys.htm).
   *
   */
  "opcSourceSseCustomerAlgorithm"?: string;
  /**
   * The optional header that specifies the base64-encoded 256-bit encryption key to use to decrypt
   * the source object. For more information, see
   * [Using Your Own Keys for Server-Side Encryption](https://docs.oracle.com/iaas/Content/Object/Tasks/usingyourencryptionkeys.htm).
   *
   */
  "opcSourceSseCustomerKey"?: string;
  /**
   * The optional header that specifies the base64-encoded SHA256 hash of the encryption key used to
   * decrypt the source object. This value is used to check the integrity of the encryption key. For
   * more information, see
   * [Using Your Own Keys for Server-Side Encryption](https://docs.oracle.com/iaas/Content/Object/Tasks/usingyourencryptionkeys.htm).
   *
   */
  "opcSourceSseCustomerKeySha256"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of a master encryption key used to call the Key
   * Management service to generate a data encryption key or to encrypt or decrypt a data encryption key.
   *
   */
  "opcSseKmsKeyId"?: string;
}
