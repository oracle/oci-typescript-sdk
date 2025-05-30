/**
 * Vault Key Management API
 * Use the Key Management API to manage vaults and keys. For more information, see [Managing Vaults](https://docs.oracle.com/iaas/Content/KeyManagement/Tasks/managingvaults.htm) and [Managing Keys](https://docs.oracle.com/iaas/Content/KeyManagement/Tasks/managingkeys.htm).

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
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
 * The details of the encrypted data that you want to decrypt.
 */
export interface DecryptDataDetails {
  /**
   * Information that can be used to provide an encryption context for the encrypted data.
   * The length of the string representation of the associated data must be fewer than 4096 characters.
   *
   */
  "associatedData"?: { [key: string]: string };
  /**
   * The encrypted data to decrypt.
   */
  "ciphertext": string;
  /**
   * The OCID of the key used to encrypt the ciphertext.
   */
  "keyId": string;
  /**
   * Information that provides context for audit logging. You can provide this additional
   * data as key-value pairs to include in audit logs when audit logging is enabled.
   *
   */
  "loggingContext"?: { [key: string]: string };
  /**
   * The OCID of the key version used to encrypt the ciphertext.
   */
  "keyVersionId"?: string;
  /**
   * The encryption algorithm to use to encrypt or decrypt data with a customer-managed key.
   * {@code AES_256_GCM} indicates that the key is a symmetric key that uses the Advanced Encryption Standard (AES) algorithm and
   * that the mode of encryption is the Galois/Counter Mode (GCM). {@code RSA_OAEP_SHA_1} indicates that the
   * key is an asymmetric key that uses the RSA encryption algorithm and uses Optimal Asymmetric Encryption Padding (OAEP).
   * {@code RSA_OAEP_SHA_256} indicates that the key is an asymmetric key that uses the RSA encryption algorithm with a SHA-256 hash
   * and uses OAEP.
   *
   */
  "encryptionAlgorithm"?: DecryptDataDetails.EncryptionAlgorithm;
}

export namespace DecryptDataDetails {
  export enum EncryptionAlgorithm {
    Aes256Gcm = "AES_256_GCM",
    RsaOaepSha1 = "RSA_OAEP_SHA_1",
    RsaOaepSha256 = "RSA_OAEP_SHA_256"
  }

  export function getJsonObj(obj: DecryptDataDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DecryptDataDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
