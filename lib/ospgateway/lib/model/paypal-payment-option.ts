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
 * PayPal Payment related details
 */
export interface PaypalPaymentOption extends model.PaymentOption {
  /**
   * The email address of the paypal user.
   */
  "emailAddress"?: string;
  /**
   * First name of the paypal user.
   */
  "firstName"?: string;
  /**
   * Last name of the paypal user.
   */
  "lastName"?: string;
  /**
   * Agreement id for the paypal account.
   */
  "extBillingAgreementId"?: string;

  "paymentMethod": string;
}

export namespace PaypalPaymentOption {
  export function getJsonObj(obj: PaypalPaymentOption, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.PaymentOption.getJsonObj(obj) as PaypalPaymentOption)),
      ...{}
    };

    return jsonObj;
  }
  export const paymentMethod = "PAYPAL";
  export function getDeserializedJsonObj(
    obj: PaypalPaymentOption,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PaymentOption.getDeserializedJsonObj(obj) as PaypalPaymentOption)),
      ...{}
    };

    return jsonObj;
  }
}
