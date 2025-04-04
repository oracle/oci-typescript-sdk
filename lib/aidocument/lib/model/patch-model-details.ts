/**
 * Document Understanding API
 * Document AI helps customers perform various analysis on their documents. If a customer has lots of documents, they can process them in batch using asynchronous API endpoints.
 * OpenAPI spec version: 20221109
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
 * The model parameters to be updated using patch operation.
 */
export interface PatchModelDetails {
  /**
   * A list of patch operations for model.
   */
  "operations"?: Array<model.PatchModelOperation>;
}

export namespace PatchModelDetails {
  export function getJsonObj(obj: PatchModelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "operations": obj.operations
          ? obj.operations.map(item => {
              return model.PatchModelOperation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PatchModelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "operations": obj.operations
          ? obj.operations.map(item => {
              return model.PatchModelOperation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
