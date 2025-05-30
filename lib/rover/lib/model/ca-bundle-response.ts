/**
 * RoverCloudService API
 * A description of the RoverCloudService API.
 * OpenAPI spec version: 20201210
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
 * Information about the CA Bundle of the rover node.
 */
export interface CaBundleResponse {
  /**
   * rover node ocid
   */
  "roverNodeId": string;
  "caDetails"?: model.CaDetails;
}

export namespace CaBundleResponse {
  export function getJsonObj(obj: CaBundleResponse): object {
    const jsonObj = {
      ...obj,
      ...{
        "caDetails": obj.caDetails ? model.CaDetails.getJsonObj(obj.caDetails) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CaBundleResponse): object {
    const jsonObj = {
      ...obj,
      ...{
        "caDetails": obj.caDetails
          ? model.CaDetails.getDeserializedJsonObj(obj.caDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
