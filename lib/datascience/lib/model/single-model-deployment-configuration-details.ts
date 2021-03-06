/**
 * Data Science API
 * Use the Data Science APIs to organize your data science work, access data and computing resources, and build, train, deploy, and manage models on Oracle Cloud.

 * OpenAPI spec version: 20190101
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
 * The single model type deployment.
 */
export interface SingleModelDeploymentConfigurationDetails
  extends model.ModelDeploymentConfigurationDetails {
  "modelConfigurationDetails": model.ModelConfigurationDetails;

  "deploymentType": string;
}

export namespace SingleModelDeploymentConfigurationDetails {
  export function getJsonObj(
    obj: SingleModelDeploymentConfigurationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ModelDeploymentConfigurationDetails.getJsonObj(
            obj
          ) as SingleModelDeploymentConfigurationDetails)),
      ...{
        "modelConfigurationDetails": obj.modelConfigurationDetails
          ? model.ModelConfigurationDetails.getJsonObj(obj.modelConfigurationDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const deploymentType = "SINGLE_MODEL";
  export function getDeserializedJsonObj(
    obj: SingleModelDeploymentConfigurationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ModelDeploymentConfigurationDetails.getDeserializedJsonObj(
            obj
          ) as SingleModelDeploymentConfigurationDetails)),
      ...{
        "modelConfigurationDetails": obj.modelConfigurationDetails
          ? model.ModelConfigurationDetails.getDeserializedJsonObj(obj.modelConfigurationDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
