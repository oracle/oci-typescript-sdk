/**
 * Java Management Service Fleets API
 * The APIs for the [Fleet Management](https://docs.oracle.com/en-us/iaas/jms/doc/fleet-management.html) feature of Java Management Service to monitor and manage the usage of Java in your enterprise. Use these APIs to manage fleets, configure managed instances to report to fleets, and gain insights into the Java workloads running on these instances by carrying out basic and advanced features.
 * OpenAPI spec version: 20210610
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
 * Work item to complete a work request.
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
  "details":
    | model.DeployedApplicationWorkItemDetails
    | model.LcmWorkItemDetails
    | model.BasicWorkItemDetails
    | model.ApplicationWorkItemDetails;
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
          : undefined,
        "details": obj.details ? model.WorkItemDetails.getJsonObj(obj.details) : undefined
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
          : undefined,
        "details": obj.details
          ? model.WorkItemDetails.getDeserializedJsonObj(obj.details)
          : undefined
      }
    };

    return jsonObj;
  }
}
