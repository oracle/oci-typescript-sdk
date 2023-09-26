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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information about new Exadata Fleet Update Collection.
 *
 */
export interface CreateFsuCollectionDetails {
  /**
   * Exadata Fleet Update Collection Identifier.
   *
   */
  "displayName"?: string;
  /**
   * Exadata service type for the target resource members.
   *
   */
  "serviceType": model.CollectionServiceTypes;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "type": string;
}

export namespace CreateFsuCollectionDetails {
  export function getJsonObj(obj: CreateFsuCollectionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "DB":
          return model.CreateDbFsuCollectionDetails.getJsonObj(
            <model.CreateDbFsuCollectionDetails>(<object>jsonObj),
            true
          );
        case "GI":
          return model.CreateGiFsuCollectionDetails.getJsonObj(
            <model.CreateGiFsuCollectionDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateFsuCollectionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "DB":
          return model.CreateDbFsuCollectionDetails.getDeserializedJsonObj(
            <model.CreateDbFsuCollectionDetails>(<object>jsonObj),
            true
          );
        case "GI":
          return model.CreateGiFsuCollectionDetails.getDeserializedJsonObj(
            <model.CreateGiFsuCollectionDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}