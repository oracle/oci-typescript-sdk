/**
 * Document Understanding API
 * Document AI helps customers perform various analysis on their documents. If a customer has lots of documents, they can process them in batch using asynchronous API endpoints.
 * OpenAPI spec version: 20221109
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
 * The document analysis results.
 */
export interface AnalyzeDocumentResult {
  "documentMetadata": model.DocumentMetadata;
  /**
   * The array of a Page.
   */
  "pages": Array<model.Page>;
  /**
   * An array of detected document types.
   */
  "detectedDocumentTypes"?: Array<model.DetectedDocumentType>;
  /**
   * An array of detected languages.
   */
  "detectedLanguages"?: Array<model.DetectedLanguage>;
  /**
   * The document classification model version.
   */
  "documentClassificationModelVersion"?: string;
  /**
   * The document language classification model version.
   */
  "languageClassificationModelVersion"?: string;
  /**
   * The document text extraction model version.
   */
  "textExtractionModelVersion"?: string;
  /**
   * The document keyValue extraction model version.
   */
  "keyValueExtractionModelVersion"?: string;
  /**
   * The document table extraction model version.
   */
  "tableExtractionModelVersion"?: string;
  /**
   * The document signature extraction model version.
   */
  "signatureExtractionModelVersion"?: string;
  /**
   * The document bar code extraction model version.
   */
  "barCodeExtractionModelVersion"?: string;
  /**
   * The errors encountered during document analysis.
   */
  "errors"?: Array<model.ProcessingError>;
  /**
   * The searchable PDF file that was generated.
   */
  "searchablePdf"?: string;
}

export namespace AnalyzeDocumentResult {
  export function getJsonObj(obj: AnalyzeDocumentResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "documentMetadata": obj.documentMetadata
          ? model.DocumentMetadata.getJsonObj(obj.documentMetadata)
          : undefined,
        "pages": obj.pages
          ? obj.pages.map(item => {
              return model.Page.getJsonObj(item);
            })
          : undefined,
        "detectedDocumentTypes": obj.detectedDocumentTypes
          ? obj.detectedDocumentTypes.map(item => {
              return model.DetectedDocumentType.getJsonObj(item);
            })
          : undefined,
        "detectedLanguages": obj.detectedLanguages
          ? obj.detectedLanguages.map(item => {
              return model.DetectedLanguage.getJsonObj(item);
            })
          : undefined,

        "errors": obj.errors
          ? obj.errors.map(item => {
              return model.ProcessingError.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AnalyzeDocumentResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "documentMetadata": obj.documentMetadata
          ? model.DocumentMetadata.getDeserializedJsonObj(obj.documentMetadata)
          : undefined,
        "pages": obj.pages
          ? obj.pages.map(item => {
              return model.Page.getDeserializedJsonObj(item);
            })
          : undefined,
        "detectedDocumentTypes": obj.detectedDocumentTypes
          ? obj.detectedDocumentTypes.map(item => {
              return model.DetectedDocumentType.getDeserializedJsonObj(item);
            })
          : undefined,
        "detectedLanguages": obj.detectedLanguages
          ? obj.detectedLanguages.map(item => {
              return model.DetectedLanguage.getDeserializedJsonObj(item);
            })
          : undefined,

        "errors": obj.errors
          ? obj.errors.map(item => {
              return model.ProcessingError.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
