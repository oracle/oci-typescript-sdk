/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import oke = require("oci-containerengine");
import core = require("oci-core");
import identity = require("oci-identity");
import wr = require("oci-workrequests");
import common = require("oci-common");

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();
/**
 * The entry point for the example.
 *
 * @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 *   <li>The OCID of the compartment where the Container Engine cluster and associated resources will be created</li>
 * </ul>
 */

const VCN_DISPLAY_NAME: string = "ts_sdk_oke_example_vcn";
const SUBNET_DISPLAY_NAMES: string[] = [
  "ts_sdk_oke_example_subnet_1",
  "ts_sdk_oke_example_subnet_2"
];
const CIDR_BLOCK: string = "10.0.0.0/16";
const SUBNET_CIDR_BLOCKS: string[] = ["10.0.0.0/24", "10.0.1.0/24"];
const CLUSTER_DISPLAY_NAME: string = "ContanerEngineClusterExample";
const CLUSTER_NEW_DISPLAY_NAME: string = "ContanerEngineClusterExampleNew";
let clusterId: string;

const args = process.argv.slice(2);
console.log(args);
if (args.length !== 1) {
  console.error(
    "Unexpected number of arguments received. Consult the script header comments for expected arguments"
  );
  process.exit(-1);
}

const compartmentId: string = args[0];
const containerEngineClient: oke.ContainerEngineClient = new oke.ContainerEngineClient({
  authenticationDetailsProvider: provider
});

const vcnClient: core.VirtualNetworkClient = new core.VirtualNetworkClient({
  authenticationDetailsProvider: provider
});
const identityClient: identity.IdentityClient = new identity.IdentityClient({
  authenticationDetailsProvider: provider
});
const workRequestClient = new wr.WorkRequestClient({ authenticationDetailsProvider: provider });

const VirtualNetworkWaiter = new core.VirtualNetworkWaiter(vcnClient, workRequestClient);

