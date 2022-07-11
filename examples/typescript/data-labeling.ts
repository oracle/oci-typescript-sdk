/**
 * Copyright (c) 2021, 2022 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 *  @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 *  <li>The first argument is the OCID of the compartment.</li>
 *  <li>The second argument is the namespace.</li>
 *  <li>The third argument is name of the bucket.</li>
 *  <li>The fourth argument is object prefix.</li>
 *  <li>The fifth argument is object name.</li>
 * </ul>
 */

import common = require("oci-common");
import { DataLabelingManagementClient, models } from "oci-datalabelingservice";
import { DataLabelingClient } from "oci-datalabelingservicedataplane";

const args = process.argv.slice(2);
console.log(args);
if (args.length !== 5) {
  console.error(
    "Unexpected number of arguments received. Consult the script header comments for expected arguments"
  );
  process.exit(-1);
}

const compartmentId = args[0];
const namespace = args[1];
const bucket = args[2];
const prefix = args[3];
const objectName = args[4];
let datasetId: string = "";

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();

let dlsCPClient: DataLabelingManagementClient = new DataLabelingManagementClient({
  authenticationDetailsProvider: provider
});

let dlsDPClient: DataLabelingClient = new DataLabelingClient({
  authenticationDetailsProvider: provider
});

async function listDataset() {
  const datasetList = await dlsCPClient.listDatasets({
    compartmentId
  });
  return datasetList?.datasetCollection?.items;
}

/**
 * @description Polls and fetches workrequest details for a particular workrequestId.
 */
async function checkWorkRequestForSucceed(workRequestId: string): Promise<models.OperationStatus> {
  return new Promise(async (resolve: Function, reject: Function) => {
    let timer: any = 0;
    (async function refresh(): Promise<void> {
      clearTimeout(timer);
      try {
        const { workRequest } = await dlsCPClient
          .getWorkRequest({
            workRequestId
          })
          .catch(error => {
            console.error(error);
            throw new Error(`get Work request : ${error}`);
          });
        const { operationType, status, timeAccepted, percentComplete } = workRequest;
        console.table([
          {
            workRequestId,
            operationType,
            status,
            timeAccepted,
            percentComplete
          }
        ]);
        if (workRequest.status === "SUCCEEDED") {
          resolve(workRequest.status);
          return;
        }
        if (workRequest.status === "FAILED") {
          console.error("workRequest failed", workRequest);
          reject(workRequest.status);
          return;
        }
      } catch (error) {
        reject(error);
        return;
      }
      timer = setTimeout(refresh, 3000);
    })();
  });
}

async function createDataset() {
  return dlsCPClient.createDataset({
    createDatasetDetails: {
      compartmentId,
      displayName: `typescript-sdk-example`,
      datasetSourceDetails: {
        sourceType: "OBJECT_STORAGE",
        namespace,
        bucket,
        prefix
      },
      datasetFormatDetails: {
        formatType: "IMAGE"
      },
      annotationFormat: "MULTI_LABEL",
      labelSet: {
        items: [
          {
            name: "label1"
          },
          {
            name: "label2"
          }
        ]
      },
      definedTags: {},
      freeformTags: {}
    }
  });
}

async function addLabels() {
  return dlsCPClient.addDatasetLabels({
    datasetId,
    addDatasetLabelsDetails: {
      labelSet: {
        items: [{ name: "label3" }]
      }
    }
  });
}

async function deleteDataset() {
  return dlsCPClient.deleteDataset({
    datasetId
  });
}

async function getDataset() {
  const { dataset } = await dlsDPClient.getDataset({ datasetId });
  return dataset;
}

async function listRecords() {
  const { recordCollection: { items = [] } = {} } = await dlsDPClient.listRecords({
    compartmentId,
    datasetId
  });
  return items;
}

async function getRecord(recordId: string) {
  const { record } = await dlsDPClient.getRecord({
    recordId
  });
  return record;
}

async function createRecord() {
  const { datasetSourceDetails: { sourceType = "" } = {} } = await getDataset();
  return dlsDPClient.createRecord({
    createRecordDetails: {
      compartmentId,
      datasetId,
      name: objectName,
      sourceDetails: {
        relativePath: objectName,
        sourceType
      }
    }
  });
}

const getEntities = ({ label }: { label: string }) => {
  return [
    {
      labels: [
        {
          label
        }
      ],
      entityType: "GENERIC"
    }
  ];
};

async function createAnnotation(recordId: string) {
  const {
    labelSet: { items = [] }
  } = await getDataset();
  const label: string = items[0]?.name || "";
  return dlsDPClient.createAnnotation({
    createAnnotationDetails: {
      compartmentId,
      recordId,
      entities: getEntities({ label })
    }
  });
}

async function listAnnotation(id: string) {
  return dlsDPClient.listAnnotations({
    compartmentId,
    datasetId,
    id
  });
}

(async () => {
  try {
    await listDataset();
    let { dataset, opcWorkRequestId } = await createDataset();
    datasetId = dataset?.id;
    console.log("Dataset Created");
    await checkWorkRequestForSucceed(opcWorkRequestId);
    ({ opcWorkRequestId } = await addLabels());
    await checkWorkRequestForSucceed(opcWorkRequestId);
    console.log("Labels Added");
    const { record } = await createRecord();
    console.log("Record created");
    await getRecord(record?.id);
    const { annotation } = await createAnnotation(record?.id);
    console.log("Annotation created");
    await listRecords();
    await listAnnotation(annotation?.id);
  } catch (error) {
    console.log("Error executing example" + error);
  } finally {
    await deleteDataset();
  }
  console.debug("DONE");
})();
