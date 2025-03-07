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
 * Information about the detailed CA bundle content of the rover node.
 */
export interface CaDetails {
  /**
   * Plain text certificate chain in PEM format for the subordinate CA associated with given roverNode.
   */
  "caBundlePem"?: string;
  /**
   * Max validity of leaf certificates issued by the CA associated with given node, in days, in ISO 8601 format, example \"P365D\".
   */
  "certificateMaxValidityDuration"?: string;
}

export namespace CaDetails {
  export function getJsonObj(obj: CaDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CaDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
