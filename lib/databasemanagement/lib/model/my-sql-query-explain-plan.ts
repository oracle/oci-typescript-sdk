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
 * The explain plan for a given MySQL query.
 */
export interface MySqlQueryExplainPlan {
  /**
   * The json format of the explain plan.
   */
  "jsonExplain": string;
  /**
   * The version of the Json format of MySQL Explain.
   */
  "jsonExplainVersion": model.MySqlJsonExplainVersion;
}

export namespace MySqlQueryExplainPlan {
  export function getJsonObj(obj: MySqlQueryExplainPlan): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MySqlQueryExplainPlan): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
