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
 * The configuration details of a configurable object. This contains one or more config param definitions.
 */
export interface ConfigDefinition {
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
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * Specifies whether the configuration is contained or not.
   */
  "isContained"?: boolean;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * The parameter configuration details.
   */
  "configParameterDefinitions"?: { [key: string]: model.ConfigParameterDefinition };
}

export namespace ConfigDefinition {
  export function getJsonObj(obj: ConfigDefinition): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "configParameterDefinitions": obj.configParameterDefinitions
          ? common.mapContainer(
              obj.configParameterDefinitions,
              model.ConfigParameterDefinition.getJsonObj
            )
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConfigDefinition): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "configParameterDefinitions": obj.configParameterDefinitions
          ? common.mapContainer(
              obj.configParameterDefinitions,
              model.ConfigParameterDefinition.getDeserializedJsonObj
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
