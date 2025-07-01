/**
 * Copyright (c) 2020, 2025 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.

 * This example shows how to configure http proxy for the SDK client
 */

import common = require("oci-common");
import * as identity from "oci-identity";
// make sure https-proxy-agent is installed
const { HttpsProxyAgent } = require("https-proxy-agent");
// if you're facing issues with Node 18+, please check https://github.com/gajus/global-agent/issues/52#issuecomment-1134525621
// or set the --no-experimental-fetch flag

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();

const proxyUrl = "http://testproxy";
const clientConfig = { httpOptions: { agent: new HttpsProxyAgent(proxyUrl) } };
const identityClient = new identity.IdentityClient(
  { authenticationDetailsProvider: provider },
  clientConfig
);
const compartmentId = provider.getTenantId();

async function getAvailabilityDomain(): Promise<identity.models.AvailabilityDomain> {
  const request: identity.requests.ListAvailabilityDomainsRequest = {
    compartmentId: compartmentId
  };
  const response = await identityClient.listAvailabilityDomains(request);
  return response.items[0];
}

(async () => {
  try {
    const availabilityDomain = await getAvailabilityDomain();
    console.log("Availability Domain :" + availabilityDomain.name);
  } catch (error) {
    console.log("Error executing example" + JSON.stringify(error));
  } finally {
    console.debug("DONE");
  }

  identityClient.close();
})();
