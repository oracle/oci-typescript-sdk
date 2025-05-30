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
 * The summary of an Object Storage based collection rule.
 *
 */
export interface LogAnalyticsObjectCollectionRuleSummary {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of this rule.
   */
  "id": string;
  /**
   * A unique name to the rule. The name must be unique, within the tenancy, and cannot be changed.
   */
  "name": string;
  /**
   * A unique name given to the rule. The name must be unique within the tenancy, and cannot be modified.
   * Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to which this rule belongs.
   */
  "compartmentId": string;
  /**
   * Object Storage namespace.
   */
  "osNamespace": string;
  /**
   * Name of the Object Storage bucket.
   */
  "osBucketName": string;
  /**
   * The type of log collection.
   *
   */
  "collectionType": model.ObjectCollectionRuleCollectionTypes;
  /**
   * The current state of the rule.
   *
   */
  "lifecycleState": model.ObjectCollectionRuleLifecycleStates;
  /**
   * A detailed status of the life cycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The time when this rule was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time when this rule was last updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated": Date;
  /**
   * Whether or not this rule is currently enabled.
   *
   */
  "isEnabled": boolean;
  /**
   * When the filters are provided, only the objects matching the filters are picked up for processing.
   * The matchType supported is exact match and accommodates wildcard \"*\".
   * For more information on filters, see [Event Filters](https://docs.oracle.com/en-us/iaas/Content/Events/Concepts/filterevents.htm).
   *
   */
  "objectNameFilters"?: Array<string>;
  /**
   * Type of files/objects in this object collection rule.
   *
   */
  "logType"?: model.LogTypes;
  /**
   * A Stream OCID is required for Object Collection rules of type LIVE or HISTORIC_LIVE, which will be used by Logging Analytics while creating Event Rule and consume the event notifications created by the Object Storage.
   *
   */
  "streamId"?: string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
}

export namespace LogAnalyticsObjectCollectionRuleSummary {
  export function getJsonObj(obj: LogAnalyticsObjectCollectionRuleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsObjectCollectionRuleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
