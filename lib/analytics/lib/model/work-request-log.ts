/**
 * Analytics API
 * Analytics API.

 * OpenAPI spec version: 20190331
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
 * Log entries related to a specific work request.
 *
 */
export interface WorkRequestLog {
  /**
   * The description of the event that occurred.
   *
   */
  "message": string;
  /**
    * The date and time the log entry occured, in the format defined by RFC3339.
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timestamp": Date;
}

export namespace WorkRequestLog {
  export function getJsonObj(obj: WorkRequestLog): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestLog): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
