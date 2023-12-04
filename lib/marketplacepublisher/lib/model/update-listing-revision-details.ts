/**
 * MarketplacePublisherService API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20220901
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
 * The model for an Oracle Cloud Infrastructure Marketplace Publisher listing revision.
 */
export interface UpdateListingRevisionDetails {
  /**
   * The name for the listing revision.
   */
  "displayName"?: string;
  "versionDetails"?: model.VersionDetails;
  /**
   * Single line introduction for the listing revision.
   */
  "headline"?: string;
  /**
   * The tagline for the listing revision.
   */
  "tagline"?: string;
  /**
   * Keywords associated for the listing revision.
   */
  "keywords"?: string;
  /**
   * A short description for the listing revision.
   */
  "shortDescription"?: string;
  /**
   * Usage information for the listing revision.
   */
  "usageInformation"?: string;
  /**
   * A long description for the listing revision.
   */
  "longDescription"?: string;
  /**
   * System requirements for the listing revision.
   */
  "systemRequirements"?: string;
  /**
   * The categories for the listing revision.
   */
  "categories"?: Array<string>;
  /**
   * The markets supported by the listing revision.
   */
  "markets"?: Array<string>;
  "contentLanguage"?: model.LanguageItem;
  /**
   * Languages supported by the listing revision.
   */
  "supportedlanguages"?: Array<model.LanguageItem>;
  /**
   * Contact information to use to get support from the publisher for the listing revision.
   */
  "supportContacts"?: Array<model.SupportContact>;
  /**
   * Links to support resources for the listing revision.
   */
  "supportLinks"?: Array<model.NamedLink>;
  /**
   * The pricing model for the listing revision.
   */
  "pricingType"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateListingRevisionDetails {
  export function getJsonObj(obj: UpdateListingRevisionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "versionDetails": obj.versionDetails
          ? model.VersionDetails.getJsonObj(obj.versionDetails)
          : undefined,

        "contentLanguage": obj.contentLanguage
          ? model.LanguageItem.getJsonObj(obj.contentLanguage)
          : undefined,
        "supportedlanguages": obj.supportedlanguages
          ? obj.supportedlanguages.map(item => {
              return model.LanguageItem.getJsonObj(item);
            })
          : undefined,
        "supportContacts": obj.supportContacts
          ? obj.supportContacts.map(item => {
              return model.SupportContact.getJsonObj(item);
            })
          : undefined,
        "supportLinks": obj.supportLinks
          ? obj.supportLinks.map(item => {
              return model.NamedLink.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateListingRevisionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "versionDetails": obj.versionDetails
          ? model.VersionDetails.getDeserializedJsonObj(obj.versionDetails)
          : undefined,

        "contentLanguage": obj.contentLanguage
          ? model.LanguageItem.getDeserializedJsonObj(obj.contentLanguage)
          : undefined,
        "supportedlanguages": obj.supportedlanguages
          ? obj.supportedlanguages.map(item => {
              return model.LanguageItem.getDeserializedJsonObj(item);
            })
          : undefined,
        "supportContacts": obj.supportContacts
          ? obj.supportContacts.map(item => {
              return model.SupportContact.getDeserializedJsonObj(item);
            })
          : undefined,
        "supportLinks": obj.supportLinks
          ? obj.supportLinks.map(item => {
              return model.NamedLink.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}