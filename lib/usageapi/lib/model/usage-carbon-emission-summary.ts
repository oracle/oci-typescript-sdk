/**
 * Usage API
 * Use the Usage API to view your Oracle Cloud usage and costs. The API allows you to request data that meets the specified filter criteria, and to group that data by the chosen dimension. The Usage API is used by the Cost Analysis and Carbon Emissions Analysis tools in the Console. See [Cost Analysis Overview](https://docs.oracle.com/iaas/Content/Billing/Concepts/costanalysisoverview.htm) and [Using the Usage API](https://docs.oracle.com/iaas/Content/Billing/Concepts/costanalysisoverview.htm#cost_analysis_using_the_api) for more information.
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
 * The usage carbon emission store result.
 */
export interface UsageCarbonEmissionSummary {
  /**
   * The tenancy OCID.
   */
  "tenantId"?: string;
  /**
   * The tenancy name.
   */
  "tenantName"?: string;
  /**
   * The compartment OCID.
   */
  "compartmentId"?: string;
  /**
   * The compartment path, starting from root.
   */
  "compartmentPath"?: string;
  /**
   * The compartment name.
   */
  "compartmentName"?: string;
  /**
   * The service name that is incurring the cost.
   */
  "service"?: string;
  /**
   * The resource name that is incurring the cost.
   */
  "resourceName"?: string;
  /**
   * The resource OCID that is incurring the cost.
   */
  "resourceId"?: string;
  /**
   * The region of the usage.
   */
  "region"?: string;
  /**
   * The availability domain of the usage.
   */
  "ad"?: string;
  /**
   * The SKU part number.
   */
  "skuPartNumber"?: string;
  /**
   * The SKU friendly name.
   */
  "skuName"?: string;
  /**
   * Platform for the cost.
   */
  "platform"?: string;
  /**
   * The usage start time.
   */
  "timeUsageStarted": Date;
  /**
   * The usage end time.
   */
  "timeUsageEnded": Date;
  /**
   * The carbon emission in MTCO2 unit. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "computedCarbonEmission": number;
  /**
   * The method used to calculate carbon emission.
   */
  "emissionCalculationMethod": string;
  /**
   * The subscription ID.
   */
  "subscriptionId"?: string;
  /**
   * For grouping, a tag definition. For filtering, a definition and key.
   */
  "tags"?: Array<model.Tag>;
}

export namespace UsageCarbonEmissionSummary {
  export function getJsonObj(obj: UsageCarbonEmissionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tag.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UsageCarbonEmissionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tag.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
