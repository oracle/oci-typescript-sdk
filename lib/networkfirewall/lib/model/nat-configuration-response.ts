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
 * Nat Configuration response.
 */
export interface NatConfigurationResponse {
  /**
   * To allocate private NAT IPs to the firewall. The attached network firewall policy must also have NAT rules to enable NAT on any traffic passing through the firewall.
   */
  "mustEnablePrivateNat"?: boolean;
  /**
   * An array of NAT IP addresses that are associated with the Network Firewall. These IPs are reserved for NAT and shouldn't be used for any other purpose in the subnet.
   */
  "natIpAddressList"?: Array<string>;
}

export namespace NatConfigurationResponse {
  export function getJsonObj(obj: NatConfigurationResponse): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NatConfigurationResponse): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
