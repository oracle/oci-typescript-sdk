const common = require("oci-common");
const promise = require("es6-promise");
require("isomorphic-fetch");
promise.polyfill();

const configurationFilePath = "~/.oci/config";
const configProfile = "DEFAULT";

const provider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  configProfile
);

const userID = "<INSERT_SAMPLE_USER_OCID_HERE>";
(async () => {
  // 1. Create Request Signing instance
  const signer = new common.DefaultRequestSigner(provider);

  // 2. Create HttpRequest to be signed
  const httpRequest = {
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
