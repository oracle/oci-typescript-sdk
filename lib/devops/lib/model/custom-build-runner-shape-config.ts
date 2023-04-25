/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Specifies the custom build runner shape config.
 */
export interface CustomBuildRunnerShapeConfig extends model.BuildRunnerShapeConfig {
  /**
   * The total number of OCPUs set for the instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocpus": number;
  /**
   * The total amount of memory set for the instance in gigabytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryInGBs": number;

  "buildRunnerType": string;
}

export namespace CustomBuildRunnerShapeConfig {
  export function getJsonObj(obj: CustomBuildRunnerShapeConfig, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildRunnerShapeConfig.getJsonObj(obj) as CustomBuildRunnerShapeConfig)),
      ...{}
    };

    return jsonObj;
  }
  export const buildRunnerType = "CUSTOM";
  export function getDeserializedJsonObj(
    obj: CustomBuildRunnerShapeConfig,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildRunnerShapeConfig.getDeserializedJsonObj(
            obj
          ) as CustomBuildRunnerShapeConfig)),
      ...{}
    };

    return jsonObj;
  }
}