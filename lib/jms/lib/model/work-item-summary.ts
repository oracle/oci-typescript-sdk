/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The LCM work request for a JVM installation site.
 */
export interface WorkItemSummary {
  /**
   * The unique ID of ths work item.
   */
  "id": string;
  /**
   * The OCID of the work request created this work item.
   */
  "workRequestId": string;
  "installationSite": model.InstallationSite;
  /**
   * The status of the work item.
   */
  "status": model.WorkItemStatus;
  /**
   * Number of times this work item is retried. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "retryCount": number;
  /**
   * The date and time the work item was last updated. (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   *
   */
  "timeLastUpdated"?: Date;
}

export namespace WorkItemSummary {
  export function getJsonObj(obj: WorkItemSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "installationSite": obj.installationSite
          ? model.InstallationSite.getJsonObj(obj.installationSite)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkItemSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "installationSite": obj.installationSite
          ? model.InstallationSite.getDeserializedJsonObj(obj.installationSite)
          : undefined
      }
    };

    return jsonObj;
  }
}