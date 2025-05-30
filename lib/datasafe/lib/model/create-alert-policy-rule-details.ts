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
 * The details used to create a new alert policy rule.
 *
 */
export interface CreateAlertPolicyRuleDetails {
  /**
   * The conditional expression of the alert policy rule which evaluates to boolean value.
   */
  "expression": string;
  /**
   * Describes the alert policy rule.
   */
  "description"?: string;
  /**
   * The display name of the alert policy rule.
   */
  "displayName"?: string;
}

export namespace CreateAlertPolicyRuleDetails {
  export function getJsonObj(obj: CreateAlertPolicyRuleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateAlertPolicyRuleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
