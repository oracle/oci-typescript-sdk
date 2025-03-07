/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information about the SQL task.
 */
export interface TaskFromSQLTaskDetails extends model.Task {
  "script"?: model.Script;
  /**
   * Indicates whether the task is invoking a custom SQL script or stored procedure.
   */
  "sqlScriptType"?: TaskFromSQLTaskDetails.SqlScriptType;
  /**
   * Describes the shape of the execution result
   */
  "operation"?: any;

  "modelType": string;
}

export namespace TaskFromSQLTaskDetails {
  export enum SqlScriptType {
    StoredProcedure = "STORED_PROCEDURE",
    SqlCode = "SQL_CODE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TaskFromSQLTaskDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Task.getJsonObj(obj) as TaskFromSQLTaskDetails)),
      ...{
        "script": obj.script ? model.Script.getJsonObj(obj.script) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "SQL_TASK";
  export function getDeserializedJsonObj(
    obj: TaskFromSQLTaskDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Task.getDeserializedJsonObj(obj) as TaskFromSQLTaskDetails)),
      ...{
        "script": obj.script ? model.Script.getDeserializedJsonObj(obj.script) : undefined
      }
    };

    return jsonObj;
  }
}
