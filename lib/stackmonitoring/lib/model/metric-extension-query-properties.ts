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
 * Collection method and query properties details of metric extension
 */
export interface MetricExtensionQueryProperties {
  "collectionMethod": string;
}

export namespace MetricExtensionQueryProperties {
  export function getJsonObj(obj: MetricExtensionQueryProperties): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "collectionMethod" in obj && obj.collectionMethod) {
      switch (obj.collectionMethod) {
        case "OS_COMMAND":
          return model.OsCommandQueryProperties.getJsonObj(
            <model.OsCommandQueryProperties>(<object>jsonObj),
            true
          );
        case "SQL":
          return model.SqlQueryProperties.getJsonObj(
            <model.SqlQueryProperties>(<object>jsonObj),
            true
          );
        case "JMX":
          return model.JmxQueryProperties.getJsonObj(
            <model.JmxQueryProperties>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.collectionMethod}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MetricExtensionQueryProperties): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "collectionMethod" in obj && obj.collectionMethod) {
      switch (obj.collectionMethod) {
        case "OS_COMMAND":
          return model.OsCommandQueryProperties.getDeserializedJsonObj(
            <model.OsCommandQueryProperties>(<object>jsonObj),
            true
          );
        case "SQL":
          return model.SqlQueryProperties.getDeserializedJsonObj(
            <model.SqlQueryProperties>(<object>jsonObj),
            true
          );
        case "JMX":
          return model.JmxQueryProperties.getDeserializedJsonObj(
            <model.JmxQueryProperties>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.collectionMethod}`);
      }
    }
    return jsonObj;
  }
}