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
