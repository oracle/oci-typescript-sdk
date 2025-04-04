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
 * Action of an entity
 */
export interface EntityAction {
  /**
   * Name of an entity action
   */
  "name": string;
  /**
   * Type of CRUD operation for entity action
   */
  "crudType"?: string;
  "naturalLanguageMapping"?: model.EntityActionNaturalLanguageMapping;
  /**
   * List of entity action arguments
   */
  "arguments": Array<model.EntityActionArgument>;
}

export namespace EntityAction {
  export function getJsonObj(obj: EntityAction): object {
    const jsonObj = {
      ...obj,
      ...{
        "naturalLanguageMapping": obj.naturalLanguageMapping
          ? model.EntityActionNaturalLanguageMapping.getJsonObj(obj.naturalLanguageMapping)
          : undefined,
        "arguments": obj.arguments
          ? obj.arguments.map(item => {
              return model.EntityActionArgument.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EntityAction): object {
    const jsonObj = {
      ...obj,
      ...{
        "naturalLanguageMapping": obj.naturalLanguageMapping
          ? model.EntityActionNaturalLanguageMapping.getDeserializedJsonObj(
              obj.naturalLanguageMapping
            )
          : undefined,
        "arguments": obj.arguments
          ? obj.arguments.map(item => {
              return model.EntityActionArgument.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
