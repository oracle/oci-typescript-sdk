/*
 * This header is excluded from headers.ts as we need to use same retry token but new request token
 * which needs to be incorporated when we add retry strategy.
 */

const uuidv1 = require("uuid/v1");

const OPC_RETRY_TOKEN_HEADER: string = "opc-retry-token";

export function addRetryToken(headers: Headers) {
  // if user has not passed opc-retry-token
  if (!hasRetryToken(headers)) {
    headers.append(OPC_RETRY_TOKEN_HEADER, generateRetryToken());
  }
}

function hasRetryToken(headers: Headers) {
  if (headers.has(OPC_RETRY_TOKEN_HEADER)) {
    return true;
  }
  return false;
}

function generateRetryToken() {
  return uuidv1();
}
