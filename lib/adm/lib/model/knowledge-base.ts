/**
 * Application Dependency Management API
 * Use the Application Dependency Management API to create knowledge bases and vulnerability audits.  For more information, see [ADM](https://docs.oracle.com/iaas/Content/application-dependency-management/home.htm).
 * OpenAPI spec version: 20220421
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
 * A knowledge base is a component of Application Dependency Management (ADM) service that provides access to vulnerabilities.
 *
 */
export interface KnowledgeBase {
  /**
   * The Oracle Cloud Identifier ([OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm)) of the knowledge base.
   */
  "id": string;
  /**
   * The name of the knowledge base.
   */
  "displayName": string;
  /**
   * The creation date and time of the knowledge base (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   */
  "timeCreated": Date;
  /**
   * The date and time the knowledge base was last updated (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   */
  "timeUpdated": Date;
  /**
   * The current lifecycle state of the knowledge base.
   */
  "lifecycleState": KnowledgeBase.LifecycleState;
  /**
   * The compartment Oracle Cloud Identifier ([OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm)) of the knowledge base.
   */
  "compartmentId": string;
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

export namespace KnowledgeBase {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Failed = "FAILED",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: KnowledgeBase): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: KnowledgeBase): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
