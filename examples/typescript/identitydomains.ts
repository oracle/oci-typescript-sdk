import common = require("oci-common");
import { IdentityDomainsClient, models, requests, responses } from "oci-identitydomains";

/**
 * Pre-requisite: the target domain's endpoint URL.
 * It can be retreived via Console, CLI or API. Please find details on https://docs.oracle.com/en-us/iaas/Content/Identity/domains/to-view-details-of-an-identity-domain.htm
 */
const DOMAIN_ENDPOINT = "";
// Use default configuration
const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();
/* Or use personal configuration, more details on https://docs.oracle.com/en-us/iaas/Content/API/SDKDocs/typescriptsdkgettingstarted.htm#configuring
const configurationFilePath = "~/.oci/config";
const configProfile = "DEFAULT";
const config = common.ConfigFileReader.parseDefault(configProfile);
const profile = config.accumulator.configurationsByProfile.get(configProfile);
// The endpoint url can also be set as part of the configuration, for example:
const DOMAIN_ENDPOINT = profile?.get("domain_endpoint") || "";
const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  configProfile
);
*/

(async () => {
  const identityDomainsClient = new IdentityDomainsClient({
    authenticationDetailsProvider: provider
  });
  identityDomainsClient.endpoint = DOMAIN_ENDPOINT;

  //#region Manage Users
  console.log("****************** Get list of users (Paginated and sorted) ******************");

  let nextPageToken,
    page = 0;
  do {
    page++;
    const usersList: responses.ListUsersResponse = await identityDomainsClient.listUsers({
      sortBy: "userName",
      sortOrder: models.SortOrder.Descending,
      attributes: "userName",
      limit: 10,
      page: nextPageToken
    });

    console.log("Users list: page", page, JSON.stringify(usersList.users.resources));
    nextPageToken = usersList.opcNextPage;
  } while (!!nextPageToken);

  const testUserName = `testUserTypeScriptSDK-${Date.now().toString()}`;

  console.log("****************** Create user ******************");
  const reqBody: models.User = {
    name: { givenName: "test_new", familyName: "user_new" },
    schemas: ["urn:ietf:params:scim:schemas:core:2.0:User"],
    groups: [],
    userName: testUserName,
    emails: [
      { type: models.UserEmails.Type.Work, primary: true, value: "testUserTypeScriptSDK@email.com" }
    ],
    urnIetfParamsScimSchemasOracleIdcsExtensionUserUser: {
      isFederatedUser: false,
      status: models.ExtensionUserUser.Status.PendingVerification,
      provider: models.ExtensionUserUser.Provider.Idcs,
      creationMechanism: models.ExtensionUserUser.CreationMechanism.Samljit
    },
    urnIetfParamsScimSchemasOracleIdcsExtensionCapabilitiesUser: {
      canUseApiKeys: true,
      canUseAuthTokens: true
    },
    urnIetfParamsScimSchemasOracleIdcsExtensionOciTags: {
      freeformTags: [],
      definedTags: []
    },
    urnIetfParamsScimSchemasExtensionEnterprise2_0User: {
      /** provide existing user id or ocid to value field */
      // manager: {value: "d7227e2297dd48dc9d1249845e79f438"}
    }
  };
  const createUserReq: requests.CreateUserRequest = {
    user: reqBody,
    attributes: "name,userName,id",
    attributeSets: [models.AttributeSets.Default]
  };
  const user: responses.CreateUserResponse = await identityDomainsClient.createUser(createUserReq);
  console.log("User created: ", JSON.stringify(user));

  console.log("****************** Get user by id ******************");
  const getUserReq: requests.GetUserRequest = {
    userId: user.user.id || ""
  };
  const result = await identityDomainsClient.getUser(getUserReq);
  console.log("User got: ", result);

  console.log("****************** Replace user (PUT) ******************");
  const putReqBody: models.User = {
    name: { givenName: "test_new", familyName: "user_new" },
    schemas: ["urn:ietf:params:scim:schemas:core:2.0:User"],
    groups: [],
    idcsCreatedBy: { value: "", type: models.IdcsCreatedBy.Type.User },
    userName: testUserName,
    emails: [{ type: models.UserEmails.Type.Work, primary: true, value: "testuser@oracle.com" }],
    urnIetfParamsScimSchemasOracleIdcsExtensionUserUser: { isFederatedUser: false },
    urnIetfParamsScimSchemasOracleIdcsExtensionCapabilitiesUser: {
      canUseApiKeys: true,
      canUseAuthTokens: true
    }
  };
  const putUserReq: requests.PutUserRequest = {
    userId: user.user.id || "",
    user: putReqBody
  };
  const putUserDetails: responses.PutUserResponse = await identityDomainsClient.putUser(putUserReq);
  console.log("User replaced with PUT: ", putUserDetails);

  console.log("****************** Update user (PATCH) ******************");
  const patchReqBody: models.PatchOp = {
    operations: [
      // { path: "userType", value: "employee", op: models.Operations.Op.Add },
      { path: "description", value: "Test user for TypeScript SDK", op: models.Operations.Op.Add }
    ],
    schemas: ["urn:ietf:params:scim:api:messages:2.0:PatchOp"]
  };
  const patchUserReq: requests.PatchUserRequest = {
    userId: user.user.id || "",
    patchOp: patchReqBody
  };
  const patchUserDetails: responses.PatchUserResponse = await identityDomainsClient.patchUser(
    patchUserReq
  );
  console.log("User updated with PATCH: ", patchUserDetails);

  console.log("****************** Delete user ******************");
  const deleteUserReq: requests.DeleteUserRequest = {
    userId: user.user.id || ""
  };
  const res = await identityDomainsClient.deleteUser(deleteUserReq);
  console.log("User deleted", res);
  //#endregion Manage Users

  //#region Manage Dynamic groups
  console.log("****************** Create Dynamic Resource Group ******************");
  const dynamicGroup: models.DynamicResourceGroup = {
    displayName: "testsdkdynamicgroup",
    description: "description",
    matchingRule:
      "Any {Any {instance.id = 'ocid1.instance.oc1.iad..exampleuniqueid1', instance.compartment.id = 'ocid1.compartment.oc1..exampleuniqueid2'}}",
    schemas: ["urn:ietf:params:scim:schemas:oracle:idcs:DynamicResourceGroup"]
  };

  const postDynamicResourceGroupsRequest: requests.CreateDynamicResourceGroupRequest = {
    dynamicResourceGroup: dynamicGroup
  };
  const response: responses.CreateDynamicResourceGroupResponse = await identityDomainsClient.createDynamicResourceGroup(
    postDynamicResourceGroupsRequest
  );
  const createdDynamicGroup: models.DynamicResourceGroup = response.dynamicResourceGroup;
  console.log("Created Dynamic Resource Group: ", createdDynamicGroup);

  console.log("****************** Get Dynamic Resource Group by ID ******************");
  const getDynamicResourceGroupsIdRequest: requests.GetDynamicResourceGroupRequest = {
    dynamicResourceGroupId: createdDynamicGroup.id!
  };
  const getDynamicResourceGroupsIdResponse: responses.GetDynamicResourceGroupResponse = await identityDomainsClient.getDynamicResourceGroup(
    getDynamicResourceGroupsIdRequest
  );
  console.log(
    `Found Dynamic Resource Group by ID: \n displayName: ${getDynamicResourceGroupsIdResponse.dynamicResourceGroup.displayName} \n id: ${getDynamicResourceGroupsIdResponse.dynamicResourceGroup.id}`
  );

  console.log("****************** Update Dynamic Resource Group (PATCH) ******************");
  const operations: models.Operations[] = [
    {
      op: models.Operations.Op.Replace,
      path: "description",
      value: "updated description"
    }
  ];
  const patchBody: models.PatchOp = {
    schemas: ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
    operations: operations
  };
  const patchDynamicResourceGroupsIdRequest: requests.PatchDynamicResourceGroupRequest = {
    dynamicResourceGroupId: createdDynamicGroup.id!,
    patchOp: patchBody
  };
  const updatedDynamicGroupResponse: responses.PatchDynamicResourceGroupResponse = await identityDomainsClient.patchDynamicResourceGroup(
    patchDynamicResourceGroupsIdRequest
  );
  console.log("Updated Dynamic Resource Group: ", updatedDynamicGroupResponse.dynamicResourceGroup);

  console.log("****************** Update Dynamic Resource Group (PUT) ******************");
  const updatedDynamicGroup: models.DynamicResourceGroup = {
    displayName: createdDynamicGroup.displayName,
    description: "new description",
    matchingRule:
      "Any {Any {instance.id = 'ocid1.instance.oc1.iad..exampleuniqueid1', instance.compartment.id = 'ocid1.compartment.oc1..exampleuniqueid2'}}",
    schemas: createdDynamicGroup.schemas
  };
  const putDynamicResourceGroupsIdRequest: requests.PutDynamicResourceGroupRequest = {
    dynamicResourceGroupId: createdDynamicGroup.id!,
    dynamicResourceGroup: updatedDynamicGroup
  };
  console.log("putDynamicResourceGroupsIdRequest__________", putDynamicResourceGroupsIdRequest);
  const replacedDynamicGroupResponse = await identityDomainsClient.putDynamicResourceGroup(
    putDynamicResourceGroupsIdRequest
  );
  console.log(
    "Updated Dynamic Resource Group: ",
    replacedDynamicGroupResponse.dynamicResourceGroup
  );

  console.log("****************** Delete Dynamic Resource Group ******************");
  const deleteDynamicResourceGroupsIdRequest: requests.DeleteDynamicResourceGroupRequest = {
    dynamicResourceGroupId: createdDynamicGroup.id!
  };
  await identityDomainsClient.deleteDynamicResourceGroup(deleteDynamicResourceGroupsIdRequest);
  console.log(`Deleted dynamic group: ${createdDynamicGroup.displayName}`);

  identityDomainsClient.close();

  //#endregion Manage Dynamic groups
})();
