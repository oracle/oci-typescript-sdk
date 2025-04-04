/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * This is the configuration for data archiving in object storage
 */
export interface ArchivingConfiguration {
  /**
   * This is the duration data in active storage before data is archived, as described in
   * https://en.wikipedia.org/wiki/ISO_8601#Durations.
   * The largest supported unit is D, e.g. P365D (not P1Y) or P14D (not P2W).
   *
   */
  "activeStorageDuration"?: string;
  /**
   * This is the duration before archived data is deleted from object storage, as described in
   * https://en.wikipedia.org/wiki/ISO_8601#Durations
   * The largest supported unit is D, e.g. P365D (not P1Y) or P14D (not P2W).
   *
   */
  "archivalStorageDuration"?: string;
}

export namespace ArchivingConfiguration {
  export function getJsonObj(obj: ArchivingConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ArchivingConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
