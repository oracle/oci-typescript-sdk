/**
 * Oracle Cloud Bridge API
 * API for Oracle Cloud Bridge service.
 * OpenAPI spec version: 20220509
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
 * The assets SCSI controller.
 */
export interface ScsiController {
  /**
   * Provides a label and summary information for the device.
   */
  "label"?: string;
  /**
   * The unit number of the SCSI controller. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "unitNumber"?: number;
  /**
   * Shared bus.
   */
  "sharedBus"?: string;
}

export namespace ScsiController {
  export function getJsonObj(obj: ScsiController): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScsiController): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
