/**
 *
 *
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/adm/ListRemediationRuns.ts.html |here} to see how to use ListRemediationRunsRequest.
 */
export interface ListRemediationRunsRequest extends common.BaseRequest {
  /**
   * A filter to return only resources that match the specified identifier.
   * Required only if the compartmentId query parameter is not specified.
   *
   */
  "id"?: string;
  /**
   * A filter to return only resources that match the specified Remediation Recipe identifier.
   */
  "remediationRecipeId"?: string;
  /**
   * A filter to return only Remediation Runs that match the specified lifecycleState.
   */
  "lifecycleState"?: string;
  /**
   * A filter to return only resources that match the entire display name given.
   */
  "displayName"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field used to sort Remediation Runs. Only one sort order is allowed.
   * Default order for _timeCreated_ is **descending**.
   * Default order for _timeFinished_ is **descending**.
   * Default order for _timeStarted_ is **descending**.
   * Default order for _displayName_ is **ascending alphabetical order**.
   * Default order for _lifecycleState_ is the following sequence: **CREATING, ACTIVE, UPDATING, DELETING, DELETED, and FAILED**.
   * Default order for currentStageType is the following sequence: **DETECT, RECOMMEND, VERIFY, and APPLY**.
   *
   */
  "sortBy"?: ListRemediationRunsRequest.SortBy;
  /**
   * A filter to return only resources that belong to the specified compartment identifier.
   * Required only if the id query param is not specified.
   *
   */
  "compartmentId"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * A token representing the position at which to start retrieving results. This must come from the {@code opc-next-page} header field of a previous response.
   */
  "page"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListRemediationRunsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    TimeFinished = "timeFinished",
    TimeStarted = "timeStarted",
    DisplayName = "displayName",
    LifecycleState = "lifecycleState",
    CurrentStageType = "currentStageType"
  }
}
