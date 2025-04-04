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
 * The AWR snapshot summary of one snapshot.
 */
export interface AwrDatabaseSnapshotSummary {
  /**
   * Internal ID of the database. The internal ID of the database is not the [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   * It can be retrieved from the following endpoint:
   * /awrHubs/{awrHubId}/awrDatabases
   *
   */
  "awrSourceDatabaseIdentifier": string;
  /**
   * The database instance number. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "instanceNumber"?: number;
  /**
   * The timestamp of the database startup.
   */
  "timeDbStartup"?: Date;
  /**
   * The start time of the snapshot.
   */
  "timeBegin"?: Date;
  /**
   * The end time of the snapshot.
   */
  "timeEnd"?: Date;
  /**
   * The ID of the snapshot. The snapshot identifier is not the [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   * It can be retrieved from the following endpoint:
   * /awrHubs/{awrHubId}/awrDbSnapshots
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "snapshotIdentifier": number;
  /**
   * The total number of errors. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "errorCount"?: number;
}

export namespace AwrDatabaseSnapshotSummary {
  export function getJsonObj(obj: AwrDatabaseSnapshotSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AwrDatabaseSnapshotSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
