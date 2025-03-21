/**
 * APM Availability Monitoring API
 * Use the APM Availability Monitoring API to query Scripts, Monitors, Dedicated Vantage Points and On-Premise Vantage Points resources. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).
 * OpenAPI spec version: 20200630
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
 * Request configuration details for the SQL monitor type.
 */
export interface SqlMonitorConfiguration extends model.MonitorConfiguration {
  /**
   * Database type.
   */
  "databaseType"?: model.DatabaseType;
  /**
   * SQL query to be executed.
   */
  "query"?: string;
  "databaseAuthenticationDetails"?: model.BasicAuthenticationDetails;
  /**
   * Database role.
   */
  "databaseRole"?: string;
  /**
   * Database connection type. Only CUSTOM_JDBC is supported for MYSQL database type.
   */
  "databaseConnectionType"?: model.DatabaseConnectionType;
  /**
   * Database connection string.
   */
  "connectionString"?: string;
  "databaseWalletDetails"?: model.DatabaseWalletDetails;

  "configType": string;
}

export namespace SqlMonitorConfiguration {
  export function getJsonObj(obj: SqlMonitorConfiguration, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MonitorConfiguration.getJsonObj(obj) as SqlMonitorConfiguration)),
      ...{
        "databaseAuthenticationDetails": obj.databaseAuthenticationDetails
          ? model.BasicAuthenticationDetails.getJsonObj(obj.databaseAuthenticationDetails)
          : undefined,

        "databaseWalletDetails": obj.databaseWalletDetails
          ? model.DatabaseWalletDetails.getJsonObj(obj.databaseWalletDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const configType = "SQL_CONFIG";
  export function getDeserializedJsonObj(
    obj: SqlMonitorConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MonitorConfiguration.getDeserializedJsonObj(obj) as SqlMonitorConfiguration)),
      ...{
        "databaseAuthenticationDetails": obj.databaseAuthenticationDetails
          ? model.BasicAuthenticationDetails.getDeserializedJsonObj(
              obj.databaseAuthenticationDetails
            )
          : undefined,

        "databaseWalletDetails": obj.databaseWalletDetails
          ? model.DatabaseWalletDetails.getDeserializedJsonObj(obj.databaseWalletDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
