/**
 * Anomaly Detection API
 * OCI AI Service solutions can help Enterprise customers integrate AI into their products immediately by using our proven,
pre-trained/custom models or containers, and without a need to set up in house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI/ML operations, shortening the time to market.

 * OpenAPI spec version: 20210101
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
 * This is the specialized JSON format that is accepted as training data, with an additional
 * field for 'requestType'. This is a required field used deciding whether it is an inline
 * request or contains embedded data.
 *
 */
export interface InlineInputDetails extends model.InputDetails {
  /**
   * List of signal names.
   */
  "signalNames": Array<string>;
  /**
   * Array containing data.
   */
  "data": Array<model.DataItem>;

  "inputType": string;
}

export namespace InlineInputDetails {
  export function getJsonObj(obj: InlineInputDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.InputDetails.getJsonObj(obj) as InlineInputDetails)),
      ...{
        "data": obj.data
          ? obj.data.map(item => {
              return model.DataItem.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const inputType = "INLINE";
  export function getDeserializedJsonObj(
    obj: InlineInputDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InputDetails.getDeserializedJsonObj(obj) as InlineInputDetails)),
      ...{
        "data": obj.data
          ? obj.data.map(item => {
              return model.DataItem.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
