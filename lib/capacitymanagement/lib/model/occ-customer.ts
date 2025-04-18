/**
 * OCI Control Center Capacity Management API
 * OCI Control Center (OCC) Capacity Management enables you to manage capacity requests in realms where OCI Control Center Capacity Management is available. For more information, see [OCI Control Center](https://docs.oracle.com/iaas/Content/control-center/home.htm).
 * OpenAPI spec version: 20231107
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
 * The details about the customer.
 */
export interface OccCustomer {
  /**
   * The OCID of the customer group.
   */
  "occCustomerGroupId": string;
  /**
   * The OCID of the tenancy belonging to the customer.
   */
  "tenancyId": string;
  /**
   * The display name for the customer
   */
  "displayName": string;
  /**
   * The description about the customer group.
   */
  "description"?: string;
  /**
   * To determine whether the customer is enabled/disabled.
   */
  "status": OccCustomer.Status;
}

export namespace OccCustomer {
  export enum Status {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OccCustomer): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OccCustomer): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
