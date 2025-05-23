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
 * The network network load balancing configuration details of a backend server.
 */
export interface BackendDetails {
  /**
    * A read-only field showing the IP address/OCID and port that uniquely identify this backend server in the backend set.
* <p>
Example: {@code 10.0.0.3:8080}, or {@code ocid1.privateip..oc1.<var>&lt;unique_ID&gt;</var>:443} or {@code 10.0.0.3:0}
* 
    */
  "name"?: string;
  /**
    * The IP address of the backend server.
* <p>
Example: {@code 10.0.0.3}
* 
    */
  "ipAddress"?: string;
  /**
   * The IP OCID/Instance OCID associated with the backend server.
   * Example: {@code ocid1.privateip..oc1.<var>&lt;unique_ID&gt;</var>}
   *
   */
  "targetId"?: string;
  /**
    * The communication port for the backend server.
* <p>
Example: {@code 8080}
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "port": number;
  /**
    * The network load balancing policy weight assigned to the server. Backend servers with a higher weight receive a larger
* proportion of incoming traffic. For example, a server weighted '3' receives three times the number of new connections
* as a server weighted '1'.
* For more information about load balancing policies, see
* [Network Load Balancer Policies](https://docs.oracle.com/iaas/Content/NetworkLoadBalancer/introduction.htm#Policies).
* <p>
Example: {@code 3}
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "weight"?: number;
  /**
    * Whether the network load balancer should treat this server as a backup unit. If {@code true}, then the network load balancer forwards no ingress
* traffic to this backend server unless all other backend servers not marked as \"isBackup\" fail the health check policy.
* <p>
Example: {@code false}
* 
    */
  "isBackup"?: boolean;
  /**
    * Whether the network load balancer should drain this server. Servers marked \"isDrain\" receive no
* incoming traffic.
* <p>
Example: {@code false}
* 
    */
  "isDrain"?: boolean;
  /**
    * Whether the network load balancer should treat this server as offline. Offline servers receive no incoming
* traffic.
* <p>
Example: {@code false}
* 
    */
  "isOffline"?: boolean;
}

export namespace BackendDetails {
  export function getJsonObj(obj: BackendDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BackendDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
