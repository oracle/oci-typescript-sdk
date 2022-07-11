/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 * This is an example shows how to integrate a logger with the SDK
 */

var oci = require("oci-sdk");
var bunyan = require("bunyan");

// Integrate bunyan logger with the SDK. Make sure bunyan logger in installed.
// You can integrate with log4js, winston or any other logger as well.
var bunLog = bunyan.createLogger({ name: "LoggingExample", level: "debug" });
oci.LOG.logger = bunLog;

const provider = new oci.common.ConfigFileAuthenticationDetailsProvider();

(async () => {
  const identityClient = new oci.identity.IdentityClient({
    authenticationDetailsProvider: provider
  });
  const regions = await identityClient.listRegionSubscriptions({
    tenancyId: provider.getTenantId() || ""
  });
  for (let i = 0; i < regions.items.length; i++) {
    console.log(`Region fetched ${regions.items[i].regionName}`);
  }
})();
