/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * Specifies whether the deployment is used in a production or development/testing environment.
 *
 **/
export enum EnvironmentType {
  Production = "PRODUCTION",
  DevelopmentOrTesting = "DEVELOPMENT_OR_TESTING",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace EnvironmentType {
  export function getJsonObj(obj: EnvironmentType): EnvironmentType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: EnvironmentType): EnvironmentType {
    return obj;
  }
}
