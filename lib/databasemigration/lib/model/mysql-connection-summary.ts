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
 * Summary of the MySQL Connection.
 */
export interface MysqlConnectionSummary extends model.ConnectionSummary {
  /**
   * The type of MySQL source or target connection.
   * Example: OCI_MYSQL represents OCI MySQL HeatWave Database Service
   *
   */
  "technologyType": string;
  /**
   * The IP Address of the host.
   */
  "host"?: string;
  /**
   * The port to be used for the connection. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * The name of the database being referenced.
   */
  "databaseName"?: string;
  /**
   * Security Type for MySQL.
   */
  "securityProtocol": string;
  /**
   * SSL modes for MySQL.
   */
  "sslMode"?: string;
  /**
   * An array of name-value pair attribute entries.
   */
  "additionalAttributes"?: Array<model.NameValuePair>;
  /**
   * The OCID of the database system being referenced.
   *
   */
  "dbSystemId"?: string;

  "connectionType": string;
}

export namespace MysqlConnectionSummary {
  export function getJsonObj(obj: MysqlConnectionSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getJsonObj(obj) as MysqlConnectionSummary)),
      ...{
        "additionalAttributes": obj.additionalAttributes
          ? obj.additionalAttributes.map(item => {
              return model.NameValuePair.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const connectionType = "MYSQL";
  export function getDeserializedJsonObj(
    obj: MysqlConnectionSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getDeserializedJsonObj(obj) as MysqlConnectionSummary)),
      ...{
        "additionalAttributes": obj.additionalAttributes
          ? obj.additionalAttributes.map(item => {
              return model.NameValuePair.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}