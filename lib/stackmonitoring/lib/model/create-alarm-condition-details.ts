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
 * The information about new alarm condition in the same monitoringTemplate in a compartment.
 */
export interface CreateAlarmConditionDetails {
  /**
   * The stack monitoring service or application emitting the metric that is evaluated by the alarm.
   */
  "namespace": string;
  /**
   * The OCID of the composite resource type like EBS/PEOPLE_SOFT.
   */
  "compositeType"?: string;
  /**
   * The resource group OCID.
   */
  "resourceType": string;
  /**
   * The metric name.
   */
  "metricName": string;
  /**
   * Type of defined monitoring template.
   */
  "conditionType": model.ConditionType;
  /**
   * Monitoring template conditions.
   */
  "conditions": Array<model.Condition>;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateAlarmConditionDetails {
  export function getJsonObj(obj: CreateAlarmConditionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "conditions": obj.conditions
          ? obj.conditions.map(item => {
              return model.Condition.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateAlarmConditionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "conditions": obj.conditions
          ? obj.conditions.map(item => {
              return model.Condition.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
