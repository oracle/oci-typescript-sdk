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
 * Provides the information used to update software packages on a managed instance.
 */
export interface UpdatePackagesOnManagedInstanceDetails {
  /**
   * The list of package names.
   */
  "packageNames"?: Array<string>;
  /**
   * The types of updates to be applied.
   */
  "updateTypes"?: Array<UpdatePackagesOnManagedInstanceDetails.UpdateTypes>;
  "workRequestDetails"?: model.WorkRequestDetails;
}

export namespace UpdatePackagesOnManagedInstanceDetails {
  export enum UpdateTypes {
    Security = "SECURITY",
    Bugfix = "BUGFIX",
    Enhancement = "ENHANCEMENT",
    Other = "OTHER",
    KspliceKernel = "KSPLICE_KERNEL",
    KspliceUserspace = "KSPLICE_USERSPACE",
    All = "ALL"
  }

  export function getJsonObj(obj: UpdatePackagesOnManagedInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "workRequestDetails": obj.workRequestDetails
          ? model.WorkRequestDetails.getJsonObj(obj.workRequestDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdatePackagesOnManagedInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "workRequestDetails": obj.workRequestDetails
          ? model.WorkRequestDetails.getDeserializedJsonObj(obj.workRequestDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
