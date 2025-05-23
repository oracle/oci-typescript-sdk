/**
 * OneSubscription API Usage Computation
 * OneSubscription API Common set of Subscription Plan Management (SPM) Usage Computation resources

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
 * Product description
 *
 */
export interface Product {
  /**
   * Product part number
   *
   */
  "partNumber": string;
  /**
   * Product name
   *
   */
  "name": string;
  /**
   * Unit of Measure
   *
   */
  "unitOfMeasure"?: string;
  /**
   * Product provisioning group
   *
   */
  "provisioningGroup"?: string;
  /**
   * Metered service billing category
   *
   */
  "billingCategory"?: string;
  /**
   * Product category
   *
   */
  "productCategory"?: string;
  /**
   * Rate card part type of Product
   *
   */
  "ucmRateCardPartType"?: string;
}

export namespace Product {
  export function getJsonObj(obj: Product): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Product): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
