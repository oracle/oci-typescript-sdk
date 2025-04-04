/**
 * OneSubscription API Subscription, Commitment and and Rate Card Details
 * Set of APIs that return the Subscription Details, Commitment and Effective Rate Card Details

 * OpenAPI spec version: 20210501
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
 * Currency details
 *
 */
export interface Currency {
  /**
   * Currency name
   *
   */
  "name"?: string;
  /**
   * Currency Code
   *
   */
  "isoCode": string;
  /**
   * Standard Precision of the Currency
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "stdPrecision"?: number;
}

export namespace Currency {
  export function getJsonObj(obj: Currency): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Currency): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
