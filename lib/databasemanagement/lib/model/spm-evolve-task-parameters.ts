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
 * The set of parameters used in an SPM evolve task.
 */
export interface SpmEvolveTaskParameters {
  /**
   * Determines which sources to search for additional plans.
   */
  "alternatePlanSources"?: Array<SpmEvolveTaskParameters.AlternatePlanSources>;
  /**
   * Determines which alternative plans should be loaded.
   */
  "alternatePlanBaselines"?: Array<SpmEvolveTaskParameters.AlternatePlanBaselines>;
  /**
   * Specifies the maximum number of plans to load in total (that is, not
   * the limit for each SQL statement). A value of zero indicates {@code UNLIMITED}
   * number of plans.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "alternatePlanLimit"?: number;
  /**
   * Specifies whether to accept recommended plans automatically.
   */
  "arePlansAutoAccepted"?: boolean;
  /**
   * The global time limit in seconds. This is the total time allowed for the task. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "allowedTimeLimit"?: number;
}

export namespace SpmEvolveTaskParameters {
  export enum AlternatePlanSources {
    Auto = "AUTO",
    AutomaticWorkloadRepository = "AUTOMATIC_WORKLOAD_REPOSITORY",
    CursorCache = "CURSOR_CACHE",
    SqlTuningSet = "SQL_TUNING_SET",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum AlternatePlanBaselines {
    Auto = "AUTO",
    Existing = "EXISTING",
    New = "NEW",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SpmEvolveTaskParameters): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SpmEvolveTaskParameters): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
