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
 * ADDM summary for a database
 */
export interface AddmDbSummary {
  "databaseDetails": model.DatabaseDetails;
  /**
   * Number of ADDM findings Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numberOfFindings"?: number;
  /**
   * Number of ADDM tasks Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numberOfAddmTasks"?: number;
  /**
   * The start timestamp that was passed into the request.
   */
  "timeFirstSnapshotBegin"?: Date;
  /**
   * The end timestamp that was passed into the request.
   */
  "timeLatestSnapshotEnd"?: Date;
  /**
   * AWR snapshot id.
   */
  "snapshotIntervalStart"?: string;
  /**
   * AWR snapshot id.
   */
  "snapshotIntervalEnd"?: string;
  /**
   * Maximum overall impact in terms of percentage of total activity Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxOverallImpact"?: number;
  /**
   * Category name
   */
  "mostFrequentCategoryName"?: string;
  /**
   * Category display name
   */
  "mostFrequentCategoryDisplayName"?: string;
}

export namespace AddmDbSummary {
  export function getJsonObj(obj: AddmDbSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseDetails": obj.databaseDetails
          ? model.DatabaseDetails.getJsonObj(obj.databaseDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddmDbSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseDetails": obj.databaseDetails
          ? model.DatabaseDetails.getDeserializedJsonObj(obj.databaseDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
