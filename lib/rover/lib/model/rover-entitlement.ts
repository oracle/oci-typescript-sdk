/**
 * RoverCloudService API
 * A description of the RoverCloudService API.
 * OpenAPI spec version: 20201210
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
 * Information about a RoverEntitlement.
 */
export interface RoverEntitlement {
  /**
   * tenant Id.
   */
  "tenantId"?: string;
  /**
   * A property that can uniquely identify the rover entitlement.
   */
  "id": string;
  /**
   * The compartment Id for the entitlement.
   */
  "compartmentId": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Requestor name for the entitlement.
   */
  "requestorName": string;
  /**
   * Requestor email for the entitlement.
   */
  "requestorEmail": string;
  /**
   * Lifecyclestate for the entitlement.
   */
  "lifecycleState": RoverEntitlement.LifecycleState;
  /**
   * Details about the entitlement.
   */
  "entitlementDetails"?: string;
  /**
   * A property that can contain details on the lifecycle.
   */
  "lifecycleStateDetails"?: string;
  /**
   * Time of creation for the entitlement.
   */
  "timeCreated"?: Date;
  /**
   * Time when the entitlement was last updated.
   */
  "timeUpdated"?: Date;
  /**
   * The freeform tags associated with this resource, if any. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags associated with this resource, if any. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {orcl-cloud: {free-tier-retain: true}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace RoverEntitlement {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: RoverEntitlement): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RoverEntitlement): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
