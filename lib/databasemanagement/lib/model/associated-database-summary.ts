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
 * The summary of a database currently using a Database Management private endpoint.
 */
export interface AssociatedDatabaseSummary {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database.
   */
  "id": string;
  /**
   * The name of the database.
   */
  "name": string;
  /**
   * The compartment [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database.
   */
  "compartmentId": string;
  /**
   * The time when Database Management was enabled for the database.
   */
  "timeRegistered": Date;
}

export namespace AssociatedDatabaseSummary {
  export function getJsonObj(obj: AssociatedDatabaseSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AssociatedDatabaseSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
