/**
 * Speech API
 * The OCI Speech Service harnesses the power of spoken language by allowing developers to easily convert file-based data containing human speech into highly accurate text transcriptions.
 * OpenAPI spec version: 20220101
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
 * Description of a Customization.
 */
export interface Customization {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the job.
   */
  "id": string;
  /**
   * A user-friendly display name for the job.
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want to create the job.
   */
  "compartmentId": string;
  /**
   * Customization Details Alias
   */
  "alias"?: string;
  /**
   * A short description of the job.
   */
  "description"?: string;
  "modelDetails": model.CustomizationModelDetails;
  /**
   * The current state of the Job.
   */
  "lifecycleState"?: Customization.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Customization Created time. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * Customization Updated time. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  "trainingDataset"?: model.ObjectStorageDataset | model.EntityListDataset;
  /**
   * array of referenced entities
   */
  "entities"?: Array<model.CustomizationReferencedEntities>;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}.
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace-1\": {\"bar-key-1\": \"value-1\", \"bar-key-2\": \"value-2\"}, \"foo-namespace-2\": {\"bar-key-1\": \"value-1\", \"bar-key-2\": \"value-2\"}}}.
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}.
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Customization {
  export enum LifecycleState {
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Creating = "CREATING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Customization): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDetails": obj.modelDetails
          ? model.CustomizationModelDetails.getJsonObj(obj.modelDetails)
          : undefined,

        "trainingDataset": obj.trainingDataset
          ? model.CustomizationDatasetDetails.getJsonObj(obj.trainingDataset)
          : undefined,
        "entities": obj.entities
          ? obj.entities.map(item => {
              return model.CustomizationReferencedEntities.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Customization): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDetails": obj.modelDetails
          ? model.CustomizationModelDetails.getDeserializedJsonObj(obj.modelDetails)
          : undefined,

        "trainingDataset": obj.trainingDataset
          ? model.CustomizationDatasetDetails.getDeserializedJsonObj(obj.trainingDataset)
          : undefined,
        "entities": obj.entities
          ? obj.entities.map(item => {
              return model.CustomizationReferencedEntities.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
