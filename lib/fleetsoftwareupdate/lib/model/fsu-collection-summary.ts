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
 * Exadata Fleet Update Collection Resource.
 *
 */
export interface FsuCollectionSummary {
  /**
   * OCID identifier for the Exadata Fleet Update Collection.
   *
   */
  "id": string;
  /**
   * Exadata Fleet Update Collection resource display name.
   *
   */
  "displayName": string;
  /**
   * Exadata service type for the target resource members.
   *
   */
  "serviceType": model.CollectionServiceTypes;
  /**
   * Compartment Identifier
   *
   */
  "compartmentId": string;
  "activeFsuCycle"?: model.ActiveCycleDetails;
  /**
   * Number of targets that are members of this Collection.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "targetCount"?: number;
  /**
   * The time the Exadata Fleet Update Collection was created. An RFC3339 formatted datetime string.
   *
   */
  "timeCreated": Date;
  /**
   * The time the Exadata Fleet Update Collection was updated. An RFC3339 formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the Exadata Fleet Update Collection.
   *
   */
  "lifecycleState": model.CollectionLifecycleStates;
  /**
   * A message describing the current state in more detail.
   * For example, can be used to provide actionable information for a resource in Failed state.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of last completed FSU Cycle.
   *
   */
  "lastCompletedFsuCycleId"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };

  "type": string;
}

export namespace FsuCollectionSummary {
  export function getJsonObj(obj: FsuCollectionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "activeFsuCycle": obj.activeFsuCycle
          ? model.ActiveCycleDetails.getJsonObj(obj.activeFsuCycle)
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "GI":
          return model.GiFsuCollectionSummary.getJsonObj(
            <model.GiFsuCollectionSummary>(<object>jsonObj),
            true
          );
        case "DB":
          return model.DbFsuCollectionSummary.getJsonObj(
            <model.DbFsuCollectionSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FsuCollectionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "activeFsuCycle": obj.activeFsuCycle
          ? model.ActiveCycleDetails.getDeserializedJsonObj(obj.activeFsuCycle)
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "GI":
          return model.GiFsuCollectionSummary.getDeserializedJsonObj(
            <model.GiFsuCollectionSummary>(<object>jsonObj),
            true
          );
        case "DB":
          return model.DbFsuCollectionSummary.getDeserializedJsonObj(
            <model.DbFsuCollectionSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
