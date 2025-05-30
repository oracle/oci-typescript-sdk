/**
 * Usage API
 * Use the Usage API to view your Oracle Cloud usage and costs. The API allows you to request data that meets the specified filter criteria, and to group that data by the chosen dimension. The Usage API is used by [Cost Analysis](https://docs.oracle.com/iaas/Content/Billing/Concepts/costanalysisoverview.htm), [Scheduled Reports](https://docs.oracle.com/iaas/Content/Billing/Concepts/scheduledreportoverview.htm), and [Carbon Emissions Analysis](https://docs.oracle.com/iaas/Content/General/Concepts/emissions-management.htm) in the Console. Also see [Using the Usage API](https://docs.oracle.com/iaas/Content/Billing/Concepts/costanalysisoverview.htm#cost_analysis_using_the_api) for more information.
 * OpenAPI spec version: 20200107
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
 * The schedule.
 */
export interface Schedule {
  /**
   * The OCID representing a unique shedule.
   */
  "id": string;
  /**
   * The unique name of the schedule created by the user.
   */
  "name": string;
  /**
   * The customer tenancy.
   */
  "compartmentId": string;
  "resultLocation": model.ObjectStorageLocation;
  /**
   * The description of the schedule.
   */
  "description"?: string;
  /**
   * The date and time of the next job execution.
   */
  "timeNextRun"?: Date;
  /**
   * Specifies the supported output file format.
   */
  "outputFileFormat"?: Schedule.OutputFileFormat;
  /**
   * The saved report ID which can also be used to generate a query.
   */
  "savedReportId"?: string;
  /**
   * Specifies the frequency according to when the schedule will be run,
   * in the x-obmcs-recurring-time format described in [RFC 5545 section 3.3.10](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10).
   * Supported values are : ONE_TIME, DAILY, WEEKLY and MONTHLY.
   *
   */
  "scheduleRecurrences": string;
  /**
   * The date and time of the first time job execution.
   */
  "timeScheduled": Date;
  "queryProperties"?: model.QueryProperties;
  /**
   * The date and time the schedule was created.
   */
  "timeCreated": Date;
  /**
   * The schedule lifecycle state.
   */
  "lifecycleState": Schedule.LifecycleState;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * See [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm). Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm). Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces. See [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm). Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Schedule {
  export enum OutputFileFormat {
    Csv = "CSV",
    Pdf = "PDF",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Schedule): object {
    const jsonObj = {
      ...obj,
      ...{
        "resultLocation": obj.resultLocation
          ? model.ResultLocation.getJsonObj(obj.resultLocation)
          : undefined,

        "queryProperties": obj.queryProperties
          ? model.QueryProperties.getJsonObj(obj.queryProperties)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Schedule): object {
    const jsonObj = {
      ...obj,
      ...{
        "resultLocation": obj.resultLocation
          ? model.ResultLocation.getDeserializedJsonObj(obj.resultLocation)
          : undefined,

        "queryProperties": obj.queryProperties
          ? model.QueryProperties.getDeserializedJsonObj(obj.queryProperties)
          : undefined
      }
    };

    return jsonObj;
  }
}
