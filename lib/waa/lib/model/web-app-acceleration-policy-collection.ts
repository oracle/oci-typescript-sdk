/**
 * Web Application Acceleration (WAA) API
 * API for the Web Application Acceleration service.
Use this API to manage regional Web App Acceleration policies such as Caching and Compression
for accelerating HTTP services.

 * OpenAPI spec version: 20211230
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
 * Contains WebAppAccelerationPolicySummary items.
 */
export interface WebAppAccelerationPolicyCollection {
  /**
   * A list of WebAppAccelerationPolicySummary objects.
   */
  "items": Array<model.WebAppAccelerationPolicySummary>;
}

export namespace WebAppAccelerationPolicyCollection {
  export function getJsonObj(obj: WebAppAccelerationPolicyCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.WebAppAccelerationPolicySummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WebAppAccelerationPolicyCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.WebAppAccelerationPolicySummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
