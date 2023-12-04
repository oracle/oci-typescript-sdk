/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * The information about updating a metric extension resource
 */
export interface UpdateMetricExtensionDetails {
  /**
   * Metric Extension resource display name.
   */
  "displayName"?: string;
  /**
   * Description of the metric extension.
   */
  "description"?: string;
  /**
   * Schedule of metric extension should use RFC 5545 format -> recur-rule-part = \"FREQ\";\"INTERVAL\" where FREQ rule part identifies the type of recurrence rule. Valid values are \"MINUTELY\",\"HOURLY\",\"DAILY\" to specify repeating events based on an interval of a minute, an hour and a day or more. Example- FREQ=DAILY;INTERVAL=1
   */
  "collectionRecurrences"?: string;
  /**
   * List of metrics which are part of this metric extension
   */
  "metricList"?: Array<model.Metric>;
  "queryProperties"?:
    | model.SqlUpdateQueryProperties
    | model.JmxUpdateQueryProperties
    | model.OsCommandUpdateQueryProperties;
}

export namespace UpdateMetricExtensionDetails {
  export function getJsonObj(obj: UpdateMetricExtensionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "metricList": obj.metricList
          ? obj.metricList.map(item => {
              return model.Metric.getJsonObj(item);
            })
          : undefined,
        "queryProperties": obj.queryProperties
          ? model.MetricExtensionUpdateQueryProperties.getJsonObj(obj.queryProperties)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateMetricExtensionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "metricList": obj.metricList
          ? obj.metricList.map(item => {
              return model.Metric.getDeserializedJsonObj(item);
            })
          : undefined,
        "queryProperties": obj.queryProperties
          ? model.MetricExtensionUpdateQueryProperties.getDeserializedJsonObj(obj.queryProperties)
          : undefined
      }
    };

    return jsonObj;
  }
}