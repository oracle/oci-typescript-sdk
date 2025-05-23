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
 * Metadata for the replica vault, needed if different from primary vault
 */
export interface ReplicaVaultMetadata {
  "vaultType": string;
}

export namespace ReplicaVaultMetadata {
  export function getJsonObj(obj: ReplicaVaultMetadata): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "vaultType" in obj && obj.vaultType) {
      switch (obj.vaultType) {
        case "EXTERNAL":
          return model.ReplicaExternalVaultMetadata.getJsonObj(
            <model.ReplicaExternalVaultMetadata>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.vaultType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ReplicaVaultMetadata): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "vaultType" in obj && obj.vaultType) {
      switch (obj.vaultType) {
        case "EXTERNAL":
          return model.ReplicaExternalVaultMetadata.getDeserializedJsonObj(
            <model.ReplicaExternalVaultMetadata>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.vaultType}`);
      }
    }
    return jsonObj;
  }
}
