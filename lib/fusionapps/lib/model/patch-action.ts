/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](https://docs.oracle.com/iaas/Content/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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
 * Monthly patch details.
 */
export interface PatchAction extends model.Action {
  /**
   * A string that describeds whether the change is applied hot or cold
   */
  "mode"?: PatchAction.Mode;
  /**
   * patch artifact category
   */
  "category"?: PatchAction.Category;
  /**
   * patch bundle name
   */
  "artifact"?: string;

  "actionType": string;
}

export namespace PatchAction {
  export enum Mode {
    Hot = "HOT",
    Cold = "COLD",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Category {
    Monthly = "MONTHLY",
    Weekly = "WEEKLY",
    Oneoff = "ONEOFF",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: PatchAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Action.getJsonObj(obj) as PatchAction)),
      ...{}
    };

    return jsonObj;
  }
  export const actionType = "PATCH";
  export function getDeserializedJsonObj(obj: PatchAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Action.getDeserializedJsonObj(obj) as PatchAction)),
      ...{}
    };

    return jsonObj;
  }
}
