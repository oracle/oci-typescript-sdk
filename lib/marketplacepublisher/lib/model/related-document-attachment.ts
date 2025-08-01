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
 * Related document attachment for the listing revision.
 */
export interface RelatedDocumentAttachment extends model.ListingRevisionAttachment {
  /**
   * Possible lifecycle states.
   */
  "documentCategory"?: RelatedDocumentAttachment.DocumentCategory;
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

export namespace RelatedDocumentAttachment {
  export enum DocumentCategory {
    CaseStudies = "CASE_STUDIES",
    CustomizationGuides = "CUSTOMIZATION_GUIDES",
    DataSheets = "DATA_SHEETS",
    PressRelease = "PRESS_RELEASE",
    ProductDocumentation = "PRODUCT_DOCUMENTATION",
    UserGuides = "USER_GUIDES",
    Webinars = "WEBINARS",
    Whitepapers = "WHITEPAPERS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: RelatedDocumentAttachment, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ListingRevisionAttachment.getJsonObj(obj) as RelatedDocumentAttachment)),
      ...{}
    };

    return jsonObj;
  }
  export const attachmentType = "RELATED_DOCUMENT";
  export function getDeserializedJsonObj(
    obj: RelatedDocumentAttachment,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ListingRevisionAttachment.getDeserializedJsonObj(
            obj
          ) as RelatedDocumentAttachment)),
      ...{}
    };

    return jsonObj;
  }
}
