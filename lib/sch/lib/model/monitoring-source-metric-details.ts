/**
 * Connector Hub API
 * Use the Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Connector Hub, see
[the Connector Hub documentation](https://docs.oracle.com/iaas/Content/connector-hub/home.htm).
Connector Hub is formerly known as Service Connector Hub.

 * OpenAPI spec version: 20200909
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
 * The metrics to query for the specified metric namespace.
 *
 */
export interface MonitoringSourceMetricDetails {
  "kind": string;
}

export namespace MonitoringSourceMetricDetails {
  export function getJsonObj(obj: MonitoringSourceMetricDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "all":
          return model.MonitoringSourceAllMetrics.getJsonObj(
            <model.MonitoringSourceAllMetrics>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.kind}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MonitoringSourceMetricDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "all":
          return model.MonitoringSourceAllMetrics.getDeserializedJsonObj(
            <model.MonitoringSourceAllMetrics>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.kind}`);
      }
    }
    return jsonObj;
  }
}
