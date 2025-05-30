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
 * Scope filter to reduce the scope of the query.
 *
 */
export interface ScopeFilter {
  /**
   * Field must be a valid logging-analytics out-of-the-box field.
   *
   */
  "fieldName": string;
  /**
   * Field values that will be used to filter the query scope. Please note all values should reflect the fields data type otherwise the query is subject to fail.
   *
   */
  "values": Array<any>;
}

export namespace ScopeFilter {
  export function getJsonObj(obj: ScopeFilter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScopeFilter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
