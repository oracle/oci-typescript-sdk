/**
 * OciControlCenterCp API
 * A description of the OciControlCenterCp API
 * OpenAPI spec version: 20231107
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
 * A list of capacity requests.
 */
export interface OccCapacityRequestCollection {
  /**
   * An array of capacity requests.
   */
  "items": Array<model.OccCapacityRequestSummary>;
}

export namespace OccCapacityRequestCollection {
  export function getJsonObj(obj: OccCapacityRequestCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.OccCapacityRequestSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OccCapacityRequestCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.OccCapacityRequestSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}