/**
 * MarketplacePublisherService API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20241201
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
 * OCPU options for an image and shape.
 */
export interface ImageOcpuConstraints {
  /**
   * The minimum number of OCPUs supported for this image and shape. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "min"?: number;
  /**
   * The maximum number of OCPUs supported for this image and shape. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "max"?: number;
}

export namespace ImageOcpuConstraints {
  export function getJsonObj(obj: ImageOcpuConstraints): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ImageOcpuConstraints): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
