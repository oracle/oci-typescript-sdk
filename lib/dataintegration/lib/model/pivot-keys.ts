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
 * The type representing the pivot key and pivot value details.
 */
export interface PivotKeys {
  /**
   * The pivot axis is the point around which the table will be rotated, and the pivot values will be transposed into columns in the output table.
   */
  "pivotAxis"?: Array<string>;
  /**
   * Map of alias to pivot key values.
   */
  "pivotKeyValueMap"?: { [key: string]: Array<string> };
  /**
   * The key of the object.
   */
  "key"?: string;
  /**
   * The type of the object.
   */
  "modelType"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
}

export namespace PivotKeys {
  export function getJsonObj(obj: PivotKeys): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PivotKeys): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined
      }
    };

    return jsonObj;
  }
}
