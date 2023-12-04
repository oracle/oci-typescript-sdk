/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information to update a the Google BigQuery Connection.
 *
 */
export interface UpdateGoogleBigQueryConnectionDetails extends model.UpdateConnectionDetails {
  /**
   * The base64 encoded content of the service account key file containing
   * the credentials required to use Google BigQuery.
   *
   */
  "serviceAccountKeyFile"?: string;

  "connectionType": string;
}

export namespace UpdateGoogleBigQueryConnectionDetails {
  export function getJsonObj(
    obj: UpdateGoogleBigQueryConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getJsonObj(obj) as UpdateGoogleBigQueryConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "GOOGLE_BIGQUERY";
  export function getDeserializedJsonObj(
    obj: UpdateGoogleBigQueryConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as UpdateGoogleBigQueryConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}