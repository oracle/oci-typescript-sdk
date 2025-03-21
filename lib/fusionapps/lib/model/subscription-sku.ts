/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](https://docs.oracle.com/iaas/Content/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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
 * SKU information.
 */
export interface SubscriptionSku {
  /**
   * Stock keeping unit id.
   */
  "sku": string;
  /**
   * Description of the covered product belonging to this Sku.
   */
  "licensePartDescription"?: string;
  /**
   * Base metric for billing the service.
   */
  "metricName"?: string;
  /**
   * Quantity of the stock units. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "quantity": number;
  /**
   * Description of the stock units.
   */
  "description"?: string;
}

export namespace SubscriptionSku {
  export function getJsonObj(obj: SubscriptionSku): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SubscriptionSku): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
