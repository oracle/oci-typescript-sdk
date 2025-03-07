/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * An audit trail represents the source of audit records that provides documentary evidence of
 * the sequence of activities in the target database. Configuring audit trails in Data Safe, and enabling
 * audit data collection on the audit trails copies the audit records from the target database's audit trail
 * into the Data Safe repository.
 *
 */
export interface AuditTrail {
  /**
   * The OCID of the audit trail.
   */
  "id": string;
  /**
   * The OCID of the  parent audit.
   */
  "auditProfileId": string;
  /**
   * The OCID of the Data Safe target for which the audit trail is created.
   */
  "targetId": string;
  /**
   * The display name of the audit trail.
   */
  "displayName": string;
  /**
   * The date and time the audit trail was created, in the format defined by RFC3339.
   */
  "timeCreated": Date;
  /**
   * The date and time the audit trail was updated, in the format defined by RFC3339.
   */
  "timeUpdated": Date;
  /**
   * The current state of the audit trail.
   */
  "lifecycleState": model.AuditTrailLifecycleState;
  /**
   * The current sub-state of the audit trail.
   */
  "status": model.AuditTrailStatus;
  /**
   * Details about the current state of the audit trail in Data Safe.
   */
  "lifecycleDetails"?: string;
  /**
   * An audit trail location represents the source of audit records that provides documentary
   * evidence of the sequence of activities in the target database.
   *
   */
  "trailLocation"?: string;
  /**
   * The description of the audit trail.
   */
  "description"?: string;
  /**
   * Indicates if auto purge is enabled on the target database, which helps delete audit data in the
   * target database every seven days so that the database's audit trail does not become too large.
   *
   */
  "isAutoPurgeEnabled"?: boolean;
  /**
   * The date from which the audit trail must start collecting data, in the format defined by RFC3339.
   */
  "auditCollectionStartTime"?: Date;
  /**
   * The OCID of the workrequest for audit trail which collects audit records.
   */
  "workRequestId"?: string;
  /**
   * The OCID of the compartment that contains the audit trail and is the same as the compartment of the audit profile resource.
   *
   */
  "compartmentId": string;
  /**
   * The date and time until when the audit events were collected from the target database by the Data Safe audit trail
   * collection process, in the format defined by RFC3339.
   *
   */
  "timeLastCollected"?: Date;
  /**
   * The secondary id assigned for the peer database registered with Data Safe. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "peerTargetDatabaseKey"?: number;
  /**
   * The underlying source of unified audit trail.
   */
  "trailSource"?: model.AuditTrailSource;
  /**
   * The date and time of the last purge job. The purge job deletes audit data in the
   * target database every seven days so that the database's audit trail does not become too large.
   * In the format defined by RFC3339.
   *
   */
  "purgeJobTime"?: Date;
  /**
   * The current status of the audit trail purge job.
   */
  "purgeJobStatus"?: AuditTrail.PurgeJobStatus;
  /**
   * The details of the audit trail purge job that ran at the time specified by purgeJobTime\".
   */
  "purgeJobDetails"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see Resource Tags.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace AuditTrail {
  export enum PurgeJobStatus {
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AuditTrail): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AuditTrail): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
