/**
 *
 *
 * OpenAPI spec version: 20210330
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/stackmonitoring/SearchAssociatedResources.ts.html |here} to see how to use SearchAssociatedResourcesRequest.
 */
export interface SearchAssociatedResourcesRequest extends common.BaseRequest {
  /**
   * Search Criteria for the listing the monitored resources for given type and compartmentId.
   */
  "searchAssociatedResourcesDetails": model.SearchAssociatedResourcesDetails;
  /**
   * Partial response refers to an optimization technique offered
   * by the RESTful web APIs, to return only the information
   * (fields) required by the client. In this mechanism, the client
   * sends the required field names as the query parameters for
   * an API to the server, and the server trims down the default
   * response content by removing the fields that are not required
   * by the client. The parameter controls which fields to
   * return and should be a query string parameter called \"fields\" of
   * an array type, provide the values as enums, and use collectionFormat.
   *
   */
  "fields"?: Array<string>;
  /**
   * Partial response refers to an optimization technique offered
   * by the RESTful web APIs, to return all the information except
   * the fields requested to be excluded (excludeFields) by the client.
   * In this mechanism, the client
   * sends the exclude field names as the query parameters for
   * an API to the server, and the server trims down the default
   * response content by removing the fields that are not required
   * by the client. The parameter controls which fields to
   * exlude and to return and should be a query string parameter
   * called \"excludeFields\" of an array type, provide the values
   * as enums, and use collectionFormat.
   *
   */
  "excludeFields"?: Array<string>;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
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
   * For optimistic concurrency control. In the PUT or DELETE call
   * for a resource, set the {@code if-match} parameter to the value of the
   * etag from a previous GET or POST response for that resource.
   * The resource will be updated or deleted only if the etag you
   * provide matches the resource's current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * For list pagination. The maximum number of results per page, or items to return in a
   * paginated \"List\" call. For important details about how pagination works, see
   * [List Pagination](https://docs.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "limit"?: number;
  /**
   * For list pagination. The value of the {@code opc-next-page} response header from the
   * previous \"List\" call. For important details about how pagination works, see
   * [List Pagination](https://docs.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
}
