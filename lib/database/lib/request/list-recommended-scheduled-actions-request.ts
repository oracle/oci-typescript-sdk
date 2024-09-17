/**
 *
 *
 * OpenAPI spec version: 20160918
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/database/ListRecommendedScheduledActions.ts.html |here} to see how to use ListRecommendedScheduledActionsRequest.
 */
export interface ListRecommendedScheduledActionsRequest extends common.BaseRequest {
  /**
   * The Scheduling Policy [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "schedulingPolicyId": string;
  /**
   * The target resource [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) the scheduled actions will be for.
   */
  "schedulingPolicyTargetResourceId": string;
  /**
   * The scheduling plan intent the scheduled actions will be for.
   */
  "planIntent": ListRecommendedScheduledActionsRequest.PlanIntent;
  /**
   * The maximum number of items to return per page.
   */
  "limit"?: number;
  /**
   * The pagination token to continue listing from.
   */
  "page"?: string;
  /**
   * Unique identifier for the request.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListRecommendedScheduledActionsRequest {
  export enum PlanIntent {
    ExadataInfrastructureFullSoftwareUpdate = "EXADATA_INFRASTRUCTURE_FULL_SOFTWARE_UPDATE"
  }
}