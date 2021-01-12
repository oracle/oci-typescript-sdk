/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/** 
  * 
  *  This script provides an example on how to use tagging in the SDK for TypeScript to manage tags and tag namespaces, 
  as well as how to apply freeform and defined tags to a resource.
 */

import * as identity from "oci-identity";
import core = require("oci-core");
import common = require("oci-common");

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();

(async () => {
  const compartmentId = provider.getTenantId();
  const identityClient = new identity.IdentityClient({ authenticationDetailsProvider: provider });

  // Create a namespace
  const namespace: identity.models.CreateTagNamespaceDetails = {
    compartmentId: compartmentId,
    name: `typeScriptExample_namespace${Math.floor(Math.random() * Math.floor(1000000))}`,
    description: "SDK for TypeScript example tag namespace"
  };
  const namespaceReq: identity.requests.CreateTagNamespaceRequest = {
    createTagNamespaceDetails: namespace
  };
  const createTagNamespace = await identityClient.createTagNamespace(namespaceReq);
  const tagNamespaceId = createTagNamespace.tagNamespace.id;
  console.log("Created tag namespace: ", createTagNamespace.tagNamespace.id);

  // Create a tag one
  const tagOneName: identity.models.CreateTagDetails = {
    name: "typeScriptExample_tagOne",
    description: "SDK for TypeScript example tag one"
  };

  const createTagOneReq: identity.requests.CreateTagRequest = {
    tagNamespaceId: tagNamespaceId,
    createTagDetails: tagOneName
  };
  const createTagOneRes = await identityClient.createTag(createTagOneReq);
  console.log("Created Tag: ", createTagOneRes.tag);

  // Create another tag
  const tagTwoName: identity.models.CreateTagDetails = {
    name: "typeScriptExample_tagTwo",
    description: "SDK for TypeScript example tag two"
  };

  const createTagTwoReq: identity.requests.CreateTagRequest = {
    tagNamespaceId: tagNamespaceId,
    createTagDetails: tagTwoName
  };

  const createTagTwoRes = await identityClient.createTag(createTagTwoReq);
  console.log("Created Tag: ", createTagTwoRes.tag);

  // We can retire a tag by using the update tag operation
  const updateTagOneReq: identity.requests.UpdateTagRequest = {
    tagNamespaceId: tagNamespaceId,
    tagName: tagOneName.name,
    updateTagDetails: { isRetired: true }
  };
  let updateTagOneRes = await identityClient.updateTag(updateTagOneReq);
  console.log("Updated tag (retired): ", updateTagOneRes.tag);

  //  We can retrieve individual tags and namespaces
  const getTagNamespaceReq: identity.requests.GetTagNamespaceRequest = {
    tagNamespaceId: tagNamespaceId
  };
  const getTagOneReq: identity.requests.GetTagRequest = {
    tagNamespaceId: tagNamespaceId,
    tagName: tagOneName.name
  };
  const getTagTwoReq: identity.requests.GetTagRequest = {
    tagNamespaceId: tagNamespaceId,
    tagName: tagTwoName.name
  };

  const tagNamespace = (await identityClient.getTagNamespace(getTagNamespaceReq)).tagNamespace;
  const tagOne = (await identityClient.getTag(getTagOneReq)).tag;
  const tagTwo = (await identityClient.getTag(getTagTwoReq)).tag;

  //  We can list tags and namespaces. These operations are paginated and take a
  //  "page" parameter to allow you to get the next batch of items from the server
  const listTagNamespacesReq: identity.requests.ListTagNamespacesRequest = {
    compartmentId: compartmentId
  };
  const listTagsReq: identity.requests.ListTagsRequest = {
    tagNamespaceId: tagNamespaceId
  };
  const tagNamespaces = (await identityClient.listTagNamespaces(listTagNamespacesReq)).items;
  const tagsInNamespaces = await (await identityClient.listTags(listTagsReq)).items;

  // We can also reactivate a tag using the update tag operation
  updateTagOneReq["updateTagDetails"] = { "isRetired": false };
  updateTagOneRes = await identityClient.updateTag(updateTagOneReq);
  console.log("Updated tag (reactivated): ", updateTagOneRes.tag);

  const virtualNetwork = new core.VirtualNetworkClient({ authenticationDetailsProvider: provider });
  /*
    We can assign freeform and defined tags at creation time. Freeform tags are a dictionary of string-to-string,
    where the key is the tag name and the value is the tag value.

    Defined tags are a dictionary where the key is the tag namespace (string) and the value is another dictionary. In
    this second dictionary, the key is the tag name (string) and the value is the tag value. The tag names have to
    correspond to the name of a tag within the specified namespace (and the namespace must exist).

    Resources where we can create/update tags will have the freeform_tags and defined_tags attributes. Consult the API
    documentation to see what these are (https://oracle-cloud-infrastructure-python-sdk.readthedocs.io/en/latest/api/landing.html)  
  */
  let numOfTries = 0;
  let vcnId;
  while (true) {
    try {
      const createVCNDetails: core.models.CreateVcnDetails = {
        cidrBlock: "10.0.0.0/16",
        compartmentId: compartmentId,
        displayName: "SDK for TypeScript tagging example VCN",
        dnsLabel: `vcn${Math.floor(Math.random() * Math.floor(1000000))}`,
        freeformTags: { "free": "form", "another": "item" },
        definedTags: {
          [tagNamespace.name]: { [tagOneName.name]: "hello", [tagTwoName.name]: "world " }
        }
      };
      const createVCNRequest: core.requests.CreateVcnRequest = {
        createVcnDetails: createVCNDetails
      };
      const createVCNResponse = virtualNetwork.createVcn(createVCNRequest);
      vcnId = (await createVCNResponse).vcn.id;

      console.log("Created VCN with tags: ", createVCNResponse);
      break;
    } catch (err) {
      if (err.statusCode === 400) {
        console.log("Retrying on 400: ", err);
        numOfTries += 1;
        if (numOfTries >= 3) {
          throw "Reached max number of retries, something else is going on.";
        } else {
          await new Promise(r => setTimeout(r, 5000));
        }
      } else {
        throw "Error";
      }
    }
  }

  // We can also update tags on a resource. Note that this is a total replacement for any previously set freeform or defined tags.
  // Resources where we can create/update tags will have the freeform_tags and defined_tags attributes. Consult the API
  // documentation to see what these are (https://oracle-cloud-infrastructure-python-sdk.readthedocs.io/en/latest/api/landing.html)
  let updateVcnDetails: core.models.UpdateVcnDetails = {
    freeformTags: { total: "replace" },
    definedTags: { [tagNamespace.name]: { [tagTwoName.name]: "also replaced" } }
  };

  let updateVCNReq: core.requests.UpdateVcnRequest = {
    vcnId: vcnId,
    updateVcnDetails: updateVcnDetails
  };
  let updateVCNRes = await virtualNetwork.updateVcn(updateVCNReq);
  console.log("Updated tags on VCN: ", updateVCNRes.vcn);

  //  We can also remove tags on a resource by passing in an empty object for those tagging parameters
  updateVcnDetails = { freeformTags: {}, definedTags: {} };
  updateVCNReq = { vcnId: vcnId, updateVcnDetails: updateVcnDetails };
  updateVCNRes = await virtualNetwork.updateVcn(updateVCNReq);
  console.log("Removed tags on VCN: ", updateVCNRes.vcn);

  // Previously we saw retiring a tag. We can also retire a tag namespace - this will also retire any tags in that namespace
  let updateTagNamespaceDetails: identity.models.UpdateTagNamespaceDetails = {
    isRetired: true
  };
  let updateTagNameSpaceReq: identity.requests.UpdateTagNamespaceRequest = {
    tagNamespaceId: tagNamespaceId,
    updateTagNamespaceDetails: updateTagNamespaceDetails
  };
  let updateTagNamespaceRes = await identityClient.updateTagNamespace(updateTagNameSpaceReq);
  console.log("Updated tag namespace (retired): ", updateTagNamespaceRes.tagNamespace);
  console.log("Tags in namespace: ", (await identityClient.listTags(listTagsReq)).items);
  //  We can also reactivate a namespace. Note that this doesn't reactivate the tags in that namespace - those tags will need
  //  to be reactivated individually
  updateTagNamespaceDetails = { isRetired: false };
  updateTagNameSpaceReq = {
    tagNamespaceId: tagNamespaceId,
    updateTagNamespaceDetails: updateTagNamespaceDetails
  };
  updateTagNamespaceRes = await identityClient.updateTagNamespace(updateTagNameSpaceReq);
  console.log("Updated tag namespace (reactivated): ", updateTagNamespaceRes.tagNamespace);
  console.log("Tags in namespace: ", (await identityClient.listTags(listTagsReq)).items);

  // Finished Example, set isRetired = true
  updateTagNamespaceDetails = { isRetired: false };
  updateTagNameSpaceReq = {
    tagNamespaceId: tagNamespaceId,
    updateTagNamespaceDetails: updateTagNamespaceDetails
  };
  identityClient.updateTagNamespace(updateTagNameSpaceReq);
})();
