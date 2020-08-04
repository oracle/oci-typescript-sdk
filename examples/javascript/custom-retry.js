/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.

 @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 *  <li>The first argument is the OCID of the tenancy.</li>
 *  <li>The second argument is the OCID of the compartment.</li>
 *  <li>The third argument is region.</li>
 * </ul>
 */

const identity = require("oci-identity");
const common = require("oci-common");

const configurationFilePath = "~/.oci/config";
const configProfile = "DEFAULT";

const provider = new common.ConfigFileAuthenticationDetailsProvider(
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

const tenancyId = args[0];
const compartmentId = args[1];
const region = args[2];

let subnetId = null;
let vcnId = null;
let instanceId = null;

const identityClient = new identity.IdentityClient({
  authenticationDetailsProvider: provider
});
identityClient.regionId = region;

async function getAvailabilityDomain() {
  const request = {
    compartmentId: tenancyId
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
  request.retryConfiguration = {
    terminationStrategy: new common.MaxAttemptsTerminationStrategy(5),
    delayStrategy: new common.ExponentialBackoffDelayStrategy(80),
    retryCondition: response => {
      return response.status === 405;
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
  }
})();
