/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A field map is a way to map a source row shape to a target row shape that may be different.
 */
export interface FieldMap {
  /**
   * Detailed description for the object.
   */
  "description"?: string;

  "modelType": string;
}

export namespace FieldMap {
  export function getJsonObj(obj: FieldMap): object {
    const jsonObj = { ...obj, ...{} };

    if ("modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "RULE_BASED_FIELD_MAP":
          return model.RuleBasedFieldMap.getJsonObj(
            <model.RuleBasedFieldMap>(<object>jsonObj),
            true
          );
        case "DIRECT_FIELD_MAP":
          return model.DirectFieldMap.getJsonObj(<model.DirectFieldMap>(<object>jsonObj), true);
        case "COMPOSITE_FIELD_MAP":
          return model.CompositeFieldMap.getJsonObj(
            <model.CompositeFieldMap>(<object>jsonObj),
            true
          );
        case "DIRECT_NAMED_FIELD_MAP":
          return model.DirectNamedFieldMap.getJsonObj(
            <model.DirectNamedFieldMap>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.modelType);
      }
    }
    return jsonObj;
  }
}