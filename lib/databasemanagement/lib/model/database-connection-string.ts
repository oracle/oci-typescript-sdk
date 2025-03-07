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
 * The Oracle Database connection string.
 *
 */
export interface DatabaseConnectionString {
  /**
   * The host name of the database or the SCAN name in case of a RAC database.
   */
  "hostName": string;
  /**
   * The port used to connect to the database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port": number;
  /**
   * The service name of the database.
   */
  "service": string;
  /**
   * The protocol used to connect to the database.
   */
  "protocol": DatabaseConnectionString.Protocol;
}

export namespace DatabaseConnectionString {
  export enum Protocol {
    Tcp = "TCP",
    Tcps = "TCPS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DatabaseConnectionString): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseConnectionString): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
