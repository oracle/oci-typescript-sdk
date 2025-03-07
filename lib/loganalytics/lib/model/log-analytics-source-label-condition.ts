/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

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
 * LogAnalyticsSourceLabelCondition
 */
export interface LogAnalyticsSourceLabelCondition {
  /**
   * String representation of the label condition. This supports specifying multiple condition blocks at various nested levels.
   *
   */
  "conditionString"?: string;
  "conditionBlock"?: model.ConditionBlock;
  /**
   * The message.
   */
  "message"?: string;
  /**
   * A flag indicating whether or not the label condition is visible.
   *
   */
  "isVisible"?: boolean;
  /**
   * The block condition field.
   */
  "blockConditionField"?: string;
  /**
   * The block condition operator.
   */
  "blockConditionOperator"?: string;
  /**
   * The block condition value.
   */
  "blockConditionValue"?: string;
  /**
   * The condition value.
   */
  "labelConditionValue"?: string;
  /**
   * A list of condition values.
   */
  "labelConditionValues"?: Array<string>;
  /**
   * The content example.
   */
  "contentExample"?: string;
  /**
   * A flag inidcating whether or not the condition is enabled.
   *
   */
  "isEnabled"?: boolean;
  /**
   * The internal field name.
   */
  "fieldName"?: string;
  /**
   * The unique identifier of the condition. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "labelConditionId"?: number;
  /**
   * The system flag.  A value of false denotes a custom, or user
   * defined object.  A value of true denotes a built in object.
   *
   */
  "isSystem"?: boolean;
  /**
   * The condition operator.
   */
  "labelConditionOperator"?: string;
  /**
   * The unique identifier of the source. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sourceId"?: number;
  /**
   * The label display name.
   */
  "labelDisplayName"?: string;
  /**
   * The label storage field.
   */
  "storageField"?: string;
  /**
   * The label name.
   */
  "labelName"?: string;
  /**
   * A flag indicating whether or not the inline label exists in the database.
   *
   */
  "isInlineLabelExistingInDatabase"?: boolean;
}

export namespace LogAnalyticsSourceLabelCondition {
  export function getJsonObj(obj: LogAnalyticsSourceLabelCondition): object {
    const jsonObj = {
      ...obj,
      ...{
        "conditionBlock": obj.conditionBlock
          ? model.ConditionBlock.getJsonObj(obj.conditionBlock)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsSourceLabelCondition): object {
    const jsonObj = {
      ...obj,
      ...{
        "conditionBlock": obj.conditionBlock
          ? model.ConditionBlock.getDeserializedJsonObj(obj.conditionBlock)
          : undefined
      }
    };

    return jsonObj;
  }
}
