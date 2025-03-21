/**
 * Compute Cloud@Customer API
 * Use the Compute Cloud@Customer API to manage Compute Cloud@Customer infrastructures and upgrade schedules.
For more information see [Compute Cloud@Customer documentation](https://docs.oracle.com/iaas/compute-cloud-at-customer/home.htm).

 * OpenAPI spec version: 20221208
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
 * Basic information about a Compute Cloud@Customer schedule. This summary
 * only includes high level resource information, not the schedule events.
 *
 */
export interface CccUpgradeScheduleSummary {
  /**
   * The upgrade schedule [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   * This cannot be changed once created.
   *
   */
  "id": string;
  /**
   * Compute Cloud@Customer upgrade schedule display name.
   * Avoid entering any confidential information.
   *
   */
  "displayName": string;
  /**
   * Compartment [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) for the
   * Compute Cloud@Customer Upgrade Schedule.
   *
   */
  "compartmentId": string;
  /**
   * The time the upgrade schedule was created. An RFC3339 formatted datetime string
   */
  "timeCreated": Date;
  /**
   * The current state of the Compute Cloud@Customer
   * upgrade schedule.
   *
   */
  "lifecycleState": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CccUpgradeScheduleSummary {
  export function getJsonObj(obj: CccUpgradeScheduleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CccUpgradeScheduleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
