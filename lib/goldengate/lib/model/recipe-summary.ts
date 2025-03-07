/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The list of recipe details to create pipelines.
 *
 */
export interface RecipeSummary {
  /**
   * The type of the recipe
   *
   */
  "recipeType": model.RecipeType;
  /**
   * An object's Display Name.
   *
   */
  "name": string;
  /**
   * An object's Display Name.
   *
   */
  "displayName": string;
  /**
   * Metadata about this specific object.
   *
   */
  "description"?: string;
  /**
   * Array of supported technology types for this recipe.
   *
   */
  "supportedSourceTechnologyTypes": Array<model.TechnologyType>;
  /**
   * Array of supported technology types for this recipe.
   *
   */
  "supportedTargetTechnologyTypes": Array<model.TechnologyType>;
}

export namespace RecipeSummary {
  export function getJsonObj(obj: RecipeSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "supportedSourceTechnologyTypes": obj.supportedSourceTechnologyTypes
          ? obj.supportedSourceTechnologyTypes.map(item => {
              return model.TechnologyType.getJsonObj(item);
            })
          : undefined,
        "supportedTargetTechnologyTypes": obj.supportedTargetTechnologyTypes
          ? obj.supportedTargetTechnologyTypes.map(item => {
              return model.TechnologyType.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RecipeSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "supportedSourceTechnologyTypes": obj.supportedSourceTechnologyTypes
          ? obj.supportedSourceTechnologyTypes.map(item => {
              return model.TechnologyType.getDeserializedJsonObj(item);
            })
          : undefined,
        "supportedTargetTechnologyTypes": obj.supportedTargetTechnologyTypes
          ? obj.supportedTargetTechnologyTypes.map(item => {
              return model.TechnologyType.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
