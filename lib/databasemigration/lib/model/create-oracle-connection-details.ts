/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20230518
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information about a new Oracle Database Connection.
 */
export interface CreateOracleConnectionDetails extends model.CreateConnectionDetails {
  /**
   * The Oracle technology type.
   */
  "technologyType": string;
  /**
   * Connect descriptor or Easy Connect Naming method used to connect to a database.
   *
   */
  "connectionString"?: string;
  /**
   * The wallet contents used to make connections to a database.  This
   * attribute is expected to be base64 encoded.
   *
   */
  "wallet"?: string;
  /**
   * The OCID of the database being referenced.
   *
   */
  "databaseId"?: string;
  /**
   * Name of the host the SSH key is valid for.
   *
   */
  "sshHost"?: string;
  /**
   * Private SSH key string.
   *
   */
  "sshKey"?: string;
  /**
   * The username (credential) used when creating or updating this resource.
   *
   */
  "sshUser"?: string;
  /**
   * Sudo location
   *
   */
  "sshSudoLocation"?: string;

  "connectionType": string;
}

export namespace CreateOracleConnectionDetails {
  export function getJsonObj(
    obj: CreateOracleConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getJsonObj(obj) as CreateOracleConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "ORACLE";
  export function getDeserializedJsonObj(
    obj: CreateOracleConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as CreateOracleConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}