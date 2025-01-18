/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/*
 * This example demonstrates to get a response for the given conversation with Cohere llm.
 * In order to run this example, this code must be in an Oracle Cloud instance.
 */

import { GenerativeAiInferenceClient, models, requests } from "oci-generativeaiinference";
import {
  SessionAuthDetailProvider,
  NoRetryConfigurationDetails
} from "oci-common";

// TODO: Please update config profile name and use the compartmentId that has policies grant permissions for using Generative AI Service
const CONFIG_LOCATION = "~/.oci/config";
const CONFIG_PROFILE = "DEFAULT";
const COMPARTMENT_ID = ""; // Fill-in with compartment Id with access to generative AI API

(async () => {
  // Configuring the AuthenticationDetailsProvider. It's assuming there is a default OCI config file "~/.oci/config", and
  // a profile in that config with the name defined in CONFIG_PROFILE variable.
  const provider = new SessionAuthDetailProvider(CONFIG_LOCATION, CONFIG_PROFILE)
  provider.setRegion("us-chicago-1");

  const client = new GenerativeAiInferenceClient({
      authenticationDetailsProvider: provider,
    }
  );

  // On Demand Serving Mode
  // Check a list of pretrained Cohere Chat Models availability in different regions:
  // https://docs.oracle.com/en-us/iaas/Content/generative-ai/pretrained-models.htm#pretrained-models
  const servingMode: models.OnDemandServingMode = {
      modelId: "cohere.command-r-08-2024",
      servingType: "ON_DEMAND",
  };

  // Dedicated Serving Mode
  // const servingMode: models.DedicatedServingMode = {
  //     endpointId: "",  // Fill-in with endpoint Id, if you have active Dedicated AI cluster resource
  //     servingType: "DEDICATED",
  // };

  // Chat Details
  const chatRequest: requests.ChatRequest = {
    chatDetails: {
      compartmentId: COMPARTMENT_ID,
      servingMode: servingMode,
      chatRequest: {
        message: "As a corporate vice president, generate an email congratulating a team that has just shipped a new cloud service. Emphasize the great positive impact the new service will have on the productivity of their customers.",
        apiFormat: "COHERE",
        maxTokens: 600,
        temperature: 0,
        frequencyPenalty: 1,
        presencePenalty: 0,
        topP: 0.75,
        topK: 0,
        seed: 0,
      }
    },
    retryConfiguration: NoRetryConfigurationDetails
  };

  const chatResponse = await client.chat(chatRequest);

  // Print chat response
  console.log("**************************Chat Response**************************");
  console.log(JSON.stringify(chatResponse));

})();
