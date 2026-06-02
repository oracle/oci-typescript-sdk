/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 * An interface defines the logger related APIs.
 */
export interface Logger {
  level: string;

  debug(message?: any, ...optionalParams: any[]): void;
  info(message?: any, ...optionalParams: any[]): void;
  warn(message?: any, ...optionalParams: any[]): void;
  error(message?: any, ...optionalParams: any[]): void;
  trace(message?: any, ...optionalParams: any[]): void;
}

export namespace LOG {
  var _logger: Logger;

  export declare var logger: Logger;
  Object.defineProperty(LOG, "logger", {
    get: function() {
      return _logger;
    },
    set: function(log: Logger) {
      _logger = log;
    }
  });
}

const sensitiveExactHeaderNames = new Set([
  "authorization",
  "proxy-authorization",
  "opc-obo-token",
  "x-api-key",
  "cookie",
  "set-cookie",
  "security-context",
  "password",
  "passphrase"
]);

const sensitiveCredentialHeaderSuffixes = [
  "access-token",
  "refresh-token",
  "id-token",
  "security-token",
  "session-token",
  "delegation-token",
  "client-secret",
  "private-key"
];

const headerLinePattern = /^(\s*)([^:\r\n]+)(\s*:\s*)(.*)$/gim;
const jsonStringArrayFieldPattern = /"((?:[^"\\]|\\.)+)"(\s*:\s*)\[((?:"(?:[^"\\]|\\.)*"\s*,\s*)*"(?:[^"\\]|\\.)*"\s*)\]/g;
const jsonStringFieldPattern = /"((?:[^"\\]|\\.)+)"(\s*:\s*)"((?:[^"\\]|\\.)*)"/g;
const jsonStringValuePattern = /"((?:[^"\\]|\\.)*)"/g;

/**
 * Normalizes a header name before matching it against sensitive header rules.
 */
function normalizeHeaderName(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[-_]+/g, "-");
}

/**
 * Returns true when a header name matches the sensitive header rules.
 */
function isSensitiveHeaderName(name: string): boolean {
  const normalized = normalizeHeaderName(name);

  // Check against set of exact header names
  if (sensitiveExactHeaderNames.has(normalized)) return true;
  // Check against regex patterns
  if (/^x-token(?:-|$).*/.test(normalized)) return true;
  if (/^x-authorization(?:-|$).*/.test(normalized)) return true;
  if (/^x-key-.*/.test(normalized)) return true;

  // Check if header matches or ends with suffix
  return sensitiveCredentialHeaderSuffixes.some(
    suffix => normalized === suffix || normalized.endsWith(`-${suffix}`)
  );
}

/**
 * Redacts sensitive values from line-oriented header text.
 */
function redactSensitiveHeaderLines(value: string): string {
  return value.replace(headerLinePattern, (match, leading, name, separator) =>
    isSensitiveHeaderName(name) ? `${leading}${name}${separator}<redacted>` : match
  );
}

/**
 * Redacts sensitive header values from serialized JSON logger text.
 */
function redactSensitiveJsonStringFields(value: string): string {
  // Example: `"set-cookie":["a","b"]` -> `"set-cookie":["<redacted>","<redacted>"]`.
  const redactedArrays = value.replace(
    jsonStringArrayFieldPattern,
    (match, name, separator, arrayValues) =>
      isSensitiveHeaderName(name)
        ? `"${name}"${separator}[${arrayValues.replace(jsonStringValuePattern, '"<redacted>"')}]`
        : match
  );

  // Example:  `"authorization":"secret"` -> `"authorization":"<redacted>"`.
  return redactedArrays.replace(jsonStringFieldPattern, (match, name, separator) =>
    isSensitiveHeaderName(name) ? `"${name}"${separator}"<redacted>"` : match
  );
}

/**
 * Redacts known sensitive values from request/response text before it is logged.
 */
export function sanitizeSensitiveData(value: string): string {
  return redactSensitiveJsonStringFields(redactSensitiveHeaderLines(value));
}

/**
 * Builds a sanitized string representation of arbitrary logger input.
 */
export function sanitizeSensitiveDataForLogging(value: any): string {
  if (typeof value === "string") return sanitizeSensitiveData(value);
  if (value instanceof Error) return sanitizeSensitiveData(value.stack || value.message);
  try {
    const serialized = JSON.stringify(value);
    return sanitizeSensitiveData(serialized === undefined ? String(value) : serialized);
  } catch (_) {
    return sanitizeSensitiveData(String(value));
  }
}
