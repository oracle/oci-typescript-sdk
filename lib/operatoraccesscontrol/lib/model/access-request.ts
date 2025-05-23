/**
 * OperatorAccessControl API
 * Operator Access Control enables you to control the time duration and the actions an Oracle operator can perform on your Exadata Cloud@Customer infrastructure.
Using logging service, you can view a near real-time audit report of all actions performed by an Oracle operator. 

Use the table of contents and search tool to explore the OperatorAccessControl API.

 * OpenAPI spec version: 20200630
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
* An Oracle operator raises access request when they need access to any infrastructure resource governed by Operator Access Control.
* The access request identifies the target resource and the set of operator actions. Access request handling depends upon the Operator Control 
* that governs the target resource, and the set of operator actions listed for approval in the access request. If all of the operator actions 
* listed in the access request are in the pre-approved list in the Operator Control that governs the target resource, then the access request is 
* automatically approved. If not, then the access request requires explicit approval from the approver group specified by the Operator Control governing the target resource.
* <p>
You can approve or reject an access request. You can also revoke the approval of an already approved access request. While creating an access request, 
* the operator specifies the duration of access. You have the option to approve the entire duration or reduce or even increase the time duration. 
* An operator can also request for an extension. The approval for such an extension is processed the same way the original access request was processed.
* 
*/
export interface AccessRequest {
  /**
   * The OCID of the access request.
   */
  "id": string;
  /**
   * This is an automatic identifier generated by the system which is easier for human comprehension.
   */
  "requestId"?: string;
  /**
   * Summary comment by the operator creating the access request.
   */
  "accessReasonSummary": string;
  /**
   * A unique identifier associated with the operator who raised the request. This identifier can not be used directly to identify the operator.
   * You need to provide this identifier if you would like Oracle to provide additional information about the operator action within Oracle tenancy.
   *
   */
  "operatorId"?: string;
  /**
   * The OCID of the target resource associated with the access request. The operator raises an access request to get approval to
   * access the target resource.
   *
   */
  "resourceId": string;
  /**
   * The name of the target resource.
   */
  "resourceName"?: string;
  /**
   * The subresources requested for approval.
   */
  "subResourceList"?: Array<string>;
  /**
   * The OCID of the compartment that contains the access request.
   */
  "compartmentId"?: string;
  /**
   * resourceType for which the AccessRequest is applicable
   */
  "resourceType"?: model.ResourceTypes;
  /**
   * List of operator actions for which approval is sought by the operator user.
   */
  "actionRequestsList"?: Array<string>;
  /**
   * Summary reason for which the operator is requesting access on the target resource.
   */
  "reason"?: string;
  /**
   * Priority assigned to the access request by the operator
   */
  "severity"?: model.AccessRequestSeverities;
  /**
   * Duration in hours for which access is sought on the target resource. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "duration"?: number;
  /**
   * Duration in hours for which extension access is sought on the target resource. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "extendDuration"?: number;
  /**
   * The OCID of the workflow associated with the access request. This is needed if you want to contact Oracle Support for a stuck access request
   * or for an access request that encounters an internal error.
   *
   */
  "workflowId"?: Array<string>;
  /**
   * Whether the access request was automatically approved.
   */
  "isAutoApproved"?: boolean;
  /**
   * The current state of the AccessRequest.
   */
  "lifecycleState"?: model.AccessRequestLifecycleStates;
  /**
   * more in detail about the lifeCycleState.
   */
  "lifecycleDetails"?: string;
  /**
   * Time when the access request was created in [RFC 3339](https://tools.ietf.org/html/rfc3339)timestamp format. Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeOfCreation"?: Date;
  /**
   * Time when the access request was last modified in [RFC 3339](https://tools.ietf.org/html/rfc3339)timestamp format. Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeOfModification"?: Date;
  /**
   * The time when access request is scheduled to be approved in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeOfUserCreation"?: Date;
  /**
   * The OCID of the user that last modified the access request.
   */
  "userId"?: string;
  /**
   * The last recent Comment entered by the approver of the request.
   */
  "approverComment"?: string;
  /**
   * The comment entered by the operator while closing the request.
   */
  "closureComment"?: string;
  /**
   * The OCID of the operator control governing the target resource.
   */
  "opctlId"?: string;
  /**
   * Name of the Operator control governing the target resource.
   */
  "opctlName"?: string;
  /**
   * System message that will be displayed to the operator at login to the target resource.
   */
  "systemMessage"?: string;
  /**
   * Additional message specific to the access request that can be specified by the approver at the time of approval.
   */
  "opctlAdditionalMessage"?: string;
  /**
   * Specifies the type of auditing to be enabled. There are two levels of auditing: command-level and keystroke-level.
   * By default, auditing is enabled at the command level i.e., each command issued by the operator is audited. When keystroke-level is chosen,
   * in addition to command level logging, key strokes are also logged.
   *
   */
  "auditType"?: Array<string>;
  /**
   * Number of approvers required to approve an access request. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numberOfApproversRequired"?: number;
  /**
   * Number of approvers who have authorized an access request. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numberOfApprovers"?: number;
  /**
   * Number of approvers who have authorized an access request for extension. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numberOfExtensionApprovers"?: number;
  /**
   * Contains the user ids who have approved the accessRequest for extension.
   */
  "approverDetails"?: Array<model.ApproverDetail>;
  /**
   * Contains the user ids who have approved the accessRequest for extension.
   */
  "extensionApproverDetails"?: Array<model.ApproverDetail>;
  /**
   * Whether the access request was requested for Validate Assignment.
   */
  "isValidateAssignment"?: boolean;
  /**
   * Time in future when the user for the access request needs to be created in [RFC 3339](https://tools.ietf.org/html/rfc3339)timestamp format. Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeRequestedForFutureAccess"?: Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace AccessRequest {
  export function getJsonObj(obj: AccessRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "approverDetails": obj.approverDetails
          ? obj.approverDetails.map(item => {
              return model.ApproverDetail.getJsonObj(item);
            })
          : undefined,
        "extensionApproverDetails": obj.extensionApproverDetails
          ? obj.extensionApproverDetails.map(item => {
              return model.ApproverDetail.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AccessRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "approverDetails": obj.approverDetails
          ? obj.approverDetails.map(item => {
              return model.ApproverDetail.getDeserializedJsonObj(item);
            })
          : undefined,
        "extensionApproverDetails": obj.extensionApproverDetails
          ? obj.extensionApproverDetails.map(item => {
              return model.ApproverDetail.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
