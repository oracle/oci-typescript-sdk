/**
 * Copyright (c) 2020, 2026 Oracle and/or its affiliates. All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0. You may choose either license.
 */

import { expect } from "chai";
import { generateKeyPairSync } from "crypto";
import { SimpleAuthenticationDetailsProvider } from "../lib/auth/auth";
import { DefaultRequestSigner } from "../lib/signer";
import { HttpRequest } from "../lib/http-request";
import { Region } from "../lib/region";

const TEST_TENANCY_ID = "ocid1.tenancy.oc1..aaaaaaaaexampletenancy";
const TEST_USER_ID = "ocid1.user.oc1..aaaaaaaaexampleuser";
const TEST_FINGERPRINT = "20:3b:97:13:55:1c:01:47:3f:3f:de:ad:be:ef:00:01";
const BODY = '{"message":"hello"}';
const BODY_SHA = "my1Dr/v0mjZwKN8uFBT4TA4JmsmMPVSoqAFX/XdxryU=";

const TEST_PRIVATE_KEY = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" }
}).privateKey;

function createProvider(): SimpleAuthenticationDetailsProvider {
  return new SimpleAuthenticationDetailsProvider(
    TEST_TENANCY_ID,
    TEST_USER_ID,
    TEST_FINGERPRINT,
    TEST_PRIVATE_KEY,
    null,
    Region.US_PHOENIX_1
  );
}

describe("Authentication signing", function() {
  it("builds a simple auth provider with the expected key ID and region", async function() {
    const provider = createProvider();

    expect(await provider.getKeyId()).to.equal(
      `${TEST_TENANCY_ID}/${TEST_USER_ID}/${TEST_FINGERPRINT}`
    );
    expect(provider.getPrivateKey()).to.equal(TEST_PRIVATE_KEY);
    expect(provider.getPassphrase()).to.equal(null);
    expect(provider.getRegion()).to.equal(Region.US_PHOENIX_1);
  });

  it("signs a GET request with the required OCI signature headers", async function() {
    const signer = new DefaultRequestSigner(createProvider());
    const request: HttpRequest = {
      uri: "https://identity.us-phoenix-1.oraclecloud.com/20160918/regions",
      method: "GET",
      headers: new Headers()
    };

    await signer.signHttpRequest(request);

    expect(request.headers.get("host")).to.equal("identity.us-phoenix-1.oraclecloud.com");
    expect(request.headers.get("x-date")).to.be.a("string").and.not.empty;
    expect(request.headers.get("authorization")).to.include('Signature version="1"');
    expect(request.headers.get("authorization")).to.include(
      `keyId="${TEST_TENANCY_ID}/${TEST_USER_ID}/${TEST_FINGERPRINT}"`
    );
    expect(request.headers.get("authorization")).to.include(
      'headers="x-date (request-target) host"'
    );
  });

  it("signs a POST request with body hash headers", async function() {
    const signer = new DefaultRequestSigner(createProvider());
    const request: HttpRequest = {
      uri: "https://identity.us-phoenix-1.oraclecloud.com/20160918/regions",
      method: "POST",
      headers: new Headers(),
      body: BODY
    };

    await signer.signHttpRequest(request);

    expect(request.headers.get("Content-Type")).to.equal("application/json");
    expect(request.headers.get("Content-Length")).to.equal(`${Buffer.byteLength(BODY, "utf8")}`);
    expect(request.headers.get("x-content-sha256")).to.equal(BODY_SHA);
    expect(request.headers.get("authorization")).to.include(
      'headers="x-date (request-target) host Content-Type Content-Length x-content-sha256"'
    );
  });
});
