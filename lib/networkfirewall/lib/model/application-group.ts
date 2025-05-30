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
 * A group of applications.
 *
 */
export interface ApplicationGroup {
  /**
   * Name of the application Group.
   */
  "name": string;
  /**
   * List of apps in the group.
   */
  "apps": Array<string>;
  /**
   * Count of total applications in the given application group. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalApps": number;
  /**
   * OCID of the Network Firewall Policy this application group belongs to.
   */
  "parentResourceId": string;
}

export namespace ApplicationGroup {
  export function getJsonObj(obj: ApplicationGroup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApplicationGroup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
