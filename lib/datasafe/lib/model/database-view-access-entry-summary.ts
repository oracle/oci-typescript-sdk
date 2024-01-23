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
 * Summary of DatabaseViewAccess Object.
 */
export interface DatabaseViewAccessEntrySummary {
  /**
   * The unique key that identifies the view report. It is numeric and unique within a security policy report.
   */
  "key": string;
  /**
   * Grantee is the user who can access the view.
   */
  "grantee": string;
  /**
   * This can be empty in case of direct grant, in case of indirect grant, this attribute displays the name of the
   * role which is granted to the user though which the user has access to the table.
   *
   */
  "grantFromRole"?: string;
  /**
   * The type of the access the user has on the table, there can be one or more from SELECT, DELETE, INSERT, READ or UPDATE.
   *
   */
  "accessType"?: model.AccessType;
  /**
   * The name of the privilege.
   */
  "privilege"?: model.PrivilegeName;
  /**
   * The OCID of the of the  target database.
   */
  "targetId"?: string;
  /**
   * Indicates whether the grantee can grant this privilege to other users. Privileges can be granted to a user or role with
   * GRANT_OPTION or ADMIN_OPTION
   *
   */
  "privilegeGrantable"?: model.PrivilegeGrantableOption;
  /**
   * Type of the privilege user has, this includes System Privilege, Schema Privilege, Object Privilege, Column Privilege,
   * Owner or Schema Privilege on a schema.
   *
   */
  "privilegeType"?: string;
  /**
   * The name of the schema
   */
  "tableSchema"?: string;
  /**
   * The name of the table.
   */
  "tableName"?: string;
  /**
   * The name of the schema.
   */
  "viewSchema"?: string;
  /**
   * The name of the view.
   */
  "viewName"?: string;
  /**
   * The definition of the view.
   */
  "viewText"?: string;
  /**
   * The name of column when there are column level privileges on a table or view.
   */
  "columnName"?: string;
  /**
   * The user who granted the privilege.
   */
  "grantor"?: string;
  /**
   * Indicates whether the table access is constrained via Oracle Database Vault.
   */
  "isAccessConstrainedByDatabaseVault"?: boolean;
  /**
   * Indicates whether the view access is constrained via Virtual Private Database.
   */
  "isAccessConstrainedByVirtualPrivateDatabase"?: boolean;
  /**
   * Indicates whether the view access is constrained via Oracle Data Redaction.
   */
  "isAccessConstrainedByRedaction"?: boolean;
  /**
   * Indicates whether the view access is constrained via Real Application Security.
   */
  "isAccessConstrainedByRealApplicationSecurity"?: boolean;
  /**
   * Indicates whether the view access is constrained via Oracle Database SQL Firewall.
   */
  "isAccessConstrainedBySqlFirewall"?: boolean;
}

export namespace DatabaseViewAccessEntrySummary {
  export function getJsonObj(obj: DatabaseViewAccessEntrySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseViewAccessEntrySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}