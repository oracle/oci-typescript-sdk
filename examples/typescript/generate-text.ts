/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/*
 * This example demostrates the parsing of SSE response. In order to run this example, this code
 * must be in an Oracle Cloud instance. Any API which return Content-Type as event-stream can be handled this way.
 */

import * as genai from "oci-generativeaiinference";
import common = require("oci-common");
import { Readable } from "stream";
import * as readline from "readline";

(async () => {
  const region = "us-chicago-1";
  const provider = new common.SessionAuthDetailProvider();
  provider.setRegion(region);

  const client = new genai.GenerativeAiInferenceClient({
    authenticationDetailsProvider: provider
  });

  const compartment_id = ""; // Fill-in with compartment ID with access to generative AI API
  const modelId = "cohere.command";
  const prompt = "Tell me a fact about the earth";
  const max_tokens = 50;
  const temperature = 0.75;
  const frequency_penalty = 1.0;
  const top_p = 0.7;
  const isStream = false;
  const serving_mode: genai.models.OnDemandServingMode = {
    modelId: modelId,
    servingType: genai.models.OnDemandServingMode.servingType
  };

  const inference_request: genai.models.CohereLlmInferenceRequest = {
    prompt: prompt,
    isStream: isStream,
    maxTokens: max_tokens,
    temperature: temperature,
    frequencyPenalty: frequency_penalty,
    topP: top_p,
    runtimeType: genai.models.CohereLlmInferenceRequest.runtimeType
  };

  const details: genai.models.GenerateTextDetails = {
    compartmentId: compartment_id,
    servingMode: serving_mode,
    inferenceRequest: inference_request
  };

  const req_body: genai.requests.GenerateTextRequest = {
    generateTextDetails: details
  };

  // Generate text as non-stream
  const response = await client.generateText(req_body);
  console.log(
    "Response: " +
      ((<genai.responses.GenerateTextResponse>response).generateTextResult
        .inferenceResponse as genai.models.CohereLlmInferenceResponse).generatedTexts[0].text
  );

  // Generate text as stream response
  try {
    inference_request.isStream = true;
    const [major, minor, patch] = process.versions.node.split(".").map(Number);
    console.log("Version: " + major);
    let streamData = "";

    if (major >= 18) {
      // If node version is above 18
      const readablestream = (await client.generateText(req_body)) as ReadableStream<Uint8Array>;
      const reader = readablestream.pipeThrough(new TextDecoderStream()).getReader();
      let streamData = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value) {
          streamData = parseEvent(value);
          process.stdout.write(streamData);
        }
      }
      console.log("\n");
    } else {
      // If node version is below 18 or above 14
      const readablestream = ((await client.generateText(req_body)) as unknown) as Readable;
      const eventstream = readline.createInterface({ input: readablestream });
      eventstream.on("line", (chunk: string) => {
        streamData = parseEvent(chunk);
        process.stdout.write(streamData);
      });
      eventstream.on("close", () => {
        console.log("\n");
      });
    }
  } catch (e) {
    console.log(e);
  }
})();

function parseEvent(eventData: string): string {
  if (eventData.startsWith("data:")) {
    const data = JSON.parse(eventData.substring(6).trim());
    if ("text" in data) {
      return data.text;
    }
  }
  return "";
}
