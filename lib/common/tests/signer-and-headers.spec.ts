/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { expect } from "chai";
import path from "path";
import { DefaultRequestSigner, SignerRequest } from "../lib/signer";
import { getSignerAndReqBody, isBodyEmpty } from "../lib/helper";
import { isEmpty } from "../lib/utils";
import { Readable } from "stream";
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

    expect(headers.get("opc-request-id")).to.equal("A747C0002C29-11EA-8809-0B0B0C0D0E0F");
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

  it("should use the normalized request target and host when signing", async function() {
    const uri = "https://example.com:443/path/../path%2Fsegment?first=value with space#fragment";
    const signerRequest = new SignerRequest("GET", uri, new Headers());

    expect(signerRequest.path).to.equal("/path%2Fsegment?first=value%20with%20space");

    const signer = createSigner();
    const request: HttpRequest = {
      uri,
      method: "GET",
      headers: new Headers()
    };

    await signer.signHttpRequest(request);

    expect(request.headers.get("host")).to.equal("example.com");
  });

  it("should retain a non-default port in the signed host", async function() {
    const signer = createSigner();
    const request: HttpRequest = {
      uri: "https://example.com:8443/20160918/regions",
      method: "GET",
      headers: new Headers()
    };

    await signer.signHttpRequest(request);

    expect(request.headers.get("host")).to.equal("example.com:8443");
  });

  it("should retain the existing error for invalid request URIs", async function() {
    const signer = createSigner();

    for (const uri of ["not-a-url", "https:example.com", "https:///path"]) {
      const request: HttpRequest = {
        uri,
        method: "GET",
        headers: new Headers()
      };

      try {
        await signer.signHttpRequest(request);
        expect.fail("Expected signing to reject an invalid request URI");
      } catch (error) {
        expect((error as any).message).to.equal("Cannot parse host from url");
      }
    }
  });

  describe("getSignerAndReqBody and isEmpty Buffer handling", () => {
    it("should correctly check emptiness without enumerating Buffer keys", () => {
      expect(isEmpty(Buffer.alloc(0))).to.be.true;
      expect(isEmpty(Buffer.from("data"))).to.be.false;
      expect(isEmpty(new Uint8Array(0))).to.be.true;
      expect(isEmpty(new Uint8Array([1, 2, 3]))).to.be.false;
      expect(isEmpty({})).to.be.true;
      expect(isEmpty({ key: "val" })).to.be.false;
      expect(isEmpty(null)).to.be.true;
      expect(isEmpty(undefined)).to.be.true;
    });

    it("should handle empty Buffer in getSignerAndReqBody", () => {
      const res = getSignerAndReqBody(Buffer.alloc(0));
      expect(res.signerBody).to.be.undefined;
      expect(res.requestBody).to.be.undefined;
    });

    it("should handle Buffer body with forceExcludeBody true without OOM", () => {
      // 5 MB buffer should process in under 100ms and not exhaust heap
      const buf = Buffer.alloc(5 * 1024 * 1024, 0x41);
      const start = Date.now();
      const res = getSignerAndReqBody(buf, true);
      const elapsed = Date.now() - start;

      expect(res.signerBody).to.be.undefined;
      expect(res.requestBody).to.equal(buf);
      expect(elapsed).to.be.lessThan(500);
    });

    it("should handle Buffer body with forceExcludeBody false", () => {
      const buf = Buffer.from("binary payload");
      const res = getSignerAndReqBody(buf, false);
      expect(res.signerBody).to.equal(buf);
      expect(res.requestBody).to.equal(buf);
    });

    it("should handle string and stream bodies correctly", () => {
      const emptyStr = getSignerAndReqBody("");
      expect(emptyStr.signerBody).to.be.undefined;
      expect(emptyStr.requestBody).to.be.undefined;

      const strRes = getSignerAndReqBody("string content");
      expect(strRes.signerBody).to.equal("string content");
      expect(strRes.requestBody).to.equal("string content");

      const stream = new Readable({ read() {} });
      const streamRes = getSignerAndReqBody(stream);
      expect(streamRes.signerBody).to.exist;
      expect(streamRes.requestBody).to.exist;
    });
  });

});
