/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](https://docs.oracle.com/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Autonomous Database configuration details for storing [manual backups](https://docs.oracle.com/en/cloud/paas/autonomous-database/adbsa/backup-restore.html#GUID-9035DFB8-4702-4CEB-8281-C2A303820809) in the [Object Storage](https://docs.oracle.com/iaas/Content/Object/Concepts/objectstorageoverview.htm) service.
 *
 */
export interface AutonomousDatabaseBackupConfig {
  /**
   * Name of [Object Storage](https://docs.oracle.com/iaas/Content/Object/Concepts/objectstorageoverview.htm) bucket to use for storing manual backups.
   */
  "manualBackupBucketName"?: string;
  /**
   * The manual backup destination type.
   */
  "manualBackupType"?: AutonomousDatabaseBackupConfig.ManualBackupType;
}

export namespace AutonomousDatabaseBackupConfig {
  export enum ManualBackupType {
    None = "NONE",
    ObjectStore = "OBJECT_STORE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutonomousDatabaseBackupConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutonomousDatabaseBackupConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
