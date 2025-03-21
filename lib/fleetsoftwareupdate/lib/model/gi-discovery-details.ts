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
 * Details to create a 'GI' type Exadata Fleet Update Discovery.
 *
 */
export interface GiDiscoveryDetails extends model.DiscoveryDetails {
  /**
   * Grid Infrastructure Major Version of targets to be included in the Exadata Fleet Update Discovery results.
   * Only GI targets that match the version specified in this value would be added to the Exadata Fleet Update Discovery results.
   *
   */
  "sourceMajorVersion": model.GiSourceMajorVersions;
  "criteria":
    | model.GiFiltersDiscovery
    | model.GiSearchQueryDiscovery
    | model.GiDiscoveryResults
    | model.GiTargetListDiscovery;

  "type": string;
}

export namespace GiDiscoveryDetails {
  export function getJsonObj(obj: GiDiscoveryDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.DiscoveryDetails.getJsonObj(obj) as GiDiscoveryDetails)),
      ...{
        "criteria": obj.criteria
          ? model.GiFleetDiscoveryDetails.getJsonObj(obj.criteria)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "GI";
  export function getDeserializedJsonObj(
    obj: GiDiscoveryDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DiscoveryDetails.getDeserializedJsonObj(obj) as GiDiscoveryDetails)),
      ...{
        "criteria": obj.criteria
          ? model.GiFleetDiscoveryDetails.getDeserializedJsonObj(obj.criteria)
          : undefined
      }
    };

    return jsonObj;
  }
}
