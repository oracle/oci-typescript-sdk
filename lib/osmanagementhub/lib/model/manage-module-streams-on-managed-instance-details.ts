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
 * The set of changes to make to the state of the modules, streams, and profiles on a managed instance
 */
export interface ManageModuleStreamsOnManagedInstanceDetails {
  /**
   * Indicates if this operation is a dry run or if the operation
   * should be committed.  If set to true, the result of the operation
   * will be evaluated but not committed.  If set to false, the
   * operation is committed to the managed instance.  The default is
   * false.
   *
   */
  "isDryRun"?: boolean;
  /**
   * The set of module streams to enable. If any streams of a module are already enabled, the service switches from the current stream to the new stream.
   * Once complete, the streams will be in 'ENABLED' status.
   *
   */
  "enable"?: Array<model.ModuleStreamDetails>;
  /**
   * The set of module streams to disable. Any profiles that are installed for the module stream will be removed as part of the operation.
   * Once complete, the streams will be in 'DISABLED' status.
   *
   */
  "disable"?: Array<model.ModuleStreamDetails>;
  /**
   * The set of module stream profiles to install. Any packages that are part of the profile are installed on the managed instance.
   * Once complete, the profile will be in 'INSTALLED' status. The operation will return an error if you attempt to install a profile from a disabled stream, unless enabling the new module stream is included in this operation.
   *
   */
  "install"?: Array<model.ModuleStreamProfileDetails>;
  /**
   * The set of module stream profiles to remove. Once complete, the profile will be in 'AVAILABLE' status.
   * The status of packages within the profile after the operation is complete is defined by the package manager on the managed instance group.
   *
   */
  "remove"?: Array<model.ModuleStreamProfileDetails>;
  "workRequestDetails"?: model.WorkRequestDetails;
}

export namespace ManageModuleStreamsOnManagedInstanceDetails {
  export function getJsonObj(obj: ManageModuleStreamsOnManagedInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "enable": obj.enable
          ? obj.enable.map(item => {
              return model.ModuleStreamDetails.getJsonObj(item);
            })
          : undefined,
        "disable": obj.disable
          ? obj.disable.map(item => {
              return model.ModuleStreamDetails.getJsonObj(item);
            })
          : undefined,
        "install": obj.install
          ? obj.install.map(item => {
              return model.ModuleStreamProfileDetails.getJsonObj(item);
            })
          : undefined,
        "remove": obj.remove
          ? obj.remove.map(item => {
              return model.ModuleStreamProfileDetails.getJsonObj(item);
            })
          : undefined,
        "workRequestDetails": obj.workRequestDetails
          ? model.WorkRequestDetails.getJsonObj(obj.workRequestDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ManageModuleStreamsOnManagedInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "enable": obj.enable
          ? obj.enable.map(item => {
              return model.ModuleStreamDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "disable": obj.disable
          ? obj.disable.map(item => {
              return model.ModuleStreamDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "install": obj.install
          ? obj.install.map(item => {
              return model.ModuleStreamProfileDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "remove": obj.remove
          ? obj.remove.map(item => {
              return model.ModuleStreamProfileDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "workRequestDetails": obj.workRequestDetails
          ? model.WorkRequestDetails.getDeserializedJsonObj(obj.workRequestDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
