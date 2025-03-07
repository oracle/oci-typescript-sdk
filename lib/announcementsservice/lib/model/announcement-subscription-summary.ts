/**
 * Announcements Service API
 * Manage Oracle Cloud Infrastructure console announcements.
 * OpenAPI spec version: 0.0.1
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
 * A summary representation of an announcement subscription.
 */
export interface AnnouncementSubscriptionSummary {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the announcement subscription.
   */
  "id": string;
  /**
   * A user-friendly name for the announcement subscription. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * The OCID of the compartment that contains the announcement subscription.
   */
  "compartmentId": string;
  /**
   * The date and time that the announcement subscription was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   *
   */
  "timeCreated": Date;
  /**
   * The date and time that the announcement subscription was updated, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   *
   */
  "timeUpdated"?: Date;
  /**
   * The current lifecycle state of the announcement subscription.
   */
  "lifecycleState": string;
  /**
   * A message describing the current lifecycle state in more detail. For example, details might provide required or recommended actions for a resource in a Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * The OCID of the Notifications service topic that is the target for publishing announcements that match the configured announcement subscription.
   */
  "onsTopicId": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace AnnouncementSubscriptionSummary {
  export function getJsonObj(obj: AnnouncementSubscriptionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AnnouncementSubscriptionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
