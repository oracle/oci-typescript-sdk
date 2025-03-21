/**
 * Kubernetes Engine API
 * API for the Kubernetes Engine service (also known as the Container Engine for Kubernetes service). Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Kubernetes Engine](https://docs.oracle.com/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * The properties that define an addon.
 */
export interface Addon {
  /**
   * The name of the addon.
   */
  "name": string;
  /**
   * selected addon version, or null indicates autoUpdate
   */
  "version"?: string;
  /**
   * current installed version of the addon
   */
  "currentInstalledVersion"?: string;
  /**
   * The time the cluster was created.
   */
  "timeCreated"?: Date;
  /**
   * The state of the addon.
   */
  "lifecycleState": model.AddonLifecycleState;
  /**
   * Addon configuration details.
   */
  "configurations"?: Array<model.AddonConfiguration>;
  /**
   * The error info of the addon.
   */
  "addonError"?: model.AddonError;
}

export namespace Addon {
  export function getJsonObj(obj: Addon): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurations": obj.configurations
          ? obj.configurations.map(item => {
              return model.AddonConfiguration.getJsonObj(item);
            })
          : undefined,
        "addonError": obj.addonError ? model.AddonError.getJsonObj(obj.addonError) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Addon): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurations": obj.configurations
          ? obj.configurations.map(item => {
              return model.AddonConfiguration.getDeserializedJsonObj(item);
            })
          : undefined,
        "addonError": obj.addonError
          ? model.AddonError.getDeserializedJsonObj(obj.addonError)
          : undefined
      }
    };

    return jsonObj;
  }
}
