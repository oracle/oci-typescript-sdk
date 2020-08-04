/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { Range } from "./range";
import { HttpRequest } from "./http-request";
import { addAdditionalHeaders, formatDateToRFC3339 } from "./helper";

interface Params {
  [key: string]: string | Date | Range | string[] | number | number[] | boolean | undefined;
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

interface RequestParams {
  readonly baseEndpoint: string;
  readonly path: string;
  readonly defaultHeaders: Params;
  readonly method: Method;
  readonly bodyContent?: any;
  readonly pathParams?: Params;
  readonly headerParams?: Params;
  readonly queryParams?: Params;
  readonly formParam?: Params;
}

/*
 * Composes and Signs an SDKRequest
 * @param RequestParams to create a request
 */
export async function composeRequest(params: RequestParams): Promise<HttpRequest> {
  const headers = computeHeaders(params.defaultHeaders, params.headerParams);
  const uri = computeUri(params);
  const body = params.bodyContent;

  return {
    method: params.method,
    headers: headers,
    uri: uri,
    body: body
  };
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

function computeHeaders(defaultHeaders: Params, headerParams?: Params): Headers {
  const headers = new Headers();

  for (const [key, value] of Object.entries(defaultHeaders)) {
    headers.append(key, String(value));
  }

  if (headerParams) {
    for (const [key, value] of Object.entries(headerParams)) {
      if (value) {
        headers.append(key, String(value));
      }
    }
  }
  addAdditionalHeaders(headers);
  return headers;
}

function stringify(queryParams?: Params): string {
  let qs = "";
  if (queryParams) {
    qs = Object.keys(queryParams)
      .map(function(key) {
        let value = queryParams[key];
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
