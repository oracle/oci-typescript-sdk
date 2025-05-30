/**
 * Generative AI Service Inference API
 * OCI Generative AI is a fully managed service that provides a set of state-of-the-art, customizable large language models (LLMs) that cover a wide range of use cases for text generation, summarization, and text embeddings. 

Use the Generative AI service inference API to access your custom model endpoints, or to try the out-of-the-box models to {@link #eNGenerative-ai-inferenceLatestChatResultChat(ENGenerative-ai-inferenceLatestChatResultChatRequest) eNGenerative-ai-inferenceLatestChatResultChat}, {@link #eNGenerative-ai-inferenceLatestGenerateTextResultGenerateText(ENGenerative-ai-inferenceLatestGenerateTextResultGenerateTextRequest) eNGenerative-ai-inferenceLatestGenerateTextResultGenerateText}, {@link #eNGenerative-ai-inferenceLatestSummarizeTextResultSummarizeText(ENGenerative-ai-inferenceLatestSummarizeTextResultSummarizeTextRequest) eNGenerative-ai-inferenceLatestSummarizeTextResultSummarizeText}, and {@link #eNGenerative-ai-inferenceLatestEmbedTextResultEmbedText(ENGenerative-ai-inferenceLatestEmbedTextResultEmbedTextRequest) eNGenerative-ai-inferenceLatestEmbedTextResultEmbedText}.

To use a Generative AI custom model for inference, you must first create an endpoint for that model. Use the {@link #eNGenerative-aiLatest(ENGenerative-aiLatestRequest) eNGenerative-aiLatest} to {@link #eNGenerative-aiLatestModel(ENGenerative-aiLatestModelRequest) eNGenerative-aiLatestModel} by fine-tuning an out-of-the-box model, or a previous version of a custom model, using your own data. Fine-tune the custom model on a {@link #eNGenerative-aiLatestDedicatedAiCluster(ENGenerative-aiLatestDedicatedAiClusterRequest) eNGenerative-aiLatestDedicatedAiCluster}. Then, create a {@link #eNGenerative-aiLatestDedicatedAiCluster(ENGenerative-aiLatestDedicatedAiClusterRequest) eNGenerative-aiLatestDedicatedAiCluster} with an {@link Endpoint} to host your custom model. For resource management in the Generative AI service, use the {@link #eNGenerative-aiLatest(ENGenerative-aiLatestRequest) eNGenerative-aiLatest}.

To learn more about the service, see the [Generative AI documentation](https://docs.oracle.com/iaas/Content/generative-ai/home.htm).

 * OpenAPI spec version: 20231130
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
 * The generated text result to return.
 */
export interface LlamaLlmInferenceResponse extends model.LlmInferenceResponse {
  /**
   * The Unix timestamp (in seconds) of when the generation was created.
   */
  "created": Date;
  /**
   * A list of generated texts. Can be more than one if n is greater than 1.
   */
  "choices": Array<model.Choice>;

  "runtimeType": string;
}

export namespace LlamaLlmInferenceResponse {
  export function getJsonObj(obj: LlamaLlmInferenceResponse, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LlmInferenceResponse.getJsonObj(obj) as LlamaLlmInferenceResponse)),
      ...{
        "choices": obj.choices
          ? obj.choices.map(item => {
              return model.Choice.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const runtimeType = "LLAMA";
  export function getDeserializedJsonObj(
    obj: LlamaLlmInferenceResponse,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LlmInferenceResponse.getDeserializedJsonObj(obj) as LlamaLlmInferenceResponse)),
      ...{
        "choices": obj.choices
          ? obj.choices.map(item => {
              return model.Choice.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
