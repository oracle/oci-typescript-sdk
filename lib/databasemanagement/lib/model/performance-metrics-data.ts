/**
 * Database Management API
 * Use the Database Management API to monitor and manage resources such as
Oracle Databases, MySQL Databases, and External Database Systems. 
For more information, see [Database Management](/iaas/database-management/home.htm).

 * OpenAPI spec version: 20201101
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
 * The list of Data Guard performance metrics for Managed Databases.
 */
export interface PerformanceMetricsData {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which the Managed Database resides.
   */
  "compartmentId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Managed Database.
   */
  "resourceId"?: string;
  /**
   * The ID of the primary database.
   */
  "primaryDbId"?: string;
  /**
   * The primary database unique name of the Managed Database.
   */
  "primaryDbUniqueName"?: string;
  /**
   * The database ID of the Managed Database. Every database had its own ID and that value is captured here.
   */
  "databaseId"?: string;
  /**
   * The database unique name of the Managed Database.
   */
  "dbUniqueName"?: string;
  /**
   * The deployment type of the Managed Database.
   */
  "deploymentType"?: string;
  /**
   * The resource name of the Managed Database.
   */
  "resourceName"?: string;
  /**
   * The database role of the Managed Database.
   */
  "dbRole"?: model.DbRole;
  /**
   * The list of Data Guard performance metrics such as ApplyLag, TransportLag and RedoApplyRate for the Managed Databases.
   */
  "metrics"?: Array<model.PerformanceMetrics>;
}

export namespace PerformanceMetricsData {
  export function getJsonObj(obj: PerformanceMetricsData): object {
    const jsonObj = {
      ...obj,
      ...{
        "metrics": obj.metrics
          ? obj.metrics.map(item => {
              return model.PerformanceMetrics.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PerformanceMetricsData): object {
    const jsonObj = {
      ...obj,
      ...{
        "metrics": obj.metrics
          ? obj.metrics.map(item => {
              return model.PerformanceMetrics.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}