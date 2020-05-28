/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/* @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 *  <li>The first argument is the OCID of the tenancy.</li>
 *  <li>The second argument is the OCID of the compartment.</li>
 *  <li>The third argument is region.</li>
 * </ul>
 */

import common = require("oci-common");
import * as core from "oci-core";
import * as identity from "oci-identity";
import * as wr from "oci-workrequests";

const configurationFilePath = "~/.oci/config";
const configProfile = "DEFAULT";

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  configProfile
);

const args = process.argv.slice(2);
console.log(args);
if (args.length !== 3) {
  console.error(
    "Unexpected number of arguments received. Consult the script header comments for expected arguments"
  );
  process.exit(-1);
}

const tenancyId: string = args[0];
const compartmentId: string = args[1];
const region: string = args[2];

let subnetId: string | null = null;
let vcnId: string | null = null;
let instanceId: string | null = null;

const computeClient = new core.ComputeClient({ authenticationDetailsProvider: provider });
computeClient.regionId = region;

const workRequestClient = new wr.WorkRequestClient({ authenticationDetailsProvider: provider });
workRequestClient.regionId = region;

const computeWaiter = computeClient.createWaiters(workRequestClient);

const virtualNetworkClient = new core.VirtualNetworkClient({
  authenticationDetailsProvider: provider
});
virtualNetworkClient.regionId = region;

const virtualNetworkWaiter = virtualNetworkClient.createWaiters(workRequestClient);

const identityClient = new identity.IdentityClient({ authenticationDetailsProvider: provider });
identityClient.regionId = region;

async function getAvailabilityDomain(): Promise<identity.models.AvailabilityDomain> {
  const request: identity.requests.ListAvailabilityDomainsRequest = {
    compartmentId: tenancyId
  };

  const response = await identityClient.listAvailabilityDomains(request);
  return response.items[0];
}

async function getShape(
  availabilityDomain: identity.models.AvailabilityDomain
): Promise<core.models.Shape> {
  const request: core.requests.ListShapesRequest = {
    availabilityDomain: availabilityDomain.name,
    compartmentId: compartmentId
  };

  const response = await computeClient.listShapes(request);

  for (let shape of response.items) {
    if (shape.shape.startsWith("VM")) {
      return shape;
    }
  }

  return response.items[0];
}

async function getImage(
  shape: core.models.Shape,
  operatingSystem: string
): Promise<core.models.Image> {
  const request: core.requests.ListImagesRequest = {
    compartmentId: compartmentId,
    shape: shape.shape,
    operatingSystem: operatingSystem
  };

  const response = await computeClient.listImages(request);
  return response.items[0];
}

async function deleteSubnet() {
  try {
    if (subnetId) {
      const deleteSubnetRequest: core.requests.DeleteSubnetRequest = {
        subnetId: subnetId
      };

      await virtualNetworkClient.deleteSubnet(deleteSubnetRequest);

      const getSubnetRequest: core.requests.GetSubnetRequest = {
        subnetId: subnetId
      };

      await virtualNetworkWaiter.forSubnet(
        getSubnetRequest,
        core.models.Subnet.LifecycleState.TERMINATED
      );

      subnetId = null;
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteVcn() {
  try {
    if (vcnId) {
      const deleteVcnRequest: core.requests.DeleteVcnRequest = {
        vcnId: vcnId
      };

      await virtualNetworkClient.deleteVcn(deleteVcnRequest);

      const getVcnRequest: core.requests.GetVcnRequest = {
        vcnId: vcnId
      };

      await virtualNetworkWaiter.forVcn(getVcnRequest, core.models.Vcn.LifecycleState.TERMINATED);

      vcnId = null;
    }
  } catch (error) {
    console.log(error);
  }
}

async function terminateInstance() {
  try {
    if (instanceId) {
      const terminateInstanceRequest: core.requests.TerminateInstanceRequest = {
        instanceId: instanceId,
        preserveBootVolume: false
      };

      await computeClient.terminateInstance(terminateInstanceRequest);

      const getInstanceRequest: core.requests.GetInstanceRequest = {
        instanceId: instanceId
      };

      await computeWaiter.forInstance(
        getInstanceRequest,
        core.models.Instance.LifecycleState.TERMINATED
      );

      instanceId = null;
    }
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  try {
    const availabilityDomain = await getAvailabilityDomain();

    const shape = await getShape(availabilityDomain);
    const image = await getImage(shape, "Oracle Linux");

    const createVcnDetails: core.models.CreateVcnDetails = {
      cidrBlock: "10.0.0.0/16",
      compartmentId: compartmentId,
      displayName: "TypeScript-SDK-Example"
    };

    const createVcnRequest: core.requests.CreateVcnRequest = {
      createVcnDetails: createVcnDetails
    };

    const createVcnResponse = await virtualNetworkClient.createVcn(createVcnRequest);

    const getVcnRequest: core.requests.GetVcnRequest = {
      vcnId: createVcnResponse.vcn.id
    };

    const getVcnResponse = await virtualNetworkWaiter.forVcn(
      getVcnRequest,
      core.models.Vcn.LifecycleState.AVAILABLE
    );

    vcnId = getVcnResponse!.vcn.id;

    const createSubnetRequest: core.requests.CreateSubnetRequest = {
      createSubnetDetails: {
        cidrBlock: "10.0.0.0/16",
        compartmentId: compartmentId,
        displayName: "TypeScript-SDK-Example",
        vcnId: createVcnResponse.vcn.id
      }
    };

    const createSubnetResponse = await virtualNetworkClient.createSubnet(createSubnetRequest);

    const getSubnetRequest: core.requests.GetSubnetRequest = {
      subnetId: createSubnetResponse.subnet.id
    };

    await virtualNetworkWaiter.forSubnet(
      getSubnetRequest,
      core.models.Subnet.LifecycleState.AVAILABLE
    );

    subnetId = createSubnetResponse.subnet.id;

    const sourceDetails: core.models.InstanceSourceViaImageDetails = {
      imageId: image.id,
      sourceType: "image"
    };

    const launchInstanceDetails: core.models.LaunchInstanceDetails = {
      compartmentId: compartmentId,
      availabilityDomain: availabilityDomain.name ? availabilityDomain.name : "",
      shape: shape.shape,
      displayName: "TypeScript-SDK-Example",
      sourceDetails: sourceDetails,
      createVnicDetails: {
        subnetId: createSubnetResponse.subnet.id
      }
    };

    const launchInstanceRequest: core.requests.LaunchInstanceRequest = {
      launchInstanceDetails: launchInstanceDetails
    };

    const launchInstanceResponse = await computeClient.launchInstance(launchInstanceRequest);

    const getInstanceReqeust: core.requests.GetInstanceRequest = {
      instanceId: launchInstanceResponse.instance.id
    };

    const getInstanceResponse = await computeWaiter.forInstance(
      getInstanceReqeust,
      core.models.Instance.LifecycleState.RUNNING
    );
    instanceId = getInstanceResponse!.instance.id;

    for await (const instance of computeClient.listAllInstances({ compartmentId: compartmentId })) {
      console.log(
        `${instance.displayName} [${instance.id}] current status is ${instance.lifecycleState}`
      );
    }
  } catch (error) {
    console.log("Error executing example" + error);
  } finally {
    await terminateInstance();
    await deleteSubnet();
    await deleteVcn();

    console.debug("DONE");
  }
})();
