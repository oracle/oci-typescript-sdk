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
 * The timestamp of the projected event and their corresponding resource value.
 * {@code highValue} and {@code lowValue} are the uncertainty bounds of the corresponding value.
 *
 */
export interface ProjectedDataItem {
  /**
   * The timestamp in which the current sampling period ends in RFC 3339 format.
   */
  "endTimestamp": Date;
  /**
   * Total amount used of the resource metric type (CPU, STORAGE).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usage": number;
  /**
   * Upper uncertainty bound of the current usage value. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "highValue": number;
  /**
   * Lower uncertainty bound of the current usage value. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "lowValue": number;
}

export namespace ProjectedDataItem {
  export function getJsonObj(obj: ProjectedDataItem): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProjectedDataItem): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
