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
 * Create Details of the video attachment.
 *
 */
export interface CreateVideoAttachmentDetails extends model.CreateListingRevisionAttachmentDetails {
  "videoAttachmentDetails": model.CreateVideoDetails;

  "attachmentType": string;
}

export namespace CreateVideoAttachmentDetails {
  export function getJsonObj(obj: CreateVideoAttachmentDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateListingRevisionAttachmentDetails.getJsonObj(
            obj
          ) as CreateVideoAttachmentDetails)),
      ...{
        "videoAttachmentDetails": obj.videoAttachmentDetails
          ? model.CreateVideoDetails.getJsonObj(obj.videoAttachmentDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const attachmentType = "VIDEO";
  export function getDeserializedJsonObj(
    obj: CreateVideoAttachmentDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateListingRevisionAttachmentDetails.getDeserializedJsonObj(
            obj
          ) as CreateVideoAttachmentDetails)),
      ...{
        "videoAttachmentDetails": obj.videoAttachmentDetails
          ? model.CreateVideoDetails.getDeserializedJsonObj(obj.videoAttachmentDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
