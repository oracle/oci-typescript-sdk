/**
 * Document Understanding API
 * Document AI helps customers perform various analysis on their documents. If a customer has lots of documents, they can process them in batch using asynchronous API endpoints.
 * OpenAPI spec version: 20221109
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The details of how to analyze a document.
 */
export interface AnalyzeDocumentDetails {
  /**
   * The types of document analysis requested.
   */
  "features": Array<model.DocumentFeature>;
  "document": model.ObjectStorageDocumentDetails | model.InlineDocumentDetails;
  /**
   * The compartment identifier.
   */
  "compartmentId"?: string;
  "outputLocation"?: model.OutputLocation;
  /**
   * The document language, abbreviated according to the BCP 47 syntax.
   */
  "language"?: string;
  /**
   * The document type.
   */
  "documentType"?: model.DocumentType;
  "ocrData"?: model.AnalyzeDocumentResult;
}

export namespace AnalyzeDocumentDetails {
  export function getJsonObj(obj: AnalyzeDocumentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "features": obj.features
          ? obj.features.map(item => {
              return model.DocumentFeature.getJsonObj(item);
            })
          : undefined,
        "document": obj.document ? model.DocumentDetails.getJsonObj(obj.document) : undefined,

        "outputLocation": obj.outputLocation
          ? model.OutputLocation.getJsonObj(obj.outputLocation)
          : undefined,

        "ocrData": obj.ocrData ? model.AnalyzeDocumentResult.getJsonObj(obj.ocrData) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AnalyzeDocumentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "features": obj.features
          ? obj.features.map(item => {
              return model.DocumentFeature.getDeserializedJsonObj(item);
            })
          : undefined,
        "document": obj.document
          ? model.DocumentDetails.getDeserializedJsonObj(obj.document)
          : undefined,

        "outputLocation": obj.outputLocation
          ? model.OutputLocation.getDeserializedJsonObj(obj.outputLocation)
          : undefined,

        "ocrData": obj.ocrData
          ? model.AnalyzeDocumentResult.getDeserializedJsonObj(obj.ocrData)
          : undefined
      }
    };

    return jsonObj;
  }
}