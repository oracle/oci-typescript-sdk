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
 * One page document analysis result.
 */
export interface Page {
  /**
   * The document page number. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "pageNumber": number;
  "dimensions"?: model.Dimensions;
  /**
   * An array of detected document types.
   */
  "detectedDocumentTypes"?: Array<model.DetectedDocumentType>;
  /**
   * An array of detected languages.
   */
  "detectedLanguages"?: Array<model.DetectedLanguage>;
  /**
   * The words detected on the page.
   */
  "words"?: Array<model.Word>;
  /**
   * The lines of text detected on the page.
   */
  "lines"?: Array<model.Line>;
  /**
   * The tables detected on the page.
   */
  "tables"?: Array<model.Table>;
  /**
   * The form fields detected on the page.
   */
  "documentFields"?: Array<model.DocumentField>;
  /**
   * The signatures detected on the page.
   */
  "signatures"?: Array<model.Signature>;
  /**
   * The bar codes detected on the page.
   */
  "barCodes"?: Array<model.BarCode>;
  /**
   * The checkboxes and selection marks detected on the page.
   */
  "selectionMarks"?: Array<model.SelectionMark>;
}

export namespace Page {
  export function getJsonObj(obj: Page): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions ? model.Dimensions.getJsonObj(obj.dimensions) : undefined,
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
        "words": obj.words
          ? obj.words.map(item => {
              return model.Word.getJsonObj(item);
            })
          : undefined,
        "lines": obj.lines
          ? obj.lines.map(item => {
              return model.Line.getJsonObj(item);
            })
          : undefined,
        "tables": obj.tables
          ? obj.tables.map(item => {
              return model.Table.getJsonObj(item);
            })
          : undefined,
        "documentFields": obj.documentFields
          ? obj.documentFields.map(item => {
              return model.DocumentField.getJsonObj(item);
            })
          : undefined,
        "signatures": obj.signatures
          ? obj.signatures.map(item => {
              return model.Signature.getJsonObj(item);
            })
          : undefined,
        "barCodes": obj.barCodes
          ? obj.barCodes.map(item => {
              return model.BarCode.getJsonObj(item);
            })
          : undefined,
        "selectionMarks": obj.selectionMarks
          ? obj.selectionMarks.map(item => {
              return model.SelectionMark.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Page): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? model.Dimensions.getDeserializedJsonObj(obj.dimensions)
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
        "words": obj.words
          ? obj.words.map(item => {
              return model.Word.getDeserializedJsonObj(item);
            })
          : undefined,
        "lines": obj.lines
          ? obj.lines.map(item => {
              return model.Line.getDeserializedJsonObj(item);
            })
          : undefined,
        "tables": obj.tables
          ? obj.tables.map(item => {
              return model.Table.getDeserializedJsonObj(item);
            })
          : undefined,
        "documentFields": obj.documentFields
          ? obj.documentFields.map(item => {
              return model.DocumentField.getDeserializedJsonObj(item);
            })
          : undefined,
        "signatures": obj.signatures
          ? obj.signatures.map(item => {
              return model.Signature.getDeserializedJsonObj(item);
            })
          : undefined,
        "barCodes": obj.barCodes
          ? obj.barCodes.map(item => {
              return model.BarCode.getDeserializedJsonObj(item);
            })
          : undefined,
        "selectionMarks": obj.selectionMarks
          ? obj.selectionMarks.map(item => {
              return model.SelectionMark.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
