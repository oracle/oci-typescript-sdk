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
 * Possible operation types.
 **/
export enum OperationType {
  CreateProject = "CREATE_PROJECT",
  UpdateProject = "UPDATE_PROJECT",
  DeleteProject = "DELETE_PROJECT",
  MoveProject = "MOVE_PROJECT",
  CreateDeployPipeline = "CREATE_DEPLOY_PIPELINE",
  UpdateDeployPipeline = "UPDATE_DEPLOY_PIPELINE",
  DeleteDeployPipeline = "DELETE_DEPLOY_PIPELINE",
  CreateDeployStage = "CREATE_DEPLOY_STAGE",
  UpdateDeployStage = "UPDATE_DEPLOY_STAGE",
  DeleteDeployStage = "DELETE_DEPLOY_STAGE",
  CreateDeployArtifact = "CREATE_DEPLOY_ARTIFACT",
  UpdateDeployArtifact = "UPDATE_DEPLOY_ARTIFACT",
  DeleteDeployArtifact = "DELETE_DEPLOY_ARTIFACT",
  CreateDeployEnvironment = "CREATE_DEPLOY_ENVIRONMENT",
  UpdateDeployEnvironment = "UPDATE_DEPLOY_ENVIRONMENT",
  DeleteDeployEnvironment = "DELETE_DEPLOY_ENVIRONMENT",
  CreateDeployment = "CREATE_DEPLOYMENT",
  UpdateDeployment = "UPDATE_DEPLOYMENT",
  DeleteDeployment = "DELETE_DEPLOYMENT",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationType {
  export function getJsonObj(obj: OperationType): OperationType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: OperationType): OperationType {
    return obj;
  }
}
