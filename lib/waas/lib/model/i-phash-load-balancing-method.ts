/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * An object that represents the {@code ip-hash} load balancing method.
 *
 */
export interface IPHashLoadBalancingMethod extends model.LoadBalancingMethod {
  "method": string;
}

export namespace IPHashLoadBalancingMethod {
  export function getJsonObj(obj: IPHashLoadBalancingMethod, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LoadBalancingMethod.getJsonObj(obj) as IPHashLoadBalancingMethod)),
      ...{}
    };

    return jsonObj;
  }
  export const method = "IP_HASH";
  export function getDeserializedJsonObj(
    obj: IPHashLoadBalancingMethod,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LoadBalancingMethod.getDeserializedJsonObj(obj) as IPHashLoadBalancingMethod)),
      ...{}
    };

    return jsonObj;
  }
}
