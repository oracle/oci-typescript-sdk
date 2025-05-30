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
 * The summary of a specific user resource.
 */
export interface User {
  /**
   * The name of the User.
   */
  "name": string;
  /**
   * The status of the user account.
   */
  "status": User.Status;
  /**
   * The date the account was locked, if the status of the account is LOCKED.
   */
  "timeLocked"?: Date;
  /**
   * The date and time of the expiration of the user account.
   */
  "timeExpiring"?: Date;
  /**
   * The default tablespace for data.
   */
  "defaultTablespace": string;
  /**
   * The name of the default tablespace for temporary tables or the name of a tablespace group.
   */
  "tempTablespace": string;
  /**
   * The default local temporary tablespace for the user.
   */
  "localTempTablespace"?: string;
  /**
   * The date and time the user was created.
   */
  "timeCreated": Date;
  /**
   * The profile name of the user.
   */
  "profile": string;
  /**
   * The initial resource consumer group for the User.
   */
  "consumerGroup"?: string;
  /**
   * The external name of the user.
   */
  "externalName"?: string;
  /**
   * The list of existing versions of the password hashes (also known as \"verifiers\") for the account.
   */
  "passwordVersions"?: string;
  /**
   * Indicates whether editions have been enabled for the corresponding user (Y) or not (N).
   */
  "editionsEnabled"?: User.EditionsEnabled;
  /**
   * The authentication mechanism for the user.
   */
  "authentication"?: User.Authentication;
  /**
   * Indicates whether a user can connect directly (N) or whether the account can only be proxied (Y) by users who have proxy privileges
   * for this account (that is, by users who have been granted the \"connect through\" privilege for this account).
   *
   */
  "proxyConnect"?: User.ProxyConnect;
  /**
   * Indicates whether a given user is common(Y) or local(N).
   */
  "common"?: User.Common;
  /**
   * The date and time of the last user login.
   * This column is not populated when a user connects to the database with administrative privileges, that is, AS { SYSASM | SYSBACKUP | SYSDBA | SYSDG | SYSOPER | SYSRAC | SYSKM }.
   *
   */
  "timeLastLogin"?: Date;
  /**
   * Indicates whether the user was created and is maintained by Oracle-supplied scripts (such as catalog.sql or catproc.sql).
   */
  "oracleMaintained"?: User.OracleMaintained;
  /**
   * Indicates whether the user definition is inherited from another container (YES) or not (NO).
   */
  "inherited"?: User.Inherited;
  /**
   * The default collation for the user schema.
   */
  "defaultCollation"?: string;
  /**
   * Indicates whether the user is a common user created by an implicit application (YES) or not (NO).
   */
  "implicit"?: User.Implicit;
  /**
   * In a sharded database, indicates whether the user is created with shard DDL enabled (YES) or not (NO).
   */
  "allShared"?: User.AllShared;
  /**
   * In a federated sharded database, indicates whether the user is an external shard user (YES) or not (NO).
   */
  "externalShared"?: User.ExternalShared;
  /**
   * The date and time when the user password was last set.
   * This column is populated only when the value of the AUTHENTICATION_TYPE column is PASSWORD. Otherwise, this column is null.
   *
   */
  "timePasswordChanged"?: Date;
}

export namespace User {
  export enum Status {
    Open = "OPEN",
    Expired = "EXPIRED",
    ExpiredGrace = "EXPIRED_GRACE",
    Locked = "LOCKED",
    LockedTimed = "LOCKED_TIMED",
    ExpiredAndLocked = "EXPIRED_AND_LOCKED",
    ExpiredGraceAndLocked = "EXPIRED_GRACE_AND_LOCKED",
    ExpiredAndLockedTimed = "EXPIRED_AND_LOCKED_TIMED",
    ExpiredGraceAndLockedTimed = "EXPIRED_GRACE_AND_LOCKED_TIMED",
    OpenAndInRollover = "OPEN_AND_IN_ROLLOVER",
    ExpiredAndInRollover = "EXPIRED_AND_IN_ROLLOVER",
    LockedAndInRollover = "LOCKED_AND_IN_ROLLOVER",
    ExpiredAndLockedAndInRollover = "EXPIRED_AND_LOCKED_AND_IN_ROLLOVER",
    LockedTimedAndInRollover = "LOCKED_TIMED_AND_IN_ROLLOVER",
    ExpiredAndLockedTimedAndInRol = "EXPIRED_AND_LOCKED_TIMED_AND_IN_ROL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum EditionsEnabled {
    Yes = "YES",
    No = "NO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Authentication {
    None = "NONE",
    External = "EXTERNAL",
    Global = "GLOBAL",
    Password = "PASSWORD",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ProxyConnect {
    Yes = "YES",
    No = "NO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Common {
    Yes = "YES",
    No = "NO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum OracleMaintained {
    Yes = "YES",
    No = "NO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Inherited {
    Yes = "YES",
    No = "NO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Implicit {
    Yes = "YES",
    No = "NO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum AllShared {
    Yes = "YES",
    No = "NO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ExternalShared {
    Yes = "YES",
    No = "NO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: User): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: User): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
