/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20230518
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
 * Update Migration parameters.
 */
export interface UpdateMySqlMigrationDetails extends model.UpdateMigrationDetails {
  "dataTransferMediumDetails"?: model.UpdateMySqlObjectStorageDataTransferMediumDetails;
  "initialLoadSettings"?: model.UpdateMySqlInitialLoadSettings;
  "advisorSettings"?: model.UpdateMySqlAdvisorSettings;
  "hubDetails"?: model.UpdateGoldenGateHubDetails;
  "ggsDetails"?: model.UpdateMySqlGgsDeploymentDetails;

  "databaseCombination": string;
}

export namespace UpdateMySqlMigrationDetails {
  export function getJsonObj(obj: UpdateMySqlMigrationDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateMigrationDetails.getJsonObj(obj) as UpdateMySqlMigrationDetails)),
      ...{
        "dataTransferMediumDetails": obj.dataTransferMediumDetails
          ? model.UpdateMySqlDataTransferMediumDetails.getJsonObj(obj.dataTransferMediumDetails)
          : undefined,
        "initialLoadSettings": obj.initialLoadSettings
          ? model.UpdateMySqlInitialLoadSettings.getJsonObj(obj.initialLoadSettings)
          : undefined,
        "advisorSettings": obj.advisorSettings
          ? model.UpdateMySqlAdvisorSettings.getJsonObj(obj.advisorSettings)
          : undefined,
        "hubDetails": obj.hubDetails
          ? model.UpdateGoldenGateHubDetails.getJsonObj(obj.hubDetails)
          : undefined,
        "ggsDetails": obj.ggsDetails
          ? model.UpdateMySqlGgsDeploymentDetails.getJsonObj(obj.ggsDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const databaseCombination = "MYSQL";
  export function getDeserializedJsonObj(
    obj: UpdateMySqlMigrationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateMigrationDetails.getDeserializedJsonObj(
            obj
          ) as UpdateMySqlMigrationDetails)),
      ...{
        "dataTransferMediumDetails": obj.dataTransferMediumDetails
          ? model.UpdateMySqlDataTransferMediumDetails.getDeserializedJsonObj(
              obj.dataTransferMediumDetails
            )
          : undefined,
        "initialLoadSettings": obj.initialLoadSettings
          ? model.UpdateMySqlInitialLoadSettings.getDeserializedJsonObj(obj.initialLoadSettings)
          : undefined,
        "advisorSettings": obj.advisorSettings
          ? model.UpdateMySqlAdvisorSettings.getDeserializedJsonObj(obj.advisorSettings)
          : undefined,
        "hubDetails": obj.hubDetails
          ? model.UpdateGoldenGateHubDetails.getDeserializedJsonObj(obj.hubDetails)
          : undefined,
        "ggsDetails": obj.ggsDetails
          ? model.UpdateMySqlGgsDeploymentDetails.getDeserializedJsonObj(obj.ggsDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
