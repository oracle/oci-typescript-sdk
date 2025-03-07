/**
 *
 *
 * OpenAPI spec version: 20210527
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/servicecatalog/ListApplications.ts.html |here} to see how to use ListApplicationsRequest.
 */
export interface ListApplicationsRequest extends common.BaseRequest {
  /**
   * The unique identifier for the compartment.
   */
  "compartmentId"?: string;
  /**
   * The unique identifier for the service catalog.
   */
  "serviceCatalogId"?: string;
  /**
   * The type of the application in the service catalog.
   */
  "entityType"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * How many records to return. Specify a value greater than zero and less than or equal to 1000. The default is 30.
   *
   */
  "limit"?: number;
  /**
   * The value of the {@code opc-next-page} response header from the previous \"List\" call.
   */
  "page"?: string;
  /**
   * Exact match name filter.
   */
  "displayName"?: string;
  /**
   * The unique identifier of the entity associated with service catalog.
   */
  "entityId"?: string;
  /**
   * Limit results to just this publisher.
   */
  "publisherId"?: Array<string>;
  /**
   * Name of the package type. If multiple package types are provided, then any resource with
   * one or more matching package types will be returned.
   *
   */
  "packageType"?: Array<model.PackageTypeEnum>;
  /**
   * Name of the pricing type. If multiple pricing types are provided, then any resource with
   * one or more matching pricing models will be returned.
   *
   */
  "pricing"?: Array<model.PricingTypeEnum>;
  /**
   * Indicates whether to show only featured resources. If this is set to {@code false} or is omitted, then all resources will be returned.
   *
   */
  "isFeatured"?: boolean;
  /**
   * The sort order to apply, either {@code ASC} or {@code DESC}. Default is {@code ASC}.
   */
  "sortOrder"?: ListApplicationsRequest.SortOrder;
}

export namespace ListApplicationsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
