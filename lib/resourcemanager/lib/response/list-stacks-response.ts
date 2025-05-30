/**
 *
 *
 * OpenAPI spec version: 20180917
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

export interface ListStacksResponse {
  /**
   * Unique identifier for the request.
   */
  "opcRequestId": string;
  /**
   * Retrieves the next page of paginated list items. If the {@code opc-next-page}
   * header appears in the response, additional pages of results remain.
   * To receive the next page, include the header value in the {@code page} param.
   * If the {@code opc-next-page} header does not appear in the response, there
   * are no more list items to get. For more information about list pagination,
   * see [List Pagination](https://docs.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "opcNextPage": string;
  /**
   * A list of StackSummary instances.
   */
  "items": model.StackSummary[];
}
