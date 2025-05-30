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
 * Payment Term details
 *
 */
export interface InvoicingPaymentTerm {
  /**
   * Payment Term name
   *
   */
  "name": string;
  /**
   * Payment Term value
   *
   */
  "value"?: string;
  /**
   * Payment term Description
   *
   */
  "description"?: string;
  /**
   * Payment term active flag
   *
   */
  "isActive"?: boolean;
  /**
   * Payment term last update date
   *
   */
  "timeCreated"?: Date;
  /**
   * User that created the Payment term
   *
   */
  "createdBy"?: string;
  /**
   * Payment term last update date
   *
   */
  "timeUpdated"?: Date;
  /**
   * User that updated the Payment term
   *
   */
  "updatedBy"?: string;
}

export namespace InvoicingPaymentTerm {
  export function getJsonObj(obj: InvoicingPaymentTerm): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InvoicingPaymentTerm): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
