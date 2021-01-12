/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/*
 * This Sample takes filename as a commandline argument and
 * rename the file name to the new file name using rename object.
 *
 * @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 * <li>The first argument is the source file name in the object storage.</li>
 * <li>The second argument is the new file name to be renamed.</li>
 * <li>The third argument is the namespaceName</li>
 * <li>The fourth argument is the name of an existing bucket to rename object</li>
 * </ul>
 */

const os = require("oci-objectstorage");
const common = require("oci-common");

const provider = new common.ConfigFileAuthenticationDetailsProvider();

const args = process.argv.slice(2);
if (args.length !== 4) {
  console.error(
    "Unexpected number of arguments received. Consult the script header comments for expected arguments"
  );
  process.exit(-1);
}

const sourceName = args[0]; //  for eg : "download.jpg";
const newName = args[1]; //  for eg : "downloadNew.jpg";
const namespaceName = args[2];
const bucketName = args[3];

const client = new os.ObjectStorageClient({
  authenticationDetailsProvider: provider
});

(async () => {
  try {
    //building the rename object request
    const renameObjectDetails = {
      sourceName: sourceName,
      newName: newName
    };
    const renameObject = {
      namespaceName: namespaceName,
      bucketName: bucketName,
      renameObjectDetails: renameObjectDetails
    };
    // rename the file name to the new filename
    const resp = await client.renameObject(renameObject);
    console.log(resp);
    console.log(`Renamed ${sourceName} to ${newName}.`);
  } catch (ex) {
    console.error(`Failed due to ${ex}`);
    console.error(
      `The object '${sourceName}' may not exist in bucket '${bucketName}' with namespace '${namespaceName}'`
    );
  }
})();
