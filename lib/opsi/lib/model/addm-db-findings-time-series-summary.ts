/**
 * Ops Insights API
 * Use the Ops Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Ops Insights](https://docs.oracle.com/iaas/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * ADDM findings time series data
 */
export interface AddmDbFindingsTimeSeriesSummary {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Database insight.
   */
  "id": string;
  /**
   * Unique ADDM task id Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "taskId": number;
  /**
   * ADDM task name
   */
  "taskName": string;
  /**
   * Unique finding id
   */
  "findingId": string;
  /**
   * Timestamp when finding was generated
   */
  "timestamp": Date;
  /**
   * Start Timestamp of snapshot
   */
  "timeAnalysisStarted"?: Date;
  /**
   * End Timestamp of snapshot
   */
  "timeAnalysisEnded"?: Date;
  /**
   * Category name
   */
  "categoryName": string;
  /**
   * Category display name
   */
  "categoryDisplayName": string;
  /**
   * Finding name
   */
  "name": string;
  /**
   * Finding message
   */
  "message": string;
  /**
   * DB time in seconds for the snapshot Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "analysisDbTimeInSecs"?: number;
  /**
   * DB avg active sessions for the snapshot Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "analysisAvgActiveSessions"?: number;
  /**
   * Impact in seconds Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "impactDbTimeInSecs"?: number;
  /**
   * Impact in terms of percentage of total activity Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "impactPercent": number;
  /**
   * Impact in terms of average active sessions Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "impactAvgActiveSessions": number;
}

export namespace AddmDbFindingsTimeSeriesSummary {
  export function getJsonObj(obj: AddmDbFindingsTimeSeriesSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddmDbFindingsTimeSeriesSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
