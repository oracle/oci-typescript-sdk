/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import fs = require("oci-filestorage");
import core = require("oci-core");
import identity = require("oci-identity");
import wr = require("oci-workrequests");
import common = require("oci-common");

var randomNumber = require("random-number-csprng");

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();

/**
 * This file provides an example of how to use the File Storage service in the SDK for TypeScript.
 *
 * In order to demonstrate functionality for mount targets and export sets, this script will also create a VCN
 * and subnet. These will be deleted at the end of the script. This script also makes some assumptions about
 * the resources it will create:
 *
 * <ul>
 *   <li>The VCN created by this example will have a display name of ts_sdk_fs_example_vcn</li>
 *   <li>The subnet created by this example will have a display name of: ts_sdk_fs_example_subnet</li>
 *   <li>The VCN and subnet will have a private IP CIDR block of 10.0.0.0/16</li>
 *   <li>The file system export created by this example will have a path of /files</li>
 *   <li>Resources will be created in us-phoenix-1</li>
 *   <li>Resources will be created in the first AD returned from the ListAvailabilityDomains call</li>
 * <ul>
 */

const VCN_DISPLAY_NAME: string = "ts_sdk_fs_example_vcn";
const SUBNET_DISPLAY_NAME: string = "ts_sdk_fs_example_subnet";
const CIDR_BLOCK: string = "10.0.0.0/16";
const EXPORT_PATH: string = "/files";

const RETRY_TOKEN_LENGTH: number = 32;
const RETRY_TOKEN_CHARS: string[] = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
  ""
);
const DELETE_SUBNET_ATTEMPTS: number = 5;

/**
 * The entry point for the example.
 *
 * @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 *   <li>The OCID of the compartment where the file system and related resources will be created</li>
 *   <li>The display name of the file system</li>
 * </ul>
 */

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.error(
    "Unexpected number of arguments received. Consult the script header comments for expected arguments"
  );
  process.exit(-1);
}

const compartmentId: string = args[0];
const fileSystemDisplayName: string = args[1];

const fsClient: fs.FileStorageClient = new fs.FileStorageClient({
  authenticationDetailsProvider: provider
});
const vcnClient: core.VirtualNetworkClient = new core.VirtualNetworkClient({
  authenticationDetailsProvider: provider
});
const identityClient: identity.IdentityClient = new identity.IdentityClient({
  authenticationDetailsProvider: provider
});
const workRequestClient = new wr.WorkRequestClient({ authenticationDetailsProvider: provider });

const filestorageWaiter = fsClient.createWaiters();
const vcnWaiter = vcnClient.createWaiters(workRequestClient);
let vcn: core.models.Vcn;
let subnet: core.models.Subnet;
let fileSystem: fs.models.FileSystem;
let mountTarget: fs.models.MountTarget;
let snapshot: fs.models.Snapshot;
let exportModel: fs.models.Export;

(async () => {
  try {
    const availabilityDomains: Array<identity.models.AvailabilityDomain> = await getAvailabilityDomains(
      identityClient,
      compartmentId
    );
    const adToUse = availabilityDomains[0];

    // A VCN and subnet is required to create a mount target
    vcn = await createVcn(vcnClient, compartmentId);
    subnet = await createSubnet(vcnClient, compartmentId, adToUse, vcn.id);
    console.log("Created VCN and subnet");

    /*
     * Here we demonstrate:
     *
     *     - Creating a new file system
     *     - Creating a mount target via which the file system can be accessed. The mount target and file system must
     *       be in the same availability domain in order to export the file system from the mount target
     *     - Creating an export so that we can mount the file system (see
     *       https://docs.cloud.oracle.com/Content/File/Tasks/mountingfilesystems.htm for more information)
     *     - Creating a snapshot of the file system
     *
     * And we'll delete these resources when we're done
     */
    fileSystem = await createFileSystem(fsClient, compartmentId, fileSystemDisplayName, adToUse);

    mountTarget = await createMountTarget(
      fsClient,
      vcnClient,
      compartmentId,
      fileSystemDisplayName + "-mnt",
      adToUse,
      subnet
    );

    await getExportSet(fsClient, mountTarget.exportSetId!);
    exportModel = await createExport(fsClient, fileSystem.id, mountTarget.exportSetId!);

    await listExports(fsClient, compartmentId, fileSystem, mountTarget);

    snapshot = await createSnapshot(fsClient, fileSystem);
    console.log("Clean Up");
    console.log("==========");

    if (snapshot !== undefined) {
      await deleteSnapshot(fsClient, snapshot);
      console.log("Deleted snapshot");
    }

    if (exportModel !== undefined) {
      await deleteExport(fsClient, exportModel);
      console.log("Deleted export");
    }

    if (mountTarget !== undefined) {
      await deleteMountTarget(fsClient, mountTarget);
      console.log("Deleted mount target");
    }

    if (fileSystem !== undefined) {
      await deleteFileSystem(fsClient, fileSystem);
      console.log("Deleted file system");
    }

    if (subnet !== undefined) {
      await deleteSubnet(vcnClient, subnet);
      console.log("Deleted subnet");
    }

    if (vcn !== undefined) {
      await deleteVcn(vcnClient, vcn);
      console.log("Deleted VCN");
    }
  } catch (error) {
    throw " Not able to execut File Storage example. Error:" + error;
  }
})();

/**
 * Retrieves a list of availability domains in a compartment.
 *
 * @param identityClient the client to use to retrieve the availability domains
 * @param compartmentId the OCID of the compartment whose availability domains we're listing
 *
 * @return a list of all availability domains in a compartment
 */
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

/**
 * Creates a VCN and waits for it to become available to use.
 *
 * @param vcnClient the service client to use to create the VCN
 * @param compartmentId the OCID of the compartment where the VCN will be created
 *
 * @return the created VCN
 */
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
  const getVcnResponse = await vcnWaiter.forVcn(
    getVcnRequest,
    core.models.Vcn.LifecycleState.Available
  );
  return getVcnResponse!.vcn;
}

/**
 * Creates a subnet in a VCN and waits for the subnet to become available to use.
 *
 * @param vcnClient the service client to use to create the subnet
 * @param compartmentId the OCID of the compartment which owns the VCN
 * @param availabilityDomain the availability domain where the subnet will be created
 * @param vcnId the ID of the VCN which will own the subnet
 *
 * @return the created subnet
 */
async function createSubnet(
  client: core.VirtualNetworkClient,
  compartmentId: string,
  availabilityDomain: identity.models.AvailabilityDomain,
  vcnId: string
): Promise<core.models.Subnet> {
  const createSubnetDetails: core.models.CreateSubnetDetails = {
    availabilityDomain: availabilityDomain.name,
    compartmentId: compartmentId,
    displayName: SUBNET_DISPLAY_NAME,
    vcnId: vcnId,
    cidrBlock: CIDR_BLOCK
  };
  const request: core.requests.CreateSubnetRequest = { createSubnetDetails: createSubnetDetails };
  const response = await client.createSubnet(request);
  // Wait for subnet to become Avaialable
  const getSubnetRequest: core.requests.GetSubnetRequest = { subnetId: response.subnet.id };
  const getSubnetResponse = await vcnWaiter.forSubnet(
    getSubnetRequest,
    core.models.Subnet.LifecycleState.Available
  );
  return getSubnetResponse!.subnet;
}

/**
 * Creates a file system and waits for it to become available. We recommend using a retry token on these requests
 * so that if you receive a timeout or server error and need to retry the request you won't run the risk of
 * creating multiple resources.
 *
 * @param fsClient the service client to use to create the File System
 * @param compartmentId the OCID of the compartment where the file system will be created
 * @param availabilityDomain the availability domain where the file system will be created
 *
 * @return the created file system
 */
async function createFileSystem(
  client: fs.FileStorageClient,
  compartmentId: string,
  fileSystemDisplayName: string,
  adToUse: identity.models.AvailabilityDomain
): Promise<fs.models.FileSystem> {
  console.log("Creating file system");
  console.log("=======================================");

  const retryToken: string = await getRetryToken(RETRY_TOKEN_LENGTH);

  /* supports freefromTags and definedTags */
  const createFileSystemDetails: fs.models.CreateFileSystemDetails = {
    displayName: fileSystemDisplayName,
    compartmentId: compartmentId,
    availabilityDomain: adToUse.name!
  };
  const request: fs.requests.CreateFileSystemRequest = {
    createFileSystemDetails: createFileSystemDetails,
    opcRetryToken: retryToken
  };
  const response = await client.createFileSystem(request);
  console.log("Created file system: " + response.fileSystem);

  console.log("Waited for file system to become available");
  const getFsSyetemRequest: fs.requests.GetFileSystemRequest = {
    fileSystemId: response.fileSystem.id
  };
  const getFileSystemResponse = await filestorageWaiter.forFileSystem(
    getFsSyetemRequest,
    fs.models.FileSystem.LifecycleState.Active
  );
  /*
   * If we try and send through the same request with the same retry token then this will not create a
   * new resource. Instead, the create response will contain the same resource which has already been
   * created
   */
  const createFileSystemRequestRetry: fs.requests.CreateFileSystemRequest = {
    createFileSystemDetails: createFileSystemDetails,
    opcRetryToken: retryToken
  };
  const createWithRetryTokenResponse = await client.createFileSystem(createFileSystemRequestRetry);
  console.log(
    "Try and create the file system again with the same retry token: " +
      createWithRetryTokenResponse.fileSystem
  );
  console.log(
    "same resource? " + createWithRetryTokenResponse.fileSystem.id ===
      getFileSystemResponse!.fileSystem.id
  );

  return getFileSystemResponse!.fileSystem;
}
/**
 * Creates a mount target and waits for it to become available. We recommend using a retry token on these requests
 * so that if you receive a timeout or server error and need to retry the request you won't run the risk of
 * creating multiple resources.
 *
 * This creates a mount target WITHOUT specifying a hostname. This means that the mount target will only be accessible
 * via its private IP address.
 *
 * @param fsClient the service client to use to create the mount target
 * @param vcnClient a client used to communiate with the Virtual Networking service
 * @param compartmentId the OCID of the compartment where the file system will be created
 * @param displayName the display name of the mount target
 * @param availabilityDomain the availability domain where the file system will be created
 * @param subnet the subnet where the mount target will reside. If no private IP address is explicitly specified at
 * creation time then the mount target will be assigned a free private IP address from the subnet
 *
 * @return the created mount target
 */
async function createMountTarget(
  fsClient: fs.FileStorageClient,
  vcnClient: core.VirtualNetworkClient,
  compartmentId: string,
  displayName: string,
  availabilityDomain: any,
  subnet: core.models.Subnet
): Promise<fs.models.MountTarget> {
  console.log("Creating mount target");
  console.log("=======================================");

  const retryToken = await getRetryToken(RETRY_TOKEN_LENGTH);

  /* supports freefromTags and definedTags */
  const createMountTargetDetails: fs.models.CreateMountTargetDetails = {
    availabilityDomain: availabilityDomain.name,
    subnetId: subnet.id,
    compartmentId: compartmentId,
    displayName: displayName
  };
  const createMountTargetRequest: fs.requests.CreateMountTargetRequest = {
    createMountTargetDetails: createMountTargetDetails,
    opcRetryToken: retryToken
  };

  const createMountTargetResponse = await fsClient.createMountTarget(createMountTargetRequest);
  console.log("Created mount target: " + createMountTargetResponse.mountTarget);
  // Wait for sometime for kount target to be active.
  console.log(" waiting for mount target to be active");
  const getMtTargetRequest: fs.requests.GetMountTargetRequest = {
    mountTargetId: createMountTargetResponse.mountTarget.id
  };
  const getMountTargetResponse = await filestorageWaiter.forMountTarget(
    getMtTargetRequest,
    fs.models.MountTarget.LifecycleState.Active
  );

  /*
   * If we try and send through the same request with the same retry token then this will not create a
   * new resource. Instead, the create response will contain the same resource which has already been
   * created
   */
  const requestWithRetryToken: fs.requests.CreateMountTargetRequest = {
    createMountTargetDetails: createMountTargetDetails,
    opcRetryToken: retryToken
  };
  const createWithRetryTokenResponse = await fsClient.createMountTarget(requestWithRetryToken);
  console.log(
    "Try and create the mount target again with the same retry token: " +
      createWithRetryTokenResponse.mountTarget
  );
  console.log(
    " Same Resource?" + createWithRetryTokenResponse.mountTarget.id ===
      getMountTargetResponse!.mountTarget.id
  );

  const getMtTargetReq: fs.requests.GetMountTargetRequest = {
    mountTargetId: getMountTargetResponse!.mountTarget.id
  };
  const getMtTargetRes = await fsClient.getMountTarget(getMtTargetReq);

  /*
   * Note that the MountTarget contains an array of private IP OCIDs. In order to get the
   * IP address of the MountTarget, we can use VirtualNetworkClient's getPrivateIp() method
   */
  const mountTargetPrivateIpId: string = getMtTargetRes.mountTarget.privateIpIds[0];
  const privateIpRequest: core.requests.GetPrivateIpRequest = {
    privateIpId: mountTargetPrivateIpId
  };
  const getPrivateIpResponse = await vcnClient.getPrivateIp(privateIpRequest);
  console.log("Mount target private Ip:" + getPrivateIpResponse.privateIp);

  return getMountTargetResponse!.mountTarget;
}

/**
 * Retrieves the details of an export set for a mount target
 *
 * @param exportSetId the OCID of the export set (obtained from a MountTarget)
 */
async function getExportSet(client: fs.FileStorageClient, exportSetId: string) {
  console.log("Get export set for mount target");
  console.log("===============================");

  const request: fs.requests.GetExportSetRequest = { exportSetId: exportSetId };
  const response = await client.getExportSet(request);

  console.log("Export set for mount target: " + response.exportSet);
}

/**
 * Creates an export and waits for it to become available. This export enables us to access the file system
 * via the mount target. We recommend using a retry token on these requests
 * so that if you receive a timeout or server error and need to retry the request you won't run the risk of
 * creating multiple resources.
 *
 * There are rules around export paths and file system associations which you should review here:
 * https://docs.cloud.oracle.com/api/#/en/filestorage/20171215/Export/
 *
 * @param fsClient the service client to use to create the export
 * @param fileSystemId the OCID of the file system to associate with the export
 * @param exportSetId the OCID of the MountTarget's export set
 *
 * @return the created export
 */

async function createExport(
  client: fs.FileStorageClient,
  fileSystemId: string,
  exportSetId: string
): Promise<fs.models.Export> {
  console.log("Creating export");
  console.log("=================");

  const retryToken = await getRetryToken(RETRY_TOKEN_LENGTH);

  const createDetails: fs.models.CreateExportDetails = {
    exportSetId: exportSetId,
    fileSystemId: fileSystemId,
    path: EXPORT_PATH
  };
  const createExportRequest: fs.requests.CreateExportRequest = {
    createExportDetails: createDetails,
    opcRetryToken: retryToken
  };

  const response = await client.createExport(createExportRequest);
  console.log("Created export: " + response.export);

  console.log("Waiting for export to become available");
  const getExportRequest: fs.requests.GetExportRequest = { exportId: response.export.id };
  const getExportResponse = await filestorageWaiter.forExport(
    getExportRequest,
    fs.models.Export.LifecycleState.Active
  );
  /*
   * If we try and send through the same request with the same retry token then this will not create a
   * new resource. Instead, the create response will contain the same resource which has already been
   * created
   */
  const createExportWithRetryRequest: fs.requests.CreateExportRequest = {
    createExportDetails: createDetails,
    opcRetryToken: retryToken
  };
  const createExportWithRetryResponse = await client.createExport(createExportWithRetryRequest);
  console.log("Try and create the export again with the same retry token");

  console.log(
    "same Resource? " + createExportWithRetryResponse.export.id === getExportResponse!.export.id
  );
  return getExportResponse!.export;
}

/**
 * Demonstrates how to list exports and using various criteria. Note that listing exports is a paginated call, so we should
 * get all pages until there is no more opcNextPage token
 *
 * @param fsClient the service client used to communicate with the File Storage service
 * @param compartmentId the OCID of the compartment which owns the resources
 * @param fileSystem the file system which we're working with
 * @param mountTarget the mount target which we're working with
 */
