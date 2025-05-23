/**
 * NetworkLoadBalancer API
 * This describes the network load balancer API.
 * OpenAPI spec version: 20200501
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
 * The health status of the specified backend server.
 *
 */
export interface BackendHealth {
  /**
   * The general health status of the specified backend server.
   * <p>
   *   **OK:**  All health check probes return {@code OK}
   * <p>
   *   **WARNING:** At least one of the health check probes does not return {@code OK}
   * <p>
   *   **CRITICAL:** None of the health check probes return {@code OK}.
   * *
   * *   **UNKNOWN:** One of the health checks probes return {@code UNKNOWN},
   * *   or the system is unable to retrieve metrics at this time.
   *
   */
  "status": BackendHealth.Status;
  /**
   * A list of the most recent health check results returned for the specified backend server.
   *
   */
  "healthCheckResults": Array<model.HealthCheckResult>;
}

export namespace BackendHealth {
  export enum Status {
    Ok = "OK",
    Warning = "WARNING",
    Critical = "CRITICAL",
    Unknown = "UNKNOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BackendHealth): object {
    const jsonObj = {
      ...obj,
      ...{
        "healthCheckResults": obj.healthCheckResults
          ? obj.healthCheckResults.map(item => {
              return model.HealthCheckResult.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BackendHealth): object {
    const jsonObj = {
      ...obj,
      ...{
        "healthCheckResults": obj.healthCheckResults
          ? obj.healthCheckResults.map(item => {
              return model.HealthCheckResult.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
