/**
 *
 *
 * OpenAPI spec version: 20200601
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/ValidateAssociationParameters.ts.html |here} to see how to use ValidateAssociationParametersRequest.
 */
export interface ValidateAssociationParametersRequest extends common.BaseRequest {
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * Details for the new log analytics associations.
   */
  "upsertLogAnalyticsAssociationDetails": model.UpsertLogAnalyticsAssociationDetails;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending ({@code ASC}) or descending ({@code DESC}).
   *
   */
  "sortOrder"?: ValidateAssociationParametersRequest.SortOrder;
  /**
   * The attribute used to sort the returned association parameters
   */
  "sortBy"?: ValidateAssociationParametersRequest.SortBy;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or
   * server error without risk of executing that same action again. Retry tokens expire after 24
   * hours, but can be invalidated before then due to conflicting operations. For example, if a resource
   * has been deleted and purged from the system, then a retry of the original creation request
   * might be rejected.
   *
   */
  "opcRetryToken"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ValidateAssociationParametersRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    SourceDisplayName = "sourceDisplayName",
    Status = "status"
  }
}
