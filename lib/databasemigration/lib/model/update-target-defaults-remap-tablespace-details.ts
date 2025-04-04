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
 * Migration tablespace settings valid for TARGET_DEFAULTS_REMAP target type. The service will compute the targetType
 * that corresponds to the targetDatabaseConnectionId type, and set the corresponding default values. When target type is ADB_S,
 * ADB_D or NON_ADB the default will be set to remap feature ADB_S_REMAP, ADB_D_REMAP or NON_ADB_REMAP.
 *
 */
export interface UpdateTargetDefaultsRemapTablespaceDetails
  extends model.UpdateTargetTypeTablespaceDetails {
  "targetType": string;
}

export namespace UpdateTargetDefaultsRemapTablespaceDetails {
  export function getJsonObj(
    obj: UpdateTargetDefaultsRemapTablespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateTargetTypeTablespaceDetails.getJsonObj(
            obj
          ) as UpdateTargetDefaultsRemapTablespaceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const targetType = "TARGET_DEFAULTS_REMAP";
  export function getDeserializedJsonObj(
    obj: UpdateTargetDefaultsRemapTablespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateTargetTypeTablespaceDetails.getDeserializedJsonObj(
            obj
          ) as UpdateTargetDefaultsRemapTablespaceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
