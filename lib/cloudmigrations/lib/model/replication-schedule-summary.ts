/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
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
 * Sumarized information about a replication schedule.
 */
export interface ReplicationScheduleSummary {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the replication schedule.
   */
  "id": string;
  /**
   * A name of the replication schedule.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment in which the replication schedule exists.
   */
  "compartmentId": string;
  /**
   * Recurrence specification for replication schedule execution.
   */
  "executionRecurrences": string;
  /**
   * Current state of the replication schedule.
   */
  "lifecycleState": string;
  /**
   * The detailed state of the replication schedule.
   */
  "lifecycleDetails": string;
  /**
   * The time when the replication schedule was created in RFC3339 format.
   */
  "timeCreated": Date;
  /**
   * The time when the replication schedule was last updated in RFC3339 format.
   */
  "timeUpdated": Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. It exists only for cross-compatibility.
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
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ReplicationScheduleSummary {
  export function getJsonObj(obj: ReplicationScheduleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ReplicationScheduleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
