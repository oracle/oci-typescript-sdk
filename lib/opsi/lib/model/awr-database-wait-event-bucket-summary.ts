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
 * A summary of the AWR wait event bucket and waits percentage.
 */
export interface AwrDatabaseWaitEventBucketSummary {
  /**
   * The name of the wait event frequency category. Normally, it is the upper range of the waits within the AWR wait event bucket.
   */
  "category": string;
  /**
   * The percentage of waits in a wait event bucket over the total waits of the database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentage": number;
}

export namespace AwrDatabaseWaitEventBucketSummary {
  export function getJsonObj(obj: AwrDatabaseWaitEventBucketSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AwrDatabaseWaitEventBucketSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
