/**
 * Copyright (c) 2026 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0. You may choose either license.
 */

import { URL } from "url";

/**
 * Node's native Fetch implementation does not support the `agent` option.
 * Requests with an agent must therefore use node-fetch.
 */
export function hasNodeHttpAgent(options: unknown): boolean {
  return !!options && !!(options as { agent?: unknown }).agent;
}

let nodeFetch: any;

/**
 * Loads node-fetch only for requests that provide a Node HTTP(S) agent.
 */
export function getNodeFetch(): any {
  if (!nodeFetch) {
    nodeFetch = require("node-fetch");
  }
  return nodeFetch;
}

function normalizeEmptyQuery(uri: string): string {
  const parsedUri = new URL(uri);
  // node-fetch preserves a bare trailing `?`, while native Fetch omits it.
  // Remove it before signing and sending so both transports use the same target.
  return parsedUri.search === "" && uri.endsWith("?") ? uri.slice(0, -1) : uri;
}

/**
 * Normalizes the request URI using the URL serializer of the selected Fetch
 * transport. The signer uses this URI so the signed request target matches the
 * request target sent to the server.
 */
export function getFetchRequestUri(uri: string, options: unknown): string {
  if (hasNodeHttpAgent(options)) {
    return normalizeEmptyQuery(new (getNodeFetch().Request)(uri).url);
  }
  return normalizeEmptyQuery(new Request(uri).url);
}

/**
 * Executes a request with the selected Fetch implementation.
 */
export function fetchWithSelectedTransport(
  uri: string,
  options: RequestInit | undefined
): Promise<any> {
  return hasNodeHttpAgent(options) ? getNodeFetch()(uri, options) : fetch(uri, options);
}
