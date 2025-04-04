/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Summary of a pattern. A pattern is a data selector or filter which can provide a singular,
 * logical entity view aggregating multiple physical data artifacts for ease of use.
 *
 */
export interface PatternSummary {
  /**
   * Unique pattern key that is immutable.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Detailed description of the pattern.
   */
  "description"?: string;
  /**
   * The data catalog's OCID.
   */
  "catalogId"?: string;
  /**
   * The date and time the pattern was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: {@code 2019-03-25T21:10:29.600Z}
   *
   */
  "timeCreated"?: Date;
  /**
   * Input string which drives the selection process, allowing for fine-grained control using qualifiers.
   * Refer to the user documentation for details of the format and examples. A pattern cannot include both
   * a prefix and an expression.
   *
   */
  "expression"?: string;
  /**
   * Input string which drives the selection process.
   * Refer to the user documentation for details of the format and examples. A pattern cannot include both
   * a prefix and an expression.
   *
   */
  "filePathPrefix"?: string;
  /**
   * State of the pattern.
   */
  "lifecycleState"?: model.LifecycleState;
}

export namespace PatternSummary {
  export function getJsonObj(obj: PatternSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PatternSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
