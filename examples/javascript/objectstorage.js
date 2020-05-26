/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/* @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 * <li>The first argument is the OCID of the compartment.</li>
 * <li>The second is the name of bucket to create and later fetch</li>
 * <li>The third is the name of object to create inside bucket</li>
 * </ul>
 */

const os = require("oci-objectstorage");
const common = require("oci-common");
const st = require("stream");

const configurationFilePath = "~/.oci/config";
const configProfile = "DEFAULT";

const provider = new common.ConfigFileAuthenticationDetailsProvider(
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

const compartmentId = args[0];
const bucket = args[1];
const object = args[2];

const client = new os.ObjectStorageClient({
  authenticationDetailsProvider: provider
});
client.region = common.Region.US_PHOENIX_1;

(async () => {
  try {
    console.log("Getting the namespace...");
    const request = {};
    const response = await client.getNamespace(request);
    const namespace = response.value;

    console.log("Creating the source bucket.");
    const bucketDetails = {
      name: bucket,
      compartmentId: compartmentId
    };
    const createBucketRequest = {
      namespaceName: namespace,
      createBucketDetails: bucketDetails
    };
    const createBucketResponse = await client.createBucket(createBucketRequest);
    console.log("Create Bucket executed successfully" + createBucketResponse);

    console.log("Bucket is created. Fetch the bucket.");
    const getBucketRequest = {
      namespaceName: namespace,
      bucketName: bucket
    };
    const getBucketResponse = await client.getBucket(getBucketRequest);
    console.log("Get bucket executed successfully." + getBucketResponse.bucket);

    // Create stream to upload
    const ObjectData =
      "Test Data, Test Data, Test Data, Test Data, Test Data, Test Data, Test Data, Test Data, Test Data";
    const putObjectStream = new st.Readable();
    putObjectStream._read = function() {};
    putObjectStream.push(ObjectData);
    putObjectStream.push(null); // null defines end of the stream

    console.log("Bucket is created. Now adding object to the Bucket.");
    const putObjectRequest = {
      namespaceName: namespace,
      bucketName: bucket,
      putObjectBody: putObjectStream,
      objectName: object,
      contentLength: ObjectData.length,
      contentType: "application/octet-stream"
    };
    const putObjectResponse = await client.putObject(putObjectRequest);
    console.log("Put Object executed successfully" + putObjectResponse);

    console.log("Fetch the object created");
    const getObjectRequest = {
      objectName: object,
      bucketName: bucket,
      namespaceName: namespace
    };
    const getObjectResponse = await client.getObject(getObjectRequest);
    console.log("Get Object executed successfully.");

    console.log(
      "Upload stream and downloaded stream are same? ",
      await compareStreams(putObjectStream, getObjectResponse.value)
    );
    console.log("Delete Object");
    const deleteObjectRequest = {
      namespaceName: namespace,
      bucketName: bucket,
      objectName: object
    };
    const deleteObjectResponse = await client.deleteObject(deleteObjectRequest);
    console.log("Delete Object executed successfully" + deleteObjectResponse);

    console.log("Delete the Bucket");
    const deleteBucketRequest = {
      namespaceName: namespace,
      bucketName: bucket
    };
    const deleteBucketResponse = await client.deleteBucket(deleteBucketRequest);
    console.log("Delete Bucket executed successfully" + deleteBucketResponse);
  } catch (error) {
    console.log("Error executing example " + error);
  }
})();

async function compareStreams(stream1, stream2) {
  const dataforStream1 = await streamToString(stream1);
  const dataforStream2 = await streamToString(stream2);
  return dataforStream1 === dataforStream2;
}

function streamToString(stream) {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on("data", chunk => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
}
