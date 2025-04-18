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
 * Details of resource usage by an Operations Insights Warehouse resource.
 */
export interface SummarizeOperationsInsightsWarehouseResourceUsageAggregation {
  /**
   * OPSI Warehouse OCID
   */
  "id": string;
  /**
   * Number of OCPUs used by OPSI Warehouse ADW. Can be fractional.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuUsed"?: number;
  /**
   * Storage by OPSI Warehouse ADW in GB.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "storageUsedInGBs"?: number;
  /**
   * Possible lifecycle states
   */
  "lifecycleState": model.OperationsInsightsWarehouseLifecycleState;
}

export namespace SummarizeOperationsInsightsWarehouseResourceUsageAggregation {
  export function getJsonObj(
    obj: SummarizeOperationsInsightsWarehouseResourceUsageAggregation
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: SummarizeOperationsInsightsWarehouseResourceUsageAggregation
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
