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
 * Details of the resources that this Delegation Control is applicable to.
 */
export interface DelegationControlResourceSummary {
  /**
   * OCID of the resource.
   */
  "id"?: string;
  /**
   * The current status of the resource in Delegation Control.
   */
  "resourceStatus"?: DelegationControlResourceSummary.ResourceStatus;
}

export namespace DelegationControlResourceSummary {
  export enum ResourceStatus {
    Created = "CREATED",
    Applying = "APPLYING",
    Applied = "APPLIED",
    ApplyFailed = "APPLY_FAILED",
    Updating = "UPDATING",
    UpdateFailed = "UPDATE_FAILED",
    Deleting = "DELETING",
    Deleted = "DELETED",
    DeletionFailed = "DELETION_FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DelegationControlResourceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DelegationControlResourceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
