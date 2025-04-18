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
 * Summary information for a stack.
 *
 */
export interface StackSummary {
  /**
   * Unique identifier of the specified stack.
   */
  "id"?: string;
  /**
   * Unique identifier of the compartment in which the stack resides.
   */
  "compartmentId"?: string;
  /**
   * Human-readable display name for the stack.
   */
  "displayName"?: string;
  /**
   * General description of the stack.
   */
  "description"?: string;
  /**
   * The date and time when the stack was created.
   * Format is defined by RFC3339.
   * Example: {@code 2020-01-25T21:10:29.600Z}
   *
   */
  "timeCreated"?: Date;
  /**
    * The current lifecycle state of the stack.
* For more information about stack lifecycle states in Resource Manager, see
* [Key Concepts](https://docs.oracle.com/iaas/Content/ResourceManager/Concepts/resourcemanager.htm#concepts__StackStates).
* <p>
Allowable values:
* - CREATING
* - ACTIVE
* - DELETING
* - DELETED
* - FAILED
* 
    */
  "lifecycleState"?: string;
  /**
   * The version of Terraform specified for the stack. Example: {@code 0.12.x}
   *
   */
  "terraformVersion"?: string;
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

export namespace StackSummary {
  export function getJsonObj(obj: StackSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: StackSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
