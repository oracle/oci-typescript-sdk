/**
 * Analytics API
 * Analytics API.

 * OpenAPI spec version: 20190331
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * EARLY - Early update channel recommended for pre-production use.
 * REGULAR - Regular update channel recommended for production use.
 * PHASE_1 - Reserved for future use.
 * PHASE_2 - Reserved for future use.
 *
 **/
export enum UpdateChannel {
  Regular = "REGULAR",
  Early = "EARLY",
  Phase2 = "PHASE_2",
  Phase1 = "PHASE_1",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace UpdateChannel {
  export function getJsonObj(obj: UpdateChannel): UpdateChannel {
    return obj;
  }
  export function getDeserializedJsonObj(obj: UpdateChannel): UpdateChannel {
    return obj;
  }
}