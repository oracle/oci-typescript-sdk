/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as identity from "oci-identity";
import * as audit from "oci-audit";

/* This script demostrates how to create a circuit breaker and share the circuit breaker among clients.
 */
const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();
const compartmentId = provider.getTenantId();

(async () => {
  // Options for creating a circuit breaker
  const options = {
    timeout: 10000, // If our function takes longer than 10 seconds, trigger a failure
    errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
    resetTimeout: 30000 // After 30 seconds, try again.
  };
  const clientConfiguration = {
    circuitBreaker: new common.CircuitBreaker(options)
  };

  // Use the circuitBreaker to create identity client
  const identityClient = new identity.IdentityClient(
    { authenticationDetailsProvider: provider },
    clientConfiguration
  );

  // Share the same circuitBreaker to create audit client.
  const auditClient = new audit.AuditClient(
    { authenticationDetailsProvider: provider },
    clientConfiguration
  );

  let listUserReq: identity.requests.ListUsersRequest;
  listUserReq = {
    compartmentId: compartmentId
  };

  const response = await identityClient.listUsers(listUserReq);
  console.log("List User Repsonse: ", response);

  const endTime: Date = new Date();
  const offset = new Date().setDate(new Date().getDate() - 5);
  const startTime: Date = new Date(offset);
  const listEventRequest: audit.requests.ListEventsRequest = {
    compartmentId: compartmentId,
    startTime: startTime,
    endTime: endTime
  };
  try {
    const listEventResponse = await auditClient.listEvents(listEventRequest);
    console.log("response: ", listEventResponse);
  } catch (err) {
    console.log("what is err: ", err);
  }
})();
