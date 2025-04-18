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
 * Content validation properties.
 */
export interface ContentValidation {
  "validationType": string;
}

export namespace ContentValidation {
  export function getJsonObj(obj: ContentValidation): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "validationType" in obj && obj.validationType) {
      switch (obj.validationType) {
        case "NONE":
          return model.NoContentValidation.getJsonObj(
            <model.NoContentValidation>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.validationType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ContentValidation): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "validationType" in obj && obj.validationType) {
      switch (obj.validationType) {
        case "NONE":
          return model.NoContentValidation.getDeserializedJsonObj(
            <model.NoContentValidation>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.validationType}`);
      }
    }
    return jsonObj;
  }
}
