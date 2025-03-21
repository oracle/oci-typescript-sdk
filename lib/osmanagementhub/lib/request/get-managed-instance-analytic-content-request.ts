/**
 *
 *
 * OpenAPI spec version: 20220901
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osmanagementhub/GetManagedInstanceAnalyticContent.ts.html |here} to see how to use GetManagedInstanceAnalyticContentRequest.
 */
export interface GetManagedInstanceAnalyticContentRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   * This filter returns only resources contained within the specified compartment.
   *
   */
  "compartmentId"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the managed instance group. This filter returns resources associated with this group.
   */
  "managedInstanceGroupId"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the lifecycle environment. This filter returns only resource contained with the specified lifecycle environment.
   */
  "lifecycleEnvironmentId"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the lifecycle stage. This resource returns resources associated with this lifecycle stage.
   */
  "lifecycleStageId"?: string;
  /**
   * A filter to return only managed instances whose status matches the status provided.
   */
  "status"?: Array<model.ManagedInstanceStatus>;
  /**
   * A filter to return resources that match the given display names.
   */
  "displayName"?: Array<string>;
  /**
   * A filter to return resources that may partially match the given display name.
   */
  "displayNameContains"?: string;
  /**
   * A filter to return instances that have the specified number of available security updates.
   */
  "securityUpdatesAvailableEqualsTo"?: number;
  /**
   * A filter to return instances that have the specified number of available bug updates.
   */
  "bugUpdatesAvailableEqualsTo"?: number;
  /**
   * A filter to return instances that have more available security updates than the number specified.
   */
  "securityUpdatesAvailableGreaterThan"?: number;
  /**
   * A filter to return instances that have more available bug updates than the number specified.
   */
  "bugUpdatesAvailableGreaterThan"?: number;
  /**
   * A filter to return only resources whose location matches the given value.
   */
  "location"?: Array<model.ManagedInstanceLocation>;
  /**
   * A filter to return only resources whose location does not match the given value.
   */
  "locationNotEqualTo"?: Array<model.ManagedInstanceLocation>;
  /**
   * A filter to return only resources that match the given operating system family.
   */
  "osFamily"?: Array<model.OsFamily>;
  /**
   * Indicates whether to list only resources managed by the Autonomous Linux service.
   *
   */
  "isManagedByAutonomousLinux"?: boolean;
  /**
   * The format of the report to download. Default is CSV.
   */
  "reportFormat"?: GetManagedInstanceAnalyticContentRequest.ReportFormat;
  /**
   * The type of the report the user wants to download. Default is ALL.
   */
  "reportType"?: GetManagedInstanceAnalyticContentRequest.ReportType;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
}

export namespace GetManagedInstanceAnalyticContentRequest {
  export enum ReportFormat {
    Csv = "csv",
    Json = "json",
    Xml = "xml"
  }

  export enum ReportType {
    Security = "SECURITY",
    Bugfix = "BUGFIX",
    Activity = "ACTIVITY",
    All = "ALL"
  }
}
