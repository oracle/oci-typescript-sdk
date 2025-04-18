/**
 * OCI Control Center Capacity Management API
 * OCI Control Center (OCC) Capacity Management enables you to manage capacity requests in realms where OCI Control Center Capacity Management is available. For more information, see [OCI Control Center](https://docs.oracle.com/iaas/Content/control-center/home.htm).
 * OpenAPI spec version: 20231107
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
 * A single request of some quantity of a specific server type, in a specific location and expected delivery date. The maximum amount possible to request is the smallest number between the number of servers available for purchase and the number of servers allowed by the constraints (For example, power, network, physical space, and so on).
 *
 */
export interface OccCapacityRequest {
  /**
   * The OCID of the capacity request.
   */
  "id": string;
  /**
   * The OCID of the tenancy from which the request was made.
   */
  "compartmentId": string;
  /**
   * The OCID of the availability catalog against which the capacity request was placed.
   */
  "occAvailabilityCatalogId": string;
  /**
   * The display name of the capacity request.
   */
  "displayName": string;
  /**
   * Meaningful text about the capacity request.
   */
  "description"?: string;
  /**
   * The name of the OCI service in consideration. For example, Compute, Exadata, and so on.
   *
   */
  "namespace": model.Namespace;
  /**
   * The OCID of the customer group to which this customer belongs to.
   */
  "occCustomerGroupId": string;
  /**
   * Type of Capacity Request(New or Transfer)
   */
  "requestType"?: OccCapacityRequest.RequestType;
  /**
   * The name of the region for which the capacity request was made.
   */
  "region": string;
  /**
   * The availability domain (AD) for which the capacity request was made.
   */
  "availabilityDomain": string;
  /**
   * The date by which the capacity requested by customers before dateFinalCustomerOrder needs to be fulfilled.
   */
  "dateExpectedCapacityHandover": Date;
  /**
   * The different states the capacity request goes through.
   */
  "requestState": OccCapacityRequest.RequestState;
  /**
   * The time when the capacity request was created.
   */
  "timeCreated": Date;
  /**
   * The time when the capacity request was updated.
   */
  "timeUpdated": Date;
  /**
   * The current lifecycle state of the resource.
   */
  "lifecycleState": OccCapacityRequest.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in a Failed State.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A list of resources requested as part of this request
   */
  "details": Array<model.OccCapacityRequestBaseDetails>;
}

export namespace OccCapacityRequest {
  export enum RequestType {
    New = "NEW",
    Transfer = "TRANSFER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum RequestState {
    Created = "CREATED",
    Submitted = "SUBMITTED",
    Rejected = "REJECTED",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
    PartiallyCompleted = "PARTIALLY_COMPLETED",
    Cancelled = "CANCELLED",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OccCapacityRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "details": obj.details
          ? obj.details.map(item => {
              return model.OccCapacityRequestBaseDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OccCapacityRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "details": obj.details
          ? obj.details.map(item => {
              return model.OccCapacityRequestBaseDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
