const identity = require("oci-identity");
const paginators = require("../../target/lib/common/lib/paginators.js");
const ConfigFileReader = require("../../target/lib/common/lib/config-file-reader.js");
const common = require("oci-common");

const configurationFilePath = "~/.oci/config";
const configProfile = "DEFAULT";

const provider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  configProfile
);

const config = ConfigFileReader.ConfigFileReader.parseDefault(null);
const profile = config.accumulator.configurationsByProfile.get("DEFAULT");
const compartmentId = profile.get("tenancy") || "";

(async () => {
  const identityClient = new identity.IdentityClient({
    authenticationDetailsProvider: provider
  });
  let listUserReq;
  listUserReq = {
    compartmentId: compartmentId
  };
  /*
    This demonstrates the eager loading of all possible results.
    This will return an oci response whose data attribute contains
    a list of all results.
  */

  console.log("--- Eager load all results ---");
  let eagerLoad = await paginators.paginatedRecordsWithLimit(listUserReq, req =>
    identityClient.listUsers(listUserReq)
  );
  eagerLoad.forEach(e => {
    console.log(`User: ${e.value.name}`);
  });
  console.log("Total Records: ", eagerLoad.length);
  /*
    This demonstrates the eager loading of all results up to a given limit. Note that we have to specify a
    record limit (10)
  */
  console.log("--- Eager load up to limit ---");
  listUserReq = {
    compartmentId: compartmentId
  };
  let eagerLoadLimit = await paginators.paginatedRecordsWithLimit(
    listUserReq,
    req => identityClient.listUsers(listUserReq),
    10
  );

  eagerLoadLimit.forEach(e => {
    console.log(`User: ${e.value.name}`);
  });
  console.log("Total Records ", eagerLoadLimit.length);

  // /*
  //   This demonstrates lazily loading, via a generator, all results. Here we iterate over
  //   the models.User objects
  // */

  console.log("--- Lazy load all results - yield values ---");
  listUserReq = {
    compartmentId: compartmentId,
    limit: 3
  };
  let lazyLoadAllValues = await paginators.paginatedRecordsWithLimit(listUserReq, req =>
    identityClient.listUsers(listUserReq)
  );
  for (let i = 0; i < lazyLoadAllValues.length; i++) {
    let record = lazyLoadAllValues[i];
    console.log(`User: ${record.value.name}`);
  }
  console.log(`Total Results: `, lazyLoadAllValues.length);

  // Here we are using lazy loading to get all raw responses. We specified a pageSize of 3.
  // Each fetch, it will get at most 3 records.
  console.log("--- Lazy load all results - yield raw responses ---");
  listUserReq = {
    compartmentId: compartmentId,
    limit: 3
  };
  let countRawResponse = 0;
  const lazyLoadAllResponses = await paginators.paginatedResponsesWithLimit(listUserReq, req =>
    identityClient.listUsers(listUserReq)
  );
  for (let i = 0; i < lazyLoadAllResponses.length; i++) {
    let record = lazyLoadAllResponses[i];
    record.items.forEach(item => {
      countRawResponse++;
      console.log(`Iteration: ${i}, User: ${item.name}`);
    });
  }
  console.log(`Total Results: `, countRawResponse);

  /*
    The below demostrates lazily loading, via a generator, results up to a certain limit
    NOTE: lazy loading with limit on total records currently does not work.
    It will still load all records.
  */
  console.log("--- Lazy load up to limit - yield values ---");
  listUserReq = {
    compartmentId: compartmentId,
    limit: 3
  };
  const lazyLoadValuesLimit = await paginators.paginatedRecordsWithLimit(
    listUserReq,
    req => identityClient.listUsers(req),
    7
  );
  for (let i = 0; i < lazyLoadValuesLimit.length; i++) {
    let record = lazyLoadValuesLimit[i];
    console.log(`User: ${record.value.name}`);
  }
  console.log(`Total Results: `, lazyLoadValuesLimit.length);

  console.log("--- Lazy load up to limit - yield raw responses ---");

  listUserReq = {
    compartmentId: compartmentId,
    limit: 3
  };
  const lazyLoadResponsesLimit = await paginators.paginatedResponsesWithLimit(
    listUserReq,
    req => identityClient.listUsers(req),
    7
  );
  let rawResponse = 0;
  for (let i = 0; i < lazyLoadResponsesLimit.length; i++) {
    let record = lazyLoadResponsesLimit[i];
    record.items.forEach(item => {
      rawResponse++;
      console.log(`Iteration: ${i}, User: ${item.name}`);
    });
  }
  console.log("Total Results: ", rawResponse);
})();
