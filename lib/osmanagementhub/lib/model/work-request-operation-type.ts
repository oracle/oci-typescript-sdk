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
 * Possible operation types.
 **/
export enum WorkRequestOperationType {
  InstallPackages = "INSTALL_PACKAGES",
  RemovePackages = "REMOVE_PACKAGES",
  UpdatePackages = "UPDATE_PACKAGES",
  UpdateAllPackages = "UPDATE_ALL_PACKAGES",
  UpdateSecurity = "UPDATE_SECURITY",
  UpdateBugfix = "UPDATE_BUGFIX",
  UpdateEnhancement = "UPDATE_ENHANCEMENT",
  UpdateOther = "UPDATE_OTHER",
  UpdateKspliceKernel = "UPDATE_KSPLICE_KERNEL",
  UpdateKspliceUserspace = "UPDATE_KSPLICE_USERSPACE",
  EnableModuleStreams = "ENABLE_MODULE_STREAMS",
  DisableModuleStreams = "DISABLE_MODULE_STREAMS",
  SwitchModuleStream = "SWITCH_MODULE_STREAM",
  InstallModuleProfiles = "INSTALL_MODULE_PROFILES",
  RemoveModuleProfiles = "REMOVE_MODULE_PROFILES",
  SetSoftwareSources = "SET_SOFTWARE_SOURCES",
  ListPackages = "LIST_PACKAGES",
  SetManagementStationConfig = "SET_MANAGEMENT_STATION_CONFIG",
  SyncManagementStationMirror = "SYNC_MANAGEMENT_STATION_MIRROR",
  UpdateManagementStationSoftware = "UPDATE_MANAGEMENT_STATION_SOFTWARE",
  Update = "UPDATE",
  ModuleActions = "MODULE_ACTIONS",
  LifecyclePromotion = "LIFECYCLE_PROMOTION",
  CreateSoftwareSource = "CREATE_SOFTWARE_SOURCE",
  UpdateSoftwareSource = "UPDATE_SOFTWARE_SOURCE",
  ImportContent = "IMPORT_CONTENT",
  SyncAgentConfig = "SYNC_AGENT_CONFIG",
  InstallWindowsUpdates = "INSTALL_WINDOWS_UPDATES",
  ListWindowsUpdate = "LIST_WINDOWS_UPDATE",
  GetWindowsUpdateDetails = "GET_WINDOWS_UPDATE_DETAILS",
  InstallAllWindowsUpdates = "INSTALL_ALL_WINDOWS_UPDATES",
  InstallSecurityWindowsUpdates = "INSTALL_SECURITY_WINDOWS_UPDATES",
  InstallBugfixWindowsUpdates = "INSTALL_BUGFIX_WINDOWS_UPDATES",
  InstallEnhancementWindowsUpdates = "INSTALL_ENHANCEMENT_WINDOWS_UPDATES",
  InstallOtherWindowsUpdates = "INSTALL_OTHER_WINDOWS_UPDATES",
  RemoveContent = "REMOVE_CONTENT",
  UnregisterManagedInstance = "UNREGISTER_MANAGED_INSTANCE",
  Reboot = "REBOOT",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace WorkRequestOperationType {
  export function getJsonObj(obj: WorkRequestOperationType): WorkRequestOperationType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestOperationType): WorkRequestOperationType {
    return obj;
  }
}
