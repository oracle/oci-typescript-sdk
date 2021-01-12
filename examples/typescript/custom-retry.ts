/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.

 * This example shows how to configure the retries for operations
 @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 *  <li>The first argument is the OCID of the tenancy.</li>
 * </ul>
 */

import common = require("oci-common");
import * as identity from "oci-identity";

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();

const args = process.argv.slice(2);
console.log(args);
if (args.length !== 1) {
  console.error(
    "Unexpected number of arguments received. Consult the script header comments for expected arguments"
  );
  process.exit(-1);
}

const tenancyId: string = args[0];

const identityClient = new identity.IdentityClient({ authenticationDetailsProvider: provider });

async function getAvailabilityDomain(): Promise<identity.models.AvailabilityDomain> {
  const request: identity.requests.ListAvailabilityDomainsRequest = {
    compartmentId: tenancyId
  };

  // Set the retry configuration to attempt 5 times on failure with default retry condition
  // with exponential backoff delay of 30 seconds
  request.retryConfiguration = {
    terminationStrategy: new common.MaxAttemptsTerminationStrategy(5),
    delayStrategy: new common.ExponentialBackoffDelayStrategy(30)
  };
  const response = await identityClient.listAvailabilityDomains(request);
  return response.items[0];
}

(async () => {
  try {
    const availabilityDomain = await getAvailabilityDomain();
    console.log("Availability Domain :" + availabilityDomain.name);
  } catch (error) {
    console.log("Error executing example" + error);
  } finally {
    console.debug("DONE");
  }
})();
