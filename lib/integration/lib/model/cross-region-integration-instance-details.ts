/**
 * Oracle Integration API
 * Oracle Integration API.
 * OpenAPI spec version: 20190131
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of integration instance created in cross region for disaster recovery.
 *
 */
export interface CrossRegionIntegrationInstanceDetails {
  /**
   * Role of the integration instance in the region
   */
  "role"?: CrossRegionIntegrationInstanceDetails.Role;
  /**
   * Cross region integration instance identifier
   */
  "id"?: string;
  /**
   * Cross region where integration instance is created
   */
  "region"?: string;
  /**
   * Time when cross region integration instance role was changed
   */
  "timeRoleChanged"?: Date;
}

export namespace CrossRegionIntegrationInstanceDetails {
  export enum Role {
    Primary = "PRIMARY",
    Secondary = "SECONDARY",
    Unknown = "UNKNOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CrossRegionIntegrationInstanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CrossRegionIntegrationInstanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}