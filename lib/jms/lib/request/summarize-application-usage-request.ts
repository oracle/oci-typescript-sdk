/**
 *
 *
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/jms/SummarizeApplicationUsage.ts.html |here} to see how to use SummarizeApplicationUsageRequest.
 */
export interface SummarizeApplicationUsageRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Fleet.
   */
  "fleetId": string;
  /**
   * The Fleet-unique identifier of the application.
   */
  "applicationId"?: string;
  /**
   * The display name.
   */
  "displayName"?: string;
  /**
   * The type of the application.
   */
  "applicationType"?: string;
  /**
   * The vendor of the related Java Runtime.
   */
  "jreVendor"?: string;
  /**
   * The distribution of the related Java Runtime.
   */
  "jreDistribution"?: string;
  /**
   * The version of the related Java Runtime.
   */
  "jreVersion"?: string;
  /**
   * The file system path of the Java Runtime installation.
   */
  "installationPath"?: string;
  /**
   * The Fleet-unique identifier of the related managed instance.
   */
  "managedInstanceId"?: string;
  /**
   * Additional fields to include into the returned model on top of the required ones.
   * This parameter can also include 'approximateJreCount', 'approximateInstallationCount' and 'approximateManagedInstanceCount'.
   * For example 'approximateJreCount,approximateInstallationCount'.
   *
   */
  "fields"?: Array<model.SummarizeApplicationUsageFields>;
  /**
   * The start of the time period during which resources are searched (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   */
  "timeStart"?: Date;
  /**
   * The end of the time period during which resources are searched (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   */
  "timeEnd"?: Date;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. The token is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order, either 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort application views. Only one sort order may be provided.
   * Default order for _timeFirstSeen_, _timeLastSeen_, _approximateJreCount_, _approximateInstallationCount_
   * and _approximateManagedInstanceCount_  is **descending**.
   * Default order for _displayName_ and _osName_ is **ascending**.
   * If no value is specified _timeLastSeen_ is default.
   *
   */
  "sortBy"?: model.ApplicationSortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * The operating system type.
   */
  "osFamily"?: Array<model.OsFamily>;
  /**
   * Filter the list with displayName contains the given value.
   *
   */
  "displayNameContains"?: string;
  /**
   * The library key.
   *
   */
  "libraryKey"?: string;
}
