/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Query Properties applicable to SQL type of collection method
 */
export interface SqlQueryProperties extends model.MetricExtensionQueryProperties {
  /**
   * Type of SQL data collection method i.e. either a Statement or SQL Script File
   */
  "sqlType": model.SqlQueryTypes;
  "sqlDetails": model.SqlDetails;
  /**
   * List of values and position of PL/SQL procedure IN parameters
   */
  "inParamDetails"?: Array<model.SqlInParamDetails>;
  "outParamDetails"?: model.SqlOutParamDetails;

  "collectionMethod": string;
}

export namespace SqlQueryProperties {
  export function getJsonObj(obj: SqlQueryProperties, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MetricExtensionQueryProperties.getJsonObj(obj) as SqlQueryProperties)),
      ...{
        "sqlDetails": obj.sqlDetails ? model.SqlDetails.getJsonObj(obj.sqlDetails) : undefined,
        "inParamDetails": obj.inParamDetails
          ? obj.inParamDetails.map(item => {
              return model.SqlInParamDetails.getJsonObj(item);
            })
          : undefined,
        "outParamDetails": obj.outParamDetails
          ? model.SqlOutParamDetails.getJsonObj(obj.outParamDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const collectionMethod = "SQL";
  export function getDeserializedJsonObj(
    obj: SqlQueryProperties,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MetricExtensionQueryProperties.getDeserializedJsonObj(obj) as SqlQueryProperties)),
      ...{
        "sqlDetails": obj.sqlDetails
          ? model.SqlDetails.getDeserializedJsonObj(obj.sqlDetails)
          : undefined,
        "inParamDetails": obj.inParamDetails
          ? obj.inParamDetails.map(item => {
              return model.SqlInParamDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "outParamDetails": obj.outParamDetails
          ? model.SqlOutParamDetails.getDeserializedJsonObj(obj.outParamDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}