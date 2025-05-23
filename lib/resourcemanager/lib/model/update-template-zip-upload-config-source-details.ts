/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](https://docs.oracle.com/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * Update details for a configuration zip file.
 */
export interface UpdateTemplateZipUploadConfigSourceDetails
  extends model.UpdateTemplateConfigSourceDetails {
  "zipFileBase64Encoded"?: string;

  "templateConfigSourceType": string;
}

export namespace UpdateTemplateZipUploadConfigSourceDetails {
  export function getJsonObj(
    obj: UpdateTemplateZipUploadConfigSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateTemplateConfigSourceDetails.getJsonObj(
            obj
          ) as UpdateTemplateZipUploadConfigSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const templateConfigSourceType = "ZIP_UPLOAD";
  export function getDeserializedJsonObj(
    obj: UpdateTemplateZipUploadConfigSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateTemplateConfigSourceDetails.getDeserializedJsonObj(
            obj
          ) as UpdateTemplateZipUploadConfigSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
