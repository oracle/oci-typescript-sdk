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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Rollback Cycle Exadata Fleet Update Action update details.
 *
 */
export interface UpdateRollbackCycleActionDetails extends model.UpdateFsuActionDetails {
  "type": string;
}

export namespace UpdateRollbackCycleActionDetails {
  export function getJsonObj(
    obj: UpdateRollbackCycleActionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateFsuActionDetails.getJsonObj(obj) as UpdateRollbackCycleActionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "ROLLBACK_MAINTENANCE_CYCLE";
  export function getDeserializedJsonObj(
    obj: UpdateRollbackCycleActionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateFsuActionDetails.getDeserializedJsonObj(
            obj
          ) as UpdateRollbackCycleActionDetails)),
      ...{}
    };

    return jsonObj;
  }
}