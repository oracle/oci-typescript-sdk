/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/* @param args Arguments to provide to the example. The following arguments are expected:
/*
 * This Sample take directory path as a commandline argument and
 * generates urls for the files present in the directory to objectstorage using create preauthenticated request.
 *
 * @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 * <li>The first argument is the absloute directory path to read files from.</li>
 * <li>The second argument is the name of an existing bucket name to generate the url.</li>
 * </ul>
 */

const os = require('oci-objectstorage');
const common = require('oci-common');
const { readdir } = require('fs');

const configurationFilePath = '~/.oci/config';
const configProfile = 'DEFAULT';

const provider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  configProfile
);

const args = process.argv.slice(2);
if (args.length !== 3) {
  console.error(
    'Unexpected number of arguments received. Consult the script header comments for expected arguments'
  );
  process.exit(-1);
}

const filePath = args[0];
const bucketName = args[1];
const namespaceName = args[2];
const serviceName = 'objectstorage'

const client = new os.ObjectStorageClient({
    authenticationDetailsProvider: provider
});
client.region = common.Region.US_PHOENIX_1;

(async () => {
    try {
        console.time(`Download Time ${filePath}`);

        // set expiry date for the download url.
        const today = new Date();
        const neverExpires = new Date(today);
        neverExpires.setDate(neverExpires.getDate() + 25);

        // use date for generating a random unique id which can be used as a par id
        const parUniqueId = Date.now();
        const createPreauthenticatedRequestDetails = {
            name: parUniqueId.toString(),
            objectName: filePath,
            accessType: os.models.CreatePreauthenticatedRequestDetails.AccessType.ObjectRead,
            timeExpires: neverExpires
        };
        const createPreauthenticatedRequest = {
            bucketName: bucketName,
            namespaceName: namespaceName,
            createPreauthenticatedRequestDetails: createPreauthenticatedRequestDetails
        };
        // create pre authenticated request to generate the url
        const resp = await client.createPreauthenticatedRequest(createPreauthenticatedRequest);
        const baseUrl = `https://${serviceName}.${common.Region.US_PHOENIX_1.regionId}.${common.Realm.OC1.secondLevelDomain}`
        const downloadUrl = resp.preauthenticatedRequest.accessUri;
        console.log('download url for the file ' + filePath + ' is ' + baseUrl + downloadUrl);

        console.timeEnd(`Download Time ${filePath}`);
    } catch (error) {
        console.log('Error executing example ' + error);
    }

})();
