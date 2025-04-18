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
 * Metadata of the replica region External Vault
 */
export interface ReplicaExternalVaultMetadata extends model.ReplicaVaultMetadata {
  /**
   * OCID of the EKMS private endpoint in the replica region and must be in ACTIVE state
   */
  "privateEndpointId": string;
  /**
   * Replica region URL of the IDCS domain
   */
  "idcsAccountNameUrl": string;

  "vaultType": string;
}

export namespace ReplicaExternalVaultMetadata {
  export function getJsonObj(obj: ReplicaExternalVaultMetadata, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ReplicaVaultMetadata.getJsonObj(obj) as ReplicaExternalVaultMetadata)),
      ...{}
    };

    return jsonObj;
  }
  export const vaultType = "EXTERNAL";
  export function getDeserializedJsonObj(
    obj: ReplicaExternalVaultMetadata,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ReplicaVaultMetadata.getDeserializedJsonObj(obj) as ReplicaExternalVaultMetadata)),
      ...{}
    };

    return jsonObj;
  }
}
