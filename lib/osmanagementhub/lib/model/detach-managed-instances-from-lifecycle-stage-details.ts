/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The managed instances to detach from the lifecycle stage.
 */
export interface DetachManagedInstancesFromLifecycleStageDetails {
  "managedInstanceDetails"?: model.ManagedInstancesDetails;
}

export namespace DetachManagedInstancesFromLifecycleStageDetails {
  export function getJsonObj(obj: DetachManagedInstancesFromLifecycleStageDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "managedInstanceDetails": obj.managedInstanceDetails
          ? model.ManagedInstancesDetails.getJsonObj(obj.managedInstanceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: DetachManagedInstancesFromLifecycleStageDetails
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "managedInstanceDetails": obj.managedInstanceDetails
          ? model.ManagedInstancesDetails.getDeserializedJsonObj(obj.managedInstanceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}