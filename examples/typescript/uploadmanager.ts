/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import { ObjectStorageClient, UploadManager } from "oci-objectstorage";
import { basename, join } from "path";
import { readdir } from "fs";

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();
/*
 * This Sample take directory path as a commandline argument and
 * uploads all the files present in te directory to objectstorage using upload manager.
 *
 * @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 * <li>The first argument is the absloute directory path to read files from.</li>
 * <li>The second argument is the namespaceName</li>
 * <li>The third argument is the name of an existing bucket to uplod object</li>
 * </ul>
 * NodeJS V8 Engine have a buffer size limitation, 2GB for 64-bit machine and 1GB for 32-bit machine.
 * Do not pass in a partSize option greater than the buffer size limitation.
 */

const args = process.argv.slice(2);
if (args.length !== 3) {
  console.error(
    "Unexpected number of arguments received. Please pass absloute directory path to read files from"
  );
  process.exit(-1);
}
const directoryPath: string = args[0]; //  for eg : "/Users/Abc/upload-manager";
const namespaceName = args[1];
const bucketName = args[2];

const client = new ObjectStorageClient({ authenticationDetailsProvider: provider });

const uploadManager = new UploadManager(client, { enforceMD5: true });

(async () => {
  // Read files from the directory
  readdir(directoryPath, (err, files) => {
    if (err) return console.log("Unable to scan directory: " + err);

    files.forEach(async filename => {
      const objectName = `${basename(filename)}`;
      console.log(`Uploading ${objectName}`);

      try {
        console.time("Upload Time");

        const callback = (res: any) => {
          console.log("Progress: ", res);
        };

        await uploadManager.upload(
          {
            content: {
              filePath: join(directoryPath, filename)
            },
            requestDetails: {
              namespaceName: namespaceName,
              bucketName: bucketName,
              objectName: objectName
            }
          },
          callback
        );

        console.timeEnd("Upload Time");
      } catch (ex) {
        console.error(`Failed due to ${ex}`);
      }
    });
  });
})();
