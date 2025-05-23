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
 * Disabled service discovery configuration for virtual deployments.
 */
export interface DisabledServiceDiscoveryConfiguration extends model.ServiceDiscoveryConfiguration {
  "type": string;
}

export namespace DisabledServiceDiscoveryConfiguration {
  export function getJsonObj(
    obj: DisabledServiceDiscoveryConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ServiceDiscoveryConfiguration.getJsonObj(
            obj
          ) as DisabledServiceDiscoveryConfiguration)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "DISABLED";
  export function getDeserializedJsonObj(
    obj: DisabledServiceDiscoveryConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ServiceDiscoveryConfiguration.getDeserializedJsonObj(
            obj
          ) as DisabledServiceDiscoveryConfiguration)),
      ...{}
    };

    return jsonObj;
  }
}
