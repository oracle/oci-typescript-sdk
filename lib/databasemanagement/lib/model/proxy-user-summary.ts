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
 * A summary of the proxy user.
 */
export interface ProxyUserSummary {
  /**
   * The name of a proxy user or the name of the client user.
   */
  "name"?: string;
  /**
   * Indicates whether the proxy is required to supply the client credentials (YES) or not (NO).
   */
  "authentication"?: ProxyUserSummary.Authentication;
  /**
   * The flags associated with the proxy/client pair.
   */
  "flags"?: ProxyUserSummary.Flags;
}

export namespace ProxyUserSummary {
  export enum Authentication {
    Yes = "YES",
    No = "NO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Flags {
    ProxyMayActivateAllClientRoles = "PROXY_MAY_ACTIVATE_ALL_CLIENT_ROLES",
    NoClientRolesMayBeActivated = "NO_CLIENT_ROLES_MAY_BE_ACTIVATED",
    ProxyMayActivateRole = "PROXY_MAY_ACTIVATE_ROLE",
    ProxyMayNotActivateRole = "PROXY_MAY_NOT_ACTIVATE_ROLE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ProxyUserSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProxyUserSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
