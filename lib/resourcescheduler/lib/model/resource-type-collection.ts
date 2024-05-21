/**
 * Resource Scheduler API
 * Use the Resource scheduler API to manage schedules, to perform actions on a collection of resources.
 * OpenAPI spec version: 20240430
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * This is the collection of resource types supported by resource scheduler.
 *
 */
export interface ResourceTypeCollection {
  /**
   * This is the collection of resource types supported by resource scheduler.
   */
  "items": Array<model.ResourceType>;
}

export namespace ResourceTypeCollection {
  export function getJsonObj(obj: ResourceTypeCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ResourceType.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResourceTypeCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ResourceType.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}