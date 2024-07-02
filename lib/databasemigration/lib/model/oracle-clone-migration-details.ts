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
 * Oracle Clone Migration Summary
 */
export interface OracleCloneMigrationDetails extends model.CloneMigrationDetails {
  /**
   * The OCID of the resource being referenced.
   */
  "sourceContainerDatabaseConnectionId"?: string;

  "databaseCombination": string;
}

export namespace OracleCloneMigrationDetails {
  export function getJsonObj(obj: OracleCloneMigrationDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CloneMigrationDetails.getJsonObj(obj) as OracleCloneMigrationDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const databaseCombination = "ORACLE";
  export function getDeserializedJsonObj(
    obj: OracleCloneMigrationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CloneMigrationDetails.getDeserializedJsonObj(obj) as OracleCloneMigrationDetails)),
      ...{}
    };

    return jsonObj;
  }
}