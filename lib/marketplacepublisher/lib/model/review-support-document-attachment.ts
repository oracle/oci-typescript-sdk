/**
 * MarketplacePublisherService API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20241201
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
 * Review document attachment for the listing revision.
 */
export interface ReviewSupportDocumentAttachment extends model.ListingRevisionAttachment {
  /**
   * Name of the review support document
   */
  "documentName": string;
  /**
   * Template code for the uploaded document
   */
  "templateCode": string;
  /**
   * URL of the uploaded document.
   */
  "contentUrl"?: string;
  /**
   * The MIME type of the uploaded data.
   */
  "mimeType"?: string;

  "attachmentType": string;
}

export namespace ReviewSupportDocumentAttachment {
  export function getJsonObj(
    obj: ReviewSupportDocumentAttachment,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ListingRevisionAttachment.getJsonObj(obj) as ReviewSupportDocumentAttachment)),
      ...{}
    };

    return jsonObj;
  }
  export const attachmentType = "REVIEW_SUPPORT_DOCUMENT";
  export function getDeserializedJsonObj(
    obj: ReviewSupportDocumentAttachment,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ListingRevisionAttachment.getDeserializedJsonObj(
            obj
          ) as ReviewSupportDocumentAttachment)),
      ...{}
    };

    return jsonObj;
  }
}
