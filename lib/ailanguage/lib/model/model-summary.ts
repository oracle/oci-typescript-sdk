/**
 * Language API
 * OCI Language Service solutions can help enterprise customers integrate AI into their products immediately using our proven,
pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20221001
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
 * Summary of the language Model.
 */
export interface ModelSummary {
  /**
   * Unique identifier model OCID of a model that is immutable on creation
   */
  "id": string;
  /**
   * A user-friendly display name for the resource. It does not have to be unique and can be modified. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm)  for the model's compartment.
   */
  "compartmentId": string;
  /**
   * A short description of the Model.
   */
  "description"?: string;
  "modelDetails":
    | model.PreTrainedKeyPhraseExtractionModelDetails
    | model.PreTrainedTranslationModelDetails
    | model.PreTrainedHealthNluModelDetails
    | model.PreTrainedUniversalModel
    | model.PreTrainedLanguageDetectionModelDetails
    | model.PreTrainedSentimentAnalysisModelDetails
    | model.TextClassificationModelDetails
    | model.HealthNluModelDetails
    | model.PreTrainedSummarization
    | model.NamedEntityRecognitionModelDetails
    | model.PiiModelDetails
    | model.PreTrainedNamedEntityRecognitionModelDetails
    | model.PreTrainedTextClassificationModelDetails
    | model.PreTrainedPiiModelDetails;
  /**
   * The time the the Model was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The state of the model.
   */
  "lifecycleState": string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the project to associate with the model.
   */
  "projectId": string;
  /**
   * For pre trained models this will identify model type version used for model creation
   * For custom this will identify model type version used for model creation and custom model on which training has to be done
   * <<service>>::<<service-name>>_<<model-type-version>>::<<custom model on which this training has to be done>>
   * ex: ai-lang::NER_V1::CUSTOM-V0
   *
   */
  "version"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code { \"orcl-cloud\": { \"free-tier-retained\": \"true\" } }}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ModelSummary {
  export function getJsonObj(obj: ModelSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDetails": obj.modelDetails
          ? model.ModelDetails.getJsonObj(obj.modelDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ModelSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDetails": obj.modelDetails
          ? model.ModelDetails.getDeserializedJsonObj(obj.modelDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
