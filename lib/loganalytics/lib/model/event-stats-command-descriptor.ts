/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Command descriptor for querylanguage EVENTSTATS command.
 *
 */
export interface EventStatsCommandDescriptor extends model.AbstractCommandDescriptor {
  /**
   * Group by fields if specified in the query string.
   *
   */
  "groupByFields"?: Array<model.AbstractField>;
  /**
   * Statistical functions specified in the query string. Atleast 1 is required for a EVENTSTATS command.
   *
   */
  "functions"?: Array<model.FunctionField>;

  "name": string;
}

export namespace EventStatsCommandDescriptor {
  export function getJsonObj(obj: EventStatsCommandDescriptor, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getJsonObj(obj) as EventStatsCommandDescriptor)),
      ...{
        "groupByFields": obj.groupByFields
          ? obj.groupByFields.map(item => {
              return model.AbstractField.getJsonObj(item);
            })
          : undefined,
        "functions": obj.functions
          ? obj.functions.map(item => {
              return model.FunctionField.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const name = "EVENT_STATS";
  export function getDeserializedJsonObj(
    obj: EventStatsCommandDescriptor,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getDeserializedJsonObj(
            obj
          ) as EventStatsCommandDescriptor)),
      ...{
        "groupByFields": obj.groupByFields
          ? obj.groupByFields.map(item => {
              return model.AbstractField.getDeserializedJsonObj(item);
            })
          : undefined,
        "functions": obj.functions
          ? obj.functions.map(item => {
              return model.FunctionField.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
