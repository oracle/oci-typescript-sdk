/**
 * Vision API
 * Using Vision, you can upload images to detect and classify objects in them. If you have lots of images, you can process them in batch using asynchronous API endpoints. Vision's features are thematically split between Document AI for document-centric images, and Image Analysis for object and scene-based images. Pretrained models and custom models are supported.
 * OpenAPI spec version: 20220125
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
 * The batch document analysis details.
 */
export interface CreateDocumentJobDetails {
  "inputLocation": model.ObjectListInlineInputLocation;
  /**
   * The list of requested document analysis types.
   */
  "features": Array<model.DocumentFeature>;
  "outputLocation": model.OutputLocation;
  /**
   * The compartment identifier from the requester.
   */
  "compartmentId"?: string;
  /**
   * The document job display name.
   */
  "displayName"?: string;
  /**
   * The language of the document, abbreviated according to ISO 639-2.
   */
  "language"?: model.DocumentLanguage;
  /**
   * The type of documents.
   */
  "documentType"?: model.DocumentType;
  /**
   * Whether or not to generate a ZIP file containing the results.
   */
  "isZipOutputEnabled"?: boolean;
}

export namespace CreateDocumentJobDetails {
  export function getJsonObj(obj: CreateDocumentJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "inputLocation": obj.inputLocation
          ? model.InputLocation.getJsonObj(obj.inputLocation)
          : undefined,
        "features": obj.features
          ? obj.features.map(item => {
              return model.DocumentFeature.getJsonObj(item);
            })
          : undefined,
        "outputLocation": obj.outputLocation
          ? model.OutputLocation.getJsonObj(obj.outputLocation)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDocumentJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "inputLocation": obj.inputLocation
          ? model.InputLocation.getDeserializedJsonObj(obj.inputLocation)
          : undefined,
        "features": obj.features
          ? obj.features.map(item => {
              return model.DocumentFeature.getDeserializedJsonObj(item);
            })
          : undefined,
        "outputLocation": obj.outputLocation
          ? model.OutputLocation.getDeserializedJsonObj(obj.outputLocation)
          : undefined
      }
    };

    return jsonObj;
  }
}
