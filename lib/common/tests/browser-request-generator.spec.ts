/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { composeRequest } from "../lib/request-generator";
import { expect } from "chai";
import { version } from "../../../package.json";

describe("Test Request Generator ", () => {
  const pathParams = {
    "{testId}": "Test-Id"
  };

  const queryParams = { "imageId": "test" };

  const headerParams = {
    "opc-request-id": "test-request-id",
    "Content-Length": "0",
    "Content-Type": "application/json"
  };

  const clientInfo = `Oracle-TypeScriptSDK/${version}`;

  it("should compose request properly in Browser ", async function() {
    const sdkRequest = await composeRequest({
      baseEndpoint: "http://test-end-point/20191002",
      defaultHeaders: {},
      path: "/testUrl/{testId}/actions",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    expect(sdkRequest.body).to.not.exist;
    expect(sdkRequest.headers.get("Content-Type")).equals("application/json");
    expect(sdkRequest.uri).equals(
      "http://test-end-point/20191002/testUrl/Test-Id/actions?imageId=test"
    );
    expect(sdkRequest.headers.get("opc-request-id")).exist;
    expect(sdkRequest.headers.get("X-Orcl-User-Agent")).equals(clientInfo);
    expect(sdkRequest.headers.get("User-Agent")).not.exist;
    expect(sdkRequest.headers.get("opc-retry-token")).exist;
  });
});
