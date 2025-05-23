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
 * Usage and Forecast results from the selected time period.
 */
export interface SummarizeExadataInsightResourceForecastTrendAggregation {
  /**
   * The start timestamp that was passed into the request.
   */
  "timeIntervalStart": Date;
  /**
   * The end timestamp that was passed into the request.
   */
  "timeIntervalEnd": Date;
  /**
   * Defines the type of exadata resource metric (example: CPU, STORAGE)
   *
   */
  "exadataResourceMetric": SummarizeExadataInsightResourceForecastTrendAggregation.ExadataResourceMetric;
  /**
   * Defines the resource type for an exadata  (example: DATABASE, STORAGE_SERVER, HOST, DISKGROUP)
   *
   */
  "exadataResourceType": SummarizeExadataInsightResourceForecastTrendAggregation.ExadataResourceType;
  /**
   * Displays usage unit ( CORES, GB , PERCENT, MBPS)
   */
  "usageUnit": SummarizeExadataInsightResourceForecastTrendAggregation.UsageUnit;
  /**
   * Auto-ML algorithm leveraged for the forecast. Only applicable for Auto-ML forecast.
   */
  "selectedForecastAlgorithm"?: string;
  /**
   * Time series patterns used in the forecasting.
   */
  "pattern": SummarizeExadataInsightResourceForecastTrendAggregation.Pattern;
  /**
   * Days to reach capacity for a storage server Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "daysToReachCapacity": number;
  /**
   * Time series data used for the forecast analysis.
   */
  "historicalData": Array<model.HistoricalDataItem>;
  /**
   * Time series data result of the forecasting analysis.
   */
  "projectedData": Array<model.ProjectedDataItem>;
}

export namespace SummarizeExadataInsightResourceForecastTrendAggregation {
  export enum ExadataResourceMetric {
    Cpu = "CPU",
    Storage = "STORAGE",
    Io = "IO",
    Memory = "MEMORY",
    Iops = "IOPS",
    Throughput = "THROUGHPUT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ExadataResourceType {
    Database = "DATABASE",
    Host = "HOST",
    StorageServer = "STORAGE_SERVER",
    Diskgroup = "DISKGROUP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum UsageUnit {
    Cores = "CORES",
    Gb = "GB",
    Mbps = "MBPS",
    Iops = "IOPS",
    Percent = "PERCENT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Pattern {
    Linear = "LINEAR",
    MonthlySeasons = "MONTHLY_SEASONS",
    MonthlyAndYearlySeasons = "MONTHLY_AND_YEARLY_SEASONS",
    WeeklySeasons = "WEEKLY_SEASONS",
    WeeklyAndMonthlySeasons = "WEEKLY_AND_MONTHLY_SEASONS",
    WeeklyMonthlyAndYearlySeasons = "WEEKLY_MONTHLY_AND_YEARLY_SEASONS",
    WeeklyAndYearlySeasons = "WEEKLY_AND_YEARLY_SEASONS",
    YearlySeasons = "YEARLY_SEASONS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SummarizeExadataInsightResourceForecastTrendAggregation): object {
    const jsonObj = {
      ...obj,
      ...{
        "historicalData": obj.historicalData
          ? obj.historicalData.map(item => {
              return model.HistoricalDataItem.getJsonObj(item);
            })
          : undefined,
        "projectedData": obj.projectedData
          ? obj.projectedData.map(item => {
              return model.ProjectedDataItem.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: SummarizeExadataInsightResourceForecastTrendAggregation
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "historicalData": obj.historicalData
          ? obj.historicalData.map(item => {
              return model.HistoricalDataItem.getDeserializedJsonObj(item);
            })
          : undefined,
        "projectedData": obj.projectedData
          ? obj.projectedData.map(item => {
              return model.ProjectedDataItem.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
