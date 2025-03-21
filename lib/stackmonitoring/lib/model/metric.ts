/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * Details of a metric which is part of this metric extension
 */
export interface Metric {
  /**
   * Name of the metric.
   */
  "name": string;
  /**
   * Display name of the metric.
   */
  "displayName"?: string;
  /**
   * Current metric need to be included as dimension or not
   */
  "isDimension"?: boolean;
  /**
   * Compute Expression to calculate the value of this metric
   */
  "computeExpression"?: string;
  /**
   * Data type of value of this metric
   */
  "dataType": Metric.DataType;
  /**
   * Flag to marks whether a metric has to be uploaded or not. When isHidden = false -> Metric is uploaded, isHidden = true -> Metric is NOT uploaded
   */
  "isHidden"?: boolean;
  /**
   * Metric category
   */
  "metricCategory"?: Metric.MetricCategory;
  /**
   * Unit of metric value
   */
  "unit"?: string;
}

export namespace Metric {
  export enum DataType {
    String = "STRING",
    Number = "NUMBER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum MetricCategory {
    Load = "LOAD",
    Utilization = "UTILIZATION",
    Capacity = "CAPACITY",
    Availability = "AVAILABILITY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Metric): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Metric): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
