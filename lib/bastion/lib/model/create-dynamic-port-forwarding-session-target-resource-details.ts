/**
 * Bastion API
 * Use the Bastion API to provide restricted and time-limited access to target resources that don't have public endpoints. Bastions let authorized users connect from specific IP addresses to target resources using Secure Shell (SSH) sessions. For more information, see [the Bastion documentation](https://docs.oracle.com/iaas/Content/Bastion/home.htm).
 * OpenAPI spec version: 20210331
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
 * Details about a dynamic port forwarding session for a target subnet.
 */
export interface CreateDynamicPortForwardingSessionTargetResourceDetails
  extends model.CreateSessionTargetResourceDetails {
  "sessionType": string;
}

export namespace CreateDynamicPortForwardingSessionTargetResourceDetails {
  export function getJsonObj(
    obj: CreateDynamicPortForwardingSessionTargetResourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateSessionTargetResourceDetails.getJsonObj(
            obj
          ) as CreateDynamicPortForwardingSessionTargetResourceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const sessionType = "DYNAMIC_PORT_FORWARDING";
  export function getDeserializedJsonObj(
    obj: CreateDynamicPortForwardingSessionTargetResourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateSessionTargetResourceDetails.getDeserializedJsonObj(
            obj
          ) as CreateDynamicPortForwardingSessionTargetResourceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
