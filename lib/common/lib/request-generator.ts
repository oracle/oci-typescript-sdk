/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { Range } from "./range";
import { HttpRequest } from "./http-request";
import {
  addAdditionalHeaders,
  autoDetectContentLengthAndReadBody,
  formatDateToRFC3339
} from "./helper";
import { addRetryToken, OPC_RETRY_TOKEN_HEADER } from "./retry-token-header";

export interface Params {
  [key: string]:
    | string
    | Date
    | Range
    | string[]
    | number
    | number[]
    | boolean
    | boolean[]
    | undefined;
}
export type Method =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "TRACE"
  | "CONNECT";

export interface RequestParams {
  readonly baseEndpoint: string;
  readonly path: string;
  readonly defaultHeaders: Params;
  readonly method: Method;
  readonly bodyContent?: any;
  readonly pathParams?: Params;
  readonly headerParams?: Params;
  readonly queryParams?: Params;
  readonly formParam?: Params;
  readonly backupBinaryBody?: boolean;
}

/*
 * Composes and Signs an SDKRequest
 * @param RequestParams to create a request
 */
export async function composeRequest(params: RequestParams): Promise<HttpRequest> {
  const headers = computeHeaders(params);
  const uri = computeUri(params);
  let body = params.bodyContent;

  // If body exists, check if content-length exists and check if user wants to back up binary request body
  if (body) {
    const content = await autoDetectContentLengthAndReadBody(headers, params);
    body = content ? content : body;
  }

  if (body === "{}") {
    return {
      method: params.method,
      headers: headers,
      uri: uri
    };
  } else {
    return {
      method: params.method,
      headers: headers,
      uri: uri,
      body: body
    };
  }
}

function computeUri(params: RequestParams): string {
  const path = validateAndComputePath(params.path, params.pathParams);
  const queryString = stringify(params.queryParams);
  let uri = params.baseEndpoint + path;
  if (queryString) {
    uri = uri + "?" + queryString;
  }
  return uri;
}

function validateAndComputePath(path: string, pathParams?: Params): string {
  if (pathParams) {
    for (const [key, value] of Object.entries(pathParams)) {
      if (value || value === false || value === 0) {
        path = path.replace(key, encodeURIComponent(String(value)));
      } else {
        throw new Error(`Missing required path parameter for ${key}`);
      }
    }
  }
  return path;
}

function computeHeaders(params: RequestParams): Headers {
  const headers = new Headers();

  for (const [key, value] of Object.entries(params.defaultHeaders)) {
    headers.append(key, String(value));
  }

  if (params.headerParams) {
    for (const [key, value] of Object.entries(params.headerParams)) {
      if (value) {
        headers.append(key, String(value));
      }
    }
  }
  if (params.headerParams && OPC_RETRY_TOKEN_HEADER in params.headerParams) {
    addRetryToken(headers);
  }
  addAdditionalHeaders(headers, params);
  return headers;
}

function stringify(queryParams?: Params): string {
  let qs = "";
  if (queryParams) {
    qs = Object.keys(queryParams)
      .map(function(key) {
        let value = queryParams[key];
        if (Array.isArray(value)) {
          let formatter = encoderforArrayFormat();
          return (value as Array<any>).reduce(formatter(key), []).join("&");
        }
        // Format Date Object to RFC3339 timestamp string.
        if (Object.prototype.toString.call(value) === "[object Date]" && value instanceof Date) {
          return key + "=" + formatDateToRFC3339(value);
        } else if (value || value === false || value === 0) {
          return key + "=" + value;
        }
      })
      .filter(key => key !== undefined && key !== null)
      .join("&");
  }
  return qs;
}

function encoderforArrayFormat() {
  return (key: any) => (result: any, value: any) => {
    if (value === undefined || value === null || value === "") {
      return result;
    }

    return [...result, [key, "=", value].join("")];
  };
}
