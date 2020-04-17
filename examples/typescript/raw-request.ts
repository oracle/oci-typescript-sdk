import { DefaultRequestSigner, HttpRequest } from "oci-common";
import { provider } from "./authentication";
import * as promise from "es6-promise";
import "isomorphic-fetch";
promise.polyfill();

const userID = "Add User OCID here";
(async () => {
  // 1. Create Request Signing instance
  const signer = new DefaultRequestSigner(provider);

  // 2. Create HttpRequest to be signed
  const httpRequest: HttpRequest = {
    uri: `https://identity.us-phoenix-1.oraclecloud.com/20160918/users/${userID}`,
    headers: new Headers(),
    method: "GET"
  };

  // 3. sign request
  signer.signHttpRequest(httpRequest);

  // 4. Make the call
  const response = await fetch(
    new Request(httpRequest.uri, {
      method: httpRequest.method,
      headers: httpRequest.headers,
      body: httpRequest.body
    })
  );
  // 5. Print response
  console.log(await response.json());
})();
