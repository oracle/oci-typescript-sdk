/**
 * Database Management API
 * Use the Database Management API to monitor and manage resources such as
Oracle Databases, MySQL Databases, and External Database Systems. 
For more information, see [Database Management](https://docs.oracle.com/iaas/database-management/home.htm).

 * OpenAPI spec version: 20201101
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
 * The response object representing activityMetric details for a specific Managed Database at a particular time.
 */
export interface ActivityTimeSeriesMetrics {
  /**
   * The date and time the activity metric was created.
   */
  "timestamp"?: Date;
  "cpuTime"?: model.MetricDataPoint;
  "waitTime"?: model.MetricDataPoint;
  "userIoTime"?: model.MetricDataPoint;
  "cpuCount"?: model.MetricDataPoint;
  "cluster"?: model.MetricDataPoint;
}

export namespace ActivityTimeSeriesMetrics {
  export function getJsonObj(obj: ActivityTimeSeriesMetrics): object {
    const jsonObj = {
      ...obj,
      ...{
        "cpuTime": obj.cpuTime ? model.MetricDataPoint.getJsonObj(obj.cpuTime) : undefined,
        "waitTime": obj.waitTime ? model.MetricDataPoint.getJsonObj(obj.waitTime) : undefined,
        "userIoTime": obj.userIoTime ? model.MetricDataPoint.getJsonObj(obj.userIoTime) : undefined,
        "cpuCount": obj.cpuCount ? model.MetricDataPoint.getJsonObj(obj.cpuCount) : undefined,
        "cluster": obj.cluster ? model.MetricDataPoint.getJsonObj(obj.cluster) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ActivityTimeSeriesMetrics): object {
    const jsonObj = {
      ...obj,
      ...{
        "cpuTime": obj.cpuTime
          ? model.MetricDataPoint.getDeserializedJsonObj(obj.cpuTime)
          : undefined,
        "waitTime": obj.waitTime
          ? model.MetricDataPoint.getDeserializedJsonObj(obj.waitTime)
          : undefined,
        "userIoTime": obj.userIoTime
          ? model.MetricDataPoint.getDeserializedJsonObj(obj.userIoTime)
          : undefined,
        "cpuCount": obj.cpuCount
          ? model.MetricDataPoint.getDeserializedJsonObj(obj.cpuCount)
          : undefined,
        "cluster": obj.cluster
          ? model.MetricDataPoint.getDeserializedJsonObj(obj.cluster)
          : undefined
      }
    };

    return jsonObj;
  }
}
