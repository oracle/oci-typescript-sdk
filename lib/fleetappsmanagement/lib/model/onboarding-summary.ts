/**
 * Fleet Application Management Service API
 * Fleet Application Management Service API. Use this API to for all FAMS related activities.
To manage fleets,view complaince report for the Fleet,scedule patches and other lifecycle activities

 * OpenAPI spec version: 20230831
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
 * Summary of the FleetAppManagementService Onboarding.
 */
export interface OnboardingSummary {
  /**
   * The unique id of the resource.
   */
  "id": string;
  /**
   * Tenancy OCID
   */
  "compartmentId": string;
  /**
   * Associated region
   */
  "resourceRegion"?: string;
  /**
   * The time this resource was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time this resource was last updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * A value determining FAMS tag is enabled or not
   */
  "isFamsTagEnabled"?: boolean;
  /**
   * Version of FAMS the tenant is onboarded to.
   */
  "version"?: string;
  /**
   * A value determining if cost tracking tag is enabled or not
   */
  "isCostTrackingTagEnabled"?: boolean;
  /**
   * The current state of the Onboarding.
   */
  "lifecycleState": string;
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace OnboardingSummary {
  export function getJsonObj(obj: OnboardingSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OnboardingSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}