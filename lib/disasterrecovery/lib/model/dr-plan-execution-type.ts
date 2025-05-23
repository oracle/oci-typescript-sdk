/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (DR) API to manage disaster recovery for business applications.
Full Stack DR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster 
recovery capabilities for all layers of an application stack, including infrastructure, middleware, database, 
and application.

 * OpenAPI spec version: 20220125
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
 * The types of DR plan execution that can be created, updated, or deleted by the user.  Executions of type *precheck* cannot be created separately by the user.
 * They are automatically generated as part of the plan, however prechecks can be executed separately from a plan.
 * - SWITCHOVER - Switchover from primary to standby.
 * - SWITCHOVER_PRECHECK - Precheck for switchover DR plan.
 * - FAILOVER - Failover to standby.
 * - FAILOVER_PRECHECK - Precheck for failover DR plan.
 * - START_DRILL - Start DR Drill.
 * - START_DRILL_PRECHECK - Precheck for a start drill DR plan.
 * - STOP_DRILL - Stop DR Drill.
 * - STOP_DRILL_PRECHECK - Precheck for a stop drill DR plan.
 *
 **/
export enum DrPlanExecutionType {
  Switchover = "SWITCHOVER",
  SwitchoverPrecheck = "SWITCHOVER_PRECHECK",
  Failover = "FAILOVER",
  FailoverPrecheck = "FAILOVER_PRECHECK",
  StartDrill = "START_DRILL",
  StartDrillPrecheck = "START_DRILL_PRECHECK",
  StopDrill = "STOP_DRILL",
  StopDrillPrecheck = "STOP_DRILL_PRECHECK",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DrPlanExecutionType {
  export function getJsonObj(obj: DrPlanExecutionType): DrPlanExecutionType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: DrPlanExecutionType): DrPlanExecutionType {
    return obj;
  }
}
