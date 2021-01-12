/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import { ObjectStorageClient, requests } from "oci-objectstorage";

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();
/*
 * This Sample take filename as a commandline argument and
 * deltes the files present in te directory to objectstorage using delete object.
 *
 * @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 * <li>The first argument is the filename to delete the object from the oracle cloud storage.</li>
 * <li>The second argument is the namespaceName</li>
 * <li>The third argument is the name of an existing bucket to uplod object</li>
 * </ul>
 */

const args = process.argv.slice(2);
console.log(args);
if (args.length !== 3) {
  console.error(
    "Unexpected number of arguments received. Please pass absloute directory path to read files from"
  );
  process.exit(-1);
}

const fileName: string = args[0]; //  for eg : "download.jpg";
const namespaceName = args[1];
const bucketName = args[2];

const client = new ObjectStorageClient({ authenticationDetailsProvider: provider });

(async () => {
  try {
    // build delete object request
    const deleteObjectRequest: requests.DeleteObjectRequest = {
      bucketName: bucketName,
      namespaceName: namespaceName,
      objectName: fileName
    };
    // delete object
    const resp = await client.deleteObject(deleteObjectRequest);
    console.log(resp);
    console.log(`Deleted ${fileName}.`);
  } catch (ex) {
    console.error(`Failed due to ${ex}`);
  }
})();