async function listExports(
  client: fs.FileStorageClient,
  compartmentId: string,
  fileSystem: fs.models.FileSystem,
  mountTarget: fs.models.MountTarget
) {
  const listExportRequest: fs.requests.ListExportsRequest = { compartmentId: compartmentId };

  // The most basic call is to list exports by comparment ID
  console.log(" Listing exports by compartment Id");
  let listExportResponse: fs.responses.ListExportsResponse;
  do {
    listExportResponse = await client.listExports(listExportRequest);
    for (let e of listExportResponse.items) {
      console.log("Export Set : " + e);
    }
    listExportRequest.page = listExportResponse.opcNextPage;
  } while (listExportResponse.opcNextPage != null);

  // We can find all exports in a given export set
  listExportRequest.page = undefined;
  listExportRequest.exportSetId = mountTarget.exportSetId;

  console.log(" Listing exports by Export Set");
  do {
    listExportResponse = await client.listExports(listExportRequest);
    for (let e of listExportResponse.items) {
      console.log("Export Set : " + e);
    }
    listExportRequest.page = listExportResponse.opcNextPage;
  } while (listExportResponse.opcNextPage != null);

  // We can find all exports for a given file system
  listExportRequest.page = undefined;
  listExportRequest.fileSystemId = fileSystem.id;

  console.log(" Listing exports by File System");
  do {
    listExportResponse = await client.listExports(listExportRequest);
    for (let e of listExportResponse.items) {
      console.log("Export Set : " + e);
    }
    listExportRequest.page = listExportResponse.opcNextPage;
  } while (listExportResponse.opcNextPage != null);
}

/**
 * Creates a point in time snapshot of a file system and waits for it to become available. Note that snapshot
 * names are immutable and must be unique amongst all non-DELETED snapshots for a file system.
 *
 * We recommend using a retry token on these requests so that if you receive a timeout or server error
 * and need to retry the request you won't run the risk of creating multiple resources.
 *
 * @param fsClient the service client used to communicate with the File Storage service
 * @param fileSystem the file system to create the snapshot of
 */

async function createSnapshot(
  client: fs.FileStorageClient,
  fileSystem: fs.models.FileSystem
): Promise<fs.models.Snapshot> {
  console.log("Creating snapshot");
  console.log("====================");

  const retryToken: string = await getRetryToken(RETRY_TOKEN_LENGTH);
  /* supports freefromTags and definedTags */
  const createSnapshotDetails: fs.models.CreateSnapshotDetails = {
    name: "Example_SnapShot",
    fileSystemId: fileSystem.id
  };
  const createSnapshotRequest: fs.requests.CreateSnapshotRequest = {
    createSnapshotDetails: createSnapshotDetails,
    opcRetryToken: retryToken
  };

  const createSnapshotResponse = await client.createSnapshot(createSnapshotRequest);
  console.log("created snapshot" + createSnapshotResponse.snapshot);

  console.log("Waiting for snapshot to become available");
  const getSnapShotRequest: fs.requests.GetSnapshotRequest = {
    snapshotId: createSnapshotResponse.snapshot.id
  };

  const getSnapShotResponse = await filestorageWaiter.forSnapshot(
    getSnapShotRequest,
    fs.models.Snapshot.LifecycleState.Active
  );

  /*
   * If we try and send through the same request with the same retry token then this will not create a
   * new resource. Instead, the create response will contain the same resource which has already been
   * created
   */
  const createSnapshotRequestWithRetry: fs.requests.CreateSnapshotRequest = {
    createSnapshotDetails: createSnapshotDetails,
    opcRetryToken: retryToken
  };

  const createSnapshotResponseRetry = await client.createSnapshot(createSnapshotRequestWithRetry);
  console.log("created snapshot" + createSnapshotResponseRetry.snapshot);

  console.log(
    " same resource? " + createSnapshotResponseRetry.snapshot.id ===
      getSnapShotResponse!.snapshot.id
  );
  return getSnapShotResponse!.snapshot;
}

/**
 * Deletes a snapshot and waits for it to be deleted.
 *
 * @param fsClient the service client used to communicate with the File Storage service
 * @param snapshot the snapshot to delete
 */

async function deleteSnapshot(client: fs.FileStorageClient, snapshot: fs.models.Snapshot) {
  const request: fs.requests.DeleteSnapshotRequest = { snapshotId: snapshot.id };
  await client.deleteSnapshot(request);
  // Waiting for snapshot to be deleted
  const getSnapshotRequest: fs.requests.GetSnapshotRequest = { snapshotId: snapshot.id };
  await filestorageWaiter.forSnapshot(
    getSnapshotRequest,
    fs.models.Snapshot.LifecycleState.Deleted
  );
}

/**
 * Deletes an export and waits for it to be deleted.
 *
 * @param fsClient the service client used to communicate with the File Storage service
 * @param export the export to delete
 */
