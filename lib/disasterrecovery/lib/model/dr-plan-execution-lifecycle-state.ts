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
 * The lifecycle states of a DR plan execution.
 * - ACCEPTED - DR plan execution has been accepted.
 * - IN_PROGRESS - DR plan execution is in progress.
 * - WAITING - DR plan execution is waiting for user action.
 * - CANCELING - DR plan execution is being canceled.
 * - CANCELED - DR plan execution has been canceled.
 * - SUCCEEDED - DR plan execution has succeeded.
 * - FAILED - DR plan execution has failed.
 * - DELETING - DR plan execution is being deleted.
 * - DELETED - DR plan execution has been deleted.
 * - PAUSING - DR plan execution is being paused.
 * - PAUSED - DR plan execution has been paused.
 * - RESUMING - DR plan execution is resuming.
 *
 **/
export enum DrPlanExecutionLifecycleState {
  Accepted = "ACCEPTED",
  InProgress = "IN_PROGRESS",
  Waiting = "WAITING",
  Canceling = "CANCELING",
  Canceled = "CANCELED",
  Succeeded = "SUCCEEDED",
  Failed = "FAILED",
  Deleting = "DELETING",
  Deleted = "DELETED",
  Pausing = "PAUSING",
  Paused = "PAUSED",
  Resuming = "RESUMING",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DrPlanExecutionLifecycleState {
  export function getJsonObj(obj: DrPlanExecutionLifecycleState): DrPlanExecutionLifecycleState {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: DrPlanExecutionLifecycleState
  ): DrPlanExecutionLifecycleState {
    return obj;
  }
}
