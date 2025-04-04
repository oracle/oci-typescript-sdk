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
 * The details of the key that you want to encrypt or decrypt data.
 */
export interface GenerateKeyDetails {
  /**
   * Information that can be used to provide an encryption context for the encrypted data.
   * The length of the string representation of the associated data must be fewer than 4096
   * characters.
   *
   */
  "associatedData"?: { [key: string]: string };
  /**
   * If true, the generated key is also returned unencrypted.
   */
  "includePlaintextKey": boolean;
  /**
   * The OCID of the master encryption key to encrypt the generated data encryption key with.
   */
  "keyId": string;
  "keyShape": model.KeyShape;
  /**
   * Information that provides context for audit logging. You can provide this additional
   * data by formatting it as key-value pairs to include in audit logs when audit logging is enabled.
   *
   */
  "loggingContext"?: { [key: string]: string };
}

export namespace GenerateKeyDetails {
  export function getJsonObj(obj: GenerateKeyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyShape": obj.keyShape ? model.KeyShape.getJsonObj(obj.keyShape) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GenerateKeyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyShape": obj.keyShape ? model.KeyShape.getDeserializedJsonObj(obj.keyShape) : undefined
      }
    };

    return jsonObj;
  }
}
