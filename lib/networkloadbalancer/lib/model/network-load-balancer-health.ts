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
* The health status details for the specified network load balancer.
* <p>
This object does not explicitly enumerate backend sets with a status of {@code OK}. However, the backend sets are included in the
* {@code totalBackendSetCount} sum.
* 
*/
export interface NetworkLoadBalancerHealth {
  /**
   * The overall health status of the network load balancer.
   * <p>
   *  **OK:** All backend sets associated with the network load balancer return a status of {@code OK}.
   * <p>
   *  **WARNING:** At least one of the backend sets associated with the network load balancer returns a status of {@code WARNING},
   * no backend sets return a status of {@code CRITICAL}, and the network load balancer life cycle state is {@code ACTIVE}.
   * <p>
   *  **CRITICAL:** One or more of the backend sets associated with the network load balancer return a status of {@code CRITICAL}.
   * <p>
   *  **UNKNOWN:** If any one of the following conditions is true:
   * <p>
   *  The network load balancer life cycle state is not {@code ACTIVE}.
   * <p>
   *  No backend sets are defined for the network load balancer.
   * <p>
   *  More than half of the backend sets associated with the network load balancer return a status of {@code UNKNOWN}, none of the backend
   *        sets return a status of {@code WARNING} or {@code CRITICAL}, and the network load balancer life cycle state is {@code ACTIVE}.
   * <p>
   *  The system could not retrieve metrics for any reason.
   *
   */
  "status": NetworkLoadBalancerHealth.Status;
  /**
    * A list of backend sets that are currently in the {@code WARNING} health state. The list identifies each backend set by the
* user-friendly name you assigned when you created the backend set.
* <p>
Example: {@code example_backend_set3}
* 
    */
  "warningStateBackendSetNames": Array<string>;
  /**
    * A list of backend sets that are currently in the {@code CRITICAL} health state. The list identifies each backend set by the
* user-friendly name you assigned when you created the backend set.
* <p>
Example: {@code example_backend_set}
* 
    */
  "criticalStateBackendSetNames": Array<string>;
  /**
    * A list of backend sets that are currently in the {@code UNKNOWN} health state. The list identifies each backend set by the
* user-friendly name you assigned when you created the backend set.
* <p>
Example: {@code example_backend_set2}
* 
    */
  "unknownStateBackendSetNames": Array<string>;
  /**
    * The total number of backend sets associated with this network load balancer.
* <p>
Example: {@code 4}
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "totalBackendSetCount": number;
}

export namespace NetworkLoadBalancerHealth {
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

  export function getJsonObj(obj: NetworkLoadBalancerHealth): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NetworkLoadBalancerHealth): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
