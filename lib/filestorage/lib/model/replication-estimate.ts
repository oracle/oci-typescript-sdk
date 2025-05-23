/**
 * File Storage API
 * Use the File Storage service API to manage file systems, mount targets, and snapshots.
For more information, see [Overview of File Storage](https://docs.oracle.com/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
 * Details for response from replication estimation.
 */
export interface ReplicationEstimate {
  /**
   * The rate of change on source filesystem which was used to provide the estimate in MegaBytes per second. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "changeRateInMBps": number;
  /**
   * Specifies whether replication can be enabled on the file system.
   */
  "isReplicationSupported": boolean;
  /**
   * The minimum supported replication interval for specified file system in minutes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minimumSupportedIntervalInMinutes": number;
  /**
   * The approximate time required for the base sync between source and target to finish. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "estimatedBaseCopyTimeInMinutes": number;
  /**
   * Array of allowed target region names which can be paired with source file system.
   */
  "allowedTargetRegions": Array<string>;
}

export namespace ReplicationEstimate {
  export function getJsonObj(obj: ReplicationEstimate): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ReplicationEstimate): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
