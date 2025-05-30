/**
 * OneSubscription APIs
 * OneSubscription APIs

 * OpenAPI spec version: 20190111
 * Contact: kuaskum_org_ww@oracle.com
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
 * Computed Usage Aggregation object
 *
 */
export interface ComputedUsageAggregation {
  /**
   * Total Quantity that was used for computation
   *
   */
  "quantity"?: string;
  "product"?: model.ComputedUsageProduct;
  /**
   * Data Center Attribute as sent by MQS to SPM.
   *
   */
  "dataCenter"?: string;
  /**
   * Metered Service date , expressed in RFC 3339 timestamp format.
   *
   */
  "timeMeteredOn"?: Date;
  /**
   * Net Unit Price for the product in consideration.
   *
   */
  "netUnitPrice"?: string;
  /**
   * Sum of Computed Line Amount unrounded
   *
   */
  "costUnrounded"?: string;
  /**
   * Sum of Computed Line Amount rounded
   *
   */
  "cost"?: string;
  /**
   * Usage compute type in SPM.
   *
   */
  "type"?: ComputedUsageAggregation.Type;
}

export namespace ComputedUsageAggregation {
  export enum Type {
    Promotion = "PROMOTION",
    DoNotBill = "DO_NOT_BILL",
    Usage = "USAGE",
    Commit = "COMMIT",
    Overage = "OVERAGE",
    PayAsYouGo = "PAY_AS_YOU_GO",
    MonthlyMinimum = "MONTHLY_MINIMUM",
    DelayedUsageInvoiceTiming = "DELAYED_USAGE_INVOICE_TIMING",
    DelayedUsageCommitmentExp = "DELAYED_USAGE_COMMITMENT_EXP",
    OnAccountCredit = "ON_ACCOUNT_CREDIT",
    ServiceCredit = "SERVICE_CREDIT",
    CommitmentExpiration = "COMMITMENT_EXPIRATION",
    FundedAllocation = "FUNDED_ALLOCATION",
    DonotBillUsagePostTermination = "DONOT_BILL_USAGE_POST_TERMINATION",
    DelayedUsagePostTermination = "DELAYED_USAGE_POST_TERMINATION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ComputedUsageAggregation): object {
    const jsonObj = {
      ...obj,
      ...{
        "product": obj.product ? model.ComputedUsageProduct.getJsonObj(obj.product) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ComputedUsageAggregation): object {
    const jsonObj = {
      ...obj,
      ...{
        "product": obj.product
          ? model.ComputedUsageProduct.getDeserializedJsonObj(obj.product)
          : undefined
      }
    };

    return jsonObj;
  }
}
