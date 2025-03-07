/**
 * OCI Control Center Capacity Management API
 * OCI Control Center (OCC) Capacity Management enables you to manage capacity requests in realms where OCI Control Center Capacity Management is available. For more information, see [OCI Control Center](https://docs.oracle.com/iaas/Content/control-center/home.htm).
 * OpenAPI spec version: 20231107
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
 * The overview summary is used to represent an array item that shall be used to represent the overview of the catalog resources along with their corresponding capacity requests.
 *
 */
export interface OccOverviewSummary {
  /**
   * The OCID of the compartment from which the api call is made. This will be used for authorizing the request.
   */
  "compartmentId": string;
  /**
   * The name of the month along with year for which this summary corresponds to.
   */
  "periodValue": string;
  /**
   * The name of the resource for which we have aggregated the value.
   */
  "resourceName": string;
  /**
   * The quantity of the resource which is available at the end of the period of aggregationDetails model in consideration. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalAvailable": number;
  /**
   * The quantity of the resource which is demanded by customers via capacity requests against the resource name at the end of the time period in consideration for overview. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalDemanded": number;
  /**
   * The quantity of the resource which is supplied by Oracle to the customer against the resource name at the end of the time period in consideration. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalSupplied": number;
  /**
   * The quantity of the resource which is rejected by Oracle. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalRejected": number;
  /**
   * The quantity of the resource which is cancelled by the customer. Once the capacity request was submitted, the customer can still cancel it. This field sums up those values. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalCancelled": number;
  /**
   * The quantity of the resource which Oracle was unable to supply. For a given capacity request, Oracle sometimes cannot supply the entire value demanded by the customer. In such cases a partial value is provided, thereby leaving behind a portion of unfulfilled values. This field sums that up. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalUnfulfilled": number;
  /**
   * A raw json blob containing breakdown of totalAvailable, totalDemanded, totalSupplied, totalRejected, totalCancelled and totalUnfulfilled by workload types
   */
  "workloadTypeBreakdownBlob": string;
  /**
   * A raw json blob containing all the capacity requests corresponding to the resource name
   */
  "capacityRequestsBlob"?: string;
  /**
   * The unit e.g SERVER in which the above values like totalAvailable, totalSupplied etc is measured.
   */
  "unit": string;
}

export namespace OccOverviewSummary {
  export function getJsonObj(obj: OccOverviewSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OccOverviewSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
