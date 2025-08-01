/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](https://docs.oracle.com/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
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
 * Backend which when called triggers OAuth2 logout.
 *
 */
export interface OAuth2LogoutBackend extends model.ApiSpecificationRouteBackend {
  /**
   * A list of allowed post-logout URLs to which a request can be redirected after revoke access
   */
  "allowedPostLogoutUris"?: Array<string>;
  /**
   * Defines a state that should be shared on redirecting to postLogout URL.
   *
   */
  "postLogoutState"?: string;

  "type": string;
}

export namespace OAuth2LogoutBackend {
  export function getJsonObj(obj: OAuth2LogoutBackend, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ApiSpecificationRouteBackend.getJsonObj(obj) as OAuth2LogoutBackend)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "OAUTH2_LOGOUT_BACKEND";
  export function getDeserializedJsonObj(
    obj: OAuth2LogoutBackend,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ApiSpecificationRouteBackend.getDeserializedJsonObj(obj) as OAuth2LogoutBackend)),
      ...{}
    };

    return jsonObj;
  }
}
