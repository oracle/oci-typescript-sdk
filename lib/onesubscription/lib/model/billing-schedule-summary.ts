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
 * Billing schedule details related to Subscription Id
 *
 */
export interface BillingScheduleSummary {
  /**
   * SPM internal Subscribed Service ID
   *
   */
  "subscribedServiceId"?: string;
  /**
   * Billing schedule start date
   *
   */
  "timeStart"?: Date;
  /**
   * Billing schedule end date
   *
   */
  "timeEnd"?: Date;
  /**
   * Billing schedule invoicing date
   *
   */
  "timeInvoicing"?: Date;
  /**
   * Billing schedule invoice status
   *
   */
  "invoiceStatus"?: BillingScheduleSummary.InvoiceStatus;
  /**
   * Billing schedule quantity
   *
   */
  "quantity"?: string;
  /**
   * Billing schedule net unit price
   *
   */
  "netUnitPrice"?: string;
  /**
   * Billing schedule line net amount
   *
   */
  "amount"?: string;
  /**
   * Billing frequency
   *
   */
  "billingFrequency"?: string;
  /**
   * Indicates the associated AR Invoice Number
   *
   */
  "arInvoiceNumber"?: string;
  /**
   * Indicates the associated AR Customer transaction id a unique identifier existing on AR.
   *
   */
  "arCustomerTransactionId"?: string;
  /**
   * Order number associated with the Subscribed Service
   *
   */
  "orderNumber"?: string;
  "product"?: model.BillingScheduleProduct;
}

export namespace BillingScheduleSummary {
  export enum InvoiceStatus {
    Invoiced = "INVOICED",
    NotInvoiced = "NOT_INVOICED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BillingScheduleSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "product": obj.product ? model.BillingScheduleProduct.getJsonObj(obj.product) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BillingScheduleSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "product": obj.product
          ? model.BillingScheduleProduct.getDeserializedJsonObj(obj.product)
          : undefined
      }
    };

    return jsonObj;
  }
}
