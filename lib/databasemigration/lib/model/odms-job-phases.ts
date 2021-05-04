/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20200720
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Possible ODMS Job Phases.
 *
 **/
export enum OdmsJobPhases {
  OdmsValidateTgt = "ODMS_VALIDATE_TGT",
  OdmsValidateSrc = "ODMS_VALIDATE_SRC",
  OdmsValidateGgHub = "ODMS_VALIDATE_GG_HUB",
  OdmsValidateDatapumpSettings = "ODMS_VALIDATE_DATAPUMP_SETTINGS",
  OdmsValidateDatapumpSettingsSrc = "ODMS_VALIDATE_DATAPUMP_SETTINGS_SRC",
  OdmsValidateDatapumpSettingsTgt = "ODMS_VALIDATE_DATAPUMP_SETTINGS_TGT",
  OdmsValidate = "ODMS_VALIDATE",
  OdmsPrepare = "ODMS_PREPARE",
  OdmsInitialLoadExport = "ODMS_INITIAL_LOAD_EXPORT",
  OdmsDataUpload = "ODMS_DATA_UPLOAD",
  OdmsInitialLoadImport = "ODMS_INITIAL_LOAD_IMPORT",
  OdmsPostInitialLoad = "ODMS_POST_INITIAL_LOAD",
  OdmsPrepareReplicationTarget = "ODMS_PREPARE_REPLICATION_TARGET",
  OdmsMonitorReplicationLag = "ODMS_MONITOR_REPLICATION_LAG",
  OdmsSwitchover = "ODMS_SWITCHOVER",
  OdmsCleanup = "ODMS_CLEANUP",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OdmsJobPhases {
  export function getJsonObj(obj: OdmsJobPhases): object {
    return { obj };
  }
}