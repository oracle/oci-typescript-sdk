/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 * This script provides an example on how to enable realm specific endpoints for the service. This example uses
 * ObjectStorageClient as the example client
 * @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 * <li>The first argument is the OCID of the compartment.</li>
 * <li>The second is the name of bucket to create and later fetch</li>
 * </ul>
 */

import os = require("oci-objectstorage");
import common = require("oci-common");

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();
const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error(
    "Unexpected number of arguments received. Consult the script header comments for expected arguments"
  );
  process.exit(-1);
}

const compartmentId: string = args[0];
const bucket: string = args[1];

const client = new os.ObjectStorageClient({ authenticationDetailsProvider: provider });

// Enable realm specific endpoint template for the Object Storage Client
client.useRealmSpecificEndpointTemplate = true;

(async () => {
  try {
    console.log("Getting the namespace...");
    const request: os.requests.GetNamespaceRequest = {};
    const response = await client.getNamespace(request);
    const namespace = response.value;

    console.log("Creating the source bucket.");
    const bucketDetails: os.models.CreateBucketDetails = {
      name: bucket,
      compartmentId: compartmentId
    };
    const createBucketRequest: os.requests.CreateBucketRequest = {
      namespaceName: namespace,
      createBucketDetails: bucketDetails
    };
    const createBucketResponse = await client.createBucket(createBucketRequest);
    console.log("Create Bucket executed successfully" + createBucketResponse);

    console.log("Bucket is created. Fetch the bucket.");
    const getBucketRequest: os.requests.GetBucketRequest = {
      namespaceName: namespace,
      bucketName: bucket
    };
    const getBucketResponse = await client.getBucket(getBucketRequest);
    console.log("Get bucket executed successfully." + getBucketResponse.bucket);
  } catch (error) {
    console.log("Error executing example " + error);
  }
})();
