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
 * Lists the database objects that participate in this migration.
 */
export interface MySqlMigrationObjectCollection extends model.MigrationObjectCollection {
  /**
   * An array of database objects that are either included or excluded from the migration.
   */
  "items": Array<model.MySqlDatabaseObjectSummary>;
  /**
   * Specifies the database objects to be excluded from the migration in bulk.
   * The definition accepts input in a CSV format, newline separated for each entry.
   * More details can be found in the documentation.
   *
   */
  "bulkIncludeExcludeData"?: string;

  "databaseCombination": string;
}

export namespace MySqlMigrationObjectCollection {
  export function getJsonObj(
    obj: MySqlMigrationObjectCollection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MigrationObjectCollection.getJsonObj(obj) as MySqlMigrationObjectCollection)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.MySqlDatabaseObjectSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const databaseCombination = "MYSQL";
  export function getDeserializedJsonObj(
    obj: MySqlMigrationObjectCollection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MigrationObjectCollection.getDeserializedJsonObj(
            obj
          ) as MySqlMigrationObjectCollection)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.MySqlDatabaseObjectSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}