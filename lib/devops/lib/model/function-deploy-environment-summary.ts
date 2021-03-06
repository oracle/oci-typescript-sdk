/**
 * DevOps API
 * Use the DevOps APIs to create a DevOps project to group the pipelines,  add reference to target deployment environments, add artifacts to deploy,  and create deployment pipelines needed to deploy your software.
 * OpenAPI spec version: 20210630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Specifies the Function environment.
 */
export interface FunctionDeployEnvironmentSummary extends model.DeployEnvironmentSummary {
  /**
   * The OCID of the Function.
   */
  "functionId": string;

  "deployEnvironmentType": string;
}

export namespace FunctionDeployEnvironmentSummary {
  export function getJsonObj(
    obj: FunctionDeployEnvironmentSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployEnvironmentSummary.getJsonObj(obj) as FunctionDeployEnvironmentSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const deployEnvironmentType = "FUNCTION";
  export function getDeserializedJsonObj(
    obj: FunctionDeployEnvironmentSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployEnvironmentSummary.getDeserializedJsonObj(
            obj
          ) as FunctionDeployEnvironmentSummary)),
      ...{}
    };

    return jsonObj;
  }
}
