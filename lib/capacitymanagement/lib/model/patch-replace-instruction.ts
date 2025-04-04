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
 * An operation that \"puts\" a value, replacing every item of the selection with it, or creating it if the selection is empty.
 * NOT_FOUND exceptions are handled by creating the implied containing structure (but note that this may put the target in an invalid state,
 * which can be prevented by use of precondition operations).
 * To avoid referential errors if an item's descendant is also in the selection, items of the selection are processed in order of decreasing depth.
 *
 */
export interface PatchReplaceInstruction extends model.PatchInstruction {
  /**
   * A value to be added into the target.
   */
  "value": any;

  "operation": string;
}

export namespace PatchReplaceInstruction {
  export function getJsonObj(obj: PatchReplaceInstruction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PatchInstruction.getJsonObj(obj) as PatchReplaceInstruction)),
      ...{}
    };

    return jsonObj;
  }
  export const operation = "REPLACE";
  export function getDeserializedJsonObj(
    obj: PatchReplaceInstruction,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PatchInstruction.getDeserializedJsonObj(obj) as PatchReplaceInstruction)),
      ...{}
    };

    return jsonObj;
  }
}
