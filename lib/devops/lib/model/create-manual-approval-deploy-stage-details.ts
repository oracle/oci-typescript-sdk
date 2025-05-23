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
 * Specifies the manual approval stage.
 */
export interface CreateManualApprovalDeployStageDetails extends model.CreateDeployStageDetails {
  "approvalPolicy": model.CountBasedApprovalPolicy;

  "deployStageType": string;
}

export namespace CreateManualApprovalDeployStageDetails {
  export function getJsonObj(
    obj: CreateManualApprovalDeployStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDeployStageDetails.getJsonObj(
            obj
          ) as CreateManualApprovalDeployStageDetails)),
      ...{
        "approvalPolicy": obj.approvalPolicy
          ? model.ApprovalPolicy.getJsonObj(obj.approvalPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
  export const deployStageType = "MANUAL_APPROVAL";
  export function getDeserializedJsonObj(
    obj: CreateManualApprovalDeployStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDeployStageDetails.getDeserializedJsonObj(
            obj
          ) as CreateManualApprovalDeployStageDetails)),
      ...{
        "approvalPolicy": obj.approvalPolicy
          ? model.ApprovalPolicy.getDeserializedJsonObj(obj.approvalPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
}
