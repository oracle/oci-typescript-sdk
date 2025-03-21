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
 * Result of the connectivity test performed on a pipeline's assigned connection.
 *
 */
export interface TestPipelineConnectionResult {
  /**
   * Type of result, either Succeeded, Failed, or Timed out.
   *
   */
  "resultType": TestPipelineConnectionResult.ResultType;
  "error"?: model.TestPipelineConnectionError;
}

export namespace TestPipelineConnectionResult {
  export enum ResultType {
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    TimedOut = "TIMED_OUT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TestPipelineConnectionResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "error": obj.error ? model.TestPipelineConnectionError.getJsonObj(obj.error) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TestPipelineConnectionResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "error": obj.error
          ? model.TestPipelineConnectionError.getDeserializedJsonObj(obj.error)
          : undefined
      }
    };

    return jsonObj;
  }
}
