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
 * Policy for the details regarding each routing backend under dynamic routing. We specify the value of selectors for which this routing backend must be selected for a request under keys. We specify the configuration details of routing backend under backend.
 */
export interface DynamicRoutingTypeRoutingBackend {
  "key": model.WildcardSelectionKey | model.AnyOfSelectionKey;
  "backend":
    | model.OAuth2LogoutBackend
    | model.HTTPBackend
    | model.OracleFunctionBackend
    | model.StockResponseBackend
    | model.DynamicRoutingBackend;
}

export namespace DynamicRoutingTypeRoutingBackend {
  export function getJsonObj(obj: DynamicRoutingTypeRoutingBackend): object {
    const jsonObj = {
      ...obj,
      ...{
        "key": obj.key ? model.DynamicSelectionKey.getJsonObj(obj.key) : undefined,
        "backend": obj.backend
          ? model.ApiSpecificationRouteBackend.getJsonObj(obj.backend)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DynamicRoutingTypeRoutingBackend): object {
    const jsonObj = {
      ...obj,
      ...{
        "key": obj.key ? model.DynamicSelectionKey.getDeserializedJsonObj(obj.key) : undefined,
        "backend": obj.backend
          ? model.ApiSpecificationRouteBackend.getDeserializedJsonObj(obj.backend)
          : undefined
      }
    };

    return jsonObj;
  }
}
