/**
 * Fleet Application Management Service API
 * Fleet Application Management provides a centralized platform to help you automate resource management tasks, validate patch compliance, and enhance operational efficiency across an enterprise.

 * OpenAPI spec version: 20230831
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
 * The information about new PlatformConfiguration.
 */
export interface CreatePlatformConfigurationDetails {
  /**
   * Tenancy OCID
   */
  "compartmentId": string;
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: {@code My new resource}
* 
    */
  "displayName"?: string;
  /**
   * A user-friendly description. To provide some insight about the resource.
   * Avoid entering confidential information.
   *
   */
  "description"?: string;
  "configCategoryDetails":
    | model.ProductStackConfigCategoryDetails
    | model.EnvironmentConfigCategoryDetails
    | model.CredentialConfigCategoryDetails
    | model.PatchTypeConfigCategoryDetails
    | model.ProductConfigCategoryDetails;
}

export namespace CreatePlatformConfigurationDetails {
  export function getJsonObj(obj: CreatePlatformConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configCategoryDetails": obj.configCategoryDetails
          ? model.ConfigCategoryDetails.getJsonObj(obj.configCategoryDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreatePlatformConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configCategoryDetails": obj.configCategoryDetails
          ? model.ConfigCategoryDetails.getDeserializedJsonObj(obj.configCategoryDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}