/**
 * Speech API
 * The OCI Speech Service harnesses the power of spoken language by allowing developers to easily convert file-based data containing human speech into highly accurate text transcriptions.
 * OpenAPI spec version: 20220101
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
 * Entity List Dataset
 */
export interface EntityListDataset extends model.CustomizationDatasetDetails {
  /**
   * List of sentences referencing 1 or more entityType matching those defined in the linked entityLists, used to improve accuracy by providing model training context of where/how an entity may appear in a sentence.
   * EntityTypes referenced in sentences should be written in all caps surrounded by angled braces (i.e \"<PATIENT>\" if entityType=patient)
   *
   */
  "referenceExamples"?: Array<string>;
  /**
   * Array of entityLists
   */
  "entityList"?: Array<model.EntityList>;

  "datasetType": string;
}

export namespace EntityListDataset {
  export function getJsonObj(obj: EntityListDataset, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CustomizationDatasetDetails.getJsonObj(obj) as EntityListDataset)),
      ...{
        "entityList": obj.entityList
          ? obj.entityList.map(item => {
              return model.EntityList.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const datasetType = "ENTITY_LIST";
  export function getDeserializedJsonObj(
    obj: EntityListDataset,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CustomizationDatasetDetails.getDeserializedJsonObj(obj) as EntityListDataset)),
      ...{
        "entityList": obj.entityList
          ? obj.entityList.map(item => {
              return model.EntityList.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}