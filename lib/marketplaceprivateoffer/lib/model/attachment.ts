/**
 * MarketplacePrivateOffer API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20220901
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Description of Attachment.
 */
export interface Attachment {
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * OCID of the seller's tenancy (root compartment).
   */
  "sellerCompartmentId": string;
  /**
   * Unique identifier of the associated offer that is immutable on creation
   */
  "offerId": string;
  /**
   * OCID of the buyer's tenancy (root compartment).
   */
  "buyerCompartmentId"?: string;
  /**
   * The MIME type of the uploaded data.
   */
  "mimeType"?: string;
  /**
   * The name used to refer to the uploaded data.
   */
  "displayName": string;
  /**
   * The type of offer attachment.
   */
  "type": Attachment.Type;
  /**
   * The time the the Offer was created. An RFC3339 formatted datetime string
   */
  "timeCreated": Date;
  /**
   * The current state of the Offer.
   */
  "lifecycleState": Attachment.LifecycleState;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
}

export namespace Attachment {
  export enum Type {
    ContractTAndC = "CONTRACT_T_AND_C",
    Quote = "QUOTE",
    Eula = "EULA",
    TermsOfUse = "TERMS_OF_USE",
    Misc = "MISC",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Attachment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Attachment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}