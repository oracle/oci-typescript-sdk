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
 * The response to a request to export key material.
 */
export interface ExportedKeyData {
  /**
   * The OCID of the key version.
   */
  "keyVersionId": string;
  /**
   * The OCID of the master encryption key associated with this key version.
   */
  "keyId": string;
  /**
   * The date and time this key version was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   *
   */
  "timeCreated": Date;
  /**
   * The OCID of the vault that contains this key version.
   */
  "vaultId": string;
  /**
   * The base64-encoded exported key material, which is encrypted by using the public RSA wrapping key specified in the export request.
   *
   */
  "encryptedKey": string;
  /**
   * The encryption algorithm to use to encrypt exportable key material from a key that persists on the server (as opposed to a key that
   * persists on a hardware security module and, therefore, cannot be exported). Specifying RSA_OAEP_AES_SHA256 invokes the RSA AES key
   * wrap mechanism, which generates a temporary AES key. The temporary AES key is wrapped by the RSA public wrapping key provided along
   * with the request, creating a wrapped temporary AES key. The temporary AES key is also used to wrap the exportable key material. The
   * wrapped temporary AES key and the wrapped exportable key material are concatenated, producing concatenated blob output that jointly
   * represents them. Specifying RSA_OAEP_SHA256 means that the exportable key material is wrapped by the RSA public wrapping key provided
   * along with the request.
   *
   */
  "algorithm": ExportedKeyData.Algorithm;
}

export namespace ExportedKeyData {
  export enum Algorithm {
    RsaOaepAesSha256 = "RSA_OAEP_AES_SHA256",
    RsaOaepSha256 = "RSA_OAEP_SHA256",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExportedKeyData): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExportedKeyData): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
