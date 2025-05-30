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
 * Usage data for IO interface per usage unit.
 */
export interface IoUsageTrend {
  /**
   * The timestamp in which the current sampling period ends in RFC 3339 format.
   */
  "endTimestamp": Date;
  /**
   * MBs Read. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "diskBytesReadInMBs": number;
  /**
   * MBs Written. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "diskBytesWrittenInMBs": number;
  /**
   * Read IO operations per second. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "diskIopsRead": number;
  /**
   * Write IO operations per second. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "diskIopsWritten": number;
  /**
   * IO operations per second. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "diskIops": number;
}

export namespace IoUsageTrend {
  export function getJsonObj(obj: IoUsageTrend): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IoUsageTrend): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
