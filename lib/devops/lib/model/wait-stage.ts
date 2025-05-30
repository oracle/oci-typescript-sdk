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
 * Specifies the Wait stage. You can specify variable wait times or an absolute duration.
 */
export interface WaitStage extends model.BuildPipelineStage {
  "waitCriteria": model.AbsoluteWaitCriteria;

  "buildPipelineStageType": string;
}

export namespace WaitStage {
  export function getJsonObj(obj: WaitStage, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BuildPipelineStage.getJsonObj(obj) as WaitStage)),
      ...{
        "waitCriteria": obj.waitCriteria
          ? model.WaitCriteria.getJsonObj(obj.waitCriteria)
          : undefined
      }
    };

    return jsonObj;
  }
  export const buildPipelineStageType = "WAIT";
  export function getDeserializedJsonObj(obj: WaitStage, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildPipelineStage.getDeserializedJsonObj(obj) as WaitStage)),
      ...{
        "waitCriteria": obj.waitCriteria
          ? model.WaitCriteria.getDeserializedJsonObj(obj.waitCriteria)
          : undefined
      }
    };

    return jsonObj;
  }
}
