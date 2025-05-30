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
 * Discovery Uri information.
 *
 */
export interface DiscoveryUriSourceUriDetails extends model.SourceUriDetails {
  /**
   * The discovery URI for the auth server.
   */
  "uri": string;

  "type": string;
}

export namespace DiscoveryUriSourceUriDetails {
  export function getJsonObj(obj: DiscoveryUriSourceUriDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SourceUriDetails.getJsonObj(obj) as DiscoveryUriSourceUriDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "DISCOVERY_URI";
  export function getDeserializedJsonObj(
    obj: DiscoveryUriSourceUriDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SourceUriDetails.getDeserializedJsonObj(obj) as DiscoveryUriSourceUriDetails)),
      ...{}
    };

    return jsonObj;
  }
}
