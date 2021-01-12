/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import oke = require("oci-containerengine");
import core = require("oci-core");
import identity = require("oci-identity");
import wr = require("oci-workrequests");

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();
/**
 * This class provides an example of how to create a Container Engine node pool in the SDK for TypeScript.
 * It will create a VCN and three subnets, one Container Engine cluster and add one node pool in the cluster.
 * These will be deleted at the end. The class also makes some assumptions about
 * the resources it will create:
 *
 * <ul>:
 *   <li>The VCN created by this example will have a display name of ts_sdk_oke_example_vcn</li>
 *   <li>The subnet created by this example will have a display name of: ts_sdk_oke_example_subnet_1</li>
 *   <li>The subnet created by this example will have a display name of: ts_sdk_oke_example_subnet_2</li>
 *   <li>The subnet created by this example will have a display name of: ts_sdk_oke_example_subnet_3</li>
 *   <li>The VCN will have a private IP CIDR block of 10.0.0.0/16</li>
 *   <li>The subnets will have private IP CIDR blocks of 10.0.0.0/24, 10.0.1.0/24 and 10.0.2.0/24</li>
 *   <li>The cluster created will have hardcoded display names of ContainerEngineExampleCluster</li>
 *   <li>The node pool created will have hardcoded display names of ContainerEngineNodePoolExample</li>
 *   <li>The first two subnets are used for creating cluster</li>
 *   <li>The third subnet is used for creating node pool</li>
 *   <li>
 *      The configuration file used by service clients will be sourced from the default
 *      location (~/.oci/config) and the DEFAULT profile will be used
 *   </li>
 *   <li>Resources will be created in us-phoenix-1</li>
 *   <li>Resources will be created in the first AD returned from the ListAvailabilityDomains call</li>
 * <ul>
 */

const VCN_DISPLAY_NAME: string = "ts_sdk_oke_example_vcn";
const SUBNET_DISPLAY_NAMES: string[] = [
  "ts_sdk_oke_example_subnet_1",
  "ts_sdk_oke_example_subnet_2",
  "ts_sdk_oke_example_subnet_3"
];
const CIDR_BLOCK: string = "10.0.0.0/16";
const SUBNET_CIDR_BLOCKS: string[] = ["10.0.0.0/24", "10.0.1.0/24", "10.0.2.0/24"];
const CLUSTER_DISPLAY_NAME: string = "ContanerEngineClusterExample";
const NEW_NODE_POOL_DISPLAY_NAME: string = "ContainerEngineNodePoolNew";
const NODE_POOL_DISPLAY_NAME: string = "ContainerEngineNodePool";
const NODE_IMAGE_NAME: string = "Oracle-Linux-7.6";
const NODE_SHAPE: string = "VM.Standard1.1";
const NODE_METADATA: { [key: string]: string } = createNodeMetadata();
let clusterId = null;
let nodePoolId = null;

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

let vcn: core.models.Vcn;
let subnets: Array<core.models.Subnet> = new Array<core.models.Subnet>();
let lb_subnetIds: Array<string> = new Array<string>();
let pool_subnetIds: Array<string> = new Array<string>();
let cluster: oke.models.Cluster;
let nodePool: oke.models.NodePool;

(async () => {
  try {
    const availabilityDomains: Array<identity.models.AvailabilityDomain> = await getAvailabilityDomains(
      identityClient,
      compartmentId
    );
    const adToUse: identity.models.AvailabilityDomain = availabilityDomains[0];

    // A VCN and subnets are required to create a Container Engine Cluster
    vcn = await createVcn(vcnClient, compartmentId);
    console.log("Created VCN");
    for (let i = 0; i < 3; i++) {
      const subnet: core.models.Subnet = await createSubnet(
        vcnClient,
        compartmentId,
        adToUse,
        vcn.id,
        SUBNET_DISPLAY_NAMES[i],
        SUBNET_CIDR_BLOCKS[i]
      );
      subnets.push(subnet);
      if (i < 3) lb_subnetIds.push(subnet.id);
      else pool_subnetIds.push(subnet.id);
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
      [subnetIds[0], subnetIds[1]],
      kubernetesVersion,
      compartmentId
    );
    console.log("Created cluster");
    // Add node pool in the clusterx
    const quantityPerSubnet: number = 1;

    let keyValue: oke.models.KeyValue = { key: "key", value: "value" };
    let initialNodeLabels: Array<oke.models.KeyValue> = new Array<oke.models.KeyValue>();
    initialNodeLabels.push(keyValue);
    const availabilityDomain = adToUse.name || "";
    nodePool = await createNodePool(
      containerEngineClient,
      compartmentId,
      clusterId,
      NODE_POOL_DISPLAY_NAME,
      kubernetesVersion,
      NODE_IMAGE_NAME,
      NODE_SHAPE,
      NODE_METADATA,
      initialNodeLabels,
      availabilityDomain,
      [subnetIds[2]]
    );
    console.log("Created node pool");

    // Update Nodepool
    await updateNodePool(containerEngineClient, nodePoolId, NEW_NODE_POOL_DISPLAY_NAME);
    console.log("Updated Node Pool ");

    // Cleanup
    console.log("Clean up the resources");
    if (nodePool !== null) {
      await deleteNodePool(containerEngineClient, nodePoolId);
      console.log("Deleted node pool");
    }

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
    throw "Error running Container Engine nodepool example";
  }
})();

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

