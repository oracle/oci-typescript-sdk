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
 * SourceSummaryReport
 */
export interface SourceSummaryReport {
  /**
   * The count of custom (user defined) sources. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nonOobCount"?: number;
  /**
   * The count of sources set to auto-associate. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "autoAssociationSourceCount"?: number;
  /**
   * The count of built in sources. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "oobCount"?: number;
}

export namespace SourceSummaryReport {
  export function getJsonObj(obj: SourceSummaryReport): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SourceSummaryReport): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
