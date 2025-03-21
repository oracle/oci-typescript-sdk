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
 * Behavior applied to any requests received by the API on this route.
 *
 */
export interface ApiSpecificationRouteRequestPolicies {
  "authorization"?:
    | model.AnyOfRouteAuthorizationPolicy
    | model.AnonymousRouteAuthorizationPolicy
    | model.AuthenticationOnlyRouteAuthorizationPolicy;
  "cors"?: model.CorsPolicy;
  "queryParameterValidations"?: model.QueryParameterValidationRequestPolicy;
  "headerValidations"?: model.HeaderValidationRequestPolicy;
  "bodyValidation"?: model.BodyValidationRequestPolicy;
  "headerTransformations"?: model.HeaderTransformationPolicy;
  "queryParameterTransformations"?: model.QueryParameterTransformationPolicy;
  "responseCacheLookup"?: model.SimpleLookupPolicy;
}

export namespace ApiSpecificationRouteRequestPolicies {
  export function getJsonObj(obj: ApiSpecificationRouteRequestPolicies): object {
    const jsonObj = {
      ...obj,
      ...{
        "authorization": obj.authorization
          ? model.RouteAuthorizationPolicy.getJsonObj(obj.authorization)
          : undefined,
        "cors": obj.cors ? model.CorsPolicy.getJsonObj(obj.cors) : undefined,
        "queryParameterValidations": obj.queryParameterValidations
          ? model.QueryParameterValidationRequestPolicy.getJsonObj(obj.queryParameterValidations)
          : undefined,
        "headerValidations": obj.headerValidations
          ? model.HeaderValidationRequestPolicy.getJsonObj(obj.headerValidations)
          : undefined,
        "bodyValidation": obj.bodyValidation
          ? model.BodyValidationRequestPolicy.getJsonObj(obj.bodyValidation)
          : undefined,
        "headerTransformations": obj.headerTransformations
          ? model.HeaderTransformationPolicy.getJsonObj(obj.headerTransformations)
          : undefined,
        "queryParameterTransformations": obj.queryParameterTransformations
          ? model.QueryParameterTransformationPolicy.getJsonObj(obj.queryParameterTransformations)
          : undefined,
        "responseCacheLookup": obj.responseCacheLookup
          ? model.ResponseCacheLookupPolicy.getJsonObj(obj.responseCacheLookup)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApiSpecificationRouteRequestPolicies): object {
    const jsonObj = {
      ...obj,
      ...{
        "authorization": obj.authorization
          ? model.RouteAuthorizationPolicy.getDeserializedJsonObj(obj.authorization)
          : undefined,
        "cors": obj.cors ? model.CorsPolicy.getDeserializedJsonObj(obj.cors) : undefined,
        "queryParameterValidations": obj.queryParameterValidations
          ? model.QueryParameterValidationRequestPolicy.getDeserializedJsonObj(
              obj.queryParameterValidations
            )
          : undefined,
        "headerValidations": obj.headerValidations
          ? model.HeaderValidationRequestPolicy.getDeserializedJsonObj(obj.headerValidations)
          : undefined,
        "bodyValidation": obj.bodyValidation
          ? model.BodyValidationRequestPolicy.getDeserializedJsonObj(obj.bodyValidation)
          : undefined,
        "headerTransformations": obj.headerTransformations
          ? model.HeaderTransformationPolicy.getDeserializedJsonObj(obj.headerTransformations)
          : undefined,
        "queryParameterTransformations": obj.queryParameterTransformations
          ? model.QueryParameterTransformationPolicy.getDeserializedJsonObj(
              obj.queryParameterTransformations
            )
          : undefined,
        "responseCacheLookup": obj.responseCacheLookup
          ? model.ResponseCacheLookupPolicy.getDeserializedJsonObj(obj.responseCacheLookup)
          : undefined
      }
    };

    return jsonObj;
  }
}
