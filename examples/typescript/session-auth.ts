/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as identity from "oci-identity";

(async () => {
  try {
    const provider: common.SessionAuthDetailProvider = new common.SessionAuthDetailProvider(
      undefined,
      "profile_name_here"
    );
    const compartmentId = provider.getTenantId();
    const identityClient = new identity.IdentityClient({ authenticationDetailsProvider: provider });

    const listUserReq = { compartmentId: compartmentId };
    const users = await identityClient.listUsers(listUserReq);
    console.log("users: ", users);
  } catch (e) {
    console.log("error: ", e);
  }
})();
