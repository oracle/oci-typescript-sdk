/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * User Group object
 *
 */
export interface GroupDetails {
  /**
   * Name of user Group
   *
   */
  "name": string;
  /**
   * Identity domain name
   *
   */
  "domain"?: string;
  /**
   * Role assigned to user group in context of Stack Monitoring service. Access role can be for example: ADMINISTRATOR, OPERATOR, VIEWER, any other access role
   *
   */
  "stackMonitoringRole": string;
}

export namespace GroupDetails {
  export function getJsonObj(obj: GroupDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GroupDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
