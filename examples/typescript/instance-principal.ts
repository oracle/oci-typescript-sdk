/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/*
 * This example demostrates the usage of Instance Principal. In order to run this example, this code
 * must be in an Oracle Cloud instance. The Instance Principal will utiltize internal resources to
 * create an authentication provider. Refer to:
 * https://docs.cloud.oracle.com/en-us/iaas/Content/Identity/Tasks/callingservicesfrominstances.htm
 * for more details.
 */

import * as identity from "oci-identity";
import common = require("oci-common");

(async () => {
  const authenticationProvider = await new common.InstancePrincipalsAuthenticationDetailsProviderBuilder().build();
  try {
    const identityClient = new identity.IdentityClient({
      authenticationDetailsProvider: authenticationProvider
    });
    const regions = await identityClient.listRegions({});
    console.log("Regions: ", JSON.stringify(regions));
  } catch (e) {
    throw Error(`Failed with error: ${e}`);
  }
})();
