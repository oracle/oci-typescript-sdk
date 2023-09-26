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
 * List of Compartments to include in the discovery.
 *
 */
export interface DbCompartmentIdFilter extends model.DbFleetDiscoveryFilter {
  /**
   * List of Compartments OCIDs to include in the discovery.
   *
   */
  "identifiers": Array<string>;

  "type": string;
}

export namespace DbCompartmentIdFilter {
  export function getJsonObj(obj: DbCompartmentIdFilter, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DbFleetDiscoveryFilter.getJsonObj(obj) as DbCompartmentIdFilter)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "COMPARTMENT_ID";
  export function getDeserializedJsonObj(
    obj: DbCompartmentIdFilter,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DbFleetDiscoveryFilter.getDeserializedJsonObj(obj) as DbCompartmentIdFilter)),
      ...{}
    };

    return jsonObj;
  }
}