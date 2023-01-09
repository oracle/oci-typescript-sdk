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
 * Summary information about a DR Plan Execution.
 */
export interface DrPlanExecutionSummary {
  /**
    * The OCID of this plan execution.
* <p>
Example: `ocid1.drplanexecution.oc1.iad.exampleocid2`
* 
    */
  "id": string;
  /**
    * The OCID of the compartment containing this plan execution.
* <p>
Example: `ocid1.compartment.oc1..exampleocid1`
* 
    */
  "compartmentId": string;
  /**
    * The display name of this DR Plan Execution.
* <p>
Example: `Execution - EBS Switchover PHX to IAD`
* 
    */
  "displayName": string;
  /**
    * The OCID of the DR Plan for this plan execution.
* <p>
Example: `ocid1.drplan.oc1.iad.exampleocid2`
* 
    */
  "planId": string;
  /**
   * The type of the DR Plan executed.
   *
   */
  "planExecutionType": model.DrPlanExecutionType;
  /**
    * The OCID of DR Protection Group associated with this plan execution.
* <p>
Example: `ocid1.drprotectiongroup.oc1.iad.exampleocid2`
* 
    */
  "drProtectionGroupId": string;
  /**
    * The OCID of peer (remote) DR Protection Group associated with this plan execution's
* DR Protection Group.
* <p>
Example: `ocid1.drprotectiongroup.oc1.phx.exampleocid1`
* 
    */
  "peerDrProtectionGroupId": string;
  /**
    * The region of the peer (remote) DR Protection Group.
* <p>
Example: `us-ashburn-1`
* 
    */
  "peerRegion": string;
  "logLocation": model.ObjectStorageLogLocation;
  /**
    * The date and time at which DR Plan Execution was created. An RFC3339 formatted datetime string.
* <p>
Example: `2019-03-29T09:36:42Z`
* 
    */
  "timeCreated": Date;
  /**
    * The date and time at which DR Plan Execution began. An RFC3339 formatted datetime string.
* <p>
Example: `2019-03-29T09:36:42Z`
* 
    */
  "timeStarted"?: Date;
  /**
    * The time at which DR Plan Execution was last updated.
* <p>
Example: `2019-03-29T09:36:42Z`
* 
    */
  "timeUpdated": Date;
  /**
    * The date and time at which DR Plan Execution succeeded, failed, paused, or canceled.
* An RFC3339 formatted datetime string.
* <p>
Example: `2019-03-29T09:36:42Z`
* 
    */
  "timeEnded"?: Date;
  /**
    * The total duration in seconds taken to complete the DR Plan Execution.
* <p>
Example: `750`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "executionDurationInSec"?: number;
  /**
   * The current state of the DR Plan Execution.
   *
   */
  "lifecycleState": model.DrPlanExecutionLifecycleState;
  /**
    * A message describing the DR Plan Execution's current state in more detail.
* <p>
Example: `The DR Plan Execution [Execution - EBS Switchover PHX to IAD] is currently in progress`
* 
    */
  "lifeCycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DrPlanExecutionSummary {
  export function getJsonObj(obj: DrPlanExecutionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "logLocation": obj.logLocation
          ? model.ObjectStorageLogLocation.getJsonObj(obj.logLocation)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrPlanExecutionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "logLocation": obj.logLocation
          ? model.ObjectStorageLogLocation.getDeserializedJsonObj(obj.logLocation)
          : undefined
      }
    };

    return jsonObj;
  }
}