/**
 * Resource Scheduler API
 * Use the Resource scheduler API to manage schedules, to perform actions on a collection of resources.
 * OpenAPI spec version: 20240430
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
 * This is a resource filter for filtering resources based on their creation time.
 */
export interface TimeCreatedResourceFilter extends model.ResourceFilter {
  /**
   * This is the condition for the filter in comparison to its creation time.
   */
  "condition"?: TimeCreatedResourceFilter.Condition;
  /**
   * This is the date and time as the value of the filter.
   */
  "value"?: string;

  "attribute": string;
}

export namespace TimeCreatedResourceFilter {
  export enum Condition {
    Equal = "EQUAL",
    Before = "BEFORE",
    After = "AFTER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TimeCreatedResourceFilter, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ResourceFilter.getJsonObj(obj) as TimeCreatedResourceFilter)),
      ...{}
    };

    return jsonObj;
  }
  export const attribute = "TIME_CREATED";
  export function getDeserializedJsonObj(
    obj: TimeCreatedResourceFilter,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ResourceFilter.getDeserializedJsonObj(obj) as TimeCreatedResourceFilter)),
      ...{}
    };

    return jsonObj;
  }
}
