/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * Detail of each ContainerStepRun.
 */
export interface PipelineContainerStepRun extends model.PipelineStepRun {
  "stepType": string;
}

export namespace PipelineContainerStepRun {
  export function getJsonObj(obj: PipelineContainerStepRun, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PipelineStepRun.getJsonObj(obj) as PipelineContainerStepRun)),
      ...{}
    };

    return jsonObj;
  }
  export const stepType = "CONTAINER";
  export function getDeserializedJsonObj(
    obj: PipelineContainerStepRun,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PipelineStepRun.getDeserializedJsonObj(obj) as PipelineContainerStepRun)),
      ...{}
    };

    return jsonObj;
  }
}
