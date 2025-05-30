/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Response object containing details about file upload eligibility.
 */
export interface FileValidationResponse {
  /**
   * Input File Name.
   */
  "inputFile": string;
  /**
   * Object Location where file content is available.
   */
  "objectLocation": string;
  /**
   * List of files inside the given archive file and their corresponding status information.
   */
  "files"?: Array<model.UploadFileStatus>;
}

export namespace FileValidationResponse {
  export function getJsonObj(obj: FileValidationResponse): object {
    const jsonObj = {
      ...obj,
      ...{
        "files": obj.files
          ? obj.files.map(item => {
              return model.UploadFileStatus.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FileValidationResponse): object {
    const jsonObj = {
      ...obj,
      ...{
        "files": obj.files
          ? obj.files.map(item => {
              return model.UploadFileStatus.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
