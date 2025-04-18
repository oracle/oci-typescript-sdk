/**
 * Oracle Cloud Bridge API
 * API for Oracle Cloud Bridge service.
 * OpenAPI spec version: 20220509
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
 * Description of the AgentDependency, which is a sub-resource of the external environment.
 */
export interface AgentDependency {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Display name of the Agent dependency.
   */
  "displayName": string;
  /**
   * Compartment identifier
   */
  "compartmentId": string;
  /**
   * Name of the dependency type. This should match the whitelisted enum of dependency names.
   */
  "dependencyName": string;
  /**
   * Version of the Agent dependency.
   */
  "dependencyVersion"?: string;
  /**
   * Description about the Agent dependency.
   */
  "description"?: string;
  /**
   * Object storage namespace associated with the customer's tenancy.
   */
  "namespace": string;
  /**
   * Object storage bucket where the Agent dependency is uploaded.
   */
  "bucket": string;
  /**
   * Name of the dependency object uploaded by the customer.
   */
  "objectName": string;
  /**
   * The time when the AgentDependency was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The eTag associated with the dependency object returned by Object Storage.
   */
  "eTag"?: string;
  /**
   * The checksum associated with the dependency object returned by Object Storage.
   */
  "checksum"?: string;
  /**
   * The current state of AgentDependency.
   */
  "lifecycleState"?: AgentDependency.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, it can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * The freeform tags associated with this resource, if any. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace/scope. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags associated with this resource, if any. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {orcl-cloud: {free-tier-retain: true}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace AgentDependency {
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

  export function getJsonObj(obj: AgentDependency): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AgentDependency): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
