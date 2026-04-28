/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import "isomorphic-fetch";
import { expect } from "chai";
import path from "path";
import { DefaultRequestSigner } from "../lib/signer";
import { ConfigFileAuthenticationDetailsProvider } from "../lib/auth/config-file-auth";
import { HttpRequest } from "../lib/http-request";

const crypto = require("crypto");
const TEST_CONFIG_PATH = path.join(__dirname, "resources/unit-test-environment-config");
const TEST_PRIVATE_KEY = crypto.generateKeyPairSync("rsa", {
  modulusLength: 1024,
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" }
}).privateKey;

describe("Signer and header helpers", () => {
  const EMPTY_SHA = "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=";
  const BODY = '{"message":"hello"}';
  const BODY_SHA = "my1Dr/v0mjZwKN8uFBT4TA4JmsmMPVSoqAFX/XdxryU=";
  const originalRandomFillSync = crypto.randomFillSync;
  const originalDateNow = Date.now;
  afterEach(() => {
    crypto.randomFillSync = originalRandomFillSync;
    Date.now = originalDateNow;
  });

  function clearModule(modulePath: string) {
    delete require.cache[require.resolve(modulePath)];
  }

  function clearUuidModules() {
    Object.keys(require.cache).forEach(cacheKey => {
      if (cacheKey.indexOf("/node_modules/uuid/") !== -1) {
        delete require.cache[cacheKey];
      }
    });
  }

  function createSigner() {
    const provider = new ConfigFileAuthenticationDetailsProvider(TEST_CONFIG_PATH);
    provider.getPrivateKey = () => TEST_PRIVATE_KEY;

    return new DefaultRequestSigner(provider);
  }

  it("should generate the expected opc-request-id from uuid v1", function() {
    crypto.randomFillSync = (buffer: Uint8Array) => {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] = i;
      }
      return buffer;
    };
    Date.now = () => 1577836800000;
    clearModule("../lib/headers");
    clearUuidModules();

    const { addOpcRequestId } = require("../lib/headers");
    const headers = new Headers();
    addOpcRequestId(headers);

    expect(headers.get("opc-request-id")).to.equal("A747C0002C29-11EA-8607-010102030405");
  });

  it("should generate the expected x-content-sha256 for a JSON request body", async function() {
    const signer = createSigner();
    const request: HttpRequest = {
      uri: "https://example.com/20160918/test",
      method: "POST",
      headers: new Headers(),
      body: BODY
    };

    await signer.signHttpRequest(request);

    expect(request.headers.get("x-content-sha256")).to.equal(BODY_SHA);
    expect(request.headers.get("Content-Length")).to.equal(`${Buffer.byteLength(BODY, "utf8")}`);
  });

  it("should generate the expected x-content-sha256 for an empty request body", async function() {
    const signer = createSigner();
    const request: HttpRequest = {
      uri: "https://example.com/20160918/test",
      method: "POST",
      headers: new Headers(),
      body: ""
    };

    await signer.signHttpRequest(request);

    expect(request.headers.get("x-content-sha256")).to.equal(EMPTY_SHA);
    expect(request.headers.get("Content-Length")).to.equal("0");
  });
});
