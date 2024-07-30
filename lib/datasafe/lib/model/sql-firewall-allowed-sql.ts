/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The resource represents a SQL Firewall allowed SQL in Data Safe.
 *
 */
export interface SqlFirewallAllowedSql {
  /**
   * The OCID of the SQL Firewall allowed SQL.
   */
  "id": string;
  /**
   * The OCID of the compartment containing the SQL Firewall allowed SQL.
   */
  "compartmentId": string;
  /**
   * The display name of the SQL Firewall allowed SQL.
   */
  "displayName": string;
  /**
   * The description of the SQL Firewall allowed SQL.
   */
  "description"?: string;
  /**
   * The OCID of the SQL Firewall policy corresponding to the SQL Firewall allowed SQL.
   */
  "sqlFirewallPolicyId": string;
  /**
   * The name of the user that SQL was executed as.
   */
  "currentUser"?: string;
  /**
   * The database user name.
   */
  "dbUserName": string;
  /**
   * The SQL text of the SQL Firewall allowed SQL.
   */
  "sqlText": string;
  /**
   * Specifies the level of SQL included for this SQL Firewall policy.
   * USER_ISSUED_SQL - User issued SQL statements only.
   * ALL_SQL - Includes all SQL statements including SQL statement issued inside PL/SQL units.
   *
   */
  "sqlLevel": SqlFirewallAllowedSql.SqlLevel;
  /**
   * The objects accessed by the SQL.
   */
  "sqlAccessedObjects"?: Array<string>;
  /**
   * Version of the associated SQL Firewall policy. This identifies whether the allowed SQLs were added in the same batch or not. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "version": number;
  /**
   * The time the the SQL Firewall allowed SQL was collected from the target database, in the format defined by RFC3339.
   */
  "timeCollected": Date;
  /**
   * The last date and time the SQL Firewall allowed SQL was updated, in the format defined by RFC3339.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the SQL Firewall allowed SQL.
   */
  "lifecycleState": model.SqlFirewallAllowedSqlLifecycleState;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see Resource Tags.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace SqlFirewallAllowedSql {
  export enum SqlLevel {
    UserIssuedSql = "USER_ISSUED_SQL",
    AllSql = "ALL_SQL"
  }

  export function getJsonObj(obj: SqlFirewallAllowedSql): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlFirewallAllowedSql): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}