/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](https://docs.oracle.com/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * Summary information for the template category.
 *
 */
export interface TemplateCategorySummary {
  /**
   * Unique identifier for the template category.
   * Possible values are {@code 0} (Quickstarts), {@code 1} (Service), {@code 2} (Architecture), and {@code 3} (Private).
   * Template category labels are displayed in the Console page listing templates.
   * Quickstarts, Service, and Architecture templates (categories 0, 1, and 2) are available in all compartments.
   * Each private template (category 3) is available in the compartment where it was created.
   *
   */
  "id"?: string;
  /**
   * The name of the template category.
   */
  "displayName"?: string;
}

export namespace TemplateCategorySummary {
  export function getJsonObj(obj: TemplateCategorySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TemplateCategorySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
