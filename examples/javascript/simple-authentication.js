/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 * This is an example to create a simple authentication detail provider. This is for developers to
 * input the credentials in code as an alternative.
 */

const common = require("oci-common");
const identity = require("oci-identity");

// TODO: Fill in appropriate values for tenancy (str) / fingerprint (str) / passphrase(optional) (str | null) / privateKey (str) / region (common.Region)
const tenancy = "";
const user = "";
const fingerprint = "";
const passphrase = null; // optional parameter
const privateKey = ``;
const region = common.Region.US_PHOENIX_1; // Change to appropriate region

const provider = new common.SimpleAuthenticationDetailsProvider(
  tenancy,
  user,
  fingerprint,
  privateKey,
  passphrase,
  region
);

(async () => {
  const client = new identity.IdentityClient({
    authenticationDetailsProvider: provider
  });

  const listUsersRequest = {
    compartmentId: tenancy
  };
  try {
    const listUsersResponse = await client.listUsers(listUsersRequest);
    console.log(listUsersResponse);
  } catch (err) {
    console.log(err);
  }
})();
