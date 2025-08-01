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
 * Summary information for a model deployment.
 */
export interface ModelDeploymentSummary {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the model deployment.
   */
  "id": string;
  /**
   * The date and time the resource was created, in the timestamp format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: 2019-08-25T21:10:29.41Z
   *
   */
  "timeCreated": Date;
  /**
   * A user-friendly display name for the resource. Does not have to be unique, and can be modified. Avoid entering confidential information.
   * Example: {@code My ModelDeployment}
   *
   */
  "displayName": string;
  /**
   * A short description of the model deployment.
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the project associated with the model deployment.
   */
  "projectId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the user who created the model deployment.
   */
  "createdBy": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the model deployment's compartment.
   */
  "compartmentId": string;
  "modelDeploymentConfigurationDetails"?:
    | model.SingleModelDeploymentConfigurationDetails
    | model.ModelGroupDeploymentConfigurationDetails;
  "categoryLogDetails"?: model.CategoryLogDetails;
  /**
   * The URL to interact with the model deployment.
   */
  "modelDeploymentUrl": string;
  /**
   * The state of the model deployment.
   */
  "lifecycleState": model.ModelDeploymentLifecycleState;
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

export namespace ModelDeploymentSummary {
  export function getJsonObj(obj: ModelDeploymentSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDeploymentConfigurationDetails": obj.modelDeploymentConfigurationDetails
          ? model.ModelDeploymentConfigurationDetails.getJsonObj(
              obj.modelDeploymentConfigurationDetails
            )
          : undefined,
        "categoryLogDetails": obj.categoryLogDetails
          ? model.CategoryLogDetails.getJsonObj(obj.categoryLogDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ModelDeploymentSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDeploymentConfigurationDetails": obj.modelDeploymentConfigurationDetails
          ? model.ModelDeploymentConfigurationDetails.getDeserializedJsonObj(
              obj.modelDeploymentConfigurationDetails
            )
          : undefined,
        "categoryLogDetails": obj.categoryLogDetails
          ? model.CategoryLogDetails.getDeserializedJsonObj(obj.categoryLogDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
