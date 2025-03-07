/**
 * Data Labeling Management API
 * Use Data Labeling Management API to create, list, edit & delete datasets.
 * OpenAPI spec version: 20211001
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
 * Metadata of delimited files.
 */
export interface DelimitedFileTypeMetadata extends model.TextFileTypeMetadata {
  /**
   * The name of a selected column.
   */
  "columnName"?: string;
  /**
   * The index of a selected column. This is a zero-based index. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "columnIndex": number;
  /**
   * A column delimiter
   */
  "columnDelimiter"?: string;
  /**
   * A line delimiter.
   */
  "lineDelimiter"?: string;
  /**
   * An escape character.
   */
  "escapeCharacter"?: string;

  "formatType": string;
}

export namespace DelimitedFileTypeMetadata {
  export function getJsonObj(obj: DelimitedFileTypeMetadata, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TextFileTypeMetadata.getJsonObj(obj) as DelimitedFileTypeMetadata)),
      ...{}
    };

    return jsonObj;
  }
  export const formatType = "DELIMITED";
  export function getDeserializedJsonObj(
    obj: DelimitedFileTypeMetadata,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TextFileTypeMetadata.getDeserializedJsonObj(obj) as DelimitedFileTypeMetadata)),
      ...{}
    };

    return jsonObj;
  }
}
