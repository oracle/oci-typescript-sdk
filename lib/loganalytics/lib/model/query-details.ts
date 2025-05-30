/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Input arguments for running a log anlaytics query. If the request is set to run in asynchronous mode
 * then shouldIncludeColumns and shouldIncludeFields can be overwritten when retrieving the results.
 *
 */
export interface QueryDetails {
  /**
   * Compartment Identifier [OCID] (https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * Flag to search all child compartments of the compartment Id specified in the compartmentId query parameter.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * Saved search OCID for this query if known.
   *
   */
  "savedSearchId"?: string;
  /**
   * Query to perform. Must conform to logging analytic querylanguage syntax. Syntax errors will be returned if present.
   */
  "queryString": string;
  /**
   * Default subsystem to qualify fields with in the queryString if not specified.
   *
   */
  "subSystem": model.SubSystemName;
  /**
   * Maximum number of results to count.  Note a maximum of 2001 will be enforced; that is, actualMaxTotalCountUsed = Math.min(maxTotalCount, 2001).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxTotalCount"?: number;
  "timeFilter"?: model.TimeRange;
  /**
   * List of filters to be applied when the query executes. More than one filter per field is not permitted.
   *
   */
  "scopeFilters"?: Array<model.ScopeFilter>;
  /**
   * Amount of time, in seconds, allowed for a query to execute. If this time expires before the query is complete, any partial results will be returned. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "queryTimeoutInSeconds"?: number;
  /**
   * Option to run the query asynchronously. This will lead to a LogAnalyticsQueryJobWorkRequest being submitted and the {workRequestId} will be returned to use for fetching the results.
   *
   */
  "shouldRunAsync"?: boolean;
  /**
   * Execution mode for the query if running asynchronously i.e (shouldRunAsync is set to true).
   */
  "asyncMode"?: model.JobMode;
  /**
   * Include the total number of results from the query. Note, this value will always be equal to or less than maxTotalCount.
   */
  "shouldIncludeTotalCount"?: boolean;
  /**
   * Include columns in response
   */
  "shouldIncludeColumns"?: boolean;
  /**
   * Include fields in response
   */
  "shouldIncludeFields"?: boolean;
  /**
   * Controls if query should ignore pre-calculated results if available and only use raw data. If set and no acceleration data is found it will fallback to raw data.
   *
   */
  "shouldUseAcceleration"?: boolean;
}

export namespace QueryDetails {
  export function getJsonObj(obj: QueryDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "timeFilter": obj.timeFilter ? model.TimeRange.getJsonObj(obj.timeFilter) : undefined,
        "scopeFilters": obj.scopeFilters
          ? obj.scopeFilters.map(item => {
              return model.ScopeFilter.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: QueryDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "timeFilter": obj.timeFilter
          ? model.TimeRange.getDeserializedJsonObj(obj.timeFilter)
          : undefined,
        "scopeFilters": obj.scopeFilters
          ? obj.scopeFilters.map(item => {
              return model.ScopeFilter.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
