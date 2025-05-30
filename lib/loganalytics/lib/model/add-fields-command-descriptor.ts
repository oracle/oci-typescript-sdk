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
 * Command descriptor for querylanguage ADDFIELDS command.
 *
 */
export interface AddFieldsCommandDescriptor extends model.AbstractCommandDescriptor {
  /**
   * List of subQueries specified as addFields command arguments
   *
   */
  "subQueries"?: Array<model.ParseQueryOutput>;

  "name": string;
}

export namespace AddFieldsCommandDescriptor {
  export function getJsonObj(obj: AddFieldsCommandDescriptor, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getJsonObj(obj) as AddFieldsCommandDescriptor)),
      ...{
        "subQueries": obj.subQueries
          ? obj.subQueries.map(item => {
              return model.ParseQueryOutput.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const name = "ADD_FIELDS";
  export function getDeserializedJsonObj(
    obj: AddFieldsCommandDescriptor,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getDeserializedJsonObj(
            obj
          ) as AddFieldsCommandDescriptor)),
      ...{
        "subQueries": obj.subQueries
          ? obj.subQueries.map(item => {
              return model.ParseQueryOutput.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
