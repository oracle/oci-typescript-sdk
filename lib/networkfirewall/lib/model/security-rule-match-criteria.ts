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
 * Criteria to evaluate against network traffic.
 * A match occurs when at least one item in the array associated with each specified property corresponds with the relevant aspect of the traffic.
 *
 */
export interface SecurityRuleMatchCriteria {
  /**
   * An array of IP address list names to be evaluated against the traffic source address.
   */
  "sourceAddress"?: Array<string>;
  /**
   * An array of IP address list names to be evaluated against the traffic destination address.
   */
  "destinationAddress"?: Array<string>;
  /**
   * An array of application list names to be evaluated against the traffic protocol and protocol-specific parameters.
   */
  "application"?: Array<string>;
  /**
   * An array of service list names to be evaluated against the traffic protocol and protocol-specific parameters.
   */
  "service"?: Array<string>;
  /**
   * An array of URL pattern list names to be evaluated against the HTTP(S) request target.
   */
  "url"?: Array<string>;
}

export namespace SecurityRuleMatchCriteria {
  export function getJsonObj(obj: SecurityRuleMatchCriteria): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SecurityRuleMatchCriteria): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
