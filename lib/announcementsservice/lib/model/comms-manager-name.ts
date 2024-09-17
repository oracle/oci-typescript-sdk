/**
 * Announcements Service API
 * Manage Oracle Cloud Infrastructure console announcements.
 * OpenAPI spec version: 0.0.1
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
 * Name of the comms manager team that manages Notifications to this service.
 **/
export enum CommsManagerName {
  Cn = "CN",
  Fusion = "FUSION",
  As = "AS",
  Erf = "ERF",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace CommsManagerName {
  export function getJsonObj(obj: CommsManagerName): CommsManagerName {
    return obj;
  }
  export function getDeserializedJsonObj(obj: CommsManagerName): CommsManagerName {
    return obj;
  }
}