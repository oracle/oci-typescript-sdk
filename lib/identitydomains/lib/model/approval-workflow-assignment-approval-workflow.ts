/**
 * Identity Domains API
 * Use the Identity Domains API to manage resources within an identity domain, for example, users, dynamic resource groups, groups, and identity providers. For information about managing resources within identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm). This REST API is SCIM compliant.
Use the table of contents and search tool to explore the Identity Domains API.
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of the Approval Workflow
 * <p>
 **SCIM++ Properties:**
 *  - caseExact: true
 *  - idcsSearchable: true
 *  - multiValued: false
 *  - mutability: readWrite
 *  - required: true
 *  - returned: default
 *  - type: complex
 *  - uniqueness: none
 */
export interface ApprovalWorkflowAssignmentApprovalWorkflow {
  /**
   * Identifier of the approval workflow
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: always
   *  - type: string
   *  - uniqueness: none
   */
  "value": string;
  /**
   * Unique OCI Identifier of the approval workflow
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "ocid"?: string;
  /**
   * Indicates type of the entity that is associated with this assignment (for ARM validation)
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - idcsDefaultValue: ApprovalWorkflow
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: request
   *  - type: string
   *  - uniqueness: none
   */
  "type": ApprovalWorkflowAssignmentApprovalWorkflow.Type;
  /**
   * Display name of the approval workflow
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: string
   *  - uniqueness: none
   */
  "display"?: string;
  /**
   * URI of the approval workflow
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: reference
   *  - uniqueness: none
   */
  "ref"?: string;
}

export namespace ApprovalWorkflowAssignmentApprovalWorkflow {
  export enum Type {
    ApprovalWorkflow = "ApprovalWorkflow",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ApprovalWorkflowAssignmentApprovalWorkflow): object {
    const jsonObj = {
      ...obj,
      ...{
        "$ref": obj.ref
      }
    };

    delete (jsonObj as Partial<ApprovalWorkflowAssignmentApprovalWorkflow>).ref;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApprovalWorkflowAssignmentApprovalWorkflow): object {
    const jsonObj = {
      ...obj,
      ...{
        "ref": (obj as any)["$ref"]
      }
    };

    delete (jsonObj as any)["$ref"];

    return jsonObj;
  }
}