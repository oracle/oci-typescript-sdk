/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { DefaultRequestSigner, HttpRequest } from "oci-common";
import common = require("oci-common");
import * as promise from "es6-promise";
import "isomorphic-fetch";
promise.polyfill();

const userID = "Add User OCID here";
const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();
(async () => {
  // 1. Create Request Signing instance
  const signer = new DefaultRequestSigner(provider);

  // 2. Create HttpRequest to be signed
  const httpRequest: HttpRequest = {
    uri: `https://identity.us-phoenix-1.oraclecloud.com/20160918/users/${userID}`,
    headers: new Headers(),
    method: "GET"
  };

  // 3. sign request
  await signer.signHttpRequest(httpRequest);

  // 4. Make the call
  const response = await fetch(
    new Request(httpRequest.uri, {
      method: httpRequest.method,
      headers: httpRequest.headers,
      body: httpRequest.body
    })
  );
  // 5. Print response
  console.log(await response.json());
})();
