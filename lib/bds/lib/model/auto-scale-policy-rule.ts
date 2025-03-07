/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
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
 * A rule that defines a specific autoscale action to take and the metric that triggers that action.
 */
export interface AutoScalePolicyRule {
  /**
   * The valid value are CHANGE_SHAPE_SCALE_UP or CHANGE_SHAPE_SCALE_DOWN.
   */
  "action": AutoScalePolicyRule.Action;
  "metric": model.AutoScalePolicyMetricRule;
}

export namespace AutoScalePolicyRule {
  export enum Action {
    ChangeShapeScaleUp = "CHANGE_SHAPE_SCALE_UP",
    ChangeShapeScaleDown = "CHANGE_SHAPE_SCALE_DOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutoScalePolicyRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "metric": obj.metric ? model.AutoScalePolicyMetricRule.getJsonObj(obj.metric) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutoScalePolicyRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "metric": obj.metric
          ? model.AutoScalePolicyMetricRule.getDeserializedJsonObj(obj.metric)
          : undefined
      }
    };

    return jsonObj;
  }
}
