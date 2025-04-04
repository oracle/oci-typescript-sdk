/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for instances in OCI, your private data center, or 3rd-party clouds. 
For more information, see [Overview of OS Management Hub](https://docs.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * Defines the lifecycle environment, including the associated versioned software sources, lifecycle stages, and managed instances.
 *
 */
export interface LifecycleEnvironment {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the lifecycle environment.
   */
  "id": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the lifecycle environment.
   */
  "compartmentId": string;
  /**
   * The user-friendly name for the lifecycle environment.
   */
  "displayName": string;
  /**
   * User-specified information about the lifecycle environment.
   */
  "description"?: string;
  /**
   * User-specified list of lifecycle stages used within the lifecycle environment.
   */
  "stages": Array<model.LifecycleStage>;
  /**
   * List of managed instance [OCIDs](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) assigned to the lifecycle stage.
   */
  "managedInstanceIds"?: Array<model.ManagedInstanceDetails>;
  /**
   * The current state of the lifecycle environment.
   */
  "lifecycleState": LifecycleEnvironment.LifecycleState;
  /**
   * The operating system of the managed instances in the lifecycle environment.
   */
  "osFamily": model.OsFamily;
  /**
   * The CPU architecture of the managed instances in the lifecycle environment.
   */
  "archType": model.ArchType;
  /**
   * The vendor of the operating system used by the managed instances in the lifecycle environment.
   */
  "vendorName": model.VendorName;
  /**
   * The location of managed instances attached to the lifecycle environment.
   */
  "location"?: model.ManagedInstanceLocation;
  /**
   * The time the lifecycle environment was created (in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) format).
   */
  "timeCreated": Date;
  /**
   * The time the lifecycle environment was last modified (in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) format).
   */
  "timeModified"?: Date;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
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
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace LifecycleEnvironment {
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

  export function getJsonObj(obj: LifecycleEnvironment): object {
    const jsonObj = {
      ...obj,
      ...{
        "stages": obj.stages
          ? obj.stages.map(item => {
              return model.LifecycleStage.getJsonObj(item);
            })
          : undefined,
        "managedInstanceIds": obj.managedInstanceIds
          ? obj.managedInstanceIds.map(item => {
              return model.ManagedInstanceDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LifecycleEnvironment): object {
    const jsonObj = {
      ...obj,
      ...{
        "stages": obj.stages
          ? obj.stages.map(item => {
              return model.LifecycleStage.getDeserializedJsonObj(item);
            })
          : undefined,
        "managedInstanceIds": obj.managedInstanceIds
          ? obj.managedInstanceIds.map(item => {
              return model.ManagedInstanceDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
