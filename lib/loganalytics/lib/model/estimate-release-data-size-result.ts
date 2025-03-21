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
 * This is the size and time range of data to be released
 */
export interface EstimateReleaseDataSizeResult {
  /**
   * This is the end of the time range of data to be released.  timeDataStarted and timeDataEnded delineate
   * the time range of the recalled data to be released.  They may not be exact the same as the
   * parameters in the request input (EstimateReleaseDataSizeDetails).
   *
   */
  "timeDataEnded": Date;
  /**
   * This is the start of the time range of data to be released
   */
  "timeDataStarted": Date;
  /**
   * This is the size in bytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInBytes": number;
}

export namespace EstimateReleaseDataSizeResult {
  export function getJsonObj(obj: EstimateReleaseDataSizeResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EstimateReleaseDataSizeResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
