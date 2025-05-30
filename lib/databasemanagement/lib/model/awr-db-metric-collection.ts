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
 * The AWR metrics time series summary data.
 */
export interface AwrDbMetricCollection extends model.AwrQueryResult {
  /**
   * A list of AWR metric summary data.
   */
  "items"?: Array<model.AwrDbMetricSummary>;

  "awrResultType": string;
}

export namespace AwrDbMetricCollection {
  export function getJsonObj(obj: AwrDbMetricCollection, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.AwrQueryResult.getJsonObj(obj) as AwrDbMetricCollection)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AwrDbMetricSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const awrResultType = "AWRDB_METRICS_SET";
  export function getDeserializedJsonObj(
    obj: AwrDbMetricCollection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AwrQueryResult.getDeserializedJsonObj(obj) as AwrDbMetricCollection)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AwrDbMetricSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