async function main() {
  try {
    let vcn: core.models.Vcn;
    let subnets: Array<core.models.Subnet> = new Array();
    let cluster: oke.models.Cluster;
    const availabilityDomains: Array<identity.models.AvailabilityDomain> = await getAvailabilityDomains(
      identityClient,
      compartmentId
    );
    const adToUse: identity.models.AvailabilityDomain = availabilityDomains[0];

    // A VCN and subnets are required to create a Container Engine Cluster
    vcn = await createVcn(vcnClient, compartmentId);
    console.log("Created VCN");
    for (let i = 0; i < 2; i++) {
      const subnet: core.models.Subnet = await createSubnet(
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
    let subnetIds: Array<string> = new Array();
    for (let subnet of subnets) {
      subnetIds.push(subnet.id);
    }

    const response = await getKubernetesVersions(containerEngineClient);
    const kubernetesVersion: string = response[0];

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

async function getAvailabilityDomains(
  client: identity.IdentityClient,
  compartmentId: string
): Promise<Array<identity.models.AvailabilityDomain>> {
  const request: identity.requests.ListAvailabilityDomainsRequest = {
    compartmentId: compartmentId
  };
  const response = await client.listAvailabilityDomains(request);
  return response.items;
}

async function createVcn(
  client: core.VirtualNetworkClient,
  compartmentId: string
): Promise<core.models.Vcn> {
  const createVcnDetails: core.models.CreateVcnDetails = {
    cidrBlock: CIDR_BLOCK,
    compartmentId: compartmentId,
    displayName: VCN_DISPLAY_NAME
  };
  const request: core.requests.CreateVcnRequest = { createVcnDetails: createVcnDetails };
  const response = await client.createVcn(request);
  // Wait for sometime till VCN is in <Avaialable> state.
  const getVcnRequest: core.requests.GetVcnRequest = { vcnId: response.vcn.id };
  const getVcnResponse = await VirtualNetworkWaiter.forVcn(
    getVcnRequest,
    core.models.Vcn.LifecycleState.Available
  );
  return getVcnResponse!.vcn;
}

async function createSubnet(
  client: core.VirtualNetworkClient,
  compartmentId: string,
  availabilityDomain: identity.models.AvailabilityDomain,
  vcnId: string,
  subnetName: string,
  cidrBlock: string
): Promise<core.models.Subnet> {
  const createSubnetDetails: core.models.CreateSubnetDetails = {
    availabilityDomain: availabilityDomain.name,
    compartmentId: compartmentId,
    displayName: subnetName,
    vcnId: vcnId,
    cidrBlock: cidrBlock
  };
  const request: core.requests.CreateSubnetRequest = { createSubnetDetails: createSubnetDetails };
  const response = await client.createSubnet(request);
  return response.subnet;
}

async function getKubernetesVersions(client: oke.ContainerEngineClient): Promise<string[]> {
  const getClusterOptionRequest: oke.requests.GetClusterOptionsRequest = { clusterOptionId: "all" };
  const response = await client.getClusterOptions(getClusterOptionRequest);
  return response.clusterOptions.kubernetesVersions!;
}

async function createCluster(
  client: oke.ContainerEngineClient,
  vcnId: string,
  subnetIds: Array<string>,
  kubernetesVersion: string,
  compartmentId: string
) {
  let cluster: oke.models.Cluster = {};

  console.log("Creating Cluster");
  console.log("================");
  const clusterCreateOptions: oke.models.ClusterCreateOptions = { serviceLbSubnetIds: subnetIds };
  const createClusterDetails: oke.models.CreateClusterDetails = {
    name: CLUSTER_DISPLAY_NAME,
    compartmentId: compartmentId,
    vcnId: vcnId,
    kubernetesVersion: kubernetesVersion,
    options: clusterCreateOptions
  };
  const request: oke.requests.CreateClusterRequest = { createClusterDetails: createClusterDetails };
  const response = await client.createCluster(request);
  const workRequestId: string = response.opcWorkRequestId;
  console.log("cluster work request ID is: " + workRequestId);

  const workRequestResponse: oke.responses.GetWorkRequestResponse = await waitForWorkRequestFinished(
    containerEngineClient,
    workRequestId
  );

  if (isWorkRequestInSuccessState(workRequestResponse)) {
    clusterId = await getClusterId(workRequestResponse);
    console.log("cluster ID is: " + clusterId);
    const request: oke.requests.GetClusterRequest = { clusterId: clusterId };
    const response: oke.responses.GetClusterResponse = await client.getCluster(request);
    cluster = response.cluster;
  }

  return cluster;
}

async function waitForWorkRequestFinished(
  client: oke.ContainerEngineClient,
  workRequestId: string
): Promise<oke.responses.GetWorkRequestResponse> {
  const containerEngineWaiter = new oke.ContainerEngineWaiter(client);
  const request: oke.requests.GetWorkRequestRequest = { workRequestId: workRequestId };
  const response = await containerEngineWaiter.forWorkRequest(request);
  return response!;
}

async function isWorkRequestInSuccessState(
  workRequestResponse: oke.responses.GetWorkRequestResponse
): Promise<boolean> {
  let inSuccessState: boolean = false;
  const workRequestStatus: oke.models.WorkRequestStatus = workRequestResponse.workRequest.status!;
  if (workRequestStatus === oke.models.WorkRequestStatus.Succeeded) {
    inSuccessState = true;
  }
  return inSuccessState;
}

function getClusterId(getWorkRequestResponse: oke.responses.GetWorkRequestResponse): string {
  let clusterId: string = "";
  let resources: Array<oke.models.WorkRequestResource> = getWorkRequestResponse.workRequest
    .resources!;
  for (let resource of resources) {
    if (resource.entityType === "cluster") clusterId = resource.identifier!;
    break;
  }
  return clusterId;
}

async function updateCluster(
  client: oke.ContainerEngineClient,
  clusterId: string,
  newClusterName: string
) {
  const updateClusterDetails: oke.models.UpdateClusterDetails = {
    name: newClusterName,
    kubernetesVersion: ""
  };
  const request: oke.requests.UpdateClusterRequest = {
    updateClusterDetails: updateClusterDetails,
    clusterId: clusterId
  };
  const response = await client.updateCluster(request);
  const workRequestId: string = response.opcWorkRequestId;
  const workRequestResponse: oke.responses.GetWorkRequestResponse = await waitForWorkRequestFinished(
    client,
    workRequestId
  );
  if (isWorkRequestInSuccessState(workRequestResponse)) {
    const getclusterReuest: oke.requests.GetClusterRequest = { clusterId: clusterId };
    const response = await client.getCluster(getclusterReuest);
    const cluster: oke.models.Cluster = response.cluster;
    console.log("Cluster name is changed to " + cluster.name!);
  }
}

async function deleteCluster(client: oke.ContainerEngineClient, clusterId: string) {
  const request: oke.requests.DeleteClusterRequest = { clusterId: clusterId };
  const response = await client.deleteCluster(request);
  const workRequestId: string = response.opcWorkRequestId;
  const workRequestResponse = await waitForWorkRequestFinished(client, workRequestId);

  if (isWorkRequestInSuccessState(workRequestResponse)) {
    const getClusterRequest: oke.requests.GetClusterRequest = { clusterId: clusterId };
    const response = await client.getCluster(getClusterRequest);
    console.log("Cluster lifecycle state is " + response.cluster.lifecycleState!);
  }
}

async function deleteSubnet(client: core.VirtualNetworkClient, subnet: core.models.Subnet) {
  const deleteSubnetRequest: core.requests.DeleteSubnetRequest = { subnetId: subnet.id };
  await client.deleteSubnet(deleteSubnetRequest);
  // const getSubnetRequest: core.requests.GetSubnetRequest = { subnetId: subnet.id };
  // // Wait for some time for subnet lifecycle staus changed to terminated.
  // await VirtualNetworkWaiter.forSubnet(
  //   getSubnetRequest,
  //   core.models.Subnet.LifecycleState.Terminated
  // );
}

async function deleteVcn(client: core.VirtualNetworkClient, vcn: core.models.Vcn) {
  const request: core.requests.DeleteVcnRequest = { vcnId: vcn.id };
  await client.deleteVcn(request);
  const getVcnRequest: core.requests.GetVcnRequest = { vcnId: vcn.id };
  // Wait for some time for VCN lifecycle staus changed to terminated.
  // await VirtualNetworkWaiter.forVcn(getVcnRequest, core.models.Vcn.LifecycleState.Terminated);
}

const run = main();
