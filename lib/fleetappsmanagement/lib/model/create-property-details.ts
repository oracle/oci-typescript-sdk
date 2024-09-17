/**
 * Fleet Application Management Service API
 * Fleet Application Management Service API. Use this API to for all FAMS related activities.
To manage fleets,view complaince report for the Fleet,scedule patches and other lifecycle activities

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
 * The information about new Property.
 */
export interface CreatePropertyDetails {
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
   * Text selection of the category
   */
  "selection": model.Selection;
  /**
   * Format of the value
   */
  "valueType": model.ValueType;
  /**
   * Values of the property (must be a single value if selection = 'single choice')
   */
  "values"?: Array<string>;
}

export namespace CreatePropertyDetails {
  export function getJsonObj(obj: CreatePropertyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreatePropertyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}