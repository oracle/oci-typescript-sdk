/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (FSDR) API to manage disaster recovery for business applications.
FSDR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster recovery
capabilities for all layers of an application stack, including infrastructure, middleware, database, and application.

 * OpenAPI spec version: 20220125
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Step types in a DR Plan.
 *
 **/
export enum DrPlanStepType {
  ComputeInstanceStopPrecheck = "COMPUTE_INSTANCE_STOP_PRECHECK",
  ComputeInstanceLaunchPrecheck = "COMPUTE_INSTANCE_LAUNCH_PRECHECK",
  ComputeInstanceTerminatePrecheck = "COMPUTE_INSTANCE_TERMINATE_PRECHECK",
  ComputeInstanceRemovePrecheck = "COMPUTE_INSTANCE_REMOVE_PRECHECK",
  VolumeGroupRestoreSwitchoverPrecheck = "VOLUME_GROUP_RESTORE_SWITCHOVER_PRECHECK",
  VolumeGroupRestoreFailoverPrecheck = "VOLUME_GROUP_RESTORE_FAILOVER_PRECHECK",
  DatabaseSwitchoverPrecheck = "DATABASE_SWITCHOVER_PRECHECK",
  DatabaseFailoverPrecheck = "DATABASE_FAILOVER_PRECHECK",
  AutonomousDatabaseSwitchoverPrecheck = "AUTONOMOUS_DATABASE_SWITCHOVER_PRECHECK",
  AutonomousDatabaseFailoverPrecheck = "AUTONOMOUS_DATABASE_FAILOVER_PRECHECK",
  UserDefinedPrecheck = "USER_DEFINED_PRECHECK",
  ComputeInstanceLaunch = "COMPUTE_INSTANCE_LAUNCH",
  ComputeInstanceStop = "COMPUTE_INSTANCE_STOP",
  ComputeInstanceTerminate = "COMPUTE_INSTANCE_TERMINATE",
  ComputeInstanceRemove = "COMPUTE_INSTANCE_REMOVE",
  DatabaseSwitchover = "DATABASE_SWITCHOVER",
  DatabaseFailover = "DATABASE_FAILOVER",
  AutonomousDatabaseSwitchover = "AUTONOMOUS_DATABASE_SWITCHOVER",
  AutonomousDatabaseFailover = "AUTONOMOUS_DATABASE_FAILOVER",
  VolumeGroupRestoreSwitchover = "VOLUME_GROUP_RESTORE_SWITCHOVER",
  VolumeGroupRestoreFailover = "VOLUME_GROUP_RESTORE_FAILOVER",
  VolumeGroupReverse = "VOLUME_GROUP_REVERSE",
  VolumeGroupDelete = "VOLUME_GROUP_DELETE",
  VolumeGroupRemove = "VOLUME_GROUP_REMOVE",
  VolumeGroupTerminate = "VOLUME_GROUP_TERMINATE",
  UserDefined = "USER_DEFINED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DrPlanStepType {
  export function getJsonObj(obj: DrPlanStepType): DrPlanStepType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: DrPlanStepType): DrPlanStepType {
    return obj;
  }
}