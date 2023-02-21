/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The details of an Oracle DB node discovered in an external DB system discovery run.
 */
export interface DiscoveredExternalDbNode extends model.DiscoveredExternalDbSystemComponent {
  /**
   * The name of the host on which the ASM instance is running.
   */
  "hostName": string;
  /**
   * The number of CPU cores available on the DB node. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount"?: number;
  /**
   * The total memory in gigabytes (GB) on the DB node. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memorySizeInGBs"?: number;
  "connector"?: model.ExternalDbSystemDiscoveryMacsConnector;

  "componentType": string;
}

export namespace DiscoveredExternalDbNode {
  export function getJsonObj(obj: DiscoveredExternalDbNode, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DiscoveredExternalDbSystemComponent.getJsonObj(obj) as DiscoveredExternalDbNode)),
      ...{
        "connector": obj.connector
          ? model.ExternalDbSystemDiscoveryConnector.getJsonObj(obj.connector)
          : undefined
      }
    };

    return jsonObj;
  }
  export const componentType = "DATABASE_NODE";
  export function getDeserializedJsonObj(
    obj: DiscoveredExternalDbNode,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DiscoveredExternalDbSystemComponent.getDeserializedJsonObj(
            obj
          ) as DiscoveredExternalDbNode)),
      ...{
        "connector": obj.connector
          ? model.ExternalDbSystemDiscoveryConnector.getDeserializedJsonObj(obj.connector)
          : undefined
      }
    };

    return jsonObj;
  }
}