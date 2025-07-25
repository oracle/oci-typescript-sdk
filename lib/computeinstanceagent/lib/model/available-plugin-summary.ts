/**
 * Oracle Cloud Agent API
 * API for the Oracle Cloud Agent software running on compute instances. Oracle Cloud Agent
is a lightweight process that monitors and manages compute instances.

 * OpenAPI spec version: 20180530
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
 * Information about where a plugin is supported.
 */
export interface AvailablePluginSummary {
  /**
   * The plugin name.
   */
  "name": string;
  /**
   * A brief description of the plugin's functionality.
   */
  "summary"?: string;
  /**
   * Whether the plugin is supported.
   */
  "isSupported": boolean;
  /**
   * Whether the plugin is enabled or disabled by default.
   */
  "isEnabledByDefault": boolean;
}

export namespace AvailablePluginSummary {
  export function getJsonObj(obj: AvailablePluginSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AvailablePluginSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
