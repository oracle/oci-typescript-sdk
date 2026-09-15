/**
 * Copyright (c) 2026 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/upl. You may choose either license.
 */

import { expect } from "chai";
import { generateKeyPairSync } from "crypto";
import * as http from "http";
import JWT = require("jsonwebtoken");
import { createSelfSignedCertificate, identityFromDN, parsePrivateKey } from "sshpk";
import InstancePrincipalsAuthenticationDetailsProviderBuilder from "../lib/auth/instance-principals-authentication-detail-provider";

const TEST_TENANCY_ID = "ocid1.tenancy.oc1..unit-test";
// The private key simulates the instance identity used to sign federation requests.
// The certificate simulates metadata identity data and contains the test tenancy.
const TEST_PRIVATE_KEY = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" }
}).privateKey;
const TEST_CERTIFICATE = (createSelfSignedCertificate as any)(
  identityFromDN(`CN=opc-tenant:${TEST_TENANCY_ID}`) as any,
  parsePrivateKey(TEST_PRIVATE_KEY, "pem") as any,
  { lifetime: 3600 }
).toString("pem");

class LocalInstancePrincipalsAuthenticationDetailsProviderBuilder extends InstancePrincipalsAuthenticationDetailsProviderBuilder {
  constructor(private localFederationEndpoint: string) {
    super();
  }

  protected async autoDetectEndpointUsingMetadataUrl(): Promise<string> {
    await super.autoDetectEndpointUsingMetadataUrl();
    this.federationEndpoint = this.localFederationEndpoint;
    return this.federationEndpoint;
  }
}

function listen(server: http.Server): Promise<number> {
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", function() {
      const address = server.address();
      if (!address || typeof address === "string") {
        reject(new Error("Unable to determine mock server port"));
        return;
      }
      resolve(address.port);
    });
  });
}

function close(server: http.Server): Promise<void> {
  return new Promise((resolve, reject) => {
    server.close(error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

describe("Instance principal authentication", function() {
  this.timeout(10000);

  /**
   * Uses a local HTTP server to mock the instance metadata region,
   * certificate, private-key, intermediate-certificate, and `/v1/x509`
   * federation endpoints. Verifies metadata authorization, region and tenancy
   * discovery, the signed federation request, and `ST$` token retrieval.
   */
  it("discovers metadata and retrieves a signed federation token from local endpoints", async function() {
    const metadataRequests: Array<{
      url: string | undefined;
      authorization: string | string[] | undefined;
    }> = [];
    let federationRequest:
      | {
          authorization: string | string[] | undefined;
          body: string;
          method: string | undefined;
        }
      | undefined;
    const securityToken = JWT.sign({ exp: Math.floor(Date.now() / 1000) + 60 }, TEST_PRIVATE_KEY, {
      algorithm: "RS256"
    });

    const server = http.createServer((request, response) => {
      if (request.url === "/v1/x509") {
        let body = "";
        request.setEncoding("utf8");
        request.on("data", chunk => (body += chunk));
        request.on("end", () => {
          federationRequest = {
            authorization: request.headers.authorization,
            body,
            method: request.method
          };
          response.setHeader("content-type", "application/json");
          response.end(JSON.stringify({ token: securityToken }));
        });
        return;
      }

      metadataRequests.push({
        url: request.url,
        authorization: request.headers.authorization
      });
      switch (request.url) {
        case "/opc/v2/instance/region":
          response.end("us-phoenix-1");
          return;
        case "/opc/v2/identity/cert.pem":
          response.end(TEST_CERTIFICATE);
          return;
        case "/opc/v2/identity/key.pem":
          response.end(TEST_PRIVATE_KEY);
          return;
        case "/opc/v2/identity/intermediate.pem":
          response.end(TEST_CERTIFICATE);
          return;
        default:
          response.statusCode = 404;
          response.end();
      }
    });
    const port = await listen(server);
    const builder = new LocalInstancePrincipalsAuthenticationDetailsProviderBuilder(
      `http://127.0.0.1:${port}`
    );
    builder.metadataBaseUrl = `http://127.0.0.1:${port}/opc/v2/`;

    let provider: any;
    try {
      provider = await builder.build();

      expect(provider.getRegion().regionId).to.equal("us-phoenix-1");
      expect(await provider.getKeyId()).to.equal(`ST$${securityToken}`);

      expect(metadataRequests.map(request => request.url)).to.include.members([
        "/opc/v2/instance/region",
        "/opc/v2/identity/cert.pem",
        "/opc/v2/identity/key.pem",
        "/opc/v2/identity/intermediate.pem"
      ]);
      metadataRequests.forEach(request => {
        expect(request.authorization).to.equal("Bearer Oracle");
      });

      expect(federationRequest).to.not.equal(undefined);
      if (!federationRequest) {
        throw new Error("Expected a request to the local federation endpoint");
      }
      expect(federationRequest.method).to.equal("POST");
      expect(federationRequest.authorization).to.match(/^Signature version="1",/);

      const federationPayload = JSON.parse(federationRequest.body);
      expect(federationPayload.purpose).to.equal("DEFAULT");
      expect(federationPayload.certificate).to.not.contain("BEGIN CERTIFICATE");
      expect(federationPayload.intermediateCertificates).to.have.length(1);
      expect(federationPayload.intermediateCertificates[0]).to.not.contain("BEGIN CERTIFICATE");
      expect(federationRequest.authorization).to.contain(TEST_TENANCY_ID);
    } finally {
      if (provider) {
        provider.closeProvider();
      }
      await close(server);
    }
  });
});
