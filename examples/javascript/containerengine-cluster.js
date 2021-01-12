/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

const oke = require("oci-containerengine");
const core = require("oci-core");
const identity = require("oci-identity");
const wr = require("oci-workrequests");
const common = require("oci-common");

const provider = new common.ConfigFileAuthenticationDetailsProvider();
/**
 * The entry point for the example.
 *
 * @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 *   <li>The OCID of the compartment where the Container Engine cluster and associated resources will be created</li>
 * </ul>
 */

const VCN_DISPLAY_NAME = "ts_sdk_oke_example_vcn";
const SUBNET_DISPLAY_NAMES = ["ts_sdk_oke_example_subnet_1", "ts_sdk_oke_example_subnet_2"];
const CIDR_BLOCK = "10.0.0.0/16";
const SUBNET_CIDR_BLOCKS = ["10.0.0.0/24", "10.0.1.0/24"];
const CLUSTER_DISPLAY_NAME = "ContanerEngineClusterExample";
const CLUSTER_NEW_DISPLAY_NAME = "ContanerEngineClusterExampleNew";
let clusterId;

const args = process.argv.slice(2);
console.log(args);
if (args.length !== 1) {
  console.error(
    "Unexpected number of arguments received. Consult the script header comments for expected arguments"
  );
  process.exit(-1);
}

const compartmentId = args[0];
const containerEngineClient = new oke.ContainerEngineClient({
  authenticationDetailsProvider: provider
});

const vcnClient = new core.VirtualNetworkClient({
  authenticationDetailsProvider: provider
});
const identityClient = new identity.IdentityClient({
  authenticationDetailsProvider: provider
});
const workRequestClient = new wr.WorkRequestClient({ authenticationDetailsProvider: provider });

const VirtualNetworkWaiter = new core.VirtualNetworkWaiter(vcnClient, workRequestClient);

async function main() {
  try {
    let vcn;
    let subnets = new Array();
    let cluster;
    const availabilityDomains = await getAvailabilityDomains(identityClient, compartmentId);
    const adToUse = availabilityDomains[0];

    // // A VCN and subnets are required to create a Container Engine Cluster
    vcn = await createVcn(vcnClient, compartmentId);
    console.log("Created VCN");
    for (let i = 0; i < 2; i++) {
      const subnet = await createSubnet(
        vcnClient,
        compartmentId,
        adToUse,
        vcn.id,
        SUBNET_DISPLAY_NAMES[i],
        SUBNET_CIDR_BLOCKS[i]
      );
      subnets.push(subnet);
      console.log("Created Subnet" + i);
    }

    //Create a Container Engine Cluster
    let subnetIds = new Array();
    for (let subnet of subnets) {
      subnetIds.push(subnet.id);
    }

    const response = await getKubernetesVersions(containerEngineClient);
    const kubernetesVersion = response[0];

    console.log("kubernetes version: " + kubernetesVersion);

    cluster = await createCluster(
      containerEngineClient,
      vcn.id,
      subnetIds,
      kubernetesVersion,
      compartmentId
    );
    // Update the Container Engine Cluster
    await updateCluster(containerEngineClient, clusterId, CLUSTER_NEW_DISPLAY_NAME);
    console.log(" Updated Cluster");

    // Clean up
    console.log("Clean Up");
    console.log("==========");

    if (cluster !== null) {
      await deleteCluster(containerEngineClient, clusterId);
      console.log("Deleted Cluster");
    }

    for (let i = 0; i < subnets.length; i++) {
      if (subnets[i] !== null) {
        await deleteSubnet(vcnClient, subnets[i]);
        console.log("Deleted subnet " + i);
      }
    }

    if (vcn !== null) {
      await deleteVcn(vcnClient, vcn);
      console.log("Deleted VCN");
    }
  } catch (error) {
    throw "Error Executing container engine example";
  }
}

async function getAvailabilityDomains(client, compartmentId) {
  const request = {
    compartmentId: compartmentId
  };
  const response = await client.listAvailabilityDomains(request);
  return response.items;
}

async function createVcn(client, compartmentId) {
  const createVcnDetails = {
    cidrBlock: CIDR_BLOCK,
    compartmentId: compartmentId,
    displayName: VCN_DISPLAY_NAME
  };
  const request = { createVcnDetails: createVcnDetails };
  const response = await client.createVcn(request);
  // Wait for sometime till VCN is in <Avaialable> state.
  const getVcnRequest = { vcnId: response.vcn.id };
  const getVcnResponse = await VirtualNetworkWaiter.forVcn(
    getVcnRequest,
    core.models.Vcn.LifecycleState.Available
  );
  return getVcnResponse.vcn;
}

