/**
 * Vision API
 * Using Vision, you can upload images to detect and classify objects in them. If you have lots of images, you can process them in batch using asynchronous API endpoints. Vision's features are thematically split between Document AI for document-centric images, and Image Analysis for object and scene-based images. Pretrained models and custom models are supported.
 * OpenAPI spec version: 20220125
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
 * the metadata about the project.
 */
export interface ProjectSummary {
  /**
   * A unique identifier that is immutable after creation.
   */
  "id": string;
  /**
   * A human-friendly name for the project, that can be changed.
   */
  "displayName"?: string;
  /**
   * The compartment identifier.
   */
  "compartmentId": string;
  /**
   * When the project was created, as an RFC3339 datetime string.
   */
  "timeCreated": Date;
  /**
   * When the project was created, as an RFC3339 datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the project.
   */
  "lifecycleState": string;
  /**
   * A message describing the current state in more detail, that can provide actionable information if creation failed.
   */
  "lifecycleDetails"?: string;
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. It exists for cross-compatibility only.
   * For example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * For example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ProjectSummary {
  export function getJsonObj(obj: ProjectSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProjectSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
