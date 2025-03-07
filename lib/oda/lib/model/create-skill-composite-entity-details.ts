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
 * Properties that are required to create a skill composite entity.
 */
export interface CreateSkillCompositeEntityDetails extends model.CreateSkillEntityDetails {
  /**
   * List of entity attributes.
   */
  "attributes": Array<model.EntityAttribute>;
  /**
   * List of entity actions.
   */
  "actions"?: Array<model.EntityAction>;
  "naturalLanguageMapping"?: model.EntityNaturalLanguageMapping;

  "type": string;
}

export namespace CreateSkillCompositeEntityDetails {
  export function getJsonObj(
    obj: CreateSkillCompositeEntityDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateSkillEntityDetails.getJsonObj(obj) as CreateSkillCompositeEntityDetails)),
      ...{
        "attributes": obj.attributes
          ? obj.attributes.map(item => {
              return model.EntityAttribute.getJsonObj(item);
            })
          : undefined,
        "actions": obj.actions
          ? obj.actions.map(item => {
              return model.EntityAction.getJsonObj(item);
            })
          : undefined,
        "naturalLanguageMapping": obj.naturalLanguageMapping
          ? model.EntityNaturalLanguageMapping.getJsonObj(obj.naturalLanguageMapping)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "COMPOSITE";
  export function getDeserializedJsonObj(
    obj: CreateSkillCompositeEntityDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateSkillEntityDetails.getDeserializedJsonObj(
            obj
          ) as CreateSkillCompositeEntityDetails)),
      ...{
        "attributes": obj.attributes
          ? obj.attributes.map(item => {
              return model.EntityAttribute.getDeserializedJsonObj(item);
            })
          : undefined,
        "actions": obj.actions
          ? obj.actions.map(item => {
              return model.EntityAction.getDeserializedJsonObj(item);
            })
          : undefined,
        "naturalLanguageMapping": obj.naturalLanguageMapping
          ? model.EntityNaturalLanguageMapping.getDeserializedJsonObj(obj.naturalLanguageMapping)
          : undefined
      }
    };

    return jsonObj;
  }
}
