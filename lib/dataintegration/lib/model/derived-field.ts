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
 * The type representing the derived field concept. Derived fields have an expression to define how to derive the field.
 */
export interface DerivedField extends model.TypedObject {
  "expr"?: model.Expression;
  /**
   * The type of the field.
   */
  "type"?: string;
  /**
   * Specifies whether to use inferred expression output type as output type of the derived field. Default value of this flag is false.
   */
  "isUseInferredType"?: boolean;
  /**
   * Labels are keywords or labels that you can add to data assets, dataflows and so on. You can define your own labels and use them to categorize content.
   */
  "labels"?: Array<string>;

  "modelType": string;
}

export namespace DerivedField {
  export function getJsonObj(obj: DerivedField, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TypedObject.getJsonObj(obj) as DerivedField)),
      ...{
        "expr": obj.expr ? model.Expression.getJsonObj(obj.expr) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "DERIVED_FIELD";
  export function getDeserializedJsonObj(obj: DerivedField, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TypedObject.getDeserializedJsonObj(obj) as DerivedField)),
      ...{
        "expr": obj.expr ? model.Expression.getDeserializedJsonObj(obj.expr) : undefined
      }
    };

    return jsonObj;
  }
}
