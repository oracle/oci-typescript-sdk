/**
 * MarketplacePublisherService API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20220901
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The model for the product metadata.
 */
export interface ProductSummary {
  /**
   * The name for the product.
   */
  "name": string;
  /**
   * The code for the product.
   */
  "code"?: string;
  /**
   * The product group for the product.
   */
  "productGroup"?: string;
  /**
   * The current state for the product.
   */
  "lifecycleState": string;
  /**
    * The date and time the product was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2022-09-15T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
    * The date and time the product was updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2022-09-15T21:10:29.600Z`
* 
    */
  "timeUpdated": Date;
}

export namespace ProductSummary {
  export function getJsonObj(obj: ProductSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProductSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}