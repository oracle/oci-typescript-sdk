/**
 * Organizations API
 * Use the Organizations API to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and organization resources. For more information, see [Organization Management Overview](https://docs.oracle.com/iaas/Content/General/Concepts/organization_management_overview.htm).
 * OpenAPI spec version: 20230401
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
 * Promotion information for a subscription.
 */
export interface Promotion {
  /**
   * Specifies how long the promotion related to the subscription, if any, is valid in duration units. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "duration"?: number;
  /**
   * Unit for the duration.
   */
  "durationUnit"?: string;
  /**
   * If a subscription is present, indicates the total amount of promotional subscription credits. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "amount"?: number;
  /**
   * If a subscription is present, indicates the current status of the subscription promotion.
   */
  "status"?: Promotion.Status;
  /**
   * Speficies whether or not the customer intends to pay after the promotion has expired.
   */
  "isIntentToPay"?: boolean;
  /**
   * Currency unit associated with the promotion.
   */
  "currencyUnit"?: string;
  /**
   * Date and time when the promotion starts.
   */
  "timeStarted"?: Date;
  /**
   * Date and time when the promotion ends.
   */
  "timeExpired"?: Date;
}

export namespace Promotion {
  export enum Status {
    Initialized = "INITIALIZED",
    Active = "ACTIVE",
    Expired = "EXPIRED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Promotion): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Promotion): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
