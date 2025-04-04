/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Import metadata object response summary.
 */
export interface ImportRequestSummary {
  /**
   * Import object request key
   */
  "key"?: string;
  /**
   * The name of the Object Storage Bucket where the objects will be imported from
   */
  "bucketName"?: string;
  /**
   * Name of the zip file from which objects will be imported.
   */
  "fileName"?: string;
  /**
   * Optional parameter to point to object storage tenancy (if using Object Storage of different tenancy)
   */
  "objectStorageTenancyId"?: string;
  /**
   * Region of the object storage (if using object storage of different region)
   */
  "objectStorageRegion"?: string;
  /**
   * Key of the object inside which all the objects will be imported
   */
  "objectKeyForImport"?: string;
  /**
   * This field controls if the data asset references will be included during import.
   */
  "areDataAssetReferencesIncluded"?: boolean;
  "importConflictResolution"?: model.ImportConflictResolution;
  /**
   * Import Objects request status.
   */
  "status"?: ImportRequestSummary.Status;
  /**
   * Name of the user who initiated import request.
   */
  "createdBy"?: string;
  /**
   * Number of objects that are imported. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalImportedObjectCount"?: number;
  /**
   * Time at which the request started getting processed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeStartedInMillis"?: number;
  /**
   * Time at which the request was completely processed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeEndedInMillis"?: number;
  /**
   * Contains key of the error
   */
  "errorMessages"?: { [key: string]: string };
  /**
   * The array of imported object details.
   */
  "importedObjects"?: Array<model.ImportObjectMetadataSummary>;
  /**
   * Name of the import request.
   */
  "name"?: string;
}

export namespace ImportRequestSummary {
  export enum Status {
    Successful = "SUCCESSFUL",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Queued = "QUEUED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ImportRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "importConflictResolution": obj.importConflictResolution
          ? model.ImportConflictResolution.getJsonObj(obj.importConflictResolution)
          : undefined,

        "importedObjects": obj.importedObjects
          ? obj.importedObjects.map(item => {
              return model.ImportObjectMetadataSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ImportRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "importConflictResolution": obj.importConflictResolution
          ? model.ImportConflictResolution.getDeserializedJsonObj(obj.importConflictResolution)
          : undefined,

        "importedObjects": obj.importedObjects
          ? obj.importedObjects.map(item => {
              return model.ImportObjectMetadataSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
