/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](https://docs.oracle.com/iaas/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Specifies the required canary release strategy for OKE deployment.
 */
export interface OkeCanaryStrategy {
  "strategyType": string;
}

export namespace OkeCanaryStrategy {
  export function getJsonObj(obj: OkeCanaryStrategy): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "strategyType" in obj && obj.strategyType) {
      switch (obj.strategyType) {
        case "NGINX_CANARY_STRATEGY":
          return model.NginxCanaryStrategy.getJsonObj(
            <model.NginxCanaryStrategy>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.strategyType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OkeCanaryStrategy): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "strategyType" in obj && obj.strategyType) {
      switch (obj.strategyType) {
        case "NGINX_CANARY_STRATEGY":
          return model.NginxCanaryStrategy.getDeserializedJsonObj(
            <model.NginxCanaryStrategy>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.strategyType}`);
      }
    }
    return jsonObj;
  }
}
