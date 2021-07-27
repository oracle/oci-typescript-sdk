/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { composeRequest } from "../lib/request-generator";
import { expect } from "chai";
import { version } from "../../../package.json";
const os = require("os");
import fs from "fs";

describe("Test Request Generator ", () => {
  const pathParams = {
    "{testId}": "Test-Id"
  };

  const queryParams = { "imageId": "test" };
  const definedTagQueryParams = {
    "imageId": "test",
    "definedTagEquals": ["namespace1.key.val", "namespace1.key.val2", "namespace2.key.val"],
    "freeformTagEquals": ["ff1key.val", "ff2key.val"]
  };

  const headerParams = {
    "opc-request-id": "test-request-id",
    "Content-Length": "0",
    "Content-Type": "application/json",
    "opc-retry-token": "retrytoken"
  };
  const appendUserAgent = process.env.OCI_SDK_APPEND_USER_AGENT;
  const clientInfo = `Oracle-TypeScriptSDK/${version}`;
  const userAgent = appendUserAgent
    ? `${clientInfo} (${os.platform}/${os.release}; Node/${process.version}) ${appendUserAgent}`
    : `${clientInfo} (${os.platform}/${os.release}; Node/${process.version})`;

  it("should compose request properly  in Node environment", async function() {
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
    expect(sdkRequest.headers.get("X-Orcl-User-Agent")).not.exist;
    expect(sdkRequest.headers.get("User-Agent")).equals(userAgent);
    expect(sdkRequest.headers.get("opc-retry-token")).exist;
  });

  it("should calculate content-length without reading content if path provided and content-length not given for request body", async function() {
    const headerParams = {
      "opc-request-id": "test-request-id",
      "Content-Type": "application/json",
      "Content-Length": undefined,
      "opc-retry-token": undefined
    };
    const fileLocation = __dirname + "/resources/large_file.bin";
    const objectData = await fs.createReadStream(fileLocation);
    const size = fs.statSync(fileLocation).size;
    const sdkRequest = await composeRequest({
      baseEndpoint: "http://test-end-point/20191002",
      defaultHeaders: {},
      path: "/testUrl/{testId}/actions",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams,
      bodyContent: objectData
    });

    expect(sdkRequest.body).to.exist;
    expect(sdkRequest.uri).equals(
      "http://test-end-point/20191002/testUrl/Test-Id/actions?imageId=test"
    );
    expect(sdkRequest.headers.get("opc-request-id")).exist;
    expect(sdkRequest.headers.get("X-Orcl-User-Agent")).not.exist;
    expect(sdkRequest.headers.get("User-Agent")).equals(userAgent);
    expect(sdkRequest.headers.get("opc-retry-token")).exist;
    expect(sdkRequest.headers.get("content-length")).exist;
    expect(sdkRequest.headers.get("content-length")).equal(String(size));
    expect(typeof sdkRequest.body).equal("object");
  });

  it("should calculate content-length by reading content if path was not provided and content-length not given for request body", async function() {
    const headerParams = {
      "opc-request-id": "test-request-id",
      "Content-Type": "application/json",
      "Content-Length": undefined,
      "opc-retry-token": undefined
    };
    const fileLocation = __dirname + "/resources/large_file.bin";
    const size = fs.statSync(fileLocation).size;
    const objectData = await fs.createReadStream(fileLocation);
    objectData.path = ""; // Force the path to be an empty string
    const sdkRequest = await composeRequest({
      baseEndpoint: "http://test-end-point/20191002",
      defaultHeaders: {},
      path: "/testUrl/{testId}/actions",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams,
      bodyContent: objectData
    });

    expect(sdkRequest.body).to.exist;
    expect(sdkRequest.uri).equals(
      "http://test-end-point/20191002/testUrl/Test-Id/actions?imageId=test"
    );
    expect(sdkRequest.headers.get("opc-request-id")).exist;
    expect(sdkRequest.headers.get("X-Orcl-User-Agent")).not.exist;
    expect(sdkRequest.headers.get("User-Agent")).equals(userAgent);
    expect(sdkRequest.headers.get("opc-retry-token")).exist;
    expect(sdkRequest.headers.get("content-length")).exist;
    expect(sdkRequest.headers.get("content-length")).equal(String(size));
    expect(typeof sdkRequest.body).equal("object");
  });

  it("should not add opc-retry-token to headers if the key does not exist in header params", async function() {
    const headerParams = {
      "opc-request-id": "test-request-id",
      "Content-Type": "application/json",
      "Content-Length": undefined
    };
    const sdkRequest = await composeRequest({
      baseEndpoint: "http://test-end-point/20191002",
      defaultHeaders: {},
      path: "/testUrl/{testId}/actions",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    expect(sdkRequest.headers.get("opc-retry-token")).not.exist;
  });

  it("should add opc-retry-token to headers if the key does exists in header params", async function() {
    const headerParams = {
      "opc-request-id": "test-request-id",
      "Content-Type": "application/json",
      "Content-Length": undefined,
      "opc-retry-token": undefined
    };
    const sdkRequest = await composeRequest({
      baseEndpoint: "http://test-end-point/20191002",
      defaultHeaders: {},
      path: "/testUrl/{testId}/actions",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    expect(sdkRequest.headers.get("opc-retry-token")).exist;
  });

  it("should not overwrite opc-retry-token if the user provides an opc-retry-token", async function() {
    const headerParams = {
      "opc-request-id": "test-request-id",
      "Content-Type": "application/json",
      "Content-Length": undefined,
      "opc-retry-token": "retryToken"
    };
    const sdkRequest = await composeRequest({
      baseEndpoint: "http://test-end-point/20191002",
      defaultHeaders: {},
      path: "/testUrl/{testId}/actions",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    expect(sdkRequest.headers.get("opc-retry-token")).equals("retryToken");
  });

  it("should create correct url for definedTags query params", async function() {
    const sdkRequest = await composeRequest({
      baseEndpoint: "http://test-end-point/20191002",
      defaultHeaders: {},
      path: "/testUrl/{testId}/actions",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: definedTagQueryParams
    });
    expect(sdkRequest.uri).equals(
      "http://test-end-point/20191002/testUrl/Test-Id/actions?imageId=test&definedTagEquals=namespace1.key.val&definedTagEquals=namespace1.key.val2&definedTagEquals=namespace2.key.val&freeformTagEquals=ff1key.val&freeformTagEquals=ff2key.val"
    );
  });
});
