/**
 * Web Application Firewall (WAF) API
 * API for the Web Application Firewall service.
Use this API to manage regional Web App Firewalls and corresponding policies for protecting HTTP services.

 * OpenAPI spec version: 20210930
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
 * A resource connecting a WebAppFirewallPolicy to a backend of particular type, applying that policy's coverage to the backend.
 */
export interface WebAppFirewall {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the WebAppFirewall.
   */
  "id": string;
  /**
   * WebAppFirewall display name, can be renamed.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of WebAppFirewallPolicy, which is attached to the resource.
   */
  "webAppFirewallPolicyId": string;
  /**
   * The time the WebAppFirewall was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time the WebAppFirewall was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the WebAppFirewall.
   */
  "lifecycleState": WebAppFirewall.LifecycleState;
  /**
   * A message describing the current state in more detail.
   * For example, can be used to provide actionable information for a resource in FAILED state.
   *
   */
  "lifecycleDetails"?: string;
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
  "systemTags": { [key: string]: { [key: string]: any } };

  "backendType": string;
}

export namespace WebAppFirewall {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WebAppFirewall): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "backendType" in obj && obj.backendType) {
      switch (obj.backendType) {
        case "LOAD_BALANCER":
          return model.WebAppFirewallLoadBalancer.getJsonObj(
            <model.WebAppFirewallLoadBalancer>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.backendType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WebAppFirewall): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "backendType" in obj && obj.backendType) {
      switch (obj.backendType) {
        case "LOAD_BALANCER":
          return model.WebAppFirewallLoadBalancer.getDeserializedJsonObj(
            <model.WebAppFirewallLoadBalancer>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.backendType}`);
      }
    }
    return jsonObj;
  }
}
