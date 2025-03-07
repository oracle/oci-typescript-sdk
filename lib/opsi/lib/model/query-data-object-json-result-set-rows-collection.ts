/**
 * Ops Insights API
 * Use the Ops Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Ops Insights](https://docs.oracle.com/iaas/en-us/iaas/operations-insights/doc/operations-insights.html).

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
 * Collection of result set rows from the data object query.
 */
export interface QueryDataObjectJsonResultSetRowsCollection
  extends model.QueryDataObjectResultSetRowsCollection {
  /**
   * Array of result set rows.
   */
  "items": Array<any>;
  /**
   * Array of QueryDataObjectResultSetColumnMetadata objects that describe the result set columns.
   */
  "itemsMetadata": Array<model.QueryDataObjectResultSetColumnMetadata>;
  /**
   * Time taken for executing the data object query (in seconds).
   * Consider optimizing the query or reducing the target data range, if query execution time is longer.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "queryExecutionTimeInSeconds"?: number;

  "format": string;
}

export namespace QueryDataObjectJsonResultSetRowsCollection {
  export function getJsonObj(
    obj: QueryDataObjectJsonResultSetRowsCollection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.QueryDataObjectResultSetRowsCollection.getJsonObj(
            obj
          ) as QueryDataObjectJsonResultSetRowsCollection)),
      ...{
        "itemsMetadata": obj.itemsMetadata
          ? obj.itemsMetadata.map(item => {
              return model.QueryDataObjectResultSetColumnMetadata.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const format = "JSON";
  export function getDeserializedJsonObj(
    obj: QueryDataObjectJsonResultSetRowsCollection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.QueryDataObjectResultSetRowsCollection.getDeserializedJsonObj(
            obj
          ) as QueryDataObjectJsonResultSetRowsCollection)),
      ...{
        "itemsMetadata": obj.itemsMetadata
          ? obj.itemsMetadata.map(item => {
              return model.QueryDataObjectResultSetColumnMetadata.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
