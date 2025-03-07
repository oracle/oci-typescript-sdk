/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Types of connection supported by Data Safe.
 */
export interface ConnectionOption {
  "connectionType": string;
}

export namespace ConnectionOption {
  export function getJsonObj(obj: ConnectionOption): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "PRIVATE_ENDPOINT":
          return model.PrivateEndpoint.getJsonObj(<model.PrivateEndpoint>(<object>jsonObj), true);
        case "ONPREM_CONNECTOR":
          return model.OnPremiseConnector.getJsonObj(
            <model.OnPremiseConnector>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectionType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConnectionOption): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "PRIVATE_ENDPOINT":
          return model.PrivateEndpoint.getDeserializedJsonObj(
            <model.PrivateEndpoint>(<object>jsonObj),
            true
          );
        case "ONPREM_CONNECTOR":
          return model.OnPremiseConnector.getDeserializedJsonObj(
            <model.OnPremiseConnector>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectionType}`);
      }
    }
    return jsonObj;
  }
}
