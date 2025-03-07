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
 * Inventory details.
 */
export interface SqlInsightThresholds {
  /**
   * Degradation Percent Threshold is used to derive degrading SQLs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "degradationInPct": number;
  /**
   * Variability Percent Threshold is used to derive variant SQLs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "variability": number;
  /**
   * Inefficiency Percent Threshold is used to derive inefficient SQLs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inefficiencyInPct": number;
  /**
   * PctIncreaseInIO is used for deriving insights for SQLs which are degrading or
   * variant or inefficient. And these SQLs should also have increasing change in IO Time
   * beyond threshold. Insights are derived using linear regression.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "increaseInIOInPct": number;
  /**
   * PctIncreaseInCPU is used for deriving insights for SQLs which are degrading or
   * variant or inefficient. And these SQLs should also have increasing change in CPU Time
   * beyond threshold. Insights are derived using linear regression.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "increaseInCPUInPct": number;
  /**
   * PctIncreaseInIO is used for deriving insights for SQLs which are degrading or
   * variant or inefficient. And these SQLs should also have increasing change in
   * Other Wait Time beyond threshold. Insights are derived using linear regression.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "increaseInInefficientWaitInPct": number;
  /**
   * Improved Percent Threshold is used to derive improving SQLs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "improvedInPct": number;
}

export namespace SqlInsightThresholds {
  export function getJsonObj(obj: SqlInsightThresholds): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlInsightThresholds): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
