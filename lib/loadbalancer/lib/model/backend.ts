/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](https://docs.oracle.com/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * The configuration of a backend server that is a member of a load balancer backend set.
 * For more information, see [Managing Backend Servers](https://docs.oracle.com/iaas/Content/Balance/Tasks/managingbackendservers.htm).
 *
 */
export interface Backend {
  /**
    * A read-only field showing the IP address and port that uniquely identify this backend server in the backend set.
* <p>
Example: {@code 10.0.0.3:8080}
* 
    */
  "name": string;
  /**
    * The IP address of the backend server.
* <p>
Example: {@code 10.0.0.3}
* 
    */
  "ipAddress": string;
  /**
    * The communication port for the backend server.
* <p>
Example: {@code 8080}
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "port": number;
  /**
    * The load balancing policy weight assigned to the server. Backend servers with a higher weight receive a larger
* proportion of incoming traffic. For example, a server weighted '3' receives 3 times the number of new connections
* as a server weighted '1'.
* For more information on load balancing policies, see
* [How Load Balancing Policies Work](https://docs.oracle.com/iaas/Content/Balance/Reference/lbpolicies.htm).
* <p>
Example: {@code 3}
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "weight": number;
  /**
    * The maximum number of simultaneous connections the load balancer can make to the backend.
* If this is not set or set to 0 then the maximum number of simultaneous connections the
* load balancer can make to the backend is unlimited.
* <p>
Example: {@code 300}
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "maxConnections"?: number;
  /**
    * Whether the load balancer should drain this server. Servers marked \"drain\" receive no new
* incoming traffic.
* <p>
Example: {@code false}
* 
    */
  "drain": boolean;
  /**
    * Whether the load balancer should treat this server as a backup unit. If {@code true}, the load balancer forwards no ingress
* traffic to this backend server unless all other backend servers not marked as \"backup\" fail the health check policy.
* <p>
**Note:** You cannot add a backend server marked as {@code backup} to a backend set that uses the IP Hash policy.
* <p>
Example: {@code false}
* 
    */
  "backup": boolean;
  /**
    * Whether the load balancer should treat this server as offline. Offline servers receive no incoming
* traffic.
* <p>
Example: {@code false}
* 
    */
  "offline": boolean;
}

export namespace Backend {
  export function getJsonObj(obj: Backend): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Backend): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
