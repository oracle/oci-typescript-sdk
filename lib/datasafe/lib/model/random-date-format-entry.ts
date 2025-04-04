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
 * The Random Date masking format generates random and unique dates within a range.
 * The date range is defined by the startDate and endDate attributes. The start date
 * must be less than or equal to the end date. When masking columns with uniqueness
 * constraint, ensure that the date range is sufficient enough to generate unique
 * values. To learn more, check Random Date in the Data Safe documentation.
 *
 */
export interface RandomDateFormatEntry extends model.FormatEntry {
  /**
   * The lower bound of the range within which random dates should be generated.
   * The start date must be less than or equal to the end date.
   *
   */
  "startDate": Date;
  /**
   * The upper bound of the range within which random dates should be generated.
   * The end date must be greater than or equal to the start date.
   *
   */
  "endDate": Date;

  "type": string;
}

export namespace RandomDateFormatEntry {
  export function getJsonObj(obj: RandomDateFormatEntry, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FormatEntry.getJsonObj(obj) as RandomDateFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "RANDOM_DATE";
  export function getDeserializedJsonObj(
    obj: RandomDateFormatEntry,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FormatEntry.getDeserializedJsonObj(obj) as RandomDateFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
}
