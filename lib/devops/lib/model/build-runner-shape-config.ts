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
 * The information about build runner.
 */
export interface BuildRunnerShapeConfig {
  "buildRunnerType": string;
}

export namespace BuildRunnerShapeConfig {
  export function getJsonObj(obj: BuildRunnerShapeConfig): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "buildRunnerType" in obj && obj.buildRunnerType) {
      switch (obj.buildRunnerType) {
        case "DEFAULT":
          return model.DefaultBuildRunnerShapeConfig.getJsonObj(
            <model.DefaultBuildRunnerShapeConfig>(<object>jsonObj),
            true
          );
        case "CUSTOM":
          return model.CustomBuildRunnerShapeConfig.getJsonObj(
            <model.CustomBuildRunnerShapeConfig>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.buildRunnerType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BuildRunnerShapeConfig): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "buildRunnerType" in obj && obj.buildRunnerType) {
      switch (obj.buildRunnerType) {
        case "DEFAULT":
          return model.DefaultBuildRunnerShapeConfig.getDeserializedJsonObj(
            <model.DefaultBuildRunnerShapeConfig>(<object>jsonObj),
            true
          );
        case "CUSTOM":
          return model.CustomBuildRunnerShapeConfig.getDeserializedJsonObj(
            <model.CustomBuildRunnerShapeConfig>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.buildRunnerType}`);
      }
    }
    return jsonObj;
  }
}
