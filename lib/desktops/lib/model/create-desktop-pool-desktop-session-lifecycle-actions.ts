/**
 * Secure Desktops API
 * Create and manage cloud-hosted desktops which can be accessed from a web browser or installed client.

 * OpenAPI spec version: 20220618
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
 * The details of action to be triggered in case of inactivity or disconnect
 */
export interface CreateDesktopPoolDesktopSessionLifecycleActions {
  "inactivity"?: model.InactivityConfig;
  "disconnect"?: model.DisconnectConfig;
}

export namespace CreateDesktopPoolDesktopSessionLifecycleActions {
  export function getJsonObj(obj: CreateDesktopPoolDesktopSessionLifecycleActions): object {
    const jsonObj = {
      ...obj,
      ...{
        "inactivity": obj.inactivity
          ? model.InactivityConfig.getJsonObj(obj.inactivity)
          : undefined,
        "disconnect": obj.disconnect ? model.DisconnectConfig.getJsonObj(obj.disconnect) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: CreateDesktopPoolDesktopSessionLifecycleActions
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "inactivity": obj.inactivity
          ? model.InactivityConfig.getDeserializedJsonObj(obj.inactivity)
          : undefined,
        "disconnect": obj.disconnect
          ? model.DisconnectConfig.getDeserializedJsonObj(obj.disconnect)
          : undefined
      }
    };

    return jsonObj;
  }
}
