/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * A maintenance update details for an Exadata VM cluster on Exascale Infrastructure.
 *
 */
export interface ExadbVmClusterUpdate {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the maintenance update.
   */
  "id": string;
  /**
   * Details of the maintenance update package.
   */
  "description": string;
  /**
   * The previous update action performed.
   */
  "lastAction"?: ExadbVmClusterUpdate.LastAction;
  /**
   * The possible actions performed by the update operation on the infrastructure components.
   */
  "availableActions"?: Array<ExadbVmClusterUpdate.AvailableActions>;
  /**
   * The type of cloud VM cluster maintenance update.
   */
  "updateType": ExadbVmClusterUpdate.UpdateType;
  /**
   * Descriptive text providing additional details about the lifecycle state.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The current state of the maintenance update. Dependent on value of {@code lastAction}.
   */
  "lifecycleState"?: ExadbVmClusterUpdate.LifecycleState;
  /**
   * The date and time the maintenance update was released.
   */
  "timeReleased": Date;
  /**
   * The version of the maintenance update package.
   */
  "version": string;
}

export namespace ExadbVmClusterUpdate {
  export enum LastAction {
    RollingApply = "ROLLING_APPLY",
    NonRollingApply = "NON_ROLLING_APPLY",
    Precheck = "PRECHECK",
    Rollback = "ROLLBACK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum AvailableActions {
    RollingApply = "ROLLING_APPLY",
    NonRollingApply = "NON_ROLLING_APPLY",
    Precheck = "PRECHECK",
    Rollback = "ROLLBACK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum UpdateType {
    GiUpgrade = "GI_UPGRADE",
    GiPatch = "GI_PATCH",
    OsUpdate = "OS_UPDATE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Available = "AVAILABLE",
    Success = "SUCCESS",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExadbVmClusterUpdate): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExadbVmClusterUpdate): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}