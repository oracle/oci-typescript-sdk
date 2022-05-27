/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import fn = require("oci-functions");
import core = require("oci-core");
import identity = require("oci-identity");
import common = require("oci-common");

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();

/**
 * This is a basic example of how to register and invoke a serverless Function
 * on OCI using the SDK for TypeScript.
 *
 * The example has some pre-requisites. In particular you will need to create a
 * Function and publish it to OCIR. The best way to do this is with the 'Fn
 * CLI':
 *
 * 1. Install Fn CLI : https://github.com/fnproject/cli
 *
 * 2. Create Function - Quick Guide :
 * https://github.com/fnproject/fn/blob/master/README.md
 *
 * This sample will do following things:
 *
 * 1. Create VCN and subnets - Provide an endpoint on which your function can be
 * invoked.
 *
 * 2. Create Application and Function - Register and configure your function.
 *
 * 3. Invoke Function - How your function can be invoked.
 *
 * 4. Clean-up - Tidy up the resources created above.
 *
 * It is also necessary to create two environmet variables to configure the sample.
 *
 * 1) COMPARTMENT_ID : Must be a valid OCI Comprtment Id.
 * 2) OCIR_FN_IMAGE  : Must be a valid OCIR function image.
 * NB: Currently, after invoking a function we must wait upto 30 minutes before
 * clearing down any supporting Subnets and VCN.
 *
 * @param args to control setting up (setup), invoking (invoke), and,
 *             cleaning up (teardown) function resources.
 */

const SETUP: string = "setup";
const INVOKE: string = "invoke";
const TEARDOWN: string = "teardown";

const args = process.argv.slice(2);
// Handle commands: {setup, invoke, teardown}
let commands = new Set();
commands.add(args[0]);
commands.add(args[1]);
commands.add(args[2]);

// All resources will be prefixed with this name.
const name: string = "oci-ts-sdk-function-example";

// We need a target compartment.
const compartmentId = process.env.COMPARTMENT_ID;

// We need an accessible image in the region to invoke.
// e.g. phx.ocir.io/tenancy-name/registry/imagename:version
const image = process.env.OCIR_FN_IMAGE;

if (!compartmentId) {
  console.log("Please set the mandatory environment variables - COMPARTMENT_ID, OCIR_FN_IMAGE");
  process.exit(-1);
}

// Depending on the image chosen a payload can be specified.
const payload: string = process.env.FN_PAYLOAD ? process.env.FN_PAYLOAD : "";

// create Client
const identityClient: identity.IdentityClient = new identity.IdentityClient({
  authenticationDetailsProvider: provider
});
const fnManagementClient: fn.FunctionsManagementClient = new fn.FunctionsManagementClient({
  authenticationDetailsProvider: provider
});
const vcnClient: core.VirtualNetworkClient = new core.VirtualNetworkClient({
  authenticationDetailsProvider: provider
});
const fnInvokeClient: fn.FunctionsInvokeClient = new fn.FunctionsInvokeClient({
  authenticationDetailsProvider: provider
});

(async () => {
  try {
    if (commands.has(SETUP)) {
      await setupResources(compartmentId!, name, image!);
    }

    if (commands.has(INVOKE)) {
      await invokeFunction(compartmentId!, name, payload);
    }

    if (commands.has(TEARDOWN)) {
      await tearDownResources(compartmentId!, name);
    }
  } catch (error) {
    console.log("Not able to run Invoke function example . Error" + error);
  }
})();

/**
 * Create all the OCI and Fn resources required to invoke a function.
 * @param compartmentId the compartment in which to created the required
 *                      resources.
 * @param name          a name prefix to easilly identifty the resources.
 * @param image         a valid OCIR image for the function.
 */
async function setupResources(compartmentId: string, name: string, image: string) {
  try {
    // 1. A list of AvailabiityDomains are required to determine where to host each
    // subnet
    const availabiityDomains = await getAvailabilityDomains(identityClient, compartmentId);
    const ad = availabiityDomains[0];
    console.log("using availability domain :: " + ad.name);

    // 2. A VCN is required to host subnets.
    const vcnDisplayName = vcnName(name);
    const vcnCidrBlock = "10.0.0.0/16";
    const vcn: core.models.Vcn = await createVcn(
      vcnClient,
      compartmentId,
      vcnDisplayName,
      vcnCidrBlock
    );
    console.log("created VCN : " + vcn.displayName);

    // 3. An Internet Gateway is required to enable the VCN to talk to the wider world.
    const igDisplayName: string = igName(name);
    const ig: core.models.InternetGateway = await createInternetGateway(
      vcnClient,
      compartmentId,
      igDisplayName,
      vcn.id
    );

    // 4. We must configure the VCN's traffics to be routed through the IG.
    const drtDisplayName = drtName(name);
    await configureInternetGateway(vcnClient, compartmentId, vcn.id, ig.id, drtDisplayName);

    // 5. A subnet is required to expose and be able invoke the function.
    // In multiple AD regions, subnets can be created in multiple ADs to provide
    // redundency.
    const subnetDisplayName = subnetName(name);
    const subnetCidrBlock: string = "10.0.0.0/24";
    const subnet: core.models.Subnet = await createSubnet(
      vcnClient,
      compartmentId,
      vcn.id,
      subnetDisplayName,
      ad.name!,
      subnetCidrBlock
    );
    console.log("Created VCN subnet: " + subnet.displayName);

    // 6. Create an Application to host and manage the function(s).
    const appDisplayName = applicationName(name);
    let subnetIds: Array<string> = new Array();
    subnetIds.push(subnet.id);
    const app: fn.models.Application = await createApplicaiton(
      fnManagementClient,
      compartmentId,
      appDisplayName,
      subnetIds
    );
    console.log("Created Application: " + app.displayName!);

    // 7. Create a single Function, set its execution image and limits
    const fnDisplayName = functionName(name);
    const memoryInMBs: number = 128;
    const timeoutInSeconds: number = 30;

    const fn: fn.models.Function = await CreateFunctionDetails(
      fnManagementClient,
      app.id!,
      fnDisplayName,
      image,
      memoryInMBs,
      timeoutInSeconds
    );
    console.log("Created Function" + fn.displayName!);
  } catch (error) {
    console.log("Error in function: ", JSON.stringify(error));
  }
}

/**
 * Create all the OCI and Fn resources required to invoke a function.
 * @param compartmentId the compartment in which to created the required
 *                      resources.
 * @param name          a name prefix to easilly identifty the resources.
 * @param image         a valid OCIR image for the function.
 */
async function invokeFunction(compartmentId: string, name: string, payload: string) {
  try {
    // invoke function
    const appName: string = applicationName(name);
    const fnName = functionName(name);

    const fnSummary: fn.models.FunctionSummary = await getUniqueFunctionByName(
      fnManagementClient,
      compartmentId,
      appName,
      fnName
    );
    const response = await invokeFunctionHelper(fnInvokeClient, fnSummary, payload);
    // invokeFunction returns a readableStream. parse the stream to view payload.
    console.log(await common.getStringFromResponseBody(response.value));
  } catch (error) {
    console.log("Error invoking function " + error);
  }
}

/**
 * Deletes all the OCI and Fn resources created to invoke a function.
 *
 * NB: Resources can only be removed 30 minutes after the last Function
 * invocation.
 * @param compartmentId the compartment in which to created the required
 *                      resources.
 * @param name          a name prefix to easilly identifty the resources.
 * @param image         a valid OCIR image for the function.
 */
async function tearDownResources(compartmentId: string, name: string) {
  console.log("Cleaning up");
  const vcn: string = vcnName(name);
  const gatewayName = igName(name);
  const routeTableName = drtName(name);
  const stName = subnetName(name);
  const appName = applicationName(name);
  const fnName = functionName(name);

  const virtualNetwork = await getUniqueVcnByName(vcnClient, compartmentId, vcn);
  const ig = await getUniqueInternetGatewayByName(
    vcnClient,
    compartmentId,
    virtualNetwork.id,
    gatewayName
  );
  const rt = await getUniqueRouteTableByName(
    vcnClient,
    compartmentId,
    virtualNetwork.id,
    routeTableName
  );
  const subnet = await getUniqueSubnetByName(vcnClient, compartmentId, virtualNetwork.id, stName);
  const application = await getUniqueApplicationByName(fnManagementClient, compartmentId, appName);
  const fn = await getUniqueFunction(fnManagementClient, application.id!, fnName);

  if (fn !== undefined) {
    await deleteFunction(fnManagementClient, fn.id!);
    console.log("Deleted function " + fn.displayName!);
  }

  if (application !== undefined) {
    await deleteApplication(fnManagementClient, application.id!);
    console.log("Deleted applicatoion " + application.displayName!);
  }

  if (subnet !== undefined) {
    await deleteSubnet(vcnClient, subnet.id);
    console.log("Deleted  subnet " + subnet.id);
  }

  if (rt !== undefined) {
    await prepareDefaultRouteTableForDelete(vcnClient, rt.id);
    console.log("cleaned route table " + rt.displayName);
  }

  if (ig !== undefined) {
    await deleteInternetGateway(vcnClient, ig.id);
    console.log("deleted internet gateway " + ig.displayName);
  }

  if (virtualNetwork !== undefined) {
    await deleteVcn(vcnClient, virtualNetwork);
    console.log("Deleted VCN " + virtualNetwork.displayName);
  }
}

// === OCI Application Helpers ===

/**
 * Creates an Application and waits for the it to become available to use.
 *
 * @param fnManagementClient the service client to use to create the application.
 * @param compartmentId the OCID of the compartment which owns the Application.
 * @param displayName the display name ofr the created Appliction.
 * @param subnetIds a List of subnets (in different ADs) that will expose the function.
 * @return the created application.
 */
async function createApplicaiton(
  client: fn.FunctionsManagementClient,
  compartmentId: string,
  displayName: string,
  subnetIds: Array<string>
): Promise<fn.models.Application> {
  //Create New application
  const createAppDetails: fn.models.CreateApplicationDetails = {
    compartmentId: compartmentId,
    displayName: displayName,
    subnetIds: subnetIds
  };
  const createAppRequest: fn.requests.CreateApplicationRequest = {
    createApplicationDetails: createAppDetails
  };
  const createAppResponse = await client.createApplication(createAppRequest);
  // Wait for Application to be in 'Active' state.
  await delay(15);
  return createAppResponse.application;
}

/**
 * Deletes an Application and waits for it to be deleted.
 *
 * @param fnManagementClient the service client to use to delete the Application.
 * @param applicationId the Application to delete.
 * @throws Exception if there is an error waiting on the Application to be deleted.
 */
async function deleteApplication(client: fn.FunctionsManagementClient, applicationId: string) {
  // Delete the specified Application
  const delAppRequest: fn.requests.DeleteApplicationRequest = { applicationId: applicationId };
  await client.deleteApplication(delAppRequest);
  // Wait for the 'Deleted' status.
  await delay(15);
}

// === OCI Identity Helpers ===
/**
 * List the AvailabilityDomains.
 *
 * @param identityClient the service client to use to fetch the
 *                       AvailabilityDomains.
 * @param compartmentId  the OCID of the compartment to check.
 * @return the list of AvailabilityDomains.
 */
async function getAvailabilityDomains(
  client: identity.IdentityClient,
  compartmentId: string
): Promise<Array<identity.models.AvailabilityDomain>> {
  const listADRequest: identity.requests.ListAvailabilityDomainsRequest = {
    compartmentId: compartmentId
  };
  const listADResponse = await client.listAvailabilityDomains(listADRequest);
  return listADResponse.items;
}

// === OCI VCN Helpers ===
/**
 * Creates a VCN and waits for it to become available to use.
 *
 * @param vcnClient          the service client to use to create the VCN.
 * @param compartmentId      the OCID of the compartment where the VCN will be created
 * @param cidrBlock          the CidrBlock allocated for the VCN.
 * @return the created VCN.
 */
async function createVcn(
  client: core.VirtualNetworkClient,
  compartmentId: string,
  vcnDisplayName: string,
  cidrBlock: string
): Promise<core.models.Vcn> {
  const createVcnDetails: core.models.CreateVcnDetails = {
    compartmentId: compartmentId,
    displayName: vcnDisplayName,
    cidrBlock: cidrBlock
  };
  const createVcnRequest: core.requests.CreateVcnRequest = { createVcnDetails: createVcnDetails };
  const createVcnResponse = await client.createVcn(createVcnRequest);
  // Wait for VCn to become available
  await delay(15);
  return createVcnResponse.vcn;
}

/**
 * Gets VCN info of a single uniquely named VCN in the specified compartment.
 *
 * @param vcnClient      the service client to use to query the VCN.
 * @param compartmentId  of the VCN.
 * @param vcnDisplayName of the VCN.
 * @return               the VCN.
 */
async function getUniqueVcnByName(
  client: core.VirtualNetworkClient,
  compartmentId: string,
  vcnDisplayName: string
): Promise<core.models.Vcn> {
  // Find the application in specific compartment
  const listVcnsRequest: core.requests.ListVcnsRequest = {
    compartmentId: compartmentId,
    displayName: vcnDisplayName
  };
  const listVcnResponse = await client.listVcns(listVcnsRequest);
  if (listVcnResponse.items.length !== 1) {
    throw "could not find unique VCN with the name" +
      vcnDisplayName +
      " in compartment" +
      compartmentId;
  }
  return listVcnResponse.items[0];
}

/**
 * Deletes a VCN and waits for it to be deleted.
 *
 * @param vcnClient the service client to use to delete the VCN.
 * @param vcn       the VCN to delete.
 */
async function deleteVcn(client: core.VirtualNetworkClient, vcn: core.models.Vcn) {
  const deleteVcnRequest: core.requests.DeleteVcnRequest = { vcnId: vcn.id };
  await client.deleteVcn(deleteVcnRequest);
  // Wait for VCN to be deleted.
  await delay(15);
}

// === OCI Internet Gateway Helpers ===
async function createInternetGateway(
  client: core.VirtualNetworkClient,
  compartmentId: string,
  displayName: string,
  vcnId: string
): Promise<core.models.InternetGateway> {
  const createIGDetails: core.models.CreateInternetGatewayDetails = {
    compartmentId: compartmentId,
    displayName: displayName,
    vcnId: vcnId,
    isEnabled: true
  };
  const createIGRequest: core.requests.CreateInternetGatewayRequest = {
    createInternetGatewayDetails: createIGDetails
  };
  const createIGResponse = await client.createInternetGateway(createIGRequest);
  // Wait for sometime for internet gateway to become avaialble.
  await delay(15);
  return createIGResponse.internetGateway;
}

/**
 * Gets InternetGateway info of a single uniquely named InternetGateway in the
 * specified compartment.
 *
 * @param vcnClient     the service client to use to query the InternetGateway.
 * @param compartmentId of the InternetGateway.
 * @param vcnId         of the InternetGateway's associated VCN.
 * @param igDisplayName of the InternetGateway.
 * @return the InternetGateway.
 * @throws Exception
 */
async function getUniqueInternetGatewayByName(
  client: core.VirtualNetworkClient,
  compartmentId: string,
  vcnId: string,
  displayName: string
): Promise<core.models.InternetGateway> {
  // Find the application in a specific compartment
  const listIgRequest: core.requests.ListInternetGatewaysRequest = {
    compartmentId: compartmentId,
    vcnId: vcnId,
    displayName: displayName
  };
  const listIgResponse = await client.listInternetGateways(listIgRequest);
  if (listIgResponse.items.length !== 1) {
    throw "Could not find internet gatewat with name " +
      displayName +
      " in the compartment " +
      compartmentId;
  }
  return listIgResponse.items[0];
}

/**
 * Deletes a InternetGateway and waits for it to be deleted.
 *
 * @param vcnClient the service client to use to delete the InternetGateway.
 * @param igId      the InternetGateway to delete.
 * @throws Exception
 */
async function deleteInternetGateway(client: core.VirtualNetworkClient, igID: string) {
  const deleteIgRequest: core.requests.DeleteInternetGatewayRequest = { igId: igID };
  await client.deleteInternetGateway(deleteIgRequest);
  // Wait for internet gateway to be dleted
  await delay(15);
}

// === OCI Route Table Helpers ===
/**
 * Configure the default RouteTable of the specified InternetGateway to ensure it
 * contains a single outbound route for all traffic.
 *
 * NB: You should restrict these routes further if you keep this piece of
 *     OCI infrastructure.
 *
 * @param vcnClient     the service client to use to query a RouteTable.
 * @param compartmentId of the RouteTable.
 * @param vcnId         of the RouteTable's associated VCN.
 * @param igId          of the RouteTable's associated InternetGateway.
 * @param rtDisplayName of the RouteTable.
 * @return the InternetGateway.
 */

async function configureInternetGateway(
  client: core.VirtualNetworkClient,
  compartmentId: string,
  vcnId: string,
  igId: string,
  drtDisplayName: string
) {
  const defaultRouteTable: core.models.RouteTable = await getUniqueRouteTableByName(
    vcnClient,
    compartmentId,
    vcnId,
    drtDisplayName
  );
  const destinationCidr = "0.0.0.0/0";
  const routeRules: Array<core.models.RouteRule> = defaultRouteTable.routeRules;
  const rr: core.models.RouteRule = {
    cidrBlock: destinationCidr,
    destination: destinationCidr,
    destinationType: core.models.RouteRule.DestinationType.CidrBlock,
    networkEntityId: igId
  };
  routeRules.push(rr);

  const updateRTDetails: core.models.UpdateRouteTableDetails = { routeRules: routeRules };
  const updateRTRequest: core.requests.UpdateRouteTableRequest = {
    updateRouteTableDetails: updateRTDetails,
    rtId: defaultRouteTable.id
  };
  const updateRTResponse = await client.updateRouteTable(updateRTRequest);
  return updateRTResponse.routeTable;
}

/**
 * Gets RouteTable info of a single uniquely named RouteTable in the
 * specified compartment.
 *
 * @param vcnClient     the service client to use to query a RouteTable.
 * @param compartmentId of the RouteTable.
 * @param vcnId         of the RouteTable's associated VCN.
 * @param rtDisplayName of the RouteTable.
 * @return the Route Table.
 */
async function getUniqueRouteTableByName(
  client: core.VirtualNetworkClient,
  compartmentId: string,
  vcnId: string,
  rtdisplayName: string
): Promise<core.models.RouteTable> {
  // Find the route table in a specific compartment
  const listRTRequest: core.requests.ListRouteTablesRequest = {
    compartmentId: compartmentId,
    vcnId: vcnId,
    displayName: rtdisplayName
  };
  const listRTresponse = await client.listRouteTables(listRTRequest);
  if (listRTresponse.items.length != 1) {
    throw "couldnot find unique routing table with name:" +
      rtdisplayName +
      " in the compartment " +
      compartmentId;
  }
  return listRTresponse.items[0];
}

/**
 * Prepares a DefaultRouteTable for deletion by deleting all RouteRules.
 *
 * @param vcnClient the service client to use to delete the RouteTable.
 * @param rtId      the RouteTable to delete.
 * @throws Exception
 */
async function prepareDefaultRouteTableForDelete(client: core.VirtualNetworkClient, rtId: string) {
  const updateRtDetails: core.models.UpdateRouteTableDetails = { routeRules: [] };
  const updateRtRequest: core.requests.UpdateRouteTableRequest = {
    updateRouteTableDetails: updateRtDetails,
    rtId: rtId
  };
  await client.updateRouteTable(updateRtRequest);
}

// === OCI Subnet Helpers ===
/**
 * Creates a subnet in a VCN and waits for the subnet to become available to use.
 *
 * @param vcnClient the service client to use to create the subnet.
 * @param compartmentId the OCID of the compartment which owns the VCN.
 * @param vcnId the ID of the VCN which will own the subnet.
 * @param displayName the display name of the subnet.
 * @param availabilityDomain the availability domain where the subnet will be created.
 * @param subnetCidrBlock the subnet CidrBlock allocated from the parent VCN range.
 * @return the created subnet.
 */

async function createSubnet(
  client: core.VirtualNetworkClient,
  compartmentId: string,
  vcnId: string,
  displayName: string,
  availabilityDomainName: string,
  subnetCidrBlock: string
): Promise<core.models.Subnet> {
  //Create Subnet
  const createSubnetDetails: core.models.CreateSubnetDetails = {
    availabilityDomain: availabilityDomainName,
    compartmentId: compartmentId,
    displayName: displayName,
    cidrBlock: subnetCidrBlock,
    vcnId: vcnId
  };
  const createSubnetRequest: core.requests.CreateSubnetRequest = {
    createSubnetDetails: createSubnetDetails
  };
  const createSubnetResponse = await client.createSubnet(createSubnetRequest);
  // Wait for subnet to become abvailable
  await delay(15);
  return createSubnetResponse.subnet;
}

/**
 * Gets Subnet info of a single uniquely named VCN in the specified compartment.
 *
 * @param vcnClient the service client to use to query the Subnet.
 * @param compartmentId of the Subnet.
 * @param vcnId of the Subnet.
 * @param subnetDisplayName of the Subnet.
 * @return the Subnet.
 */
async function getUniqueSubnetByName(
  client: core.VirtualNetworkClient,
  compartmentId: string,
  vcnId: string,
  subnetDisplayName: string
): Promise<core.models.Subnet> {
  //Find the application in a specific compartment
  const listSubnetRequest: core.requests.ListSubnetsRequest = {
    compartmentId: compartmentId,
    vcnId: vcnId,
    displayName: subnetDisplayName
  };
  const listSubnetResponse = await client.listSubnets(listSubnetRequest);
  if (listSubnetResponse.items.length !== 1) {
    throw " Could not find unique subnet with name " +
      subnetDisplayName +
      " in the compartment " +
      compartmentId;
  }
  return listSubnetResponse.items[0];
}

/**
 * Deletes a subnet and waits for it to be deleted.
 *
 * @param vcnClient the service client to use to delete the subnet.
 * @param subnetId the subnet to delete.
 * @throws Exception
 */
async function deleteSubnet(client: core.VirtualNetworkClient, subnetId: string) {
  const DELETE_SUBNET_ATTEMPTS = 5;
  /*
   * Sometimes we can't delete the subnet straight after a mount target has been deleted
   * as network resources still need to clear. If we get a conflict, try a few times before
   * bailing out.
   */
  let numAttempts = 0;
  while (true) {
    try {
      const deleteSubnetRequest: core.requests.DeleteSubnetRequest = { subnetId: subnetId };
      await client.deleteSubnet(deleteSubnetRequest);
      break;
    } catch (error) {
      numAttempts++;
      if (error.statusCode === 409 && numAttempts < DELETE_SUBNET_ATTEMPTS) await delay(10);
      else throw error;
    }
  }
  //Wait for subnet to be in Terminated state
  await delay(15);
}

// === OCI Function Helpers ===
/**
 * Creates a Function and waits for the it to become available to use.
 *
 * @param fnManagementClient the service client to use to create the Application.
 * @param applicationId the OCID of the Application which owns the Funciton.
 * @param displayName the display name of created Function.
 * @param image an accessible OCIR image implementing the function to be executed.
 * @param memoryInMBs the maximum ammount of memory available (128, 256, 512, 1024) to the function in MB.
 * @param timeoutInSeconds the maximum ammout of time a function can execute (30 - 120) in seconds.
 * @return the created Function.
 */
async function CreateFunctionDetails(
  client: fn.FunctionsManagementClient,
  applocationId: string,
  displayName: string,
  image: string,
  memoryInMBs: number,
  timeoutInSeconds: number
): Promise<fn.models.Function> {
  //Create new fucntion
  const createFnDEtails: fn.models.CreateFunctionDetails = {
    applicationId: applocationId,
    displayName: displayName,
    image: image,
    memoryInMBs: memoryInMBs,
    timeoutInSeconds: timeoutInSeconds
  };
  const createFnRequest: fn.requests.CreateFunctionRequest = {
    createFunctionDetails: createFnDEtails
  };
  const createFnResponse = await client.createFunction(createFnRequest);
  // Wait for Function to be in 'Active' state.
  await delay(15);
  return createFnResponse.function;
}

/**
 * Gets Function information. This is an expensive operation and the results should be cached.
 *
 * @param fnManagementClient the service client to use to get the Function information.
 * @param compartmentId of the application and function.
 * @param applicationDisplayName of the application.
 * @param functionDisplayName of the function.
 * @return the FunctionSummary.
 */
