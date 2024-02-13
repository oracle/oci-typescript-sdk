/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 * This is an example shows how to integrate a logger with the SDK
 */

var identity = require("oci-identity");
var common = require("oci-common");

// Integrate bunyan logger with the SDK. Make sure bunyan logger in installed.
// You can integrate with log4js, winston or any other logger as well.
process.env.USE_BUNYAN = "true";
const provider = new common.ConfigFileAuthenticationDetailsProvider();

(async () => {
  const identityClient = new identity.IdentityClient({
    authenticationDetailsProvider: provider
  });
  const regions = await identityClient.listRegionSubscriptions({
    tenancyId: provider.getTenantId() || ""
  });
  for (let i = 0; i < regions.items.length; i++) {
    common.logger.info(`Region fetched ${regions.items[i].regionName}`);
  }
})();
