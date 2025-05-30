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
 * The configuration of a network load balancer backend set.
 * For more information about backend set configuration, see
 * [Backend Sets for Network Load Balancers](https://docs.oracle.com/iaas/Content/NetworkLoadBalancer/BackendSets/backend-set-management.htm).
 * <p>
 **Caution:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface BackendSetSummary {
  /**
    * A user-friendly name for the backend set that must be unique and cannot be changed.
* <p>
Valid backend set names include only alphanumeric characters, dashes, and underscores. Backend set names cannot
* contain spaces. Avoid entering confidential information.
* <p>
Example: {@code example_backend_set}
* 
    */
  "name": string;
  /**
    * The network load balancer policy for the backend set.
* <p>
Example: {@code FIVE_TUPLE}
* 
    */
  "policy": model.NetworkLoadBalancingPolicy;
  /**
   * If this parameter is enabled, the network load balancer preserves the source IP of the packet forwarded to the backend servers.
   * Backend servers see the original source IP. If the {@code isPreserveSourceDestination} parameter is enabled for the network load balancer resource, this parameter cannot be disabled.
   * The value is true by default.
   *
   */
  "isPreserveSource"?: boolean;
  /**
   * If enabled, the network load balancer will continue to distribute traffic in the configured distribution in the event all backends are unhealthy.
   * The value is false by default.
   *
   */
  "isFailOpen"?: boolean;
  /**
   * If enabled existing connections will be forwarded to an alternative healthy backend as soon as current backend becomes unhealthy.
   *
   */
  "isInstantFailoverEnabled"?: boolean;
  /**
   * If enabled along with instant failover, the network load balancer will send TCP RST to the clients for the existing connections instead of failing over to a healthy backend. This only applies when using the instant failover. By default, TCP RST is enabled.
   *
   */
  "isInstantFailoverTcpResetEnabled"?: boolean;
  /**
   * If enabled, NLB supports active-standby backends. The standby backend takes over the traffic when the active node fails, and continues to serve the traffic even when the old active node is back healthy.
   *
   */
  "areOperationallyActiveBackendsPreferred"?: boolean;
  /**
   * IP version associated with the backend set.
   */
  "ipVersion"?: model.IpVersion;
  /**
   * An array of backends.
   *
   */
  "backends": Array<model.Backend>;
  "healthChecker": model.HealthChecker;
}

export namespace BackendSetSummary {
  export function getJsonObj(obj: BackendSetSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "backends": obj.backends
          ? obj.backends.map(item => {
              return model.Backend.getJsonObj(item);
            })
          : undefined,
        "healthChecker": obj.healthChecker
          ? model.HealthChecker.getJsonObj(obj.healthChecker)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BackendSetSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "backends": obj.backends
          ? obj.backends.map(item => {
              return model.Backend.getDeserializedJsonObj(item);
            })
          : undefined,
        "healthChecker": obj.healthChecker
          ? model.HealthChecker.getDeserializedJsonObj(obj.healthChecker)
          : undefined
      }
    };

    return jsonObj;
  }
}