async function getUniqueFunctionByName(
  client: fn.FunctionsManagementClient,
  compartmentId: string,
  applicationDisplayName: string,
  functionDisplayName: string
): Promise<fn.models.FunctionSummary> {
  const application: fn.models.ApplicationSummary = await getUniqueApplicationByName(
    fnManagementClient,
    compartmentId,
    applicationDisplayName
  );
  const fn = await getUniqueFunction(fnManagementClient, application.id!, functionDisplayName);
  return fn;
}

/**
 * Gets the Application info of a single uniquely named Application in the specified compartment.
 *
 * @param fnManagementClient the service client to use to get the Application information.
 * @param compartmentId of the application.
 * @param applicationDisplayName of the application.
 * @return the ApplicationSummary.
 */
async function getUniqueApplicationByName(
  client: fn.FunctionsManagementClient,
  compartmentId: string,
  applicationDisplayName: string
): Promise<fn.models.ApplicationSummary> {
  //Find the application in a specific compartment
  const listAppRequest: fn.requests.ListApplicationsRequest = {
    displayName: applicationDisplayName,
    compartmentId: compartmentId
  };
  const listAppResponse = await client.listApplications(listAppRequest);
  if (listAppResponse.items.length !== 1) {
    throw "Could not find unique application with name " +
      applicationDisplayName +
      " in compartment " +
      compartmentId;
  }
  return listAppResponse.items[0];
}

/**
 * Gets Function information. This is an expensive operation and the results should be cached.
 *
 * @param fnManagementClient the service client to use to get the Function information.
 * @param applicationId of the function to find.
 * @param functionDisplayName of the function to find.
 * @return the FunctionSummary.
 * @throws Exception
 */
async function getUniqueFunction(
  client: fn.FunctionsManagementClient,
  applicationId: string,
  functionDisplayName: string
): Promise<fn.models.FunctionSummary> {
  const listFnRequest: fn.requests.ListFunctionsRequest = {
    applicationId: applicationId,
    displayName: functionDisplayName
  };
  const listFnResponse = await client.listFunctions(listFnRequest);
  if (listFnResponse.items.length !== 1) {
    throw "Could not find function with name " +
      functionDisplayName +
      " in application " +
      applicationId;
  }
  return listFnResponse.items[0];
}

/**
 * Deletes a Function and waits for it to be deleted.
 *
 * @param fnManagementClient the service client to use to delete the Function.
 * @param functionId the Function to delete.
 */
async function deleteFunction(client: fn.FunctionsManagementClient, fnId: string) {
  // Delete the specified Function.
  const delFunctionRequest: fn.requests.DeleteFunctionRequest = { functionId: fnId };
  await client.deleteFunction(delFunctionRequest);
  // Wait for the 'Deleted' status.
  await delay(15);
}

/**
 * Invokes a function.
 *
 * @param fnInvokedClient the service client to use to delete the Function.
 * @param function the Function to invoke.
 * @param payload the payload to pass to the function.
 *
 * @throws Exception if there is an error when invoking the function.
 */
async function invokeFunctionHelper(
  client: fn.FunctionsInvokeClient,
  fnSummary: fn.models.FunctionSummary,
  payload: string
): Promise<fn.responses.InvokeFunctionResponse> {
  console.log("Invoking function endpoint - " + fnSummary.invokeEndpoint);

  // Configure the client to use the assigned function endpoint.
  client.endpoint = fnSummary.invokeEndpoint!;
  const functionId = fnSummary.id || "";

  if(payload && (typeof payload === 'object')) {
    payload  = JSON.stringify(payload)
  }

  const request: fn.requests.InvokeFunctionRequest = {
    functionId: functionId,
    invokeFunctionBody: payload
  };
  const response = await client.invokeFunction(request);
  return response;
}

// === Utility Helpers ===
function vcnName(name: string): string {
  return name + "-vcn";
}

function igName(name: string): string {
  return name + "-ig";
}

function drtName(name: string) {
  return "Default Route Table for " + name + "-vcn";
}

function subnetName(name: string) {
  return name + "-subnet";
}

function applicationName(name: string) {
  return name + "-app";
}

function functionName(name: string) {
  return name + "-fn";
}

async function delay(s: number) {
  return new Promise(resolve => setTimeout(resolve, s * 1000));
}
