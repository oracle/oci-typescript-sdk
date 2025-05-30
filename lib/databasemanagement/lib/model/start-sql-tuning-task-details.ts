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
 * The request to start a SQL tuning task.
 * It takes either credentialDetails or databaseCredential. It's recommended to provide databaseCredential
 *
 */
export interface StartSqlTuningTaskDetails {
  /**
   * The name of the SQL tuning task. The name is unique per user in a database, and it is case-sensitive.
   */
  "taskName": string;
  /**
   * The description of the SQL tuning task.
   */
  "taskDescription"?: string;
  "credentialDetails"?:
    | model.SqlTuningTaskSecretCredentialDetails
    | model.SqlTuningTaskPasswordCredentialDetails;
  "databaseCredential"?:
    | model.DatabaseSecretCredentialDetails
    | model.DatabaseNamedCredentialDetails
    | model.DatabasePasswordCredentialDetails;
  /**
   * The time limit for running the SQL tuning task. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalTimeLimitInMinutes": number;
  /**
   * The scope for the SQL tuning task. For LIMITED scope, the SQL profile recommendation
   * is excluded, so the task is executed faster. For COMPREHENSIVE scope, the SQL profile recommendation
   * is included.
   *
   */
  "scope": StartSqlTuningTaskDetails.Scope;
  /**
   * The time limit per SQL statement (in minutes). This is for a task with the COMPREHENSIVE scope.
   * The time limit per SQL statement should not be more than the total time limit.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "statementTimeLimitInMinutes"?: number;
  "sqlTuningSet"?: model.SqlTuningSetInput;
  /**
   * The details of the SQL statement on which tuning is performed.
   * To obtain the details of the SQL statement, you must provide either the sqlTuningSet
   * or the tuple of sqlDetails/timeStarted/timeEnded.
   *
   */
  "sqlDetails"?: Array<model.SqlTuningTaskSqlDetail>;
  /**
   * The start time of the period in which SQL statements are running.
   */
  "timeStarted"?: Date;
  /**
   * The end time of the period in which SQL statements are running.
   */
  "timeEnded"?: Date;
}

export namespace StartSqlTuningTaskDetails {
  export enum Scope {
    Limited = "LIMITED",
    Comprehensive = "COMPREHENSIVE"
  }

  export function getJsonObj(obj: StartSqlTuningTaskDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentialDetails": obj.credentialDetails
          ? model.SqlTuningTaskCredentialDetails.getJsonObj(obj.credentialDetails)
          : undefined,
        "databaseCredential": obj.databaseCredential
          ? model.DatabaseCredentialDetails.getJsonObj(obj.databaseCredential)
          : undefined,

        "sqlTuningSet": obj.sqlTuningSet
          ? model.SqlTuningSetInput.getJsonObj(obj.sqlTuningSet)
          : undefined,
        "sqlDetails": obj.sqlDetails
          ? obj.sqlDetails.map(item => {
              return model.SqlTuningTaskSqlDetail.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: StartSqlTuningTaskDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentialDetails": obj.credentialDetails
          ? model.SqlTuningTaskCredentialDetails.getDeserializedJsonObj(obj.credentialDetails)
          : undefined,
        "databaseCredential": obj.databaseCredential
          ? model.DatabaseCredentialDetails.getDeserializedJsonObj(obj.databaseCredential)
          : undefined,

        "sqlTuningSet": obj.sqlTuningSet
          ? model.SqlTuningSetInput.getDeserializedJsonObj(obj.sqlTuningSet)
          : undefined,
        "sqlDetails": obj.sqlDetails
          ? obj.sqlDetails.map(item => {
              return model.SqlTuningTaskSqlDetail.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
