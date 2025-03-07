/**
 * Service Catalog API
 * Manage solutions in Oracle Cloud Infrastructure Service Catalog.
 * OpenAPI spec version: 20210527
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
 * The model for the parameters needed to create a private application.
 */
export interface CreatePrivateApplicationDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want to create the private application.
   *
   */
  "compartmentId": string;
  /**
   * The name of the private application.
   */
  "displayName": string;
  /**
   * A short description of the private application.
   */
  "shortDescription": string;
  /**
   * A long description of the private application.
   */
  "longDescription"?: string;
  /**
   * Base64-encoded logo to use as the private application icon.
   * Template icon file requirements: PNG format, 50 KB maximum, 130 x 130 pixels.
   *
   */
  "logoFileBase64Encoded"?: string;
  "packageDetails": model.CreatePrivateApplicationStackPackage;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
}

export namespace CreatePrivateApplicationDetails {
  export function getJsonObj(obj: CreatePrivateApplicationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "packageDetails": obj.packageDetails
          ? model.CreatePrivateApplicationPackage.getJsonObj(obj.packageDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreatePrivateApplicationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "packageDetails": obj.packageDetails
          ? model.CreatePrivateApplicationPackage.getDeserializedJsonObj(obj.packageDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
