/**
 * Copyright (c) 2026 Oracle and/or its affiliates. All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

const { expect } = require("chai");
const http = require("http");
import { FetchHttpClient } from "../lib/http";
import { HttpRequest } from "../lib/http-request";

function startServer(): Promise<{ server: any; uri: string }> {
  return new Promise((resolve, reject) => {
    const server = http.createServer((_request: unknown, response: any) => {
      response.end("ok");
    });

    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        reject(new Error("Unable to determine mock server port"));
        return;
      }
      resolve({ server, uri: `http://127.0.0.1:${address.port}` });
    });
  });
}

function request(uri: string): HttpRequest {
  return { uri, method: "GET", headers: new Headers() };
}

function closeServer(server: any): Promise<void> {
  return new Promise((resolve, reject) => {
    // Native fetch can retain an idle keep-alive socket after the response body
    // is consumed. Node 18 waits for that socket in server.close(), which can
    // exceed Mocha's default hook timeout.
    if (typeof server.closeIdleConnections === "function") {
      server.closeIdleConnections();
    }
    if (typeof server.closeAllConnections === "function") {
      server.closeAllConnections();
    }
    server.close((error: Error | undefined) => (error ? reject(error) : resolve()));
  });
}

describe("FetchHttpClient", () => {
  let server: any;
  let uri: string;

  beforeEach(async () => {
    ({ server, uri } = await startServer());
  });

  afterEach(async () => {
    if (server) {
      await closeServer(server);
    }
  });

  it("sends a request with native fetch", async () => {
    const response = await new FetchHttpClient(null).send(request(uri));

    expect(response.status).to.equal(200);
    expect(await response.text()).to.equal("ok");
  });

  it("uses node-fetch for a Node HTTP agent without replacing native fetch", async () => {
    // Regression coverage for OKE Workload Identity on Node 18+: its custom
    // HTTPS agent must be honored even when Node provides global fetch.
    const nativeFetch = globalThis.fetch;
    expect(nativeFetch).to.be.a("function");

    const agent: any = new http.Agent();
    const addRequest = agent.addRequest;
    let nodeAgentUsed = false;
    agent.addRequest = function(...args: any[]) {
      nodeAgentUsed = true;
      return addRequest.apply(this, args);
    };

    const response = await new FetchHttpClient(null, undefined, { agent }).send(request(uri));

    expect(nodeAgentUsed).to.equal(true);
    expect(globalThis.fetch).to.equal(nativeFetch);
    expect(response.status).to.equal(200);
    expect(await response.text()).to.equal("ok");
  });

  it("rejects malformed signed URIs before normalization", async () => {
    const signer: any = {
      signHttpRequest: async () => undefined
    };
    const httpClient = new FetchHttpClient(signer);

    try {
      await httpClient.send(request("https:example.com"));
      expect.fail("Expected the shorthand URI to be rejected");
    } catch (error) {
      expect((error as Error).message).to.equal("Cannot parse host from url");
    }
  });
});
