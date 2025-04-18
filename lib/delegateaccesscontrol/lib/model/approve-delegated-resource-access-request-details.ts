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
 * Details of the Delegated Resource Access Request approval.
 */
export interface ApproveDelegatedResourceAccessRequestDetails {
  /**
   * Comment by the approver during approval.
   */
  "approverComment"?: string;
  /**
   * Message that needs to be displayed to the operator.
   */
  "additionalMessage"?: string;
  /**
   * Access start time that is actually approved by the customer in [RFC 3339](https://tools.ietf.org/html/rfc3339)timestamp format, e.g. '2020-05-22T21:10:29.600Z'.
   *
   */
  "timeApprovedForAccess"?: Date;
}

export namespace ApproveDelegatedResourceAccessRequestDetails {
  export function getJsonObj(obj: ApproveDelegatedResourceAccessRequestDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: ApproveDelegatedResourceAccessRequestDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
