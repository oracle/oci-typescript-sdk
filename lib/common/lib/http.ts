/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as promise from "es6-promise";
import "isomorphic-fetch";
import { RequestSigner } from "./signer";
import { HttpRequest } from "./http-request";
import { getSignerAndReqBody } from "./helper";
const Breaker = require("opossum");

promise.polyfill();

export interface HttpClient {
  send(req: HttpRequest, forceExcludeBody?: boolean): Promise<Response>;
}

export class FetchHttpClient implements HttpClient {
  private circuitBreaker = (null as unknown) as typeof Breaker;
  constructor(private readonly signer: RequestSigner | null, circuitBreaker?: typeof Breaker) {
    if (circuitBreaker) {
      this.circuitBreaker = circuitBreaker;
    }
  }

  public async send(req: HttpRequest, forceExcludeBody: boolean = false): Promise<Response> {
    // Get Request body
    const body = getSignerAndReqBody(req.body, forceExcludeBody);
    // Sign Request
    if (this.signer) {
      await this.signer.signHttpRequest(
        {
          method: req.method,
          headers: req.headers,
          uri: req.uri,
          body: body.signerBody
        },
        forceExcludeBody
      );
    }
    const request = new Request(req.uri, {
      method: req.method,
      headers: req.headers,
      body: body.requestBody
    });

    if (this.circuitBreaker) {
      return this.circuitBreaker
        .fire(request)
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
      return fetch(
        new Request(req.uri, {
          method: req.method,
          headers: req.headers,
          body: body.requestBody
        })
      );
    }
  }
}
