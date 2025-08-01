/**
 * Autoscaling API
 * Use the Autoscaling API to dynamically scale compute resources to meet application requirements. For more information about
autoscaling, see [Autoscaling](https://docs.oracle.com/iaas/Content/Compute/Tasks/autoscalinginstancepools.htm). For information about the
Compute service, see [Compute](https://docs.oracle.com/iaas/Content/Compute/home.htm).

 * OpenAPI spec version: 20181001
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
 * A Compute instance pool.
 */
export interface InstancePoolResource extends model.Resource {
  "type": string;
}

export namespace InstancePoolResource {
  export function getJsonObj(obj: InstancePoolResource, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Resource.getJsonObj(obj) as InstancePoolResource)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "instancePool";
  export function getDeserializedJsonObj(
    obj: InstancePoolResource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Resource.getDeserializedJsonObj(obj) as InstancePoolResource)),
      ...{}
    };

    return jsonObj;
  }
}
