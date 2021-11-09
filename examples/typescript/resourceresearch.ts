/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import { ResourceSearchClient } from "oci-resourcesearch";
import * as resourceSearch from "oci-resourcesearch";

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();
let searchClient: ResourceSearchClient;

async function resourceType() {
  console.log(`
    \n
    Resources and their fields
    ==========================
  `);

  const response = await searchClient.listResourceTypes({});
  for (let i = 0; i < response.items.length; i++) {
    console.log(response.items[i].name);
    for (let j = 0; j < response.items[i].fields.length; j++) {
      console.log(`\t ${response.items[i].fields[j].fieldName}`);
    }
  }
}

async function fieldsInInstanceResource() {
  // A more detailed look at the freeformTags field in the Instance resource
  console.log(`
    \n
    Instance resource, freeformTags fields
    ======================================
  `);
  const response = await searchClient.listResourceTypes({});
  // console.log("my response: ", response);
  for (let i = 0; i < response.items.length; i++) {
    if (response.items[i].name === "Instance") {
      for (let j = 0; j < response.items[i].fields.length; j++) {
        console.log(response.items[i].fields[j]);
      }
    }
  }
}

async function fieldNamesInInstanceResource() {
  // The details for a single resource type can be retrieved without
  // retrieving all the resources.
  console.log(`
    \n
    Get a single resource type (Instance) from Search service
    =========================================================
  `);
  const getResourceTypeRequest: resourceSearch.requests.GetResourceTypeRequest = {
    name: "Instance"
  };
  const instance = (await searchClient.getResourceType(getResourceTypeRequest)).resourceType;
  const fields = instance.fields.map(field => {
    return field.fieldName;
  });
  console.log(fields);
}

async function activeUsers() {
  console.log(`
    \n
    Get users which are active, using StructuredSearchDetails
    =========================================================
  `);
  const structuredSearch: resourceSearch.models.StructuredSearchDetails = {
    query: "query user resources where inactiveStatus = 0",
    type: "Structured",
    matchingContextType: resourceSearch.models.SearchDetails.MatchingContextType.None
  };

  const structuredSearchRequest: resourceSearch.requests.SearchResourcesRequest = {
    searchDetails: structuredSearch
  };
  const users = await searchClient.searchResources(structuredSearchRequest);
  if (users.resourceSummaryCollection && users.resourceSummaryCollection.items) {
    users.resourceSummaryCollection.items.forEach(user => {
      console.log(user.displayName);
    });
  }
}

async function searchWithFreeText() {
  // Get all resources whose lifecycleState is AVAILABLE
  console.log("Get resources which are available, using FreeTextSearchDetails");
  console.log("==============================================================");

  const freeTextSearch: resourceSearch.models.FreeTextSearchDetails = {
    text: "lifecycleState as AVAILABLE",
    type: "FreeText",
    matchingContextType: resourceSearch.models.SearchDetails.MatchingContextType.Highlights
  };

  const SearchResourcesRequest: resourceSearch.requests.SearchResourcesRequest = {
    searchDetails: freeTextSearch
  };

  const response = await searchClient.searchResources(SearchResourcesRequest);

  for (let i = 0; i < response.resourceSummaryCollection.items!.length; i++) {
    const { resourceType, displayName } = response.resourceSummaryCollection.items![i];
    console.log(`Resource type: ${resourceType}, Resource name: ${displayName}`);
  }
}

async function userByFreeformTag(tag: string) {
  console.log(`
    Get users based on having a freeformTag
    =======================================
  `);

  const structuredSearch: resourceSearch.models.StructuredSearchDetails = {
    query: `query user resources where freeformTags.key = '${tag}'`,
    type: "Structured",
    matchingContextType: resourceSearch.models.SearchDetails.MatchingContextType.None
  };

  const structuredSearchRequest: resourceSearch.requests.SearchResourcesRequest = {
    searchDetails: structuredSearch
  };
  const users = await searchClient.searchResources(structuredSearchRequest);
  if (users.resourceSummaryCollection && users.resourceSummaryCollection.items) {
    for (let i = 0; i < users.resourceSummaryCollection.items.length; i++) {
      console.log(users.resourceSummaryCollection.items[i]);
    }
  }
}

async function usersByFreeformTagAndValue(tag: string, value: string) {
  console.log(`
    Get users based on having a freeformTag which matches a value
    =============================================================
  `);

  const structuredSearch: resourceSearch.models.StructuredSearchDetails = {
    query: `query user resources where (freeformTags.key = '${tag}' && freeformTags.value = '${value}')`,
    type: "Structured",
    matchingContextType: resourceSearch.models.SearchDetails.MatchingContextType.None
  };

  const structuredSearchRequest: resourceSearch.requests.SearchResourcesRequest = {
    searchDetails: structuredSearch
  };

  const users = await searchClient.searchResources(structuredSearchRequest);

  if (users.resourceSummaryCollection && users.resourceSummaryCollection.items) {
    for (let i = 0; i < users.resourceSummaryCollection.items.length; i++) {
      console.log(users.resourceSummaryCollection.items[i]);
    }
  }
}

(async () => {
  searchClient = new ResourceSearchClient({
    authenticationDetailsProvider: provider
  });
  await resourceType();
  await fieldsInInstanceResource();
  await fieldNamesInInstanceResource();
  await activeUsers();
  await searchWithFreeText();

  // These next examples need to be customized to your situation.
  // Let's assume you added a freeform tag "role" to some of your users and
  // one of the values is "developer".  Then you could replace the
  // <your_tag_here> with role and <your_value_here> with developer.
  // These examples will then retrieve every user that had the role freeform tag
  // and the role freeform tag where the value is set to developer.
  // userByFreeformTag("<your_tag_here>")

  await userByFreeformTag("<your_tag_here>");
  await usersByFreeformTagAndValue("<your_tag_here>", "<your_value_here>");
})();
