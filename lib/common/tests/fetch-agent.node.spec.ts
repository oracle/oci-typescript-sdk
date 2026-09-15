/**
 * Copyright (c) 2020, 2026 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { expect } from "chai";
import { createHash, createPublicKey, generateKeyPairSync } from "crypto";
import * as http from "http";
import * as https from "https";
import { Readable } from "stream";
import JWT = require("jsonwebtoken");
import { createSelfSignedCertificate, identityForHost, parsePrivateKey } from "sshpk";
import { SimpleAuthenticationDetailsProvider } from "../lib/auth/auth";
import X509FederationClientForOkeWorkloadIdentity from "../lib/auth/X509-federation-client-for-oke-workload-identity";
import CircuitBreaker from "../lib/circuit-breaker";
import { FetchHttpClient } from "../lib/http";
import SessionKeySupplierImpl from "../lib/auth/session-key-supplier";
import { DefaultRequestSigner } from "../lib/signer";

const httpSignature: any = require("http-signature");

const TEST_HOST = "localhost";
// The private key lets the mock server establish TLS and sign the test RPST.
// The certificate is presented by the server and trusted as the custom CA.
const TEST_PRIVATE_KEY = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" }
}).privateKey;
const TEST_PUBLIC_KEY = createPublicKey(TEST_PRIVATE_KEY)
  .export({ type: "spki", format: "pem" })
  .toString();
const TEST_CERTIFICATE = (createSelfSignedCertificate as any)(
  identityForHost(TEST_HOST) as any,
  parsePrivateKey(TEST_PRIVATE_KEY, "pem") as any,
  { lifetime: 3600 }
).toString("pem");

function createSigner(): DefaultRequestSigner {
  return new DefaultRequestSigner(
    new SimpleAuthenticationDetailsProvider(
      "ocid1.tenancy.oc1..unit-test",
      "ocid1.user.oc1..unit-test",
      "unit-test-fingerprint",
      TEST_PRIVATE_KEY,
      null
    )
  );
}

function verifySignedRequest(request: http.IncomingMessage, response: http.ServerResponse): void {
  const parsedSignature = httpSignature.parseRequest(request);
  const signatureIsValid = httpSignature.verifySignature(parsedSignature, TEST_PUBLIC_KEY);
  response.statusCode = signatureIsValid ? 200 : 401;
  response.setHeader("content-type", "application/json");
  response.end(JSON.stringify({ signatureIsValid, requestTarget: request.url }));
}

function listen(server: http.Server | https.Server): Promise<number> {
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, TEST_HOST, function() {
      const address = server.address();
      if (!address || typeof address === "string") {
        reject(new Error("Unable to determine mock HTTPS server port"));
        return;
      }
      resolve(address.port);
    });
  });
}

function close(server: http.Server | https.Server): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!server.listening) {
      resolve();
      return;
    }

    const nodeServer: any = server;
    if (typeof nodeServer.closeIdleConnections === "function") {
      nodeServer.closeIdleConnections();
    }
    if (typeof nodeServer.closeAllConnections === "function") {
      nodeServer.closeAllConnections();
    }

    server.close(error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

describe("FetchHttpClient Fetch transport", function() {
  let server: http.Server | https.Server | undefined;
  let circuitBreaker: any;

  afterEach(async function() {
    if (server) {
      await close(server);
      server = undefined;
    }

    if (circuitBreaker) {
      circuitBreaker.shutdown();
      circuitBreaker = undefined;
    }
  });

  it("uses httpOptions.agent without overriding global fetch", async function() {
    expect(globalThis.fetch).to.be.a("function");
    const nativeFetch = globalThis.fetch;

    server = https.createServer(
      {
        key: TEST_PRIVATE_KEY,
        cert: TEST_CERTIFICATE
      },
      (_request, response) => {
        response.setHeader("content-type", "application/json");
        response.end(JSON.stringify({ status: "ok" }));
      }
    );

    const port = await listen(server);
    const agent = new https.Agent({ ca: TEST_CERTIFICATE });
    const httpClient = new FetchHttpClient(null, null, { agent });

    const response = await httpClient.send({
      uri: `https://${TEST_HOST}:${port}/fetch-agent-smoke`,
      method: "GET",
      headers: new Headers()
    });

    expect(response.status).to.equal(200);
    expect(await response.json()).to.deep.equal({ status: "ok" });
    expect(globalThis.fetch).to.equal(nativeFetch);
  });

  it("authenticates an OKE workload identity request with its service-account CA", async function() {
    const nativeFetch = globalThis.fetch;
    const rpst = JWT.sign({ exp: Math.floor(Date.now() / 1000) + 60 }, TEST_PRIVATE_KEY, {
      algorithm: "RS256"
    });
    let authorizationHeader: string | undefined;

    server = https.createServer(
      {
        key: TEST_PRIVATE_KEY,
        cert: TEST_CERTIFICATE
      },
      (request, response) => {
        authorizationHeader = request.headers.authorization;
        response.end(Buffer.from(JSON.stringify({ token: `RPST${rpst}` })).toString("base64"));
      }
    );

    const port = await listen(server);
    const federationClient = new X509FederationClientForOkeWorkloadIdentity(
      `https://${TEST_HOST}:${port}/resourcePrincipalSessionTokens`,
      "service-account-token",
      TEST_CERTIFICATE,
      new SessionKeySupplierImpl()
    );

    expect(await federationClient.getSecurityToken()).to.equal(`RPST${rpst}`.slice(3));
    expect(authorizationHeader).to.equal("Bearer service-account-token");
    expect(globalThis.fetch).to.equal(nativeFetch);
  });

  it("preserves httpOptions.agent through the circuit breaker", async function() {
    server = https.createServer(
      {
        key: TEST_PRIVATE_KEY,
        cert: TEST_CERTIFICATE
      },
      verifySignedRequest
    );

    const port = await listen(server);
    const agent = new https.Agent({ ca: TEST_CERTIFICATE });
    circuitBreaker = new CircuitBreaker().circuit;
    const httpClient = new FetchHttpClient(createSigner(), circuitBreaker, { agent });

    const response = await httpClient.send({
      uri: `https://${TEST_HOST}:${port}/fetch-agent-circuit-breaker-smoke?x=|`,
      method: "GET",
      headers: new Headers()
    });

    expect(response.status).to.equal(200);
    expect(await response.json()).to.deep.equal({
      signatureIsValid: true,
      requestTarget: "/fetch-agent-circuit-breaker-smoke?x=%7C"
    });
  });

  it("uploads and downloads Node Readable streams through httpOptions.agent", async function() {
    const uploadPayload = "streamed Node Readable upload";
    const downloadPayload = "streamed Node Readable download";
    let receivedUpload = "";

    server = https.createServer(
      {
        key: TEST_PRIVATE_KEY,
        cert: TEST_CERTIFICATE
      },
      (request, response) => {
        request.setEncoding("utf8");
        request.on("data", chunk => {
          receivedUpload += chunk;
        });
        request.on("end", () => {
          response.setHeader("content-type", "application/octet-stream");
          response.write(downloadPayload.slice(0, 12));
          response.end(downloadPayload.slice(12));
        });
      }
    );

    const port = await listen(server);
    const agent = new https.Agent({ ca: TEST_CERTIFICATE });
    const httpClient = new FetchHttpClient(null, null, { agent });

    const response = await httpClient.send({
      uri: `https://${TEST_HOST}:${port}/node-stream-round-trip`,
      method: "PUT",
      headers: new Headers({ "content-type": "application/octet-stream" }),
      body: Readable.from([uploadPayload])
    });

    expect(receivedUpload).to.equal(uploadPayload);
    expect(response.status).to.equal(200);
    expect(response.body).to.be.instanceOf(Readable);

    const responseBody = (response.body as unknown) as Readable;
    const chunks: Buffer[] = [];
    await new Promise<void>((resolve, reject) => {
      responseBody.on("data", chunk => chunks.push(Buffer.from(chunk)));
      responseBody.on("end", resolve);
      responseBody.on("error", reject);
    });
    expect(Buffer.concat(chunks).toString()).to.equal(downloadPayload);
  });

  it("signs Node Readable uploads sent through httpOptions.agent", async function() {
    const uploadPayload = "signed streamed Node Readable upload";
    const downloadPayload = "signed streamed Node Readable download";
    const expectedContentSha = createHash("sha256")
      .update(uploadPayload, "utf8")
      .digest("base64");
    let receivedUpload = "";
    let receivedHeaders: http.IncomingHttpHeaders = {};
    let signatureIsValid = false;

    server = https.createServer(
      {
        key: TEST_PRIVATE_KEY,
        cert: TEST_CERTIFICATE
      },
      (request, response) => {
        request.setEncoding("utf8");
        request.on("data", chunk => {
          receivedUpload += chunk;
        });
        request.on("end", () => {
          receivedHeaders = request.headers;
          const parsedSignature = httpSignature.parseRequest(request);
          signatureIsValid = httpSignature.verifySignature(parsedSignature, TEST_PUBLIC_KEY);
          response.statusCode = signatureIsValid ? 200 : 401;
          response.setHeader("content-type", "text/plain");
          if (signatureIsValid) {
            response.write(downloadPayload.slice(0, 12));
            response.end(downloadPayload.slice(12));
          } else {
            response.end("signature verification failed");
          }
        });
      }
    );

    const port = await listen(server);
    const agent = new https.Agent({ ca: TEST_CERTIFICATE });
    const httpClient = new FetchHttpClient(createSigner(), null, { agent });

    const response = await httpClient.send({
      uri: `https://${TEST_HOST}:${port}/signed-node-stream-upload`,
      method: "PUT",
      headers: new Headers({ "content-type": "application/octet-stream" }),
      body: Readable.from([uploadPayload])
    });

    expect(response.status).to.equal(200);
    expect(receivedUpload).to.equal(uploadPayload);
    expect(signatureIsValid).to.equal(true);
    expect(receivedHeaders.host).to.equal(`${TEST_HOST}:${port}`);
    expect(receivedHeaders["x-date"]).to.be.a("string").and.not.empty;
    expect(receivedHeaders.authorization).to.include('Signature version="1"');
    expect(receivedHeaders.authorization).to.include(
      'headers="x-date (request-target) host Content-Type Content-Length x-content-sha256"'
    );
    expect(receivedHeaders["content-type"]).to.equal("application/octet-stream");
    expect(receivedHeaders["content-length"]).to.equal(
      `${Buffer.byteLength(uploadPayload, "utf8")}`
    );
    expect(receivedHeaders["x-content-sha256"]).to.equal(expectedContentSha);
    expect(response.body).to.be.instanceOf(Readable);

    const responseBody = (response.body as unknown) as Readable;
    const chunks: Buffer[] = [];
    await new Promise<void>((resolve, reject) => {
      responseBody.on("data", chunk => chunks.push(Buffer.from(chunk)));
      responseBody.on("end", resolve);
      responseBody.on("error", reject);
    });
    expect(Buffer.concat(chunks).toString()).to.equal(downloadPayload);
  });

  it("signs the request target sent through httpOptions.agent", async function() {
    server = https.createServer(
      {
        key: TEST_PRIVATE_KEY,
        cert: TEST_CERTIFICATE
      },
      verifySignedRequest
    );

    const port = await listen(server);
    const agent = new https.Agent({ ca: TEST_CERTIFICATE });
    const httpClient = new FetchHttpClient(createSigner(), null, { agent });

    const response = await httpClient.send({
      uri: `https://${TEST_HOST}:${port}/fetch-agent-signed-target?x=?`,
      method: "GET",
      headers: new Headers()
    });

    expect(response.status).to.equal(200);
    expect(await response.json()).to.deep.equal({
      signatureIsValid: true,
      requestTarget: "/fetch-agent-signed-target?x=?"
    });
  });

  it("normalizes a bare trailing query for requests with httpOptions.agent", async function() {
    server = https.createServer(
      {
        key: TEST_PRIVATE_KEY,
        cert: TEST_CERTIFICATE
      },
      verifySignedRequest
    );

    const port = await listen(server);
    const agent = new https.Agent({ ca: TEST_CERTIFICATE });
    const httpClient = new FetchHttpClient(createSigner(), null, { agent });

    const response = await httpClient.send({
      uri: `https://${TEST_HOST}:${port}/fetch-agent-empty-query?`,
      method: "GET",
      headers: new Headers()
    });

    expect(response.status).to.equal(200);
    expect(await response.json()).to.deep.equal({
      signatureIsValid: true,
      requestTarget: "/fetch-agent-empty-query"
    });
  });

  it("signs the request target sent through the global Fetch implementation", async function() {
    server = http.createServer(verifySignedRequest);
    const port = await listen(server);
    const httpClient = new FetchHttpClient(createSigner());
    const uri = `http://${TEST_HOST}:${port}/global-fetch-signed-target?x=|`;
    const parsedUri = new URL(new Request(uri).url);

    const response = await httpClient.send({
      uri,
      method: "GET",
      headers: new Headers()
    });

    expect(response.status).to.equal(200);
    expect(await response.json()).to.deep.equal({
      signatureIsValid: true,
      requestTarget: `${parsedUri.pathname}${parsedUri.search}`
    });
  });

  it("normalizes a bare trailing query for requests without httpOptions.agent", async function() {
    server = http.createServer(verifySignedRequest);
    const port = await listen(server);
    const httpClient = new FetchHttpClient(createSigner());

    const response = await httpClient.send({
      uri: `http://${TEST_HOST}:${port}/global-fetch-empty-query?`,
      method: "GET",
      headers: new Headers()
    });

    expect(response.status).to.equal(200);
    expect(await response.json()).to.deep.equal({
      signatureIsValid: true,
      requestTarget: "/global-fetch-empty-query"
    });
  });
});
