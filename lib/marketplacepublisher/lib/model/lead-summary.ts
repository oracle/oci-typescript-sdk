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
 * A placeholder for list of leads
 */
export interface LeadSummary {
  /**
   * Unique OCID identifier for the listing.
   */
  "id"?: string;
  /**
   * The unique identifier for the listing.
   */
  "listingId"?: string;
  /**
   * The name of the listing.
   */
  "listingName"?: string;
  /**
   * The unique identifier for the compartment.
   */
  "compartmentId"?: string;
  /**
   * The state for the listing.
   */
  "lifecycleState"?: string;
  /**
    * The date and time the listing was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2023-03-27T21:10:29.600Z}
* 
    */
  "timeCreated"?: Date;
  "additionalInfo"?: model.AdditionalInfo;
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
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
}

export namespace LeadSummary {
  export function getJsonObj(obj: LeadSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "additionalInfo": obj.additionalInfo
          ? model.AdditionalInfo.getJsonObj(obj.additionalInfo)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LeadSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "additionalInfo": obj.additionalInfo
          ? model.AdditionalInfo.getDeserializedJsonObj(obj.additionalInfo)
          : undefined
      }
    };

    return jsonObj;
  }
}
