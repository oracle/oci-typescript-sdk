/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as promise from "es6-promise";
import "isomorphic-fetch";
import { RequestSigner, validateRequestUri } from "./signer";
import { HttpRequest } from "./http-request";
import { getSignerAndReqBody } from "./helper";
import { getFetchRequestUri, fetchWithSelectedTransport } from "./http-options";
const Breaker = require("opossum");
promise.polyfill();

export interface HttpClient {
  send(
    req: HttpRequest,
    forceExcludeBody?: boolean,
    targetService?: string,
    operationName?: string,
    timestamp?: string,
    endpoint?: string,
    apiReferenceLink?: string
  ): Promise<Response>;
}

export class FetchHttpClient implements HttpClient {
  private circuitBreaker = (null as unknown) as typeof Breaker;
  private httpOptions: { [key: string]: any } | undefined = undefined;
  private bodyDuplexMode: any;
  private static BODY_DUPLEX_KEY: string = "duplex";
  private static DEFAULT_DUPLEX_VALUE: string = "half";

  constructor(
    private readonly signer: RequestSigner | null,
    circuitBreaker?: typeof Breaker,
    httpOptions?: { [key: string]: any } | undefined,
    bodyDuplexMode?: any
  ) {
    if (circuitBreaker) {
      this.circuitBreaker = circuitBreaker;
    }

    if (httpOptions) this.httpOptions = httpOptions;

    if (bodyDuplexMode) this.bodyDuplexMode = bodyDuplexMode;
  }

  public async send(
    req: HttpRequest,
    forceExcludeBody: boolean = false,
    targetService: string = "",
    operationName: string = "",
    timestamp: string = new Date().toISOString(),
    endpoint: string = "",
    apiReferenceLink: string = ""
  ): Promise<Response> {
    // Validate the original request URI before normalization so signing continues to
    // reject malformed URIs.
    if (this.signer) {
      validateRequestUri(req.uri);
    }
    const requestUri = getFetchRequestUri(req.uri, this.httpOptions);
    // Get Request body
    const body = getSignerAndReqBody(req.body, forceExcludeBody);
    // Sign Request
    if (this.signer) {
      await this.signer.signHttpRequest(
        {
          method: req.method,
          headers: req.headers,
          uri: requestUri,
          body: body.signerBody
        },
        forceExcludeBody
      );
    }

    const reqInit: any = {
      method: req.method,
      headers: req.headers,
      body: body.requestBody
    };

    if (body.requestBody) {
      reqInit[FetchHttpClient.BODY_DUPLEX_KEY] = this.bodyDuplexMode
        ? this.bodyDuplexMode
        : FetchHttpClient.DEFAULT_DUPLEX_VALUE;
    }

    const requestOptions: any = this.httpOptions ? { ...reqInit, ...this.httpOptions } : reqInit;
    // Send Request
    // Need to convert to type RequestInit for Fetch() type compatibility
    let options: RequestInit = (requestOptions as unknown) as RequestInit;

    if (this.circuitBreaker) {
      return this.circuitBreaker
        .fire(
          requestUri,
          options,
          targetService,
          operationName,
          timestamp,
          endpoint,
          apiReferenceLink
        )
        .then((e: any) => {
          return e.response ? e.response : e;
        })
        .catch((e: any) => {
          if (e.response) {
            // If error contains response field, it is an actual server error, return it.
            return e.response;
          } else {
            // These are client side error. Throw exception.
            throw e;
          }
        });
    } else {
      return fetchWithSelectedTransport(requestUri, options);
    }
  }
}
