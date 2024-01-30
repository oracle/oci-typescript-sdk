/**
 * OciControlCenterCp API
 * A description of the OciControlCenterCp API
 * OpenAPI spec version: 20231107
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Used for representing the metadata of the catalog. This denotes the version and format of the CSV file for parsing.
 */
export interface MetadataDetails {
  /**
   * The version for the format of the catalog file being uploaded.
   */
  "formatVersion": MetadataDetails.FormatVersion;
}

export namespace MetadataDetails {
  export enum FormatVersion {
    V1 = "V1",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MetadataDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MetadataDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}