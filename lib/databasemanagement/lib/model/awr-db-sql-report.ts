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
 * The result of the AWR SQL report.
 */
export interface AwrDbSqlReport extends model.AwrQueryResult {
  /**
   * The content of the report.
   */
  "content"?: string;
  /**
   * The format of the report.
   */
  "format"?: AwrDbSqlReport.Format;

  "awrResultType": string;
}

export namespace AwrDbSqlReport {
  export enum Format {
    Html = "HTML",
    Text = "TEXT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AwrDbSqlReport, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.AwrQueryResult.getJsonObj(obj) as AwrDbSqlReport)),
      ...{}
    };

    return jsonObj;
  }
  export const awrResultType = "AWRDB_SQL_REPORT";
  export function getDeserializedJsonObj(obj: AwrDbSqlReport, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AwrQueryResult.getDeserializedJsonObj(obj) as AwrDbSqlReport)),
      ...{}
    };

    return jsonObj;
  }
}
