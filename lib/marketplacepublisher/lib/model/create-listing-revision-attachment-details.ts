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
 * Attachment uploaded by the publisher for the listing revision.
 *
 */
export interface CreateListingRevisionAttachmentDetails {
  /**
   * The OCID for the listing revision in Marketplace Publisher.
   */
  "listingRevisionId": string;
  /**
   * The name for the listing revision attachment.
   */
  "displayName"?: string;
  /**
   * Description for this specified attachment.
   */
  "description"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "attachmentType": string;
}

export namespace CreateListingRevisionAttachmentDetails {
  export function getJsonObj(obj: CreateListingRevisionAttachmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "attachmentType" in obj && obj.attachmentType) {
      switch (obj.attachmentType) {
        case "SUPPORTED_SERVICES":
          return model.CreateSupportedServiceAttachment.getJsonObj(
            <model.CreateSupportedServiceAttachment>(<object>jsonObj),
            true
          );
        case "SCREENSHOT":
          return model.CreateScreenShotAttachmentDetails.getJsonObj(
            <model.CreateScreenShotAttachmentDetails>(<object>jsonObj),
            true
          );
        case "CUSTOMER_SUCCESS":
          return model.CreateCustomerSuccessAttachment.getJsonObj(
            <model.CreateCustomerSuccessAttachment>(<object>jsonObj),
            true
          );
        case "REVIEW_SUPPORT_DOCUMENT":
          return model.CreateReviewSupportDocumentAttachment.getJsonObj(
            <model.CreateReviewSupportDocumentAttachment>(<object>jsonObj),
            true
          );
        case "VIDEO":
          return model.CreateVideoAttachmentDetails.getJsonObj(
            <model.CreateVideoAttachmentDetails>(<object>jsonObj),
            true
          );
        case "RELATED_DOCUMENT":
          return model.CreateRelatedDocumentAttachmentDetails.getJsonObj(
            <model.CreateRelatedDocumentAttachmentDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.attachmentType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateListingRevisionAttachmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "attachmentType" in obj && obj.attachmentType) {
      switch (obj.attachmentType) {
        case "SUPPORTED_SERVICES":
          return model.CreateSupportedServiceAttachment.getDeserializedJsonObj(
            <model.CreateSupportedServiceAttachment>(<object>jsonObj),
            true
          );
        case "SCREENSHOT":
          return model.CreateScreenShotAttachmentDetails.getDeserializedJsonObj(
            <model.CreateScreenShotAttachmentDetails>(<object>jsonObj),
            true
          );
        case "CUSTOMER_SUCCESS":
          return model.CreateCustomerSuccessAttachment.getDeserializedJsonObj(
            <model.CreateCustomerSuccessAttachment>(<object>jsonObj),
            true
          );
        case "REVIEW_SUPPORT_DOCUMENT":
          return model.CreateReviewSupportDocumentAttachment.getDeserializedJsonObj(
            <model.CreateReviewSupportDocumentAttachment>(<object>jsonObj),
            true
          );
        case "VIDEO":
          return model.CreateVideoAttachmentDetails.getDeserializedJsonObj(
            <model.CreateVideoAttachmentDetails>(<object>jsonObj),
            true
          );
        case "RELATED_DOCUMENT":
          return model.CreateRelatedDocumentAttachmentDetails.getDeserializedJsonObj(
            <model.CreateRelatedDocumentAttachmentDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.attachmentType}`);
      }
    }
    return jsonObj;
  }
}
