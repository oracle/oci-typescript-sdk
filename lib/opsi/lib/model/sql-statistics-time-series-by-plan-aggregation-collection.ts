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
 * SQL performance statistics by plan over the selected time window.
 *
 */
export interface SqlStatisticsTimeSeriesByPlanAggregationCollection {
  /**
   * Unique SQL_ID for a SQL Statement.
   *
   */
  "sqlIdentifier": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database insight resource.
   */
  "id": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database.
   */
  "databaseId": string;
  /**
   * The start timestamp that was passed into the request.
   */
  "timeIntervalStart": Date;
  /**
   * The end timestamp that was passed into the request.
   */
  "timeIntervalEnd": Date;
  /**
   * Time duration in milliseconds between data points (one hour or one day).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "itemDurationInMs": number;
  /**
   * Array comprising of all the sampling period end timestamps in RFC 3339 format.
   */
  "endTimestamps": Array<Date>;
  /**
   * array of SQL performance statistics by plans
   */
  "items": Array<model.SqlStatisticsTimeSeriesByPlanAggregation>;
}

export namespace SqlStatisticsTimeSeriesByPlanAggregationCollection {
  export function getJsonObj(obj: SqlStatisticsTimeSeriesByPlanAggregationCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.SqlStatisticsTimeSeriesByPlanAggregation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: SqlStatisticsTimeSeriesByPlanAggregationCollection
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.SqlStatisticsTimeSeriesByPlanAggregation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