async function createSubnet(
  client,
  compartmentId,
  availabilityDomain,
  vcnId,
  subnetName,
  cidrBlock
) {
  const createSubnetDetails = {
    availabilityDomain: availabilityDomain.name,
    compartmentId: compartmentId,
    displayName: subnetName,
    vcnId: vcnId,
    cidrBlock: cidrBlock
  };
  const request = { createSubnetDetails: createSubnetDetails };
  const response = await client.createSubnet(request);
  return response.subnet;
}

async function getKubernetesVersions(client) {
  const getClusterOptionRequest = { clusterOptionId: "all" };
  const response = await client.getClusterOptions(getClusterOptionRequest);
  return response.clusterOptions.kubernetesVersions;
}

async function createCluster(client, vcnId, subnetIds, kubernetesVersion, compartmentId) {
  let cluster = {};

  console.log("Creating Cluster");
  console.log("================");
  const clusterCreateOptions = { serviceLbSubnetIds: subnetIds };
  const createClusterDetails = {
    name: CLUSTER_DISPLAY_NAME,
    compartmentId: compartmentId,
    vcnId: vcnId,
    kubernetesVersion: kubernetesVersion,
    options: clusterCreateOptions
  };
  const request = { createClusterDetails: createClusterDetails };
  const response = await client.createCluster(request);
  const workRequestId = response.opcWorkRequestId;
  console.log("cluster work request ID is: " + workRequestId);

  const workRequestResponse = await waitForWorkRequestFinished(
    containerEngineClient,
    workRequestId
  );

  if (isWorkRequestInSuccessState(workRequestResponse)) {
    clusterId = await getClusterId(workRequestResponse);
    console.log("cluster ID is: " + clusterId);
    const request = { clusterId: clusterId };
    const response = await client.getCluster(request);
    cluster = response.cluster;
  }

  return cluster;
}

async function waitForWorkRequestFinished(client, workRequestId) {
  const containerEngineWaiter = new oke.ContainerEngineWaiter(client);
  const request = { workRequestId: workRequestId };
  const response = await containerEngineWaiter.forWorkRequest(request);
  return response;
}

async function isWorkRequestInSuccessState(workRequestResponse) {
  let inSuccessState = false;
  const workRequestStatus = workRequestResponse.workRequest.status;
  if (workRequestStatus === oke.models.WorkRequestStatus.Succeeded) {
    inSuccessState = true;
  }
  return inSuccessState;
}

function getClusterId(getWorkRequestResponse) {
  let clusterId = "";
  let resources = getWorkRequestResponse.workRequest.resources;
  for (let resource of resources) {
    if (resource.entityType === "cluster") clusterId = resource.identifier;
    break;
  }
  return clusterId;
}

async function updateCluster(client, clusterId, newClusterName) {
  const updateClusterDetails = {
    name: newClusterName,
    kubernetesVersion: ""
  };
  const request = {
    updateClusterDetails: updateClusterDetails,
    clusterId: clusterId
  };
  const response = await client.updateCluster(request);
  const workRequestId = response.opcWorkRequestId;
  const workRequestResponse = await waitForWorkRequestFinished(client, workRequestId);
  if (isWorkRequestInSuccessState(workRequestResponse)) {
    const getclusterReuest = { clusterId: clusterId };
    const response = await client.getCluster(getclusterReuest);
    const cluster = response.cluster;
    console.log("Cluster name is changed to " + cluster.name);
  }
}

async function deleteCluster(client, clusterId) {
  const request = { clusterId: clusterId };
  const response = await client.deleteCluster(request);
  const workRequestId = response.opcWorkRequestId;
  const workRequestResponse = await waitForWorkRequestFinished(client, workRequestId);

  if (isWorkRequestInSuccessState(workRequestResponse)) {
    const getClusterRequest = { clusterId: clusterId };
    const response = await client.getCluster(getClusterRequest);
    console.log("Cluster lifecycle state is " + response.cluster.lifecycleState);
  }
}

async function deleteSubnet(client, subnet) {
  const deleteSubnetRequest = { subnetId: subnet.id };
  await client.deleteSubnet(deleteSubnetRequest);
  // const getSubnetRequest: core.requests.GetSubnetRequest = { subnetId: subnet.id };
  // // Wait for some time for subnet lifecycle staus changed to terminated.
  // await VirtualNetworkWaiter.forSubnet(
  //   getSubnetRequest,
  //   core.models.Subnet.LifecycleState.Terminated
  // );
}

async function deleteVcn(client, vcn) {
  const request = { vcnId: vcn.id };
  await client.deleteVcn(request);
  const getVcnRequest = { vcnId: vcn.id };
  // Wait for some time for VCN lifecycle staus changed to terminated.
  // await VirtualNetworkWaiter.forVcn(getVcnRequest, core.models.Vcn.LifecycleState.Terminated);
}

const run = main();
