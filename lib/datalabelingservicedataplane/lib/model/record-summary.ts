/**
 * Data Labeling API
 * Use Data Labeling API to create Annotations on Images, Texts & Documents, and generate snapshots.
 * OpenAPI spec version: 20211001
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
 * A record summary is the representation returned in list views.  It is usually a subset of the full record entity and should not contain any potentially sensitive information.
 */
export interface RecordSummary {
  /**
   * The OCID of the record.
   */
  "id": string;
  /**
   * The name is automatically assigned by the service. It is unique and immutable
   */
  "name": string;
  /**
   * The date and time the resource was created, in the timestamp format defined by RFC3339.
   */
  "timeCreated": Date;
  /**
   * The date and time the resource was updated, in the timestamp format defined by RFC3339.
   */
  "timeUpdated": Date;
  /**
   * The OCID of the dataset to associate the record with.
   */
  "datasetId": string;
  /**
   * The OCID of the compartment for the task.
   */
  "compartmentId": string;
  /**
   * Whether or not the record has been labeled and has associated annotations.
   */
  "isLabeled": boolean;
  /**
   * Describes the lifecycle state.
   */
  "lifecycleState": string;
  "recordMetadata"?: model.DocumentMetadata | model.ImageMetadata | model.TextMetadata;
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. It exists for cross-compatibility only.
   * For example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace RecordSummary {
  export function getJsonObj(obj: RecordSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "recordMetadata": obj.recordMetadata
          ? model.RecordMetadata.getJsonObj(obj.recordMetadata)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RecordSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "recordMetadata": obj.recordMetadata
          ? model.RecordMetadata.getDeserializedJsonObj(obj.recordMetadata)
          : undefined
      }
    };

    return jsonObj;
  }
}
