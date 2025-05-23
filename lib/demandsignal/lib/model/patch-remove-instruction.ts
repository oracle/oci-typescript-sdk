/**
 * OCI Control Center Demand Signal API
 * Use the OCI Control Center Demand Signal API to manage Demand Signals.
 * OpenAPI spec version: 20240430
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
 * An operation that deletes items, ignoring NOT_FOUND exceptions.
 * To avoid referential errors if an item's descendant is also in the selection, items of the selection are processed in order of decreasing depth.
 *
 */
export interface PatchRemoveInstruction extends model.PatchInstruction {
  "operation": string;
}

export namespace PatchRemoveInstruction {
  export function getJsonObj(obj: PatchRemoveInstruction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PatchInstruction.getJsonObj(obj) as PatchRemoveInstruction)),
      ...{}
    };

    return jsonObj;
  }
  export const operation = "REMOVE";
  export function getDeserializedJsonObj(
    obj: PatchRemoveInstruction,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PatchInstruction.getDeserializedJsonObj(obj) as PatchRemoveInstruction)),
      ...{}
    };

    return jsonObj;
  }
}
