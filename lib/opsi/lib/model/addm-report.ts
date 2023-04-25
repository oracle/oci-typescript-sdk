/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * ADDM Tasks.
 */
export interface AddmReport {
  /**
   * The start timestamp that was passed into the request.
   */
  "timeIntervalStart": Date;
  /**
   * The end timestamp that was passed into the request.
   */
  "timeIntervalEnd": Date;
  /**
   * TASK_ID in the oracle database view DBA_ADDM_TASKS
   */
  "taskIdentifier": string;
  /**
   * Internal id of the database.
   */
  "databaseIdentifier": string;
  /**
   * AWR snapshot id.
   */
  "snapshotIntervalStart": string;
  /**
   * AWR snapshot id.
   */
  "snapshotIntervalEnd": string;
  /**
   * The complete ADDM report
   */
  "addmReport": string;
}

export namespace AddmReport {
  export function getJsonObj(obj: AddmReport): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddmReport): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}