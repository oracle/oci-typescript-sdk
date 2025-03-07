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
 * These are the asynchronous operation name for a storage work Request
 *
 **/
export enum StorageOperationType {
  OffboardTenancy = "OFFBOARD_TENANCY",
  PurgeStorageData = "PURGE_STORAGE_DATA",
  RecallArchivedStorageData = "RECALL_ARCHIVED_STORAGE_DATA",
  ReleaseRecalledStorageData = "RELEASE_RECALLED_STORAGE_DATA",
  PurgeArchivalData = "PURGE_ARCHIVAL_DATA",
  ArchiveStorageData = "ARCHIVE_STORAGE_DATA",
  CleanupArchivalStorageData = "CLEANUP_ARCHIVAL_STORAGE_DATA",
  EncryptActiveData = "ENCRYPT_ACTIVE_DATA",
  EncryptArchivalData = "ENCRYPT_ARCHIVAL_DATA",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace StorageOperationType {
  export function getJsonObj(obj: StorageOperationType): StorageOperationType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: StorageOperationType): StorageOperationType {
    return obj;
  }
}
