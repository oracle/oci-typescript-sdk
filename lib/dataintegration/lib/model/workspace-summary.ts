/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Summary details of a workspace.
 */
export interface WorkspaceSummary {
  /**
   * A system-generated and immutable identifier assigned to the workspace upon creation.
   */
  "id"?: string;
  /**
   * A user defined description for the workspace.
   */
  "description"?: string;
  /**
   * A user-friendly display name that is changeable. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The OCID of the compartment that contains the workspace.
   */
  "compartmentId"?: string;
  /**
   * The date and time the workspace was created, in the timestamp format defined by RFC3339.
   *
   */
  "timeCreated"?: Date;
  /**
   * The date and time the workspace was updated, in the timestamp format defined by RFC3339.
   *
   */
  "timeUpdated"?: Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The current state of the workspace.
   */
  "lifecycleState"?: WorkspaceSummary.LifecycleState;
  /**
   * A detailed description about the current state of the workspace. Used to provide actionable information if the workspace is in a failed state.
   */
  "stateMessage"?: string;
  /**
   * Name of the private endpoint associated with the container/workspace. Returns null if there is none.
   */
  "endpointName"?: string;
  /**
   * DCMS endpoint associated with the container/workspace. Returns null if there is none.
   */
  "endpointId"?: string;
  /**
   * DCMS registry associated with the container/workspace. Returns null if there is none.
   */
  "registryId"?: string;
  /**
   * key-value pairs of workspace properties
   */
  "workspaceProperties"?: { [key: string]: string };
}

export namespace WorkspaceSummary {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    Starting = "STARTING",
    Stopping = "STOPPING",
    Stopped = "STOPPED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkspaceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkspaceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
