import common = require("oci-common");
import identity = require("oci-identity");
const configurationFilePath = "~/.oci/config";
const configProfile = "DEFAULT";

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  configProfile
);

//Register the new Realm
const newRealm = common.Realm.register("ocx", "sample-realm.com");
//Register the region with this new realm.
const newRegion = common.Region.register("us-ocx-1", newRealm);

// you can create region with existting realm too
// newRgion  = common.Region.register("us-ocx-1", common.Realm.US_PHOENIX_1);

const compartmentId = "Sample-compartment";
const identityClient = new identity.IdentityClient({ authenticationDetailsProvider: provider });
identityClient.region = newRegion;
(async () => {
  const response = await listUsers(compartmentId);
  console.log("List User response " + response);
})();

async function listUsers(compartmentId: string): Promise<identity.responses.ListUsersResponse> {
  const request: identity.requests.ListUsersRequest = { compartmentId: compartmentId };
  const response = await identityClient.listUsers(request);
  return response;
}
