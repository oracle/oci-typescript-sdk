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
 * Parameters are created and assigned values that can be configured for each integration task.
 */
export interface Parameter extends model.TypedObject {
  /**
   * This can either be a string value referencing the type or a BaseType object.
   */
  "type"?: any;
  /**
   * The default value of the parameter.
   */
  "defaultValue"?: any;
  /**
   * The default value of the parameter which can be an object in DIS, such as a data entity.
   */
  "rootObjectDefaultValue"?: any;
  /**
   * Specifies whether the parameter is input value.
   */
  "isInput"?: boolean;
  /**
   * Specifies whether the parameter is output value.
   */
  "isOutput"?: boolean;
  /**
   * The output aggregation type.
   */
  "outputAggregationType"?: Parameter.OutputAggregationType;
  /**
   * The type of value the parameter was created for.
   */
  "typeName"?: string;
  /**
   * The param name for which parameter is created for for eg. driver Shape, Operation etc.
   */
  "usedFor"?: string;

  "modelType": string;
}

export namespace Parameter {
  export enum OutputAggregationType {
    Min = "MIN",
    Max = "MAX",
    Count = "COUNT",
    Sum = "SUM",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Parameter, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TypedObject.getJsonObj(obj) as Parameter)),
      ...{}
    };

    return jsonObj;
  }
  export const modelType = "PARAMETER";
  export function getDeserializedJsonObj(obj: Parameter, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TypedObject.getDeserializedJsonObj(obj) as Parameter)),
      ...{}
    };

    return jsonObj;
  }
}
