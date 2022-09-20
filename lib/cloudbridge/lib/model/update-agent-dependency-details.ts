/**
 * Oracle Cloud Bridge API
 * API for Oracle Cloud Bridge service.
 * OpenAPI spec version: 20220509
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information about new AgentDependency.
 */
export interface UpdateAgentDependencyDetails {
  /**
   * Display name of the Agent dependency.
   */
  "displayName"?: string;
  /**
   * Name of the dependency type. This should match the whitelisted enum of dependency names.
   */
  "dependencyName"?: string;
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
  "namespace"?: string;
  /**
   * Object storage bucket where the dependency is uploaded.
   */
  "bucket"?: string;
  /**
   * Name of the dependency object uploaded by the customer.
   */
  "objectName"?: string;
  /**
   * The freeform tags associated with this resource, if any. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace/scope. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags associated with this resource, if any. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{orcl-cloud: {free-tier-retain: true}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateAgentDependencyDetails {
  export function getJsonObj(obj: UpdateAgentDependencyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateAgentDependencyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}