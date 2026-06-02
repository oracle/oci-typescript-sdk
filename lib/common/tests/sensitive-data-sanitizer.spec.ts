/**
 * Copyright (c) 2020, 2026 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { expect } from "chai";
import { sanitizeSensitiveData, sanitizeSensitiveDataForLogging } from "../lib/log";

describe("Sensitive data sanitizer", () => {
  it("should redact sensitive headers from logged text", () => {
    const value = [
      'Authorization: Signature keyId="secret"',
      "X-Api-Key: api-key-value",
      "opc-obo-token: obo-token-value"
    ].join("\n");

    const sanitized = sanitizeSensitiveData(value);

    expect(sanitized).equals(
      ["Authorization: <redacted>", "X-Api-Key: <redacted>", "opc-obo-token: <redacted>"].join("\n")
    );
  });

  it("should redact sensitive headers using normalized names and credential rules", () => {
    const value = [
      "Client_Secret: client-secret",
      "service__private-key: private-key",
      "OPC_DELEGATION_TOKEN: delegation-token",
      "proxy-authorization: proxy-authorization",
      "cookie: cookie",
      "set-cookie: set-cookie",
      "security-context: security-context",
      "password: password",
      "passphrase: passphrase",
      "x-token: token",
      "x-token-custom: token",
      "x-authorization: authorization",
      "x-authorization-token: authorization",
      "x-key-secret: key",
      "idcs-access-token: access-token",
      "service_private_key: private-key",
      "tokenization-status: visible",
      "private-key-id: visible",
      "client-secret-version: visible",
      "x-key: visible",
      "x-keyring-name: visible"
    ].join("\n");

    const sanitized = sanitizeSensitiveData(value);

    expect(sanitized).contains("Client_Secret: <redacted>");
    expect(sanitized).contains("service__private-key: <redacted>");
    expect(sanitized).contains("OPC_DELEGATION_TOKEN: <redacted>");
    expect(sanitized).contains("proxy-authorization: <redacted>");
    expect(sanitized).contains("cookie: <redacted>");
    expect(sanitized).contains("set-cookie: <redacted>");
    expect(sanitized).contains("security-context: <redacted>");
    expect(sanitized).contains("password: <redacted>");
    expect(sanitized).contains("passphrase: <redacted>");
    expect(sanitized).contains("x-token: <redacted>");
    expect(sanitized).contains("x-token-custom: <redacted>");
    expect(sanitized).contains("x-authorization: <redacted>");
    expect(sanitized).contains("x-authorization-token: <redacted>");
    expect(sanitized).contains("x-key-secret: <redacted>");
    expect(sanitized).contains("idcs-access-token: <redacted>");
    expect(sanitized).contains("service_private_key: <redacted>");
    expect(sanitized).contains("tokenization-status: visible");
    expect(sanitized).contains("private-key-id: visible");
    expect(sanitized).contains("client-secret-version: visible");
    expect(sanitized).contains("x-key: visible");
    expect(sanitized).contains("x-keyring-name: visible");
  });

  it("should not redact non-header JSON fields from logged text", () => {
    const value =
      '{"token":"token-value","clientSecret":"client-secret","currentToken":"current-token","pass_phrase":"pass-phrase","podKey":"pod-key","name":"visible"}';

    const sanitized = sanitizeSensitiveData(value);

    expect(sanitized).contains('"token":"token-value"');
    expect(sanitized).contains('"clientSecret":"client-secret"');
    expect(sanitized).contains('"currentToken":"current-token"');
    expect(sanitized).contains('"pass_phrase":"pass-phrase"');
    expect(sanitized).contains('"podKey":"pod-key"');
    expect(sanitized).contains('"name":"visible"');
  });

  it("should redact sensitive header keys from serialized logger objects", () => {
    const value = {
      headers: {
        authorization: "signature",
        cookie: "cookie",
        client_secret: "client-secret",
        "x-token-custom": "token",
        "set-cookie": ["first-cookie", "second-cookie"],
        "security-token": null,
        "private-key-id": "visible"
      }
    };

    const sanitized = sanitizeSensitiveDataForLogging(value);

    expect(sanitized).contains('"authorization":"<redacted>"');
    expect(sanitized).contains('"cookie":"<redacted>"');
    expect(sanitized).contains('"client_secret":"<redacted>"');
    expect(sanitized).contains('"x-token-custom":"<redacted>"');
    expect(sanitized).contains('"set-cookie":["<redacted>","<redacted>"]');
    expect(sanitized).contains('"security-token":null');
    expect(sanitized).contains('"private-key-id":"visible"');
  });

  it("should not redact sensitive-looking query parameters from logged text", () => {
    const value =
      "GET https://example.com/path?mediaAssetId=asset&token=token-value&client_secret=client-secret subject_token=subject-token";

    const sanitized = sanitizeSensitiveData(value);

    expect(sanitized).equals(value);
  });

  it("should not redact non-header fields from serialized logger objects", () => {
    const value = {
      response: {
        url: "https://example.com/path?token=token-value"
      },
      errorObject: {
        requestEndpoint: "GET https://example.com/path?password=password-value",
        message: {
          privateKey: "private-key",
          displayName: "visible"
        }
      }
    };

    const sanitized = sanitizeSensitiveDataForLogging(value);

    expect(sanitized).contains('"url":"https://example.com/path?token=token-value"');
    expect(sanitized).contains(
      '"requestEndpoint":"GET https://example.com/path?password=password-value"'
    );
    expect(sanitized).contains('"privateKey":"private-key"');
    expect(sanitized).contains('"displayName":"visible"');
    expect(value.response.url).equals("https://example.com/path?token=token-value");
  });

  it("should not require callers to mutate stored error or request endpoint values", () => {
    const endpoint = "GET https://example.com/path?token=token-value";
    const sanitized = sanitizeSensitiveData(endpoint);

    expect(endpoint).equals("GET https://example.com/path?token=token-value");
    expect(sanitized).equals(endpoint);
  });
});
