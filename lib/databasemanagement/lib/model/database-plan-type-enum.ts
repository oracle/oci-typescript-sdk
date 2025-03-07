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
 * The type of the database plan directive.
 * The value OTHER is to temporarily handle the case when Exadata side adds new value, should not be used as input
 * when to make change to IORM plan.
 *
 **/
export enum DatabasePlanTypeEnum {
  Database = "DATABASE",
  Profile = "PROFILE",
  Other = "OTHER",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DatabasePlanTypeEnum {
  export function getJsonObj(obj: DatabasePlanTypeEnum): DatabasePlanTypeEnum {
    return obj;
  }
  export function getDeserializedJsonObj(obj: DatabasePlanTypeEnum): DatabasePlanTypeEnum {
    return obj;
  }
}
