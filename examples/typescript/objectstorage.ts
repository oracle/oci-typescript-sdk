/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 * @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 * <li>The first argument is the OCID of the compartment.</li>
 * <li>The second is the name of bucket to create and later fetch</li>
 * <li>The third is the name of object to create inside bucket</li>
 * <li>The fourth is the path of the file. i.e: "/Users/File/location";
 * </ul>
 * Note: there is a 2GB for 64-bit machine and 1GB for 32-bit machine buffer limitation from the NodeJS V8 Engine
 * Cannot upload file size greater than the limit
 */

import os = require("oci-objectstorage");
import common = require("oci-common");
import st = require("stream");
import { createReadStream, statSync } from "fs";
import { NodeFSBlob } from "oci-objectstorage";

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();
const args = process.argv.slice(2);
console.log(args);
if (args.length !== 4) {
  console.error(
    "Unexpected number of arguments received. Consult the script header comments for expected arguments"
  );
  process.exit(-1);
}

const compartmentId: string = args[0];
const bucket: string = args[1];
const object: string = args[2];
const fileLocation: string = args[3];

const client = new os.ObjectStorageClient({ authenticationDetailsProvider: provider });

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

    // Create read stream to file
    const stats = statSync(fileLocation);
    const nodeFsBlob = new NodeFSBlob(fileLocation, stats.size);
    const objectData = await nodeFsBlob.getData();

    console.log("Bucket is created. Now adding object to the Bucket.");
    const putObjectRequest: os.requests.PutObjectRequest = {
      namespaceName: namespace,
      bucketName: bucket,
      putObjectBody: objectData,
      objectName: object,
      contentLength: stats.size
    };
    const putObjectResponse = await client.putObject(putObjectRequest);
    console.log("Put Object executed successfully" + putObjectResponse);

    console.log("Fetch the object created");
    const getObjectRequest: os.requests.GetObjectRequest = {
      objectName: object,
      bucketName: bucket,
      namespaceName: namespace
    };
    const getObjectResponse = await client.getObject(getObjectRequest);
    console.log("Get Object executed successfully.");

    const isSameStream = compareStreams(objectData, getObjectResponse.value as st.Readable);
    console.log(`Upload stream and downloaded stream are same? ${isSameStream}`);

    console.log("Delete Object");
    const deleteObjectRequest: os.requests.DeleteObjectRequest = {
      namespaceName: namespace,
      bucketName: bucket,
      objectName: object
    };
    const deleteObjectResponse = await client.deleteObject(deleteObjectRequest);
    console.log("Delete Object executed successfully" + deleteObjectResponse);

    console.log("Delete the Bucket");
    const deleteBucketRequest: os.requests.DeleteBucketRequest = {
      namespaceName: namespace,
      bucketName: bucket
    };
    const deleteBucketResponse = await client.deleteBucket(deleteBucketRequest);
    console.log("Delete Bucket executed successfully" + deleteBucketResponse);
  } catch (error) {
    console.log("Error executing example " + error);
  }
})();

function compareStreams(stream1: st.Readable, stream2: st.Readable): boolean {
  return streamToString(stream1) === streamToString(stream2);
}

function streamToString(stream: st.Readable) {
  let output = "";
  stream.on("data", function(data) {
    output += data.toString();
  });
  stream.on("end", function() {
    return output;
  });
}
