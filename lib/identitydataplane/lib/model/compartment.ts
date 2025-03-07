/**
 * Identity and Access Management Data Plane API
 * APIs for managing identity data plane services. For example, use this API to create a scoped-access security token. To manage identity domains (for example, creating or deleting an identity domain) or to manage resources (for example, users and groups) within the default identity domain, see [IAM API](https://docs.oracle.com/iaas/api/#/en/identity/).
 * OpenAPI spec version: v1
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

export interface Compartment {
  /**
   * The id of the compartment.
   */
  "id": string;
  /**
   * The name of the compartment.
   */
  "name": string;
  /**
   * The display name of the compartment.
   */
  "displayName": string;
  /**
   * The full name of the compartment.
   */
  "fullName": string;
  /**
   * The id of the parent compartment.
   */
  "parentCompartmentId": string;
  /**
   * The status of the compartment.
   */
  "status": model.EntityStatus;
  /**
   * The extended properties.
   */
  "propertyMap": { [key: string]: string };
}

export namespace Compartment {
  export function getJsonObj(obj: Compartment): object {
    const jsonObj = {
      ...obj,
      ...{
        "status": obj.status ? model.EntityStatus.getJsonObj(obj.status) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Compartment): object {
    const jsonObj = {
      ...obj,
      ...{
        "status": obj.status ? model.EntityStatus.getDeserializedJsonObj(obj.status) : undefined
      }
    };

    return jsonObj;
  }
}
