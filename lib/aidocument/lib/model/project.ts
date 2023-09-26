/**
 * Document Understanding API
 * Document AI helps customers perform various analysis on their documents. If a customer has lots of documents, they can process them in batch using asynchronous API endpoints.
 * OpenAPI spec version: 20221109
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A Document Project containing models.
 */
export interface Project {
  /**
   * A unique identifier that is immutable after creation.
   */
  "id": string;
  /**
   * A human-friendly name for the project, which can be changed.
   */
  "displayName"?: string;
  /**
   * An optional description of the project.
   */
  "description"?: string;
  /**
   * The compartment identifier.
   */
  "compartmentId": string;
  /**
   * When the project was created, as an RFC3339 datetime string.
   */
  "timeCreated": Date;
  /**
   * When the project was updated, as an RFC3339 datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the project.
   */
  "lifecycleState": Project.LifecycleState;
  /**
   * A message describing the current state in more detail, that can provide actionable information if creation failed.
   */
  "lifecycleDetails"?: string;
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. It exists for cross-compatibility only.
   * For example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * For example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Project {
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

  export function getJsonObj(obj: Project): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Project): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}