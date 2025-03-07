/**
 * Monitoring API
 * Use the Monitoring API to manage metric queries and alarms for assessing the health, capacity, and performance of your cloud resources.
Endpoints vary by operation. For PostMetricData, use the {@code telemetry-ingestion} endpoints; for all other operations, use the {@code telemetry} endpoints.
For more information, see
[the Monitoring documentation](https://docs.oracle.com/iaas/Content/Monitoring/home.htm).

 * OpenAPI spec version: 20180401
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
 * Metric value for a specific timestamp.
 *
 */
export interface Datapoint {
  /**
    * Timestamp for this metric value. Format defined by RFC3339.
* For a data point to be posted, its timestamp must be near current time (less than two hours in the past and less than 10 minutes in the future).
* <p>
Example: {@code 2023-02-01T01:02:29.600Z}
* 
    */
  "timestamp": Date;
  /**
    * Numeric value of the metric.
* <p>
Example: {@code 10.23}
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "value": number;
  /**
    * The number of occurrences of the associated value in the set of data.
* <p>
Default is 1. Value must be greater than zero.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "count"?: number;
}

export namespace Datapoint {
  export function getJsonObj(obj: Datapoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Datapoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
