/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](https://docs.oracle.com/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details of a maintenance run.
 *
 */
export interface MaintenanceRun {
  /**
   * The OCID of the maintenance run.
   */
  "id": string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * The user-friendly name for the maintenance run.
   */
  "displayName": string;
  /**
   * Description of the maintenance run.
   */
  "description"?: string;
  /**
   * The current state of the maintenance run. For Autonomous Database Serverless instances, valid states are IN_PROGRESS, SUCCEEDED, and FAILED.
   *
   */
  "lifecycleState": MaintenanceRun.LifecycleState;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time the maintenance run is scheduled to occur.
   */
  "timeScheduled": Date;
  /**
   * The date and time the maintenance run starts.
   */
  "timeStarted"?: Date;
  /**
   * The date and time the maintenance run was completed.
   */
  "timeEnded"?: Date;
  /**
   * The type of the target resource on which the maintenance run occurs.
   */
  "targetResourceType"?: MaintenanceRun.TargetResourceType;
  /**
   * The ID of the target resource on which the maintenance run occurs.
   */
  "targetResourceId"?: string;
  /**
   * Maintenance type.
   */
  "maintenanceType"?: MaintenanceRun.MaintenanceType;
  /**
   * The unique identifier of the patch. The identifier string includes the patch type, the Oracle Database version, and the patch creation date (using the format YYMMDD). For example, the identifier {@code ru_patch_19.9.0.0_201030} is used for an RU patch for Oracle Database 19.9.0.0 that was released October 30, 2020.
   */
  "patchId"?: string;
  /**
   * Maintenance sub-type.
   */
  "maintenanceSubtype"?: MaintenanceRun.MaintenanceSubtype;
  /**
   * Indicates if an automatic DST Time Zone file update is enabled for the Autonomous Container Database. If enabled along with Release Update, patching will be done in a Non-Rolling manner.
   */
  "isDstFileUpdateEnabled"?: boolean;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the maintenance run for the Autonomous Data Guard association's peer container database.
   */
  "peerMaintenanceRunId"?: string;
  /**
   * The list of OCIDs for the maintenance runs associated with their Autonomous Data Guard peer container databases.
   */
  "peerMaintenanceRunIds"?: Array<string>;
  /**
   * Cloud Exadata infrastructure node patching method, either \"ROLLING\" or \"NONROLLING\". Default value is ROLLING.
   * <p>
   *IMPORTANT*: Non-rolling infrastructure patching involves system down time. See [Oracle-Managed Infrastructure Maintenance Updates](https://docs.oracle.com/iaas/Content/Database/Concepts/examaintenance.htm#Oracle) for more information.
   *
   */
  "patchingMode"?: MaintenanceRun.PatchingMode;
  /**
   * Contain the patch failure count. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "patchFailureCount"?: number;
  /**
   * The target software version for the database server patching operation.
   */
  "targetDbServerVersion"?: string;
  /**
   * The target Cell version that is to be patched to.
   */
  "targetStorageServerVersion"?: string;
  /**
   * If true, enables the configuration of a custom action timeout (waiting period) between database servers patching operations.
   */
  "isCustomActionTimeoutEnabled"?: boolean;
  /**
   * Determines the amount of time the system will wait before the start of each database server patching operation.
   * Specify a number of minutes, from 15 to 120.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "customActionTimeoutInMins"?: number;
  /**
   * Extend current custom action timeout between the current database servers during waiting state, from 0 (zero) to 30 minutes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "currentCustomActionTimeoutInMins"?: number;
  /**
   * The status of the patching operation.
   */
  "patchingStatus"?: MaintenanceRun.PatchingStatus;
  /**
   * The time when the patching operation started.
   */
  "patchingStartTime"?: Date;
  /**
   * The time when the patching operation ended.
   */
  "patchingEndTime"?: Date;
  "estimatedPatchingTime"?: model.EstimatedPatchingTime;
  /**
   * The name of the current infrastruture component that is getting patched.
   */
  "currentPatchingComponent"?: string;
  /**
   * The estimated start time of the next infrastruture component patching operation.
   */
  "estimatedComponentPatchingStartTime"?: Date;
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * If {@code FALSE}, the maintenance run doesn't support granular maintenance.
   */
  "isMaintenanceRunGranular"?: boolean;
  /**
   * The total time taken by corresponding resource activity in minutes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalTimeTakenInMins"?: number;
  /**
   * The Autonomous Database Software Image [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm)
   */
  "databaseSoftwareImageId"?: string;
}

export namespace MaintenanceRun {
  export enum LifecycleState {
    Scheduled = "SCHEDULED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Skipped = "SKIPPED",
    Failed = "FAILED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Canceled = "CANCELED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TargetResourceType {
    AutonomousExadataInfrastructure = "AUTONOMOUS_EXADATA_INFRASTRUCTURE",
    AutonomousContainerDatabase = "AUTONOMOUS_CONTAINER_DATABASE",
    ExadataDbSystem = "EXADATA_DB_SYSTEM",
    CloudExadataInfrastructure = "CLOUD_EXADATA_INFRASTRUCTURE",
    ExaccInfrastructure = "EXACC_INFRASTRUCTURE",
    AutonomousVmCluster = "AUTONOMOUS_VM_CLUSTER",
    AutonomousDatabase = "AUTONOMOUS_DATABASE",
    CloudAutonomousVmCluster = "CLOUD_AUTONOMOUS_VM_CLUSTER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum MaintenanceType {
    Planned = "PLANNED",
    Unplanned = "UNPLANNED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum MaintenanceSubtype {
    Quarterly = "QUARTERLY",
    Hardware = "HARDWARE",
    Critical = "CRITICAL",
    Infrastructure = "INFRASTRUCTURE",
    Database = "DATABASE",
    Oneoff = "ONEOFF",
    SecurityMonthly = "SECURITY_MONTHLY",
    Timezone = "TIMEZONE",
    CustomDatabaseSoftwareImage = "CUSTOM_DATABASE_SOFTWARE_IMAGE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PatchingMode {
    Rolling = "ROLLING",
    Nonrolling = "NONROLLING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PatchingStatus {
    Patching = "PATCHING",
    Waiting = "WAITING",
    Scheduled = "SCHEDULED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MaintenanceRun): object {
    const jsonObj = {
      ...obj,
      ...{
        "estimatedPatchingTime": obj.estimatedPatchingTime
          ? model.EstimatedPatchingTime.getJsonObj(obj.estimatedPatchingTime)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MaintenanceRun): object {
    const jsonObj = {
      ...obj,
      ...{
        "estimatedPatchingTime": obj.estimatedPatchingTime
          ? model.EstimatedPatchingTime.getDeserializedJsonObj(obj.estimatedPatchingTime)
          : undefined
      }
    };

    return jsonObj;
  }
}
