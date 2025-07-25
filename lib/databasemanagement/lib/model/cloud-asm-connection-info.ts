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
 * The details required to connect to a cloud ASM instance.
 */
export interface CloudAsmConnectionInfo extends model.CloudDbSystemConnectionInfo {
  "connectionString": model.AsmConnectionString;
  "connectionCredentials":
    | model.CloudAsmConnectionCredentialsByDetails
    | model.CloudAsmConnectionCredentialsByName;

  "componentType": string;
}

export namespace CloudAsmConnectionInfo {
  export function getJsonObj(obj: CloudAsmConnectionInfo, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CloudDbSystemConnectionInfo.getJsonObj(obj) as CloudAsmConnectionInfo)),
      ...{
        "connectionString": obj.connectionString
          ? model.AsmConnectionString.getJsonObj(obj.connectionString)
          : undefined,
        "connectionCredentials": obj.connectionCredentials
          ? model.CloudAsmConnectionCredentials.getJsonObj(obj.connectionCredentials)
          : undefined
      }
    };

    return jsonObj;
  }
  export const componentType = "ASM";
  export function getDeserializedJsonObj(
    obj: CloudAsmConnectionInfo,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CloudDbSystemConnectionInfo.getDeserializedJsonObj(
            obj
          ) as CloudAsmConnectionInfo)),
      ...{
        "connectionString": obj.connectionString
          ? model.AsmConnectionString.getDeserializedJsonObj(obj.connectionString)
          : undefined,
        "connectionCredentials": obj.connectionCredentials
          ? model.CloudAsmConnectionCredentials.getDeserializedJsonObj(obj.connectionCredentials)
          : undefined
      }
    };

    return jsonObj;
  }
}
