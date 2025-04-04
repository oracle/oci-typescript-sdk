/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
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
 * Traffic router target for a virtual service version.
 */
export interface VirtualDeploymentTrafficRuleTarget extends model.TrafficRuleTarget {
  /**
   * The OCID of the virtual deployment where the request will be routed.
   */
  "virtualDeploymentId"?: string;
  /**
   * Port on virtual deployment to target.
   * If port is missing, the rule will target all ports on the virtual deployment.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * Weight of traffic target. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "weight": number;

  "type": string;
}

export namespace VirtualDeploymentTrafficRuleTarget {
  export function getJsonObj(
    obj: VirtualDeploymentTrafficRuleTarget,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TrafficRuleTarget.getJsonObj(obj) as VirtualDeploymentTrafficRuleTarget)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "VIRTUAL_DEPLOYMENT";
  export function getDeserializedJsonObj(
    obj: VirtualDeploymentTrafficRuleTarget,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TrafficRuleTarget.getDeserializedJsonObj(
            obj
          ) as VirtualDeploymentTrafficRuleTarget)),
      ...{}
    };

    return jsonObj;
  }
}
