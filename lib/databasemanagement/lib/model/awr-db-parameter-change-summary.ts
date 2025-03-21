/**
 * Database Management API
 * Use the Database Management API to monitor and manage resources such as
Oracle Databases, MySQL Databases, and External Database Systems. 
For more information, see [Database Management](https://docs.oracle.com/iaas/database-management/home.htm).

 * OpenAPI spec version: 20201101
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
 * A summary of the changes made to a single AWR database parameter.
 */
export interface AwrDbParameterChangeSummary {
  /**
   * The start time of the interval.
   */
  "timeBegin"?: Date;
  /**
   * The end time of the interval.
   */
  "timeEnd"?: Date;
  /**
   * The database instance number. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "instanceNumber"?: number;
  /**
   * The previous value of the database parameter.
   */
  "previousValue"?: string;
  /**
   * The current value of the database parameter.
   */
  "value"?: string;
  /**
   * The ID of the snapshot with the parameter value changed. The snapshot ID is not the [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   * It can be retrieved from the following endpoint:
   * /managedDatabases/{managedDatabaseId}/awrDbs/{awrDbId}/awrDbSnapshots
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "snapshotId": number;
  /**
   * Indicates whether the parameter has been modified after instance startup:
   *  - MODIFIED - Parameter has been modified with ALTER SESSION
   *  - SYSTEM_MOD - Parameter has been modified with ALTER SYSTEM (which causes all the currently logged in sessions\u2019 values to be modified)
   *  - FALSE - Parameter has not been modified after instance startup
   *
   */
  "valueModified"?: string;
  /**
   * Indicates whether the parameter value in the end snapshot is the default.
   */
  "isDefault"?: boolean;
}

export namespace AwrDbParameterChangeSummary {
  export function getJsonObj(obj: AwrDbParameterChangeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AwrDbParameterChangeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
