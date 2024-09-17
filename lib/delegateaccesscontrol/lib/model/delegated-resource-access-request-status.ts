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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Possible status for a Delegated Resource Access Request.
 **/
export enum DelegatedResourceAccessRequestStatus {
  Created = "CREATED",
  ApprovalWaiting = "APPROVAL_WAITING",
  OperatorAssignmentWaiting = "OPERATOR_ASSIGNMENT_WAITING",
  Preapproved = "PREAPPROVED",
  Approved = "APPROVED",
  ApprovedForFuture = "APPROVED_FOR_FUTURE",
  Rejected = "REJECTED",
  Deployed = "DEPLOYED",
  DeployFailed = "DEPLOY_FAILED",
  Undeployed = "UNDEPLOYED",
  UndeployFailed = "UNDEPLOY_FAILED",
  CloseFailed = "CLOSE_FAILED",
  RevokeFailed = "REVOKE_FAILED",
  ExpiryFailed = "EXPIRY_FAILED",
  Revoking = "REVOKING",
  Revoked = "REVOKED",
  Extending = "EXTENDING",
  Extended = "EXTENDED",
  ExtensionRejected = "EXTENSION_REJECTED",
  ExtensionFailed = "EXTENSION_FAILED",
  Completing = "COMPLETING",
  Completed = "COMPLETED",
  Expired = "EXPIRED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DelegatedResourceAccessRequestStatus {
  export function getJsonObj(
    obj: DelegatedResourceAccessRequestStatus
  ): DelegatedResourceAccessRequestStatus {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: DelegatedResourceAccessRequestStatus
  ): DelegatedResourceAccessRequestStatus {
    return obj;
  }
}