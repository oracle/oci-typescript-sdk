const common = require("oci-common");
const identity = require("oci-identity");
const ConfigFileReader = require("../../target/lib/common/lib/config-file-reader.js");

const configurationFilePath = "~/.oci/config";
const configProfile = "DEFAULT";

const provider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  configProfile
);

const config = ConfigFileReader.ConfigFileReader.parseDefault(null);
const profile = config.accumulator.configurationsByProfile.get("DEFAULT");
const tenancyId = {
  tenancyId: profile.get("tenancy") || ""
};

(async () => {
  const identityClient = await new identity.IdentityClient({
    authenticationDetailsProvider: provider
  });
  const regions = await identityClient.listRegionSubscriptions(tenancyId);
  for (let i = 0; i < regions.items.length; i++) {
    if (regions.items[i].isHomeRegion) {
      identityClient.regionId = regions.items[i].regionName;
    }
  }

  // Create a new user
  const userName = "testUser";

  console.log(`Creating a new user ${userName} in compartment ${profile.get("tenancy")}`);

  const userDetails = {
    compartmentId: profile.get("tenancy") || "",
    name: userName,
    description: "Created by a TypeScript SDK example"
  };

  const userReq = {
    createUserDetails: userDetails
  };
  const user = await identityClient.createUser(userReq);
  console.log("user: ", user);

  // Create a new group
  const groupName = "testGroup";
  console.log(`Creating a new group ${groupName} in compartment ${profile.get("tenancy")}`);
  const groupDetails = {
    compartmentId: profile.get("tenancy") || "",
    name: groupName,
    description: "Created by a TypeScript SDK example"
  };

  const groupReq = {
    createGroupDetails: groupDetails
  };

  const group = await identityClient.createGroup(groupReq);
  console.log("group: ", group);

  // Adding new user to the new group
  console.log("Adding new user to the new group");
  const memberDetails = {
    userId: user.user.id,
    groupId: group.group.id
  };

  const memberDetailsReq = {
    addUserToGroupDetails: memberDetails
  };
  const membership = await identityClient.addUserToGroup(memberDetailsReq);
  console.log("membership: ", membership);

  // Clean up the resource
  console.log(` Cleaning up resources. Removing ${userName} from ${groupName}`);
  const removeUserFromMembership = {
    userGroupMembershipId: membership.userGroupMembership.id
  };
  await identityClient.removeUserFromGroup(removeUserFromMembership);

  console.log(`Deleting user ${userName}`);
  const deleteUserReq = {
    userId: user.user.id
  };
  await identityClient.deleteUser(deleteUserReq);

  console.log(`Deleting group ${groupName}`);
  const deleteGroupReq = {
    groupId: group.group.id
  };
  await identityClient.deleteGroup(deleteGroupReq);
  console.log("Finished cleaning all resources");
})();
