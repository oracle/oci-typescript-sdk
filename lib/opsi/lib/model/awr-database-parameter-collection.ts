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
 * The AWR database parameter data.
 */
export interface AwrDatabaseParameterCollection extends model.AwrQueryResult {
  /**
   * A list of AWR database parameter summary data.
   */
  "items"?: Array<model.AwrDatabaseParameterSummary>;

  "awrResultType": string;
}

export namespace AwrDatabaseParameterCollection {
  export function getJsonObj(
    obj: AwrDatabaseParameterCollection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AwrQueryResult.getJsonObj(obj) as AwrDatabaseParameterCollection)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AwrDatabaseParameterSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const awrResultType = "AWRDB_DB_PARAMETER_SET";
  export function getDeserializedJsonObj(
    obj: AwrDatabaseParameterCollection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AwrQueryResult.getDeserializedJsonObj(obj) as AwrDatabaseParameterCollection)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AwrDatabaseParameterSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
