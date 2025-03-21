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
 * Query builder edit request details.
 *
 */
export interface FilterDetails {
  /**
   * Query to apply edits to.
   */
  "queryString": string;
  /**
   * Default subsystem to qualify fields with in the queryString if not specified.
   *
   */
  "subSystem": model.SubSystemName;
  /**
   * List of edit operations to be applied in the specified order to the specified queryString.
   *
   */
  "filters"?: Array<model.Filter>;
}

export namespace FilterDetails {
  export function getJsonObj(obj: FilterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "filters": obj.filters
          ? obj.filters.map(item => {
              return model.Filter.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FilterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "filters": obj.filters
          ? obj.filters.map(item => {
              return model.Filter.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
