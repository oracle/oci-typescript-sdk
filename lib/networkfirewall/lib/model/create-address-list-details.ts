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
 * The Request for creating the address List
 *
 */
export interface CreateAddressListDetails {
  /**
   * Unique name to identify the group of addresses to be used in the policy rules.
   */
  "name": string;
  /**
   * Type of address List. The accepted values are - * FQDN * IP
   */
  "type": model.AddressListType;
  /**
   * List of addresses.
   */
  "addresses": Array<string>;
}

export namespace CreateAddressListDetails {
  export function getJsonObj(obj: CreateAddressListDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateAddressListDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
