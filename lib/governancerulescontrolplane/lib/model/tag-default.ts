/**
 * GovernanceRulesControlPlane API
 * A description of the GovernanceRulesControlPlane API
 * OpenAPI spec version: 20220504
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
 * Tag defaults let you specify a default tag (tagnamespace.tag=\"value\") to apply to all resource types
 * in a specified compartment. The tag default is applied at the time the resource is created. Resources
 * that exist in the compartment before you create the tag default are not tagged.
 *
 */
export interface TagDefault {
  /**
   * The name of the tag. The tag default will always assign a default value for this tag name.
   *
   */
  "tagName": string;
  /**
   * The default value for the tag name. This will be applied to all new resources created in the compartment.
   *
   */
  "value": string;
  /**
    * If you specify that a value is required, a value is set during resource creation (either by
* the user creating the resource or another tag default). If no value is set, resource
* creation is blocked.
* <p>
* If the {@code isRequired} flag is set to \"true\", the value is set during resource creation.
* * If the {@code isRequired} flag is set to \"false\", the value you enter is set during resource creation.
* <p>
Example: {@code false}
* 
    */
  "isRequired": boolean;
}

export namespace TagDefault {
  export function getJsonObj(obj: TagDefault): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TagDefault): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
