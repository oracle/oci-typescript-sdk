/**
 * Application Dependency Management API
 * Use the Application Dependency Management API to create knowledge bases and vulnerability audits.  For more information, see [ADM](https://docs.oracle.com/iaas/Content/application-dependency-management/home.htm).
 * OpenAPI spec version: 20220421
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
 * Reference to an object in object storage as a tuple. The usage data file uploaded to object storage must be a gzip archive
 * of the JSON usage data returned from the GraalVM native-image-inspect tool after a native-image build.
 *
 */
export interface UsageDataViaObjectStorageTupleDetails extends model.UsageDataDetails {
  /**
   * The Object Storage bucket to read the usage data from.
   */
  "bucketName": string;
  /**
   * The Object Storage namespace to read the usage data from.
   */
  "namespaceName": string;
  /**
   * The Object Storage object name to read the usage data from.
   */
  "objectName": string;

  "sourceType": string;
}

export namespace UsageDataViaObjectStorageTupleDetails {
  export function getJsonObj(
    obj: UsageDataViaObjectStorageTupleDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UsageDataDetails.getJsonObj(obj) as UsageDataViaObjectStorageTupleDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const sourceType = "objectStorageTuple";
  export function getDeserializedJsonObj(
    obj: UsageDataViaObjectStorageTupleDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UsageDataDetails.getDeserializedJsonObj(
            obj
          ) as UsageDataViaObjectStorageTupleDetails)),
      ...{}
    };

    return jsonObj;
  }
}
