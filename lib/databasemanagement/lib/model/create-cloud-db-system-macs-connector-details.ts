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
 * The details for creating a cloud connector that is used to connect to a cloud DB system component
 * using the [Management Agent Cloud Service (MACS)](https://docs.oracle.com/iaas/management-agents/index.html).
 *
 */
export interface CreateCloudDbSystemMacsConnectorDetails
  extends model.CreateCloudDbSystemConnectorDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the management agent
   * used for the cloud DB system connector.
   *
   */
  "agentId": string;
  "connectionInfo"?: model.CloudAsmConnectionInfo | model.CloudDatabaseConnectionInfo;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "connectorType": string;
}

export namespace CreateCloudDbSystemMacsConnectorDetails {
  export function getJsonObj(
    obj: CreateCloudDbSystemMacsConnectorDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateCloudDbSystemConnectorDetails.getJsonObj(
            obj
          ) as CreateCloudDbSystemMacsConnectorDetails)),
      ...{
        "connectionInfo": obj.connectionInfo
          ? model.CloudDbSystemConnectionInfo.getJsonObj(obj.connectionInfo)
          : undefined
      }
    };

    return jsonObj;
  }
  export const connectorType = "MACS";
  export function getDeserializedJsonObj(
    obj: CreateCloudDbSystemMacsConnectorDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateCloudDbSystemConnectorDetails.getDeserializedJsonObj(
            obj
          ) as CreateCloudDbSystemMacsConnectorDetails)),
      ...{
        "connectionInfo": obj.connectionInfo
          ? model.CloudDbSystemConnectionInfo.getDeserializedJsonObj(obj.connectionInfo)
          : undefined
      }
    };

    return jsonObj;
  }
}
