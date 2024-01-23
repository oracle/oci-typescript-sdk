
// Import ObjectStorageClient as default export
import {ObjectStorageClient } from "./client";
import * as requests from "./request";

// Rest of the imports remain the same
import * as fs from 'fs';
import * as csv from 'fast-csv';


export class ObjectStorageHelper {
    private objectStorageClient: ObjectStorageClient;
  
    constructor() {
      // Initialize the Object Storage client (you might want to pass credentials, etc.)
      this.objectStorageClient = new ObjectStorageClient({});
    }
  
    public async readAndParseCsvFile(
      namespaceName: string,
      bucketName: string,
      objectName: string
    ): Promise<void> {
      try {
        const getObjectRequest: requests.GetObjectRequest = {
          namespaceName: namespaceName,
          bucketName: bucketName,
          objectName: objectName,
        };
  
        const response = await this.objectStorageClient.getObject(getObjectRequest);
  
        // Check if response contains a readable stream
        if (response.value) {
          // Pipe the readable stream from the OCI response to the CSV parser
          response.value.pipe(csv.parse({ headers: true }))
            .on('data', (row) => {
              // Process each row of the CSV file
              console.log(row);
            })
            .on('end', () => {
              console.log('CSV file parsing complete.');
            });
        } else {
          console.log('No content in the response.');
        }
      } catch (error) {
        console.error('Error reading or parsing CSV file:', error);
      }
    }
  }
  
  // Example usage
  // const objectStorageHelper = new ObjectStorageHelper();
  // objectStorageHelper.readAndParseCsvFile('your-namespace', 'your-bucket-name', 'your-csv-file.csv');