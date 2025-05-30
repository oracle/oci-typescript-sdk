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
 * Type of address List. The accepted values are - * FQDN - An address list which contains Fully Qualified Domain Names as elements. * IP - - An address list which contains IP Addresses as elements.
 **/
export enum AddressListType {
  Fqdn = "FQDN",
  Ip = "IP",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace AddressListType {
  export function getJsonObj(obj: AddressListType): AddressListType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: AddressListType): AddressListType {
    return obj;
  }
}
