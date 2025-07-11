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
 * If the value is ON, the instance is configured as read_only. If the value is SUPER, the instance is configured as super_read_only. If the value is OFF, the instance is neither read_only nor super_read_only.
 **/
export enum MySqlReadOnly {
  On = "ON",
  Super = "SUPER",
  Off = "OFF",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace MySqlReadOnly {
  export function getJsonObj(obj: MySqlReadOnly): MySqlReadOnly {
    return obj;
  }
  export function getDeserializedJsonObj(obj: MySqlReadOnly): MySqlReadOnly {
    return obj;
  }
}
