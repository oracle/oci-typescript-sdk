/**
 * Document Understanding API
 * Document AI helps customers perform various analysis on their documents. If a customer has lots of documents, they can process them in batch using asynchronous API endpoints.
 * OpenAPI spec version: 20221109
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
 * Machine-learned Model.
 */
export interface Model {
  /**
   * A unique identifier that is immutable after creation.
   */
  "id": string;
  /**
   * A human-friendly name for the model, which can be changed.
   */
  "displayName"?: string;
  /**
   * An optional description of the model.
   */
  "description"?: string;
  /**
   * The compartment identifier.
   */
  "compartmentId": string;
  /**
   * The type of the Document model.
   */
  "modelType": Model.ModelType;
  /**
   * Applicable to only PRE_TRAINED_KEY_VALUE_EXTRACTION, PRE_TRAINED_DOCUMENT_ELEMENTS_EXTRACTION.
   */
  "modelSubType"?: model.KvModelSubType | model.DocumentElementsSubType;
  /**
   * Number of replicas required for this model. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inferenceUnits"?: number;
  /**
   * The tenancy id of the model.
   */
  "tenancyId"?: string;
  /**
   * the alias name of the model.
   */
  "aliasName"?: string;
  /**
   * The collection of labels used to train the custom model.
   */
  "labels"?: Array<string>;
  /**
   * Set to true when experimenting with a new model type or dataset, so model training is quick, with a predefined low number of passes through the training data.
   */
  "isQuickMode"?: boolean;
  /**
   * The maximum model training time in hours, expressed as a decimal fraction. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxTrainingTimeInHours"?: number;
  /**
   * The document language for model training, abbreviated according to the BCP 47 syntax.
   */
  "language"?: string;
  /**
   * The total hours actually used for model training. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "trainedTimeInHours"?: number;
  "trainingDataset"?: model.DataScienceLabelingDataset | model.ObjectStorageDataset;
  "testingDataset"?: model.DataScienceLabelingDataset | model.ObjectStorageDataset;
  "validationDataset"?: model.DataScienceLabelingDataset | model.ObjectStorageDataset;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) collection of active custom Key Value models that need to be composed.
   */
  "componentModels"?: Array<model.ComponentModel>;
  /**
   * Set to true when the model is created by using multiple key value extraction models.
   */
  "isComposedModel"?: boolean;
  /**
   * The version of the model.
   */
  "modelVersion": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the project that contains the model.
   */
  "projectId": string;
  /**
   * When the model was created, as an RFC3339 datetime string.
   */
  "timeCreated": Date;
  /**
   * When the model was updated, as an RFC3339 datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the model.
   */
  "lifecycleState": Model.LifecycleState;
  /**
   * A message describing the current state in more detail, that can provide actionable information if training failed.
   */
  "lifecycleDetails"?: string;
  "metrics"?:
    | model.PreTrainedDocumentElementsExtractionModelDetails
    | model.DocumentClassificationModelMetrics
    | model.PretrainedDocumentClassificationModelDetails
    | model.PretrainedTableExtractionModelDetails
    | model.KeyValueDetectionModelMetrics
    | model.PretrainedKeyValueExtractionModelDetails
    | model.PretrainedTextExtractionModelDetails;
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
  /**
   * Locks associated with this resource.
   */
  "locks"?: Array<model.ResourceLock>;
}

export namespace Model {
  export enum ModelType {
    KeyValueExtraction = "KEY_VALUE_EXTRACTION",
    DocumentClassification = "DOCUMENT_CLASSIFICATION",
    PreTrainedTextExtraction = "PRE_TRAINED_TEXT_EXTRACTION",
    PreTrainedTableExtraction = "PRE_TRAINED_TABLE_EXTRACTION",
    PreTrainedKeyValueExtraction = "PRE_TRAINED_KEY_VALUE_EXTRACTION",
    PreTrainedDocumentClassification = "PRE_TRAINED_DOCUMENT_CLASSIFICATION",
    PreTrainedDocumentElementsExtraction = "PRE_TRAINED_DOCUMENT_ELEMENTS_EXTRACTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

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

  export function getJsonObj(obj: Model): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelSubType": obj.modelSubType
          ? model.ModelSubType.getJsonObj(obj.modelSubType)
          : undefined,

        "trainingDataset": obj.trainingDataset
          ? model.Dataset.getJsonObj(obj.trainingDataset)
          : undefined,
        "testingDataset": obj.testingDataset
          ? model.Dataset.getJsonObj(obj.testingDataset)
          : undefined,
        "validationDataset": obj.validationDataset
          ? model.Dataset.getJsonObj(obj.validationDataset)
          : undefined,
        "componentModels": obj.componentModels
          ? obj.componentModels.map(item => {
              return model.ComponentModel.getJsonObj(item);
            })
          : undefined,

        "metrics": obj.metrics ? model.ModelMetrics.getJsonObj(obj.metrics) : undefined,

        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Model): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelSubType": obj.modelSubType
          ? model.ModelSubType.getDeserializedJsonObj(obj.modelSubType)
          : undefined,

        "trainingDataset": obj.trainingDataset
          ? model.Dataset.getDeserializedJsonObj(obj.trainingDataset)
          : undefined,
        "testingDataset": obj.testingDataset
          ? model.Dataset.getDeserializedJsonObj(obj.testingDataset)
          : undefined,
        "validationDataset": obj.validationDataset
          ? model.Dataset.getDeserializedJsonObj(obj.validationDataset)
          : undefined,
        "componentModels": obj.componentModels
          ? obj.componentModels.map(item => {
              return model.ComponentModel.getDeserializedJsonObj(item);
            })
          : undefined,

        "metrics": obj.metrics ? model.ModelMetrics.getDeserializedJsonObj(obj.metrics) : undefined,

        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
