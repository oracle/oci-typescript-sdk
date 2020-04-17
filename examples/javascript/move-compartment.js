/*
  This script provides an example on how to move a compartment to a different compartment
  This script will:
     * create cp_source_TSSDK under tenancy
     * create cp_target_TSSDK under tenancy
     * move cp_source_TSSDK under cp_target_TSSDK
*/

const identity = require("oci-identity");
const common = require("oci-common");
const ConfigFileReader = require("../../target/lib/common/lib/config-file-reader.js");

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

  //  Create source compartment
  let createCompartmentDetails = {
    compartmentId: compartmentId,
    name: "cp_source_TSSDK1",
    "description": "compartment source"
  };

  let createCompartmentRequest = {
    createCompartmentDetails: createCompartmentDetails
  };

  let createCompartmentResponse = await identityClient.createCompartment(createCompartmentRequest);
  const sourceCompartmentId = createCompartmentResponse.compartment.id;
  console.log("Created source compartment: ", createCompartmentResponse.compartment);

  //  Create target compartment
  createCompartmentDetails = {
    compartmentId: compartmentId,
    name: "cp_target_TSSDK2",
    "description": "compartment target"
  };
  createCompartmentRequest = {
    createCompartmentDetails: createCompartmentDetails
  };
  createCompartmentResponse = await identityClient.createCompartment(createCompartmentRequest);
  const targetCompartmentId = createCompartmentResponse.compartment.id;
  console.log("Created target compartment: ", createCompartmentResponse.compartment);

  // Move Compartment
  const moveCompartmentDetails = {
    targetCompartmentId: targetCompartmentId
  };
  const moveCompartmentRequest = {
    compartmentId: sourceCompartmentId,
    moveCompartmentDetails: moveCompartmentDetails
  };

  try {
    const moveCompartmentResponse = await identityClient.moveCompartment(moveCompartmentRequest);
    console.log("Compartment moved successfully");
  } catch (e) {
    console.log("error: ", e);
  }
})();
