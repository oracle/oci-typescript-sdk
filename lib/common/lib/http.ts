/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as promise from "es6-promise";
import "isomorphic-fetch";
import { RequestSigner } from "./signer";
import { HttpRequest } from "./http-request";
import { getSignerAndReqBody } from "./helper";

promise.polyfill();

export interface HttpClient {
  send(req: HttpRequest, forceExcludeBody?: boolean): Promise<Response>;
}

export class FetchHttpClient implements HttpClient {
  constructor(private readonly signer: RequestSigner | null) {}

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
    // Send Request
    return fetch(
      new Request(req.uri, {
        method: req.method,
        headers: req.headers,
        body: body.requestBody
      })
    );
  }
}
