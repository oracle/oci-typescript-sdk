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
 * Possible Migration Database Target types to specify.
 **/
export enum MigrationDatabaseTargetTypesUpdate {
  AdbSRemap = "ADB_S_REMAP",
  AdbDRemap = "ADB_D_REMAP",
  AdbDAutocreate = "ADB_D_AUTOCREATE",
  NonAdbRemap = "NON_ADB_REMAP",
  NonAdbAutocreate = "NON_ADB_AUTOCREATE",
  TargetDefaultsRemap = "TARGET_DEFAULTS_REMAP",
  TargetDefaultsAutocreate = "TARGET_DEFAULTS_AUTOCREATE"
}

export namespace MigrationDatabaseTargetTypesUpdate {
  export function getJsonObj(
    obj: MigrationDatabaseTargetTypesUpdate
  ): MigrationDatabaseTargetTypesUpdate {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: MigrationDatabaseTargetTypesUpdate
  ): MigrationDatabaseTargetTypesUpdate {
    return obj;
  }
}
