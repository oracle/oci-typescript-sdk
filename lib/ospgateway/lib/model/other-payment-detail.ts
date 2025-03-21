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
 * Other Payment related details
 */
export interface OtherPaymentDetail extends model.PaymentDetail {
  /**
   * Last four routing digits of the card
   */
  "echeckRouting"?: string;
  /**
   * Name on the echeck card
   */
  "nameOnCard"?: string;
  /**
   * Echeck card type
   */
  "creditCardType"?: OtherPaymentDetail.CreditCardType;
  /**
   * Last four digits of the card
   */
  "lastDigits"?: string;
  /**
   * Expired date of the echeck card
   */
  "timeExpiration"?: Date;

  "paymentMethod": string;
}

export namespace OtherPaymentDetail {
  export enum CreditCardType {
    Visa = "VISA",
    Amex = "AMEX",
    Mastercard = "MASTERCARD",
    Discover = "DISCOVER",
    Jcb = "JCB",
    Diner = "DINER",
    Elo = "ELO",
    Saving = "SAVING",
    Checking = "CHECKING",
    CorporateChecking = "CORPORATE_CHECKING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OtherPaymentDetail, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.PaymentDetail.getJsonObj(obj) as OtherPaymentDetail)),
      ...{}
    };

    return jsonObj;
  }
  export const paymentMethod = "OTHER";
  export function getDeserializedJsonObj(
    obj: OtherPaymentDetail,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PaymentDetail.getDeserializedJsonObj(obj) as OtherPaymentDetail)),
      ...{}
    };

    return jsonObj;
  }
}
