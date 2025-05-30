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
 * A collection of database parameters.
 */
export interface DatabaseParametersCollection {
  /**
   * The name of the Managed Database.
   */
  "databaseName": string;
  /**
   * The type of Oracle Database installation.
   */
  "databaseType": model.DatabaseType;
  /**
   * The subtype of the Oracle Database. Indicates whether the database
   * is a Container Database, Pluggable Database, or a Non-container Database.
   *
   */
  "databaseSubType": model.DatabaseSubType;
  /**
   * The Oracle Database version.
   */
  "databaseVersion": string;
  /**
   * An array of DatabaseParameterSummary objects.
   */
  "items": Array<model.DatabaseParameterSummary>;
}

export namespace DatabaseParametersCollection {
  export function getJsonObj(obj: DatabaseParametersCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.DatabaseParameterSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseParametersCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.DatabaseParameterSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
