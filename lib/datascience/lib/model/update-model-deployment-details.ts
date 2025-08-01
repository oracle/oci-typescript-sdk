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
 * Details for updating a model deployment. You can update {@code modelDeploymentConfigurationDetails} and change {@code instanceShapeName} and {@code modelId} when the model deployment is in
 * the ACTIVE lifecycle state. The {@code bandwidthMbps} or {@code instanceCount} can only be updated while the model deployment is in the {@code INACTIVE} state. Changes to the {@code bandwidthMbps}
 * or {@code instanceCount} will take effect the next time the {@code ActivateModelDeployment} action is invoked on the model deployment resource.
 *
 */
export interface UpdateModelDeploymentDetails {
  /**
   * A user-friendly display name for the resource. Does not have to be unique, and can be modified. Avoid entering confidential information.
   * Example: {@code My ModelDeployment}
   *
   */
  "displayName"?: string;
  /**
   * A short description of the model deployment.
   */
  "description"?: string;
  "modelDeploymentConfigurationDetails"?:
    | model.UpdateModelGroupDeploymentConfigurationDetails
    | model.UpdateSingleModelDeploymentConfigurationDetails;
  "categoryLogDetails"?: model.UpdateCategoryLogDetails;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. See [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateModelDeploymentDetails {
  export function getJsonObj(obj: UpdateModelDeploymentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDeploymentConfigurationDetails": obj.modelDeploymentConfigurationDetails
          ? model.UpdateModelDeploymentConfigurationDetails.getJsonObj(
              obj.modelDeploymentConfigurationDetails
            )
          : undefined,
        "categoryLogDetails": obj.categoryLogDetails
          ? model.UpdateCategoryLogDetails.getJsonObj(obj.categoryLogDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateModelDeploymentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDeploymentConfigurationDetails": obj.modelDeploymentConfigurationDetails
          ? model.UpdateModelDeploymentConfigurationDetails.getDeserializedJsonObj(
              obj.modelDeploymentConfigurationDetails
            )
          : undefined,
        "categoryLogDetails": obj.categoryLogDetails
          ? model.UpdateCategoryLogDetails.getDeserializedJsonObj(obj.categoryLogDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
