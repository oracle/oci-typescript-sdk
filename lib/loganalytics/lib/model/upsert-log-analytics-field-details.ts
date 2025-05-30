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
 * Upsert LogAnalytics Field Details
 */
export interface UpsertLogAnalyticsFieldDetails {
  /**
   * The data type.
   */
  "dataType"?: string;
  /**
   * A flag indicating whether or not the field is multi-valued.
   *
   */
  "isMultiValued"?: boolean;
  /**
   * The field description.
   */
  "description"?: string;
  /**
   * The field display name.
   */
  "displayName"?: string;
  /**
   * The field internal name.
   */
  "name"?: string;
  /**
   * A flag indicating whether duplicates should be retained while processing multi-valued fields.
   *
   */
  "isKeepDuplicates"?: boolean;
}

export namespace UpsertLogAnalyticsFieldDetails {
  export function getJsonObj(obj: UpsertLogAnalyticsFieldDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpsertLogAnalyticsFieldDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
