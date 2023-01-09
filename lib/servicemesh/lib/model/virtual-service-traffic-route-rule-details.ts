/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Rule for routing incoming virtual service traffic to a version.
 */
export interface VirtualServiceTrafficRouteRuleDetails {
  /**
   * The destination of the request.
   */
  "destinations": Array<model.VirtualDeploymentTrafficRuleTargetDetails>;

  "type": string;
}

export namespace VirtualServiceTrafficRouteRuleDetails {
  export function getJsonObj(obj: VirtualServiceTrafficRouteRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "destinations": obj.destinations
          ? obj.destinations.map(item => {
              return model.VirtualDeploymentTrafficRuleTargetDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "TCP":
          return model.TcpVirtualServiceTrafficRouteRuleDetails.getJsonObj(
            <model.TcpVirtualServiceTrafficRouteRuleDetails>(<object>jsonObj),
            true
          );
        case "TLS_PASSTHROUGH":
          return model.TlsPassthroughVirtualServiceTrafficRouteRuleDetails.getJsonObj(
            <model.TlsPassthroughVirtualServiceTrafficRouteRuleDetails>(<object>jsonObj),
            true
          );
        case "HTTP":
          return model.HttpVirtualServiceTrafficRouteRuleDetails.getJsonObj(
            <model.HttpVirtualServiceTrafficRouteRuleDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VirtualServiceTrafficRouteRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "destinations": obj.destinations
          ? obj.destinations.map(item => {
              return model.VirtualDeploymentTrafficRuleTargetDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "TCP":
          return model.TcpVirtualServiceTrafficRouteRuleDetails.getDeserializedJsonObj(
            <model.TcpVirtualServiceTrafficRouteRuleDetails>(<object>jsonObj),
            true
          );
        case "TLS_PASSTHROUGH":
          return model.TlsPassthroughVirtualServiceTrafficRouteRuleDetails.getDeserializedJsonObj(
            <model.TlsPassthroughVirtualServiceTrafficRouteRuleDetails>(<object>jsonObj),
            true
          );
        case "HTTP":
          return model.HttpVirtualServiceTrafficRouteRuleDetails.getDeserializedJsonObj(
            <model.HttpVirtualServiceTrafficRouteRuleDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}