/**
 * Database Management API
 * Use the Database Management API to monitor and manage resources such as
Oracle Databases, MySQL Databases, and External Database Systems. 
For more information, see [Database Management](https://docs.oracle.com/iaas/database-management/home.htm).

 * OpenAPI spec version: 20201101
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
 * The details of an ASM instance discovered in a cloud DB system discovery run.
 */
export interface DiscoveredCloudAsmInstance extends model.DiscoveredCloudDbSystemComponent {
  /**
   * The name of the host on which the ASM instance is running.
   */
  "hostName": string;
  /**
   * The name of the ASM instance.
   */
  "instanceName"?: string;
  /**
   * The Automatic Diagnostic Repository (ADR) home directory for the ASM instance.
   */
  "adrHomeDirectory"?: string;

  "componentType": string;
}

export namespace DiscoveredCloudAsmInstance {
  export function getJsonObj(obj: DiscoveredCloudAsmInstance, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DiscoveredCloudDbSystemComponent.getJsonObj(obj) as DiscoveredCloudAsmInstance)),
      ...{}
    };

    return jsonObj;
  }
  export const componentType = "ASM_INSTANCE";
  export function getDeserializedJsonObj(
    obj: DiscoveredCloudAsmInstance,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DiscoveredCloudDbSystemComponent.getDeserializedJsonObj(
            obj
          ) as DiscoveredCloudAsmInstance)),
      ...{}
    };

    return jsonObj;
  }
}
