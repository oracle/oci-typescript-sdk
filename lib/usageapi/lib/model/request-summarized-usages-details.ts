/**
 * Usage API
 * A description of the UsageApi API.
 * OpenAPI spec version: 20200107
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * details for the '/usage' query
 */
export interface RequestSummarizedUsagesDetails {
  /**
   * tenant id
   */
  "tenantId": string;
  /**
   * The start time of the usage.
   */
  "timeUsageStarted": Date;
  /**
   * The end time of the usage.
   */
  "timeUsageEnded": Date;
  /**
   * The granularity of the usage.
   * HOURLY - Hourly aggregation of data
   * DAILY - Daily aggregation of data
   * MONTHLY - Monthly aggregation of data
   * TOTAL - Not Supported Yet
   *
   */
  "granularity": RequestSummarizedUsagesDetails.Granularity;
  /**
   * The type of query of the usage.
   * Usage - Query the usage data.
   * Cost - Query the cost / billing data.
   *
   */
  "queryType"?: RequestSummarizedUsagesDetails.QueryType;
  /**
   * Aggregate the result by.
   * example:
   *   `[\"service\"]`
   *
   */
  "groupBy"?: Array<string>;
  /**
   * The depth level of the compartment.
   */
  "compartmentDepth"?: number;
  "filter"?: model.Filter;
}

export namespace RequestSummarizedUsagesDetails {
  export enum Granularity {
    Hourly = "HOURLY",
    Daily = "DAILY",
    Monthly = "MONTHLY",
    Total = "TOTAL"
  }

  export enum QueryType {
    Usage = "USAGE",
    Cost = "COST"
  }

  export function getJsonObj(obj: RequestSummarizedUsagesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "filter": obj.filter ? model.Filter.getJsonObj(obj.filter) : undefined
      }
    };

    return jsonObj;
  }
}