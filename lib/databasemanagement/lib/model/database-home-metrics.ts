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
 * The response containing the metric collection for a specific Managed Database.
 */
export interface DatabaseHomeMetrics {
  "databaseHomeMetrics": model.DatabaseHomeMetricDefinition;
  /**
   * The metrics for the RAC database instances.
   */
  "databaseInstanceHomeMetrics"?: Array<model.DatabaseInstanceHomeMetricsDefinition>;
}

export namespace DatabaseHomeMetrics {
  export function getJsonObj(obj: DatabaseHomeMetrics): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseHomeMetrics": obj.databaseHomeMetrics
          ? model.DatabaseHomeMetricDefinition.getJsonObj(obj.databaseHomeMetrics)
          : undefined,
        "databaseInstanceHomeMetrics": obj.databaseInstanceHomeMetrics
          ? obj.databaseInstanceHomeMetrics.map(item => {
              return model.DatabaseInstanceHomeMetricsDefinition.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseHomeMetrics): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseHomeMetrics": obj.databaseHomeMetrics
          ? model.DatabaseHomeMetricDefinition.getDeserializedJsonObj(obj.databaseHomeMetrics)
          : undefined,
        "databaseInstanceHomeMetrics": obj.databaseInstanceHomeMetrics
          ? obj.databaseInstanceHomeMetrics.map(item => {
              return model.DatabaseInstanceHomeMetricsDefinition.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
