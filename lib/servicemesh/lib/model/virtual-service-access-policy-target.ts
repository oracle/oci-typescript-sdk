/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
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
 * Virtual service target which communicates with other virtual services in a mesh.
 */
export interface VirtualServiceAccessPolicyTarget extends model.AccessPolicyTarget {
  /**
   * The OCID of the virtual service resource.
   */
  "virtualServiceId"?: string;

  "type": string;
}

export namespace VirtualServiceAccessPolicyTarget {
  export function getJsonObj(
    obj: VirtualServiceAccessPolicyTarget,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AccessPolicyTarget.getJsonObj(obj) as VirtualServiceAccessPolicyTarget)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "VIRTUAL_SERVICE";
  export function getDeserializedJsonObj(
    obj: VirtualServiceAccessPolicyTarget,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AccessPolicyTarget.getDeserializedJsonObj(
            obj
          ) as VirtualServiceAccessPolicyTarget)),
      ...{}
    };

    return jsonObj;
  }
}
