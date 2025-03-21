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
 * Rule for routing incoming Virtual Service traffic with HTTP protocol
 */
export interface HttpVirtualServiceTrafficRouteRule extends model.VirtualServiceTrafficRouteRule {
  /**
   * Route to match
   */
  "path"?: string;
  /**
   * Match type for the route
   */
  "pathType"?: HttpVirtualServiceTrafficRouteRule.PathType;
  /**
   * If true, the rule will check that the content-type header has a application/grpc
   * or one of the various application/grpc+ values.
   *
   */
  "isGrpc"?: boolean;
  /**
   * The maximum duration in milliseconds for the target service to respond to a request.
   * If provided, the timeout value overrides the default timeout of 15 seconds for the HTTP based route rules, and disabled (no timeout) when 'isGrpc' is true.
   * The value 0 (zero) indicates that the timeout is disabled.
   * For streaming responses from the target service, consider either keeping the timeout disabled or set a sufficiently high value.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "requestTimeoutInMs"?: number;

  "type": string;
}

export namespace HttpVirtualServiceTrafficRouteRule {
  export enum PathType {
    Prefix = "PREFIX",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(
    obj: HttpVirtualServiceTrafficRouteRule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.VirtualServiceTrafficRouteRule.getJsonObj(
            obj
          ) as HttpVirtualServiceTrafficRouteRule)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "HTTP";
  export function getDeserializedJsonObj(
    obj: HttpVirtualServiceTrafficRouteRule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.VirtualServiceTrafficRouteRule.getDeserializedJsonObj(
            obj
          ) as HttpVirtualServiceTrafficRouteRule)),
      ...{}
    };

    return jsonObj;
  }
}
