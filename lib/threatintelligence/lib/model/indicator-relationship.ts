/**
 * Threat Intelligence API
 * Use the Threat Intelligence API to view indicators of compromise and related items. For more information, see [Overview of Threat Intelligence](/Content/ThreatIntelligence/Concepts/threatintelligenceoverview.htm).
 * OpenAPI spec version: 20210831
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * An relationship name and list of releated entities.
 */
export interface IndicatorRelationship {
  /**
   * The name of the attribute
   */
  "name": string;
  "relatedEntity": model.IndicatorReference;
  /**
   * The array of attribution data that support this SourcedRelationship
   */
  "attribution": Array<model.DataAttribution>;
}

export namespace IndicatorRelationship {
  export function getJsonObj(obj: IndicatorRelationship): object {
    const jsonObj = {
      ...obj,
      ...{
        "relatedEntity": obj.relatedEntity
          ? model.EntityReference.getJsonObj(obj.relatedEntity)
          : undefined,
        "attribution": obj.attribution
          ? obj.attribution.map(item => {
              return model.DataAttribution.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IndicatorRelationship): object {
    const jsonObj = {
      ...obj,
      ...{
        "relatedEntity": obj.relatedEntity
          ? model.EntityReference.getDeserializedJsonObj(obj.relatedEntity)
          : undefined,
        "attribution": obj.attribution
          ? obj.attribution.map(item => {
              return model.DataAttribution.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}