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
 * Possible Discovery filters.
 *
 */
export interface GiFleetDiscoveryFilter {
  /**
   * INCLUDE or EXCLUDE the filter results in the discovery for GI targets.
   * Supported for 'FSUCOLLECTION' RESOURCE_ID filter only.
   *
   */
  "mode"?: GiFleetDiscoveryFilter.Mode;

  "type": string;
}

export namespace GiFleetDiscoveryFilter {
  export enum Mode {
    Include = "INCLUDE",
    Exclude = "EXCLUDE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: GiFleetDiscoveryFilter): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "DEFINED_TAG":
          return model.GiDefinedTagsFilter.getJsonObj(
            <model.GiDefinedTagsFilter>(<object>jsonObj),
            true
          );
        case "COMPARTMENT_ID":
          return model.GiCompartmentIdFilter.getJsonObj(
            <model.GiCompartmentIdFilter>(<object>jsonObj),
            true
          );
        case "FREEFORM_TAG":
          return model.GiFreeformTagsFilter.getJsonObj(
            <model.GiFreeformTagsFilter>(<object>jsonObj),
            true
          );
        case "RESOURCE_ID":
          return model.GiResourceIdFilter.getJsonObj(
            <model.GiResourceIdFilter>(<object>jsonObj),
            true
          );
        case "VERSION":
          return model.GiVersionFilter.getJsonObj(<model.GiVersionFilter>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GiFleetDiscoveryFilter): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "DEFINED_TAG":
          return model.GiDefinedTagsFilter.getDeserializedJsonObj(
            <model.GiDefinedTagsFilter>(<object>jsonObj),
            true
          );
        case "COMPARTMENT_ID":
          return model.GiCompartmentIdFilter.getDeserializedJsonObj(
            <model.GiCompartmentIdFilter>(<object>jsonObj),
            true
          );
        case "FREEFORM_TAG":
          return model.GiFreeformTagsFilter.getDeserializedJsonObj(
            <model.GiFreeformTagsFilter>(<object>jsonObj),
            true
          );
        case "RESOURCE_ID":
          return model.GiResourceIdFilter.getDeserializedJsonObj(
            <model.GiResourceIdFilter>(<object>jsonObj),
            true
          );
        case "VERSION":
          return model.GiVersionFilter.getDeserializedJsonObj(
            <model.GiVersionFilter>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
