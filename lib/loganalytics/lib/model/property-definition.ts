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
 * Defines an property of a macro, variable or query.
 *
 */
export interface PropertyDefinition {
  /**
   * Name of the property.
   *
   */
  "name"?: string;
  /**
   * Value of the property.
   *
   */
  "value"?: string;
  /**
   * Type of the property.
   *
   */
  "type"?: PropertyDefinition.Type;
  /**
   * True if property is for all macros.  Not applicable for macro variables or query.
   *
   */
  "isGlobal"?: boolean;
}

export namespace PropertyDefinition {
  export enum Type {
    String = "STRING",
    Double = "DOUBLE",
    Float = "FLOAT",
    Long = "LONG",
    Integer = "INTEGER",
    Timestamp = "TIMESTAMP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: PropertyDefinition): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PropertyDefinition): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
