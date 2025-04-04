/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20230501
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
 * An object which defines the position of the rule.
 */
export interface RulePosition {
  /**
   * Identifier for rule before which this rule lies.
   */
  "beforeRule"?: string;
  /**
   * Identifier for rule after which this rule lies.
   */
  "afterRule"?: string;
}

export namespace RulePosition {
  export function getJsonObj(obj: RulePosition): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RulePosition): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
