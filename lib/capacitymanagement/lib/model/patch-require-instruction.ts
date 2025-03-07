/**
 * OCI Control Center Capacity Management API
 * OCI Control Center (OCC) Capacity Management enables you to manage capacity requests in realms where OCI Control Center Capacity Management is available. For more information, see [OCI Control Center](https://docs.oracle.com/iaas/Content/control-center/home.htm).
 * OpenAPI spec version: 20231107
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
 * A precondition operation that requires a selection to be non-empty, and optionally to include an item with a specified value
 * (useful for asserting that a value exists before attempting to update it, avoiding accidental creation).
 * It fails if the selection is empty, or if value is provided and no item of the selection matches it.
 *
 */
export interface PatchRequireInstruction extends model.PatchInstruction {
  /**
   * A value to be compared against each item of the selection.
   * If this value is an object, then it matches any item that would be unaffected by applying this value as a merge operation.
   * Otherwise, it matches any item to which it is equal according to the rules of [JSON Schema](https://tools.ietf.org/html/draft-handrews-json-schema-00#section-4.2.3).
   *
   */
  "value"?: any;

  "operation": string;
}

export namespace PatchRequireInstruction {
  export function getJsonObj(obj: PatchRequireInstruction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PatchInstruction.getJsonObj(obj) as PatchRequireInstruction)),
      ...{}
    };

    return jsonObj;
  }
  export const operation = "REQUIRE";
  export function getDeserializedJsonObj(
    obj: PatchRequireInstruction,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PatchInstruction.getDeserializedJsonObj(obj) as PatchRequireInstruction)),
      ...{}
    };

    return jsonObj;
  }
}
