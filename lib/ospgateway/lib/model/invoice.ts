/**
 * OSP Gateway API
 * This site describes all the Rest endpoints of OSP Gateway.
 * OpenAPI spec version: 20191001
 * Contact: osp_team_oci_cam_ww_grp@oracle.com
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
 * Invoice details
 */
export interface Invoice {
  /**
   * Invoice identifier which is generated on the on-premise sie. Pls note this is not an OCID
   */
  "invoiceId": string;
  /**
   * Invoice external reference
   */
  "invoiceNumber"?: string;
  /**
   * Transaction identifier
   */
  "internalInvoiceId"?: string;
  /**
   * Is credit card payment eligible
   */
  "isCreditCardPayable"?: boolean;
  /**
   * Date of invoice
   */
  "timeInvoice"?: Date;
  /**
   * Tax of invoice amount Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "tax"?: number;
  /**
   * Total amount of invoice Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "invoiceAmount"?: number;
  /**
   * Balance of invoice Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "invoiceAmountDue"?: number;
  /**
   * Invoice amount credit Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "invoiceAmountCredited"?: number;
  /**
   * Invoice amount adjust Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "invoiceAmountAdjusted"?: number;
  /**
   * Invoice amount applied Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "invoiceAmountApplied"?: number;
  "currency"?: model.Currency;
  /**
   * Type of invoice
   */
  "invoiceType"?: Invoice.InvoiceType;
  /**
   * Due date of invoice
   */
  "timeInvoiceDue"?: Date;
  /**
   * Invoice reference number
   */
  "invoiceRefNumber"?: string;
  /**
   * Invoice PO number
   */
  "invoicePoNumber"?: string;
  /**
   * Invoice status
   */
  "invoiceStatus"?: Invoice.InvoiceStatus;
  /**
   * Preferred Email on the invoice
   */
  "preferredEmail"?: string;
  /**
   * Is emailing pdf allowed
   */
  "isPdfEmailAvailable"?: boolean;
  /**
   * Is pdf download access allowed
   */
  "isDisplayDownloadPdf"?: boolean;
  /**
   * Whether invoice can be payed
   */
  "isPayable"?: boolean;
  /**
   * Payment terms
   */
  "paymentTerms"?: string;
  "lastPaymentDetail"?:
    | model.EcheckPaymentDetail
    | model.OtherPaymentDetail
    | model.PaypalPaymentDetail
    | model.CreditCardPaymentDetail;
  "billToAddress"?: model.BillToAddress;
  /**
   * List of subscription identifiers
   */
  "subscriptionIds"?: Array<string>;
}

export namespace Invoice {
  export enum InvoiceType {
    Hardware = "HARDWARE",
    Subscription = "SUBSCRIPTION",
    Support = "SUPPORT",
    License = "LICENSE",
    Education = "EDUCATION",
    Consulting = "CONSULTING",
    Service = "SERVICE",
    Usage = "USAGE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum InvoiceStatus {
    Open = "OPEN",
    PastDue = "PAST_DUE",
    PaymentSubmitted = "PAYMENT_SUBMITTED",
    Closed = "CLOSED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Invoice): object {
    const jsonObj = {
      ...obj,
      ...{
        "currency": obj.currency ? model.Currency.getJsonObj(obj.currency) : undefined,

        "lastPaymentDetail": obj.lastPaymentDetail
          ? model.PaymentDetail.getJsonObj(obj.lastPaymentDetail)
          : undefined,
        "billToAddress": obj.billToAddress
          ? model.BillToAddress.getJsonObj(obj.billToAddress)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Invoice): object {
    const jsonObj = {
      ...obj,
      ...{
        "currency": obj.currency ? model.Currency.getDeserializedJsonObj(obj.currency) : undefined,

        "lastPaymentDetail": obj.lastPaymentDetail
          ? model.PaymentDetail.getDeserializedJsonObj(obj.lastPaymentDetail)
          : undefined,
        "billToAddress": obj.billToAddress
          ? model.BillToAddress.getDeserializedJsonObj(obj.billToAddress)
          : undefined
      }
    };

    return jsonObj;
  }
}
