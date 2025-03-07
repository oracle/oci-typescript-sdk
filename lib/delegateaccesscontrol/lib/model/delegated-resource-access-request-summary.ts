/**
 * Oracle Delegate Access Control API
 * Oracle Delegate Access Control allows ExaCC and ExaCS customers to delegate management of their Exadata resources operators outside their tenancies. 
With Delegate Access Control, Support Providers can deliver managed services using comprehensive and robust tooling built on the OCI platform. 
Customers maintain control over who has access to the delegated resources in their tenancy and what actions can be taken. 
Enterprises managing resources across multiple tenants can use Delegate Access Control to streamline management tasks.
Using logging service, customers can view a near real-time audit report of all actions performed by a Service Provider operator. 

 * OpenAPI spec version: 20230801
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
 * Summary of Delegated Resource Access Request.
 */
export interface DelegatedResourceAccessRequestSummary {
  /**
   * The OCID of the Delegated Resource Access Request.
   */
  "id": string;
  /**
   * The OCID of the compartment that contains the Delegated Resource Access Request.
   */
  "compartmentId": string;
  /**
   * Display name. This is generated by the system automatically.
   */
  "displayName"?: string;
  /**
   * A list of ticket numbers related to this Delegated Resource Access Request, e.g. Service Request (SR) number and JIRA ticket number.
   */
  "ticketNumbers"?: Array<string>;
  /**
   * A short description explaining why this Delegated Resource Access Request is needed by the support operator.
   */
  "reasonForRequest": string;
  /**
   * Requested access start time in UTC.
   */
  "timeAccessRequested"?: Date;
  /**
   * The OCID of the target resource associated with the Delegated Resource Access Request. The support operator raises a Delegated Resource Access Request to get approval to
   * access the target resource.
   *
   */
  "resourceId": string;
  /**
   * The name of the target resource associated with the Delegated Resource Access Request. The support operator raises a Delegated Resource Access Request to get approval to
   * access the target resource.
   *
   */
  "resourceName"?: string;
  /**
   * Resource type for which the associated Delegation Control is applicable to.
   */
  "resourceType"?: model.DelegationControlResourceType;
  /**
   * List of Service Provider Action names for which approval is sought by the support operator user. The list of pre-defined Service Provider Actions can be obtained from the ListServiceProviderActions API.
   */
  "requestedActionNames"?: Array<string>;
  /**
   * Requester type
   */
  "requesterType"?: model.DelegatedResourceAccessRequesterType;
  /**
   * The OCID of the Delegation Control governing the target resource.
   */
  "delegationControlId": string;
  /**
   * Priority assigned to the Delegated Resource Access Request by the support operator
   */
  "severity"?: model.DelegatedResourceAccessRequestSeverity;
  /**
   * Duration in hours for which access is sought on the target resource. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "durationInHours"?: number;
  /**
   * Duration in hours for which extension access is sought on the target resource. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "extendDurationInHours"?: number;
  /**
   * Set to true if the request is approved automatically based on preApprovedServiceProviderActionNames or isAutoApproveDuringMaintenance in the associated Delegation Control.
   */
  "isAutoApproved"?: boolean;
  /**
   * The current lifecycle state of the Delegated Resource Access Request.
   */
  "lifecycleState"?: string;
  /**
   * Description of the current lifecycle state in more detail.
   */
  "lifecycleStateDetails"?: string;
  /**
   * The current status of the Delegated Resource Access Request.
   */
  "requestStatus"?: model.DelegatedResourceAccessRequestStatus;
  /**
   * Time when the Delegated Resource Access Request was created by the support operator user in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format, e.g. '2020-05-22T21:10:29.600Z'.
   *
   */
  "timeCreated"?: Date;
  /**
   * Time when the Delegated Resource Access Request was last modified in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format, e.g. '2020-05-22T21:10:29.600Z'.
   *
   */
  "timeUpdated"?: Date;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DelegatedResourceAccessRequestSummary {
  export function getJsonObj(obj: DelegatedResourceAccessRequestSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DelegatedResourceAccessRequestSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
