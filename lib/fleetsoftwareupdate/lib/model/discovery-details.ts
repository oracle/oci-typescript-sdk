/**
 * Exadata Fleet Update service API
 * Use the Exadata Fleet Update service to patch large collections of components directly,
as a single entity, orchestrating the maintenance actions to update all chosen components in the stack in a single cycle.

 * OpenAPI spec version: 20220528
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
 * Discovery filter details for search.
 *
 */
export interface DiscoveryDetails {
  /**
   * Exadata service type for the target resource members.
   *
   */
  "serviceType": model.DiscoveryServiceTypes;

  "type": string;
}

export namespace DiscoveryDetails {
  export function getJsonObj(obj: DiscoveryDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "GI":
          return model.GiDiscoveryDetails.getJsonObj(
            <model.GiDiscoveryDetails>(<object>jsonObj),
            true
          );
        case "DB":
          return model.DbDiscoveryDetails.getJsonObj(
            <model.DbDiscoveryDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DiscoveryDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "GI":
          return model.GiDiscoveryDetails.getDeserializedJsonObj(
            <model.GiDiscoveryDetails>(<object>jsonObj),
            true
          );
        case "DB":
          return model.DbDiscoveryDetails.getDeserializedJsonObj(
            <model.DbDiscoveryDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
