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
 * Upgrade Exadata Fleet Update Cycle resource details.
 *
 */
export interface UpgradeFsuCycle extends model.FsuCycle {
  "upgradeDetails"?: model.UpgradeDbCollectionDetails | model.UpgradeGiCollectionDetails;

  "type": string;
}

export namespace UpgradeFsuCycle {
  export function getJsonObj(obj: UpgradeFsuCycle, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FsuCycle.getJsonObj(obj) as UpgradeFsuCycle)),
      ...{
        "upgradeDetails": obj.upgradeDetails
          ? model.UpgradeDetails.getJsonObj(obj.upgradeDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "UPGRADE";
  export function getDeserializedJsonObj(obj: UpgradeFsuCycle, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FsuCycle.getDeserializedJsonObj(obj) as UpgradeFsuCycle)),
      ...{
        "upgradeDetails": obj.upgradeDetails
          ? model.UpgradeDetails.getDeserializedJsonObj(obj.upgradeDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
