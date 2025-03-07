/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * Important changes for software. This can include security | advisories, bug fixes, or enhancements.
 */
export interface ErratumSummary {
  /**
   * Advisory name
   */
  "name": string;
  /**
   * OCID for the Erratum.
   */
  "id": string;
  /**
   * OCID for the Compartment.
   */
  "compartmentId": string;
  /**
   * Summary description of the erratum.
   */
  "synopsis"?: string;
  /**
   * date the erratum was issued
   */
  "issued"?: string;
  /**
   * most recent date the erratum was updated
   */
  "updated"?: string;
  /**
   * Type of the erratum.
   */
  "advisoryType"?: model.UpdateTypes;
  /**
   * list of CVEs applicable to this erratum
   */
  "relatedCves"?: Array<string>;
}

export namespace ErratumSummary {
  export function getJsonObj(obj: ErratumSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ErratumSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
