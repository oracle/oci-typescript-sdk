/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 * @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 *  <li>The first argument is the OCID of the tenancy.</li>
 *  <li>The second argument is the OCID of the compartment.</li>
 *  <li>The third argument is region.</li>
 * </ul>
 */

import common = require("oci-common");
import * as identity from "oci-identity";

const configurationFilePath = "~/.oci/config";
const configProfile = "DEFAULT";

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  configProfile
);

const args = process.argv.slice(2);
console.log(args);
if (args.length !== 3) {
  console.error(
    "Unexpected number of arguments received. Consult the script header comments for expected arguments"
  );
  process.exit(-1);
}

const tenancyId: string = args[0];
const compartmentId: string = args[1];
const region: string = args[2];

const identityClient = new identity.IdentityClient({ authenticationDetailsProvider: provider });
identityClient.regionId = region;

async function getAvailabilityDomain(): Promise<identity.models.AvailabilityDomain> {
  const request: identity.requests.ListAvailabilityDomainsRequest = {
    compartmentId: compartmentId
  };
  identityClient.clientConfiguration = {
    retryConfiguration: {
      terminationStrategy: new common.MaxTimeTerminationStrategy(200),
      delayStrategy: new common.ExponentialBackoffDelayStrategy(30),
      retryCondition: response => {
        return response.status === 409;
      }
    }
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