async function deleteExport(client: fs.FileStorageClient, exportModel: fs.models.Export) {
  const request: fs.requests.DeleteExportRequest = { exportId: exportModel.id };
  await client.deleteExport(request);
  // Waiting for export to be deleted
  const getExportRequest: fs.requests.GetExportRequest = { exportId: exportModel.id };
  await filestorageWaiter.forExport(getExportRequest, fs.models.Export.LifecycleState.Deleted);
}

/**
 * Deletes a mount target and waits for it to be deleted.
 *
 * @param fsClient the service client used to communicate with the File Storage service
 * @param mountTarget the mount target to delete
 *
 * @throws Exception if there is an error waiting on the mount target to be deleted
 */

async function deleteMountTarget(client: fs.FileStorageClient, mountTarget: fs.models.MountTarget) {
  const request: fs.requests.DeleteMountTargetRequest = { mountTargetId: mountTarget.id };
  await client.deleteMountTarget(request);
  // Waiting for mount target to be deleted
  const getMountTargetRequest: fs.requests.GetMountTargetRequest = {
    mountTargetId: mountTarget.id
  };
  await filestorageWaiter.forMountTarget(
    getMountTargetRequest,
    fs.models.MountTarget.LifecycleState.Deleted
  );
}

/**
 * Deletes a file system and waits for it to be deleted.
 *
 * @param fsClient the service client used to communicate with the File Storage service
 * @param fileSystem the file system to delete
 */
async function deleteFileSystem(client: fs.FileStorageClient, fileSystem: fs.models.FileSystem) {
  const request: fs.requests.DeleteFileSystemRequest = { fileSystemId: fileSystem.id };
  await client.deleteFileSystem(request);
  // Waiting for File System to be deleted
  const getFileSystemRequest: fs.requests.GetFileSystemRequest = { fileSystemId: fileSystem.id };
  await filestorageWaiter.forFileSystem(
    getFileSystemRequest,
    fs.models.FileSystem.LifecycleState.Deleted
  );
}

/**
 * Deletes a subnet and waits for it to be deleted.
 *
 * @param vcnClient the service client to use to delete the subnet
 * @param subnet the subnet to delete
 */

async function deleteSubnet(client: core.VirtualNetworkClient, subnet: core.models.Subnet) {
  /*
   * Sometimes we can't delete the subnet straight after a mount target has been deleted
   * as network resources still need to clear. If we get a conflict, try a few times before
   * bailing out.
   */
  let numAttempts: number = 0;
  while (true) {
    try {
      const deleteSubnetRequest: core.requests.DeleteSubnetRequest = { subnetId: subnet.id };
      await client.deleteSubnet(deleteSubnetRequest);
      break;
    } catch (e) {
      numAttempts++;
      if (e.statusCode === 409 && numAttempts < DELETE_SUBNET_ATTEMPTS) {
        await delay(10);
      } else {
        throw e;
      }
    }
  }
  // Wait for subnet to be deleted.
  await delay(10);
}

/**
 * Deletes a VCN and waits for it to be deleted.
 *
 * @param vcnClient the service client to use to delete the VCN
 * @param vcn the VCN to delete
 */
async function deleteVcn(client: core.VirtualNetworkClient, vcn: core.models.Vcn) {
  const request: core.requests.DeleteVcnRequest = { vcnId: vcn.id };
  await client.deleteVcn(request);
  // wait for VCN to be deleted
  // NOTE: Not needed because VCN gets delete already. When getting the Request, it won't be found.
  // const getVcnRequest: core.requests.GetVcnRequest = { vcnId: vcn.id };
  // await vcnWaiter.forVcn(getVcnRequest, core.models.Vcn.LifecycleState.Terminated);
}

/**
 * Generates a retry token that we can use as the opc-retry-token in a request.
 *
 * @param tokenLength the length of the token
 *
 * @return A retry token
 */
async function getRetryToken(tokenLength: number): Promise<string> {
  let c: string = "";
  for (let i = 0; i < tokenLength; i++) {
    c = c + RETRY_TOKEN_CHARS[await randomNumber(0, RETRY_TOKEN_CHARS.length)];
  }
  return c;
}

async function delay(s: number) {
  return new Promise(resolve => setTimeout(resolve, s * 1000));
}
