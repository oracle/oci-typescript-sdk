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
 * The source details of the usage data in object storage. The usage data file uploaded to object storage must be a gzip archive
 * of the JSON usage data returned from the GraalVM native-image-inspect tool after a native-image build.
 * Set {@code sourceType} to {@code objectStorageTuple}
 * and use {@link #usageDataViaObjectStorageTupleDetails(UsageDataViaObjectStorageTupleDetailsRequest) usageDataViaObjectStorageTupleDetails}
 * when specifying the namespace, bucket name, and object name.
 *
 */
export interface UsageDataDetails {
  "sourceType": string;
}

export namespace UsageDataDetails {
  export function getJsonObj(obj: UsageDataDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "objectStorageTuple":
          return model.UsageDataViaObjectStorageTupleDetails.getJsonObj(
            <model.UsageDataViaObjectStorageTupleDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.sourceType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UsageDataDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "objectStorageTuple":
          return model.UsageDataViaObjectStorageTupleDetails.getDeserializedJsonObj(
            <model.UsageDataViaObjectStorageTupleDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.sourceType}`);
      }
    }
    return jsonObj;
  }
}
