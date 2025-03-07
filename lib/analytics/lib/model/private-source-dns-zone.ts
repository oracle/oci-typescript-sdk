/**
 * Analytics API
 * Analytics API.

 * OpenAPI spec version: 20190331
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
 * Private source DNS Zone model.
 *
 */
export interface PrivateSourceDnsZone {
  /**
   * Private Source DNS Zone. Ex: example-vcn.oraclevcn.com, corp.example.com.
   *
   */
  "dnsZone": string;
  /**
   * Description of private source dns zone.
   *
   */
  "description"?: string;
}

export namespace PrivateSourceDnsZone {
  export function getJsonObj(obj: PrivateSourceDnsZone): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PrivateSourceDnsZone): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
