/**
 * OpenSearch Service API
 * The OpenSearch service API provides access to OCI Search Service with OpenSearch.
 * OpenAPI spec version: 20180828
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
 * Details for the maintenance activity.
 */
export interface MaintenanceDetails {
  /**
   * State of the maintenance activity
   */
  "state": model.MaintenanceState;
  /**
   * Start time of the maintenance activity
   */
  "startTime"?: Date;
  /**
   * End time of the maintenance activity
   */
  "endTime"?: Date;
  /**
   * The Email Ids given the by customer to get notified about maintenance activities
   */
  "notificationEmailIds"?: Array<string>;
}

export namespace MaintenanceDetails {
  export function getJsonObj(obj: MaintenanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MaintenanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
