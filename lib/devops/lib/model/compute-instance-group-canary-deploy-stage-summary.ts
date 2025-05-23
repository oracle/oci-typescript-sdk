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
 * Specifies the Instance Group Canary deployment stage.
 */
export interface ComputeInstanceGroupCanaryDeployStageSummary extends model.DeployStageSummary {
  /**
   * A compute instance group environment OCID for Canary deployment.
   */
  "computeInstanceGroupDeployEnvironmentId": string;
  /**
   * The OCID of the artifact that contains the deployment specification.
   */
  "deploymentSpecDeployArtifactId": string;
  /**
   * The list of file artifact OCIDs to deploy.
   */
  "deployArtifactIds"?: Array<string>;
  "rolloutPolicy":
    | model.ComputeInstanceGroupLinearRolloutPolicyByPercentage
    | model.ComputeInstanceGroupLinearRolloutPolicyByCount;
  "testLoadBalancerConfig"?: model.LoadBalancerConfig;
  "productionLoadBalancerConfig": model.LoadBalancerConfig;

  "deployStageType": string;
}

export namespace ComputeInstanceGroupCanaryDeployStageSummary {
  export function getJsonObj(
    obj: ComputeInstanceGroupCanaryDeployStageSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployStageSummary.getJsonObj(
            obj
          ) as ComputeInstanceGroupCanaryDeployStageSummary)),
      ...{
        "rolloutPolicy": obj.rolloutPolicy
          ? model.ComputeInstanceGroupRolloutPolicy.getJsonObj(obj.rolloutPolicy)
          : undefined,
        "testLoadBalancerConfig": obj.testLoadBalancerConfig
          ? model.LoadBalancerConfig.getJsonObj(obj.testLoadBalancerConfig)
          : undefined,
        "productionLoadBalancerConfig": obj.productionLoadBalancerConfig
          ? model.LoadBalancerConfig.getJsonObj(obj.productionLoadBalancerConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export const deployStageType = "COMPUTE_INSTANCE_GROUP_CANARY_DEPLOYMENT";
  export function getDeserializedJsonObj(
    obj: ComputeInstanceGroupCanaryDeployStageSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployStageSummary.getDeserializedJsonObj(
            obj
          ) as ComputeInstanceGroupCanaryDeployStageSummary)),
      ...{
        "rolloutPolicy": obj.rolloutPolicy
          ? model.ComputeInstanceGroupRolloutPolicy.getDeserializedJsonObj(obj.rolloutPolicy)
          : undefined,
        "testLoadBalancerConfig": obj.testLoadBalancerConfig
          ? model.LoadBalancerConfig.getDeserializedJsonObj(obj.testLoadBalancerConfig)
          : undefined,
        "productionLoadBalancerConfig": obj.productionLoadBalancerConfig
          ? model.LoadBalancerConfig.getDeserializedJsonObj(obj.productionLoadBalancerConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
