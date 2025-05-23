/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * A source that depends on or uses the resource such as a field or a parser
 */
export interface DependentSource {
  /**
   * The source name.
   */
  "sourceName"?: string;
  /**
   * The source display name.
   */
  "sourceDisplayName"?: string;
  /**
   * The source unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sourceId"?: number;
  /**
   * The source type.
   */
  "sourceType"?: string;
  /**
   * The system flag.  A value of false denotes a custom, or user
   * defined object.  A value of true denotes a built in object.
   *
   */
  "isSystem"?: boolean;
  /**
   * A flag indicating whether or not the source is marked for auto association.
   *
   */
  "isAutoAssociationEnabled"?: boolean;
  /**
   * The entity types.
   */
  "entityTypes"?: Array<model.LogAnalyticsSourceEntityType>;
  /**
   * The list of dependencies defined by the source.
   */
  "dependencies"?: Array<model.Dependency>;
}

export namespace DependentSource {
  export function getJsonObj(obj: DependentSource): object {
    const jsonObj = {
      ...obj,
      ...{
        "entityTypes": obj.entityTypes
          ? obj.entityTypes.map(item => {
              return model.LogAnalyticsSourceEntityType.getJsonObj(item);
            })
          : undefined,
        "dependencies": obj.dependencies
          ? obj.dependencies.map(item => {
              return model.Dependency.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DependentSource): object {
    const jsonObj = {
      ...obj,
      ...{
        "entityTypes": obj.entityTypes
          ? obj.entityTypes.map(item => {
              return model.LogAnalyticsSourceEntityType.getDeserializedJsonObj(item);
            })
          : undefined,
        "dependencies": obj.dependencies
          ? obj.dependencies.map(item => {
              return model.Dependency.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
