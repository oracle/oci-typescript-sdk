/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](https://docs.oracle.com/iaas/Content/Network/Concepts/overview.htm),
[Compute](https://docs.oracle.com/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](https://docs.oracle.com/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](https://docs.oracle.com/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
 * Represents a load balancer that is to be attached to an instance pool.
 */
export interface AttachLoadBalancerDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the load balancer to attach to the instance pool.
   *
   */
  "loadBalancerId": string;
  /**
   * The name of the backend set on the load balancer to add instances to.
   */
  "backendSetName": string;
  /**
   * The port value to use when creating the backend set. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port": number;
  /**
   * Indicates which VNIC on each instance in the pool should be used to associate with the load balancer.
   * Possible values are \"PrimaryVnic\" or the displayName of one of the secondary VNICs on the instance configuration
   * that is associated with the instance pool.
   *
   */
  "vnicSelection": string;
}

export namespace AttachLoadBalancerDetails {
  export function getJsonObj(obj: AttachLoadBalancerDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AttachLoadBalancerDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
