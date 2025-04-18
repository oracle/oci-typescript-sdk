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
 * Contains resource statistics with usage unit
 */
export interface ResourceStatistics {
  /**
   * Total amount used of the resource metric type (CPU, STORAGE).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usage": number;
  /**
   * The maximum allocated amount of the resource metric type  (CPU, STORAGE) for a set of databases.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "capacity": number;
  /**
   * The base allocated amount of the resource metric type  (CPU, STORAGE) for a set of databases.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "baseCapacity"?: number;
  /**
   * Indicates if auto scaling feature is enabled or disabled on a database. It will be false for all metrics other than CPU.
   */
  "isAutoScalingEnabled"?: boolean;
  /**
   * Resource utilization in percentage Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "utilizationPercent": number;
  /**
   * Change in resource utilization in percentage Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usageChangePercent": number;
  /**
   * Array of instance metrics
   */
  "instanceMetrics"?: Array<model.InstanceMetrics>;
  /**
   * The maximum host CPUs (cores x threads/core) on the underlying infrastructure. This only applies to CPU and does not not apply for Autonomous Databases.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalHostCapacity"?: number;
  /**
   * Specifies if MYSQL DB System has heatwave cluster attached.
   */
  "isHeatWaveClusterAttached"?: boolean;
  /**
   * Specifies if MYSQL DB System is highly available.
   */
  "isHighlyAvailable"?: boolean;
}

export namespace ResourceStatistics {
  export function getJsonObj(obj: ResourceStatistics): object {
    const jsonObj = {
      ...obj,
      ...{
        "instanceMetrics": obj.instanceMetrics
          ? obj.instanceMetrics.map(item => {
              return model.InstanceMetrics.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResourceStatistics): object {
    const jsonObj = {
      ...obj,
      ...{
        "instanceMetrics": obj.instanceMetrics
          ? obj.instanceMetrics.map(item => {
              return model.InstanceMetrics.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
