/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The result of validating the credentials of a connection.
 */
export interface ConnectionValidationResult {
  /**
   * The latest result of whether the credentials pass the validation.
   */
  "result"?: ConnectionValidationResult.Result;
  /**
   * The latest timestamp when the connection was validated. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeValidated"?: Date;
  /**
   * A message describing the result of connection validation in more detail.
   */
  "message"?: string;
}

export namespace ConnectionValidationResult {
  export enum Result {
    Pass = "PASS",
    Fail = "FAIL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ConnectionValidationResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConnectionValidationResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}