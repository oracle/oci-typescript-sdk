/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](https://docs.oracle.com/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * Creation details for a job for running inside the specified stack.
 *
 */
export interface CreateJobDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the stack that is associated with the current job.
   */
  "stackId": string;
  /**
   * Description of the job.
   */
  "displayName"?: string;
  /**
   * Terraform-specific operation to execute.
   */
  "operation"?: string;
  "jobOperationDetails"?:
    | model.CreateImportTfStateJobOperationDetails
    | model.CreatePlanRollbackJobOperationDetails
    | model.CreateApplyRollbackJobOperationDetails
    | model.CreateApplyJobOperationDetails
    | model.CreatePlanJobOperationDetails
    | model.CreateDestroyJobOperationDetails;
  "applyJobPlanResolution"?: model.ApplyJobPlanResolution;
  /**
   * Free-form tags associated with this resource. Each tag is a key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateJobDetails {
  export function getJsonObj(obj: CreateJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "jobOperationDetails": obj.jobOperationDetails
          ? model.CreateJobOperationDetails.getJsonObj(obj.jobOperationDetails)
          : undefined,
        "applyJobPlanResolution": obj.applyJobPlanResolution
          ? model.ApplyJobPlanResolution.getJsonObj(obj.applyJobPlanResolution)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "jobOperationDetails": obj.jobOperationDetails
          ? model.CreateJobOperationDetails.getDeserializedJsonObj(obj.jobOperationDetails)
          : undefined,
        "applyJobPlanResolution": obj.applyJobPlanResolution
          ? model.ApplyJobPlanResolution.getDeserializedJsonObj(obj.applyJobPlanResolution)
          : undefined
      }
    };

    return jsonObj;
  }
}
