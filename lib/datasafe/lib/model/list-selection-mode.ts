/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Indicates that the selection is a list of resource ocids.
 *
 */
export interface ListSelectionMode extends model.SelectionDetails {
  /**
   * * Array of the violation log ocids to be selected in case of allowed SQLs bulk create.
   * * Array of the allowed SQL ocids to be selected in case of allowed SQLs bulk delete.
   *
   */
  "items": Array<string>;

  "selectionMode": string;
}

export namespace ListSelectionMode {
  export function getJsonObj(obj: ListSelectionMode, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.SelectionDetails.getJsonObj(obj) as ListSelectionMode)),
      ...{}
    };

    return jsonObj;
  }
  export const selectionMode = "LIST";
  export function getDeserializedJsonObj(
    obj: ListSelectionMode,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SelectionDetails.getDeserializedJsonObj(obj) as ListSelectionMode)),
      ...{}
    };

    return jsonObj;
  }
}
