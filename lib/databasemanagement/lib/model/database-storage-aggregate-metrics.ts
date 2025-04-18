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
 * The database storage metric values.
 */
export interface DatabaseStorageAggregateMetrics {
  "storageAllocated"?: model.MetricDataPoint;
  "storageUsed"?: model.MetricDataPoint;
  /**
   * A list of the storage metrics grouped by TableSpace for a specific Managed Database.
   */
  "storageUsedByTableSpace"?: Array<model.MetricDataPoint>;
}

export namespace DatabaseStorageAggregateMetrics {
  export function getJsonObj(obj: DatabaseStorageAggregateMetrics): object {
    const jsonObj = {
      ...obj,
      ...{
        "storageAllocated": obj.storageAllocated
          ? model.MetricDataPoint.getJsonObj(obj.storageAllocated)
          : undefined,
        "storageUsed": obj.storageUsed
          ? model.MetricDataPoint.getJsonObj(obj.storageUsed)
          : undefined,
        "storageUsedByTableSpace": obj.storageUsedByTableSpace
          ? obj.storageUsedByTableSpace.map(item => {
              return model.MetricDataPoint.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseStorageAggregateMetrics): object {
    const jsonObj = {
      ...obj,
      ...{
        "storageAllocated": obj.storageAllocated
          ? model.MetricDataPoint.getDeserializedJsonObj(obj.storageAllocated)
          : undefined,
        "storageUsed": obj.storageUsed
          ? model.MetricDataPoint.getDeserializedJsonObj(obj.storageUsed)
          : undefined,
        "storageUsedByTableSpace": obj.storageUsedByTableSpace
          ? obj.storageUsedByTableSpace.map(item => {
              return model.MetricDataPoint.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
