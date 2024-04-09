/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 * This is an example that shows how to use oke workload identity auth provider
 */

var identity = require("oci-identity");
var common = require("oci-common");

(async () => {
  const authProvider = await common.OkeWorkloadIdentityAuthenticationDetailsProvider.builder();
  const compartmentId = await authProvider.getStringClaim("res_tenant");

  const identityClient = new identity.IdentityClient({
    authenticationDetailsProvider: authProvider
  });

  identityClient.close();
})();
