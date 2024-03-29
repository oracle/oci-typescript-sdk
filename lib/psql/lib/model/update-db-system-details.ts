/**
 * PGSQL Control Plane API
 * Use the OCI Database with PostgreSQL API to manage resources such as database systems, database nodes, backups, and configurations. 
For information, see the user guide documentation for the [service](/iaas/Content/postgresql/home.htm).

 * OpenAPI spec version: 20220915
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information to be updated.
 */
export interface UpdateDbSystemDetails {
  /**
   * A user-friendly display name for the database system. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * A user-provided description of the database system.
   */
  "description"?: string;
  "dbConfigurationParams"?: model.UpdateDbConfigParams;
  "managementPolicy"?: model.ManagementPolicyDetails;
  "storageDetails"?: model.UpdateStorageDetailsParams;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateDbSystemDetails {
  export function getJsonObj(obj: UpdateDbSystemDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbConfigurationParams": obj.dbConfigurationParams
          ? model.UpdateDbConfigParams.getJsonObj(obj.dbConfigurationParams)
          : undefined,
        "managementPolicy": obj.managementPolicy
          ? model.ManagementPolicyDetails.getJsonObj(obj.managementPolicy)
          : undefined,
        "storageDetails": obj.storageDetails
          ? model.UpdateStorageDetailsParams.getJsonObj(obj.storageDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDbSystemDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbConfigurationParams": obj.dbConfigurationParams
          ? model.UpdateDbConfigParams.getDeserializedJsonObj(obj.dbConfigurationParams)
          : undefined,
        "managementPolicy": obj.managementPolicy
          ? model.ManagementPolicyDetails.getDeserializedJsonObj(obj.managementPolicy)
          : undefined,
        "storageDetails": obj.storageDetails
          ? model.UpdateStorageDetailsParams.getDeserializedJsonObj(obj.storageDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
