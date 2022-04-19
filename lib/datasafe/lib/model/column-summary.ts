/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of a column in a table fetched from the database.
 */
export interface ColumnSummary {
  /**
   * Name of the column.
   */
  "columnName": string;
  /**
   * Data type of the column.
   */
  "dataType": string;
  /**
   * Length of the data represented by the column. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "length": number;
  /**
   * Precision of the column. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "precision"?: number;
  /**
   * Scale of the column. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "scale"?: number;
  /**
   * Character length. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "characterLength"?: number;
  /**
   * Name of the table.
   */
  "tableName": string;
  /**
   * Name of the schema.
   */
  "schemaName": string;
}

export namespace ColumnSummary {
  export function getJsonObj(obj: ColumnSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ColumnSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}