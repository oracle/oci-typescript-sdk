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
 * An event is an occurrence of something of interest on a managed instance,
 * such as a kernel crash, software package update, or software source
 * update.
 *
 */
export interface Event {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the event.
   */
  "id": string;
  /**
   * Summary of the event.
   */
  "eventSummary": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * Details of an event.
   */
  "eventDetails"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the managed instance or resource where the event occurred.
   */
  "resourceId"?: string;
  "systemDetails"?: model.SystemDetails;
  /**
   * The date and time that the event occurred.
   */
  "timeOccurred"?: Date;
  /**
    * The date and time the Event was created, in the format defined by [RFC 3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
  /**
   * The date and time that the event was updated (in [RFC 3339](https://tools.ietf.org/html/rfc3339) format).
   * Example: {@code 2016-08-25T21:10:29.600Z}
   *
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the event.
   */
  "lifecycleState": Event.LifecycleState;
  /**
   * Describes the current state of the event in more detail. For example, the
   * message can provide actionable information for a resource in the 'FAILED' state.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * Indicates whether the event occurred on a resource that is managed by the Autonomous Linux service.
   */
  "isManagedByAutonomousLinux"?: boolean;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };

  "type": string;
}

export namespace Event {
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

  export function getJsonObj(obj: Event): object {
    const jsonObj = {
      ...obj,
      ...{
        "systemDetails": obj.systemDetails
          ? model.SystemDetails.getJsonObj(obj.systemDetails)
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "SOFTWARE_UPDATE":
          return model.SoftwareUpdateEvent.getJsonObj(
            <model.SoftwareUpdateEvent>(<object>jsonObj),
            true
          );
        case "KERNEL_OOPS":
          return model.KernelOopsEvent.getJsonObj(<model.KernelOopsEvent>(<object>jsonObj), true);
        case "MANAGEMENT_STATION":
          return model.ManagementStationEvent.getJsonObj(
            <model.ManagementStationEvent>(<object>jsonObj),
            true
          );
        case "SOFTWARE_SOURCE":
          return model.SoftwareSourceEvent.getJsonObj(
            <model.SoftwareSourceEvent>(<object>jsonObj),
            true
          );
        case "KERNEL_CRASH":
          return model.KernelCrashEvent.getJsonObj(<model.KernelCrashEvent>(<object>jsonObj), true);
        case "SYSADMIN":
          return model.SysadminEvent.getJsonObj(<model.SysadminEvent>(<object>jsonObj), true);
        case "REBOOT":
          return model.RebootEvent.getJsonObj(<model.RebootEvent>(<object>jsonObj), true);
        case "EXPLOIT_ATTEMPT":
          return model.ExploitAttemptEvent.getJsonObj(
            <model.ExploitAttemptEvent>(<object>jsonObj),
            true
          );
        case "AGENT":
          return model.AgentEvent.getJsonObj(<model.AgentEvent>(<object>jsonObj), true);
        case "KSPLICE_UPDATE":
          return model.KspliceUpdateEvent.getJsonObj(
            <model.KspliceUpdateEvent>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Event): object {
    const jsonObj = {
      ...obj,
      ...{
        "systemDetails": obj.systemDetails
          ? model.SystemDetails.getDeserializedJsonObj(obj.systemDetails)
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "SOFTWARE_UPDATE":
          return model.SoftwareUpdateEvent.getDeserializedJsonObj(
            <model.SoftwareUpdateEvent>(<object>jsonObj),
            true
          );
        case "KERNEL_OOPS":
          return model.KernelOopsEvent.getDeserializedJsonObj(
            <model.KernelOopsEvent>(<object>jsonObj),
            true
          );
        case "MANAGEMENT_STATION":
          return model.ManagementStationEvent.getDeserializedJsonObj(
            <model.ManagementStationEvent>(<object>jsonObj),
            true
          );
        case "SOFTWARE_SOURCE":
          return model.SoftwareSourceEvent.getDeserializedJsonObj(
            <model.SoftwareSourceEvent>(<object>jsonObj),
            true
          );
        case "KERNEL_CRASH":
          return model.KernelCrashEvent.getDeserializedJsonObj(
            <model.KernelCrashEvent>(<object>jsonObj),
            true
          );
        case "SYSADMIN":
          return model.SysadminEvent.getDeserializedJsonObj(
            <model.SysadminEvent>(<object>jsonObj),
            true
          );
        case "REBOOT":
          return model.RebootEvent.getDeserializedJsonObj(
            <model.RebootEvent>(<object>jsonObj),
            true
          );
        case "EXPLOIT_ATTEMPT":
          return model.ExploitAttemptEvent.getDeserializedJsonObj(
            <model.ExploitAttemptEvent>(<object>jsonObj),
            true
          );
        case "AGENT":
          return model.AgentEvent.getDeserializedJsonObj(<model.AgentEvent>(<object>jsonObj), true);
        case "KSPLICE_UPDATE":
          return model.KspliceUpdateEvent.getDeserializedJsonObj(
            <model.KspliceUpdateEvent>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
