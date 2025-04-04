/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * Natural language mapping of a static entity value.
 */
export interface StaticEntityValueNaturalLanguageMapping {
  /**
   * List of natural language mapped values.
   */
  "languages": Array<model.LanguageMapping>;
}

export namespace StaticEntityValueNaturalLanguageMapping {
  export function getJsonObj(obj: StaticEntityValueNaturalLanguageMapping): object {
    const jsonObj = {
      ...obj,
      ...{
        "languages": obj.languages
          ? obj.languages.map(item => {
              return model.LanguageMapping.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: StaticEntityValueNaturalLanguageMapping): object {
    const jsonObj = {
      ...obj,
      ...{
        "languages": obj.languages
          ? obj.languages.map(item => {
              return model.LanguageMapping.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
