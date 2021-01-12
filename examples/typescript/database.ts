/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 *  @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 *  <li>The first argument is the OCID of the tenancy.</li>
 *  <li>The second argument is the OCID of the compartment.</li>
 *  <li>The third argument is new password for DB System.</li>
 * </ul>
 */
import common = require("oci-common");

import * as database from "oci-database";
import * as core from "oci-core";
import * as identity from "oci-identity";
import * as wr from "oci-workrequests";

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();

const args = process.argv.slice(2);
console.log(args);
if (args.length !== 4) {
  console.error(
    "Unexpected number of arguments received. Consult the script header comments for expected arguments"
  );
  process.exit(-1);
}

const tenancyId: string = args[0];
const compartmentId: string = args[1];
const adminPassword: string = args[2];

let subnetId: string | null = null;
let vcnId: string | null = null;
let dbSystemId: string | null = null;

const virtualNetworkClient = new core.VirtualNetworkClient({
  authenticationDetailsProvider: provider
});

const workRequestClient = new wr.WorkRequestClient({ authenticationDetailsProvider: provider });

const virtualNetworkWaiter = virtualNetworkClient.createWaiters(workRequestClient);

const identityClient = new identity.IdentityClient({ authenticationDetailsProvider: provider });

const databaseClient = new database.DatabaseClient({ authenticationDetailsProvider: provider });
// databaseClient._defaultHeaders = { "opc-host-serial": "FakeHostSerial" };

const databaseWaiter = databaseClient.createWaiters(workRequestClient);

async function getAvailabilityDomain(): Promise<identity.models.AvailabilityDomain> {
  const request: identity.requests.ListAvailabilityDomainsRequest = {
    compartmentId: tenancyId
  };

  const response = await identityClient.listAvailabilityDomains(request);
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
        core.models.Subnet.LifecycleState.Terminated
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

      await virtualNetworkWaiter.forVcn(getVcnRequest, core.models.Vcn.LifecycleState.Terminated);

      vcnId = null;
    }
  } catch (error) {
    console.log(error);
  }
}

async function terminateDbSystem() {
  try {
    if (dbSystemId) {
      const terminateDbSystemRequest: database.requests.TerminateDbSystemRequest = {
        dbSystemId: dbSystemId
      };

      await databaseClient.terminateDbSystem(terminateDbSystemRequest);

      const getDbSystemRequest: database.requests.GetDbSystemRequest = {
        dbSystemId: dbSystemId
      };

      await databaseWaiter.forDbSystem(
        getDbSystemRequest,
        database.models.DbSystem.LifecycleState.Terminated
      );

      dbSystemId = null;
    }
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  try {
    const availabilityDomain = await getAvailabilityDomain();

    const createVcnDetails: core.models.CreateVcnDetails = {
      cidrBlock: "10.0.0.0/16",
      compartmentId: compartmentId,
      displayName: "typescript-sdk-example",
      dnsLabel: "typescriptsdk"
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
      core.models.Vcn.LifecycleState.Available
    );

    vcnId = getVcnResponse!.vcn.id;

    const createSubnetRequest: core.requests.CreateSubnetRequest = {
      createSubnetDetails: {
        cidrBlock: "10.0.0.0/16",
        compartmentId: compartmentId,
        displayName: "typescript-sdk-example",
        dnsLabel: "typescriptsdk",
        vcnId: createVcnResponse.vcn.id
      }
    };

    const createSubnetResponse = await virtualNetworkClient.createSubnet(createSubnetRequest);

    const getSubnetRequest: core.requests.GetSubnetRequest = {
      subnetId: createSubnetResponse.subnet.id
    };

    const getSubnetResponse = await virtualNetworkWaiter.forSubnet(
      getSubnetRequest,
      core.models.Subnet.LifecycleState.Available
    );

    subnetId = getSubnetResponse!.subnet.id;

    const launchDbSystemDetails: database.models.LaunchDbSystemDetails = {
      availabilityDomain: availabilityDomain.name ? availabilityDomain.name : "",
      dbHome: {
        dbVersion: "12.1.0.2",
        displayName: "Example DB Home",
        database: {
          dbName: "tsdb",
          adminPassword: adminPassword
        }
      },
      compartmentId: compartmentId,
      cpuCoreCount: 4,
      databaseEdition: database.models.LaunchDbSystemDetails.DatabaseEdition.EnterpriseEdition,
      displayName: "typescript database",
      hostname: "typescript-sdk-example-db-host",
      shape: "BM.DenseIO1.36",
      sshPublicKeys: [
        "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAyyA8wePstPC69PeuHFtOwyTecByonsHFAjHbVnZ+h0dpomvLZxUtbknNj3+c7MPYKqKBOx9gUKV/diR/mIDqsb405MlrI1kmNR9zbFGYAAwIH/Gxt0Lv5ffwaqsz7cECHBbMojQGEz3IH3twEvDfF6cu5p00QfP0MSmEi/eB+W+h30NGdqLJCziLDlp409jAfXbQm/4Yx7apLvEmkaYSrb5f/pfvYv1FEV1tS8/J7DgdHUAWo6gyGUUSZJgsyHcuJT7v9Tf0xwiFWOWL9WsWXa9fCKqTeYnYJhHlqfinZRnT/+jkz0OZ7YmXo6j4Hyms3RCOqenIX1W6gnIn+eQIkw== This is the key's comment"
      ],
      subnetId: subnetId,
      source: "NONE"
    };

    const launchDbSystemRequest: database.requests.LaunchDbSystemRequest = {
      launchDbSystemDetails: launchDbSystemDetails
    };

    const launchDbSystemResponse = await databaseClient.launchDbSystem(launchDbSystemRequest);

    const getDbSystemRequest: database.requests.GetDbSystemRequest = {
      dbSystemId: launchDbSystemResponse.dbSystem.id
    };

    const getDbSystemResponse = await databaseWaiter.forDbSystem(
      getDbSystemRequest,
      database.models.DbSystem.LifecycleState.Available
    );
    dbSystemId = getDbSystemResponse!.dbSystem.id;
  } catch (error) {
    console.log("Error executing example" + error);
  } finally {
    await terminateDbSystem();
    await deleteSubnet();
    await deleteVcn();

    console.debug("DONE");
  }
})();
