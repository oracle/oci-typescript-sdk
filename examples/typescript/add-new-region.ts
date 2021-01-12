/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import identity = require("oci-identity");

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();

//Register the new Realm
const newRealm = common.Realm.register("ocx", "sample-realm.com");
//Register the region with this new realm.
const newRegion = common.Region.register("us-ocx-1", newRealm);

// you can create region with existting realm too
// newRgion  = common.Region.register("us-ocx-1", common.Realm.US_PHOENIX_1);

const compartmentId = "Sample-compartment";
const identityClient = new identity.IdentityClient({ authenticationDetailsProvider: provider });
identityClient.region = newRegion;
(async () => {
  const response = await listUsers(compartmentId);
  console.log("List User response " + response);
})();

async function listUsers(compartmentId: string): Promise<identity.responses.ListUsersResponse> {
  const request: identity.requests.ListUsersRequest = { compartmentId: compartmentId };
  const response = await identityClient.listUsers(request);
  return response;
}
