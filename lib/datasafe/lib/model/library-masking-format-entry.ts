/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * A library masking format to be used for masking. It can be either a
 * predefined or a user-defined library masking format. It enables reuse
 * of an existing library masking format and helps avoid defining the masking
 * logic again. Use the ListLibraryMaskingFormats operation to view the
 * existing library masking formats.
 *
 */
export interface LibraryMaskingFormatEntry extends model.FormatEntry {
  /**
   * The OCID of the library masking format.
   */
  "libraryMaskingFormatId": string;

  "type": string;
}

export namespace LibraryMaskingFormatEntry {
  export function getJsonObj(obj: LibraryMaskingFormatEntry, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FormatEntry.getJsonObj(obj) as LibraryMaskingFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "LIBRARY_MASKING_FORMAT";
  export function getDeserializedJsonObj(
    obj: LibraryMaskingFormatEntry,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FormatEntry.getDeserializedJsonObj(obj) as LibraryMaskingFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
}
