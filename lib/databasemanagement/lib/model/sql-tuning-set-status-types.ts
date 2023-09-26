/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The status types of a Sql Tuning Set. Refer to the following documentaion for details https://docs.oracle.com/en/database/oracle/oracle-database/19/refrn/ALL_SCHEDULER_JOBS.html#GUID-D72A57AD-96EB-4FB9-A599-33CB238AFA62
 **/
export enum SqlTuningSetStatusTypes {
  Disabled = "DISABLED",
  RetryScheduled = "RETRY_SCHEDULED",
  Scheduled = "SCHEDULED",
  Blocked = "BLOCKED",
  Running = "RUNNING",
  Completed = "COMPLETED",
  Broken = "BROKEN",
  Failed = "FAILED",
  Remote = "REMOTE",
  ResourceUnavailable = "RESOURCE_UNAVAILABLE",
  Succeeded = "SUCCEEDED",
  ChainStalled = "CHAIN_STALLED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace SqlTuningSetStatusTypes {
  export function getJsonObj(obj: SqlTuningSetStatusTypes): SqlTuningSetStatusTypes {
    return obj;
  }
  export function getDeserializedJsonObj(obj: SqlTuningSetStatusTypes): SqlTuningSetStatusTypes {
    return obj;
  }
}