/**
 * Ops Insights API
 * Use the Ops Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Ops Insights](https://docs.oracle.com/iaas/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Basic configuration item summary. Value and defaultValue fields will contain the custom value stored in the resource and default value from Ops Insights respectively.
 *
 */
export interface OpsiConfigurationBasicConfigurationItemSummary
  extends model.OpsiConfigurationConfigurationItemSummary {
  /**
   * Name of configuration item.
   */
  "name"?: string;
  /**
   * Value of configuration item.
   */
  "value"?: string;
  /**
   * Value of configuration item.
   */
  "defaultValue"?: string;
  /**
   * List of contexts in Operations Insights where this configuration item is applicable.
   */
  "applicableContexts"?: Array<string>;
  "metadata"?: model.BasicConfigurationItemMetadata;

  "configItemType": string;
}

export namespace OpsiConfigurationBasicConfigurationItemSummary {
  export function getJsonObj(
    obj: OpsiConfigurationBasicConfigurationItemSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.OpsiConfigurationConfigurationItemSummary.getJsonObj(
            obj
          ) as OpsiConfigurationBasicConfigurationItemSummary)),
      ...{
        "metadata": obj.metadata
          ? model.ConfigurationItemMetadata.getJsonObj(obj.metadata)
          : undefined
      }
    };

    return jsonObj;
  }
  export const configItemType = "BASIC";
  export function getDeserializedJsonObj(
    obj: OpsiConfigurationBasicConfigurationItemSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.OpsiConfigurationConfigurationItemSummary.getDeserializedJsonObj(
            obj
          ) as OpsiConfigurationBasicConfigurationItemSummary)),
      ...{
        "metadata": obj.metadata
          ? model.ConfigurationItemMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    return jsonObj;
  }
}
