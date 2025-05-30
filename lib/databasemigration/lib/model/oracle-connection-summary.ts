/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20230518
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
 * Summary of the Oracle Connection.
 */
export interface OracleConnectionSummary extends model.ConnectionSummary {
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
   * The OCID of the database being referenced.
   *
   */
  "databaseId"?: string;

  "connectionType": string;
}

export namespace OracleConnectionSummary {
  export function getJsonObj(obj: OracleConnectionSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getJsonObj(obj) as OracleConnectionSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "ORACLE";
  export function getDeserializedJsonObj(
    obj: OracleConnectionSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getDeserializedJsonObj(obj) as OracleConnectionSummary)),
      ...{}
    };

    return jsonObj;
  }
}
