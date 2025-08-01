/**
 * APIP Control Plane API
 * Control Plane designed to manage lifecycle of APIP Instances
 * OpenAPI spec version: 20240829
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
 * Results of a search. Contains both InstanceSummary items and other information, such as metadata.
 */
export interface ApiPlatformInstanceCollection {
  /**
   * List of APIP instances
   */
  "items": Array<model.ApiPlatformInstanceSummary>;
}

export namespace ApiPlatformInstanceCollection {
  export function getJsonObj(obj: ApiPlatformInstanceCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ApiPlatformInstanceSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApiPlatformInstanceCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ApiPlatformInstanceSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