async function createNodePool(
  client: oke.ContainerEngineClient,
  compartmentId: string,
  clusterId: any,
  displayName: string,
  kubernetesVersion: string,
  nodeImageName: string,
  nodeShape: string,
  nodeMetaData: { [key: string]: string },
  initialNodeLabels: Array<oke.models.KeyValue>,
  availabilityDomain: string,
  subnetIds: Array<string>
): Promise<oke.models.NodePool> {
  let nodePool: any;
  const nodeConfigDetails: oke.models.CreateNodePoolNodeConfigDetails = {
    size: 1,
    placementConfigs: [
      {
        availabilityDomain: availabilityDomain,
        subnetId: subnetIds[0]
      }
    ]
  };
  const createNodePoolDetails: oke.models.CreateNodePoolDetails = {
    compartmentId: compartmentId,
    clusterId: clusterId,
    name: displayName,
    kubernetesVersion: kubernetesVersion,
    nodeImageName: nodeImageName,
    nodeShape: nodeShape,
    // nodeMetadata: nodeMetaData,
    initialNodeLabels: initialNodeLabels,
    // quantityPerSubnet: quantityPerSubnet,
    // subnetIds: subnetIds,
    nodeConfigDetails: nodeConfigDetails
  };
  const createNodePoolRequest: oke.requests.CreateNodePoolRequest = {
    createNodePoolDetails: createNodePoolDetails
  };

  const response = await client.createNodePool(createNodePoolRequest);
  const workRequestId: string = response.opcWorkRequestId;
  console.log("Create node pool work request ID is: " + workRequestId);

  const workRequestResponse = await waitForWorkRequestFinished(client, workRequestId);

  if (isWorkRequestInSuccessState(workRequestResponse)) {
    nodePoolId = await getWorkRequestResourceId(workRequestResponse, "nodepool");
    console.log("Node pool ID is: " + nodePoolId);
    const request: oke.requests.GetNodePoolRequest = { nodePoolId: nodePoolId };
    const response = await client.getNodePool(request);
    nodePool = response.nodePool;
  }
  return nodePool;
}

async function getWorkRequestResourceId(
  workRequestResponse: oke.responses.GetWorkRequestResponse,
  entityType: string
): Promise<any> {
  let resourceId = null;
  if (workRequestResponse.workRequest.resources !== undefined) {
    const resources: Array<oke.models.WorkRequestResource> = workRequestResponse.workRequest
      .resources!;
    for (let resource of resources) {
      if (resource.entityType === entityType) {
        resourceId = resource.identifier;
      }
    }
  }
  return resourceId;
}

async function updateNodePool(
  client: oke.ContainerEngineClient,
  nodePoolId: any,
  newNodePoolName: string
) {
  const updateNodePoolDetails: oke.models.UpdateNodePoolDetails = { name: newNodePoolName };
  const request: oke.requests.UpdateNodePoolRequest = {
    updateNodePoolDetails: updateNodePoolDetails,
    nodePoolId: nodePoolId
  };
  const response = await client.updateNodePool(request);
  const workRequestId = response.opcWorkRequestId;

  const workRequestResponse = await waitForWorkRequestFinished(client, workRequestId);

  if (isWorkRequestInSuccessState(workRequestResponse)) {
    const request: oke.requests.GetNodePoolRequest = { nodePoolId: nodePoolId };
    const response = await client.getNodePool(request);
    const nodePool: oke.models.NodePool = response.nodePool;
    console.log("Node pool name is changed to " + nodePool.name);
  }
}

async function deleteNodePool(client: oke.ContainerEngineClient, nodePoolId: any) {
  try {
    const request: oke.requests.DeleteNodePoolRequest = { nodePoolId: nodePoolId };
    const response = await client.deleteNodePool(request);
    const workRequestId: string = response.opcWorkRequestId;
    await waitForWorkRequestFinished(client, workRequestId);
  } catch (exception) {
    console.log("Caught Exception while delete node pool");
  }
}

async function deleteCluster(client: oke.ContainerEngineClient, clusterId: any) {
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
  // const getVcnRequest: core.requests.GetVcnRequest = { vcnId: vcn.id };
  // // Wait for some time for VCN lifecycle staus changed to terminated.
  // await VirtualNetworkWaiter.forVcn(getVcnRequest, core.models.Vcn.LifecycleState.Terminated);
}

function createNodeMetadata(): { [key: string]: string } {
  let result: { [key: string]: string } = {};
  result.key1 = "value1";
  result.key2 = "value2";
  return result;
}
