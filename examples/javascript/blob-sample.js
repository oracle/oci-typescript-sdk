/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { provider } from "../typescript/authentication";
import { UploadManager } from "../../lib/objectstorage/lib/upload-manager/upload-manager";
import { ObjectStorageClient } from "oci-objectstorage";
import { Region } from "oci-common";

/* Sample for upload manager in browser.
 * This sample is used in index.html (inside examples/ folder),
 * which takes a user uploaded file and object name and invokes this javascript.
 *
 * @param blob to upload
 * @param ObjName name of object
 */
async function uploadBlob(blob, objName) {
  const client = new ObjectStorageClient({ authenticationDetailsProvider: provider });

  const uploadManager = new UploadManager(client, { enforceMD5: false });
  const namespaceName = "dex-us-phoenix-1";
  const bucketName = "TestBucket";
  try {
    console.time("Upload Time");
    await uploadManager.upload({
      content: {
        blob: blob
      },
      requestDetails: {
        namespaceName: namespaceName,
        bucketName: bucketName,
        objectName: objName,
        contentType: "application/octet-stream"
      }
    });
    console.timeEnd("Upload Time");
  } catch (ex) {
    console.error(`Failed due to ${ex}`);
  }
}
window.uploadBlob = uploadBlob;
