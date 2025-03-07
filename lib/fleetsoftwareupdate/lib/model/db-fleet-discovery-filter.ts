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
 * Possible Discovery filters for Database targets.
 *
 */
export interface DbFleetDiscoveryFilter {
  /**
   * INCLUDE or EXCLUDE the filter results in the discovery for DB targets.
   * Supported for 'FSUCOLLECTION' RESOURCE_ID filter only.
   *
   */
  "mode"?: DbFleetDiscoveryFilter.Mode;

  "type": string;
}

export namespace DbFleetDiscoveryFilter {
  export enum Mode {
    Include = "INCLUDE",
    Exclude = "EXCLUDE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DbFleetDiscoveryFilter): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "DEFINED_TAG":
          return model.DbDefinedTagsFilter.getJsonObj(
            <model.DbDefinedTagsFilter>(<object>jsonObj),
            true
          );
        case "DB_UNIQUE_NAME":
          return model.DbUniqueNameFilter.getJsonObj(
            <model.DbUniqueNameFilter>(<object>jsonObj),
            true
          );
        case "VERSION":
          return model.DbVersionFilter.getJsonObj(<model.DbVersionFilter>(<object>jsonObj), true);
        case "RESOURCE_ID":
          return model.DbResourceIdFilter.getJsonObj(
            <model.DbResourceIdFilter>(<object>jsonObj),
            true
          );
        case "DB_HOME_NAME":
          return model.DbHomeNameFilter.getJsonObj(<model.DbHomeNameFilter>(<object>jsonObj), true);
        case "COMPARTMENT_ID":
          return model.DbCompartmentIdFilter.getJsonObj(
            <model.DbCompartmentIdFilter>(<object>jsonObj),
            true
          );
        case "DB_NAME":
          return model.DbNameFilter.getJsonObj(<model.DbNameFilter>(<object>jsonObj), true);
        case "FREEFORM_TAG":
          return model.DbFreeformTagsFilter.getJsonObj(
            <model.DbFreeformTagsFilter>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DbFleetDiscoveryFilter): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "DEFINED_TAG":
          return model.DbDefinedTagsFilter.getDeserializedJsonObj(
            <model.DbDefinedTagsFilter>(<object>jsonObj),
            true
          );
        case "DB_UNIQUE_NAME":
          return model.DbUniqueNameFilter.getDeserializedJsonObj(
            <model.DbUniqueNameFilter>(<object>jsonObj),
            true
          );
        case "VERSION":
          return model.DbVersionFilter.getDeserializedJsonObj(
            <model.DbVersionFilter>(<object>jsonObj),
            true
          );
        case "RESOURCE_ID":
          return model.DbResourceIdFilter.getDeserializedJsonObj(
            <model.DbResourceIdFilter>(<object>jsonObj),
            true
          );
        case "DB_HOME_NAME":
          return model.DbHomeNameFilter.getDeserializedJsonObj(
            <model.DbHomeNameFilter>(<object>jsonObj),
            true
          );
        case "COMPARTMENT_ID":
          return model.DbCompartmentIdFilter.getDeserializedJsonObj(
            <model.DbCompartmentIdFilter>(<object>jsonObj),
            true
          );
        case "DB_NAME":
          return model.DbNameFilter.getDeserializedJsonObj(
            <model.DbNameFilter>(<object>jsonObj),
            true
          );
        case "FREEFORM_TAG":
          return model.DbFreeformTagsFilter.getDeserializedJsonObj(
            <model.DbFreeformTagsFilter>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
