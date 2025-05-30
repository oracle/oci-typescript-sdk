/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * Generic OCI resource instance component
 */
export interface GenericOciResourceInstanceComponent extends model.InstanceComponent {
  /**
   * OCID of the resource
   */
  "id": string;
  /**
   * Type of the resource
   */
  "resourceType": string;

  "type": string;
}

export namespace GenericOciResourceInstanceComponent {
  export function getJsonObj(
    obj: GenericOciResourceInstanceComponent,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceComponent.getJsonObj(obj) as GenericOciResourceInstanceComponent)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "GENERIC_OCI_RESOURCE";
  export function getDeserializedJsonObj(
    obj: GenericOciResourceInstanceComponent,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceComponent.getDeserializedJsonObj(
            obj
          ) as GenericOciResourceInstanceComponent)),
      ...{}
    };

    return jsonObj;
  }
}
