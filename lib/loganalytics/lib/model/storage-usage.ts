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
 * This is the storage usage information of a tenancy in Logging Analytics application
 */
export interface StorageUsage {
  /**
   * This is the number of bytes of active data (non-archived) Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "activeDataSizeInBytes": number;
  /**
   * This is the number of bytes of archived data in object storage Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "archivedDataSizeInBytes": number;
  /**
   * This is the number of bytes of recalled data from archived in object store Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "recalledArchivedDataSizeInBytes": number;
}

export namespace StorageUsage {
  export function getJsonObj(obj: StorageUsage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: StorageUsage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
