/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/*
 * This example demonstrates to get embeddings response for the given inputs to Cohere llm.
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
  // Check a list of pretrained Cohere Embedding Models availability in different regions:
  // https://docs.oracle.com/en-us/iaas/Content/generative-ai/pretrained-models.htm#pretrained-models
  const servingMode: models.OnDemandServingMode = {
      modelId: "cohere.embed-english-v3.0",
      servingType: "ON_DEMAND",
  };

  // Dedicated Serving Mode
  // const servingMode: models.DedicatedServingMode = {
  //     endpointId: "",  // Fill-in with endpoint Id, if you have active Dedicated AI cluster resource
  //     servingType: "DEDICATED",
  // };

  // Embed Details
  const embedRequest: requests.EmbedTextRequest = {
    embedTextDetails: {
      inputs: ["In order to maintain our growth, we need to track our billings to ensure we are charging our customers enough to support our business."," We have a system in place to track our billings and ensure we are billing our customers accurately."," We have a dedicated billing team that is responsible for generating invoices and tracking payments."," Our billing system is integrated with our customer relationship management (CRM) system, which allows us to track our billings and customer interactions in one place."," We use a third-party billing service to help us manage our billings and ensure we are billing our customers correctly."," We are committed to providing our customers with accurate billings and clear explanations of our charges."," Timely and accurate billing is important to our customers, and we strive to provide them with the best possible service."," We are constantly looking for ways to improve our billing process and ensure we are billing our customers fairly."," We are committed to being transparent with our customers about our billing process and how we calculate our charges."," Billing can be a complex process, and we are here to help our customers understand their bills and answer any questions they may have."," We value our customers and want to ensure that they are happy with our billing process and the services we provide."],
      truncate: models.EmbedTextDetails.Truncate.None,
      servingMode: servingMode,
      compartmentId: COMPARTMENT_ID,
    },
    retryConfiguration: NoRetryConfigurationDetails
  }

  const embedResponse = await client.embedText(embedRequest)

  // Print embed text response
  console.log("**************************Embed Texts Response**************************")
  console.log(JSON.stringify(embedResponse))

})();
