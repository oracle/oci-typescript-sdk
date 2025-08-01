/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](https://docs.oracle.com/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
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
 * Information about a new usage plan.
 */
export interface CreateUsagePlanDetails {
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: {@code My new resource}
* 
    */
  "displayName"?: string;
  /**
   * A collection of entitlements to assign to the newly created usage plan.
   *
   */
  "entitlements": Array<model.Entitlement>;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment in which the
   * resource is created.
   *
   */
  "compartmentId": string;
  /**
   * Locks associated with this resource.
   */
  "locks"?: Array<model.AddResourceLockDetails>;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair
* with no predefined name, type, or namespace. For more information, see
* [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see
* [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateUsagePlanDetails {
  export function getJsonObj(obj: CreateUsagePlanDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "entitlements": obj.entitlements
          ? obj.entitlements.map(item => {
              return model.Entitlement.getJsonObj(item);
            })
          : undefined,

        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.AddResourceLockDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateUsagePlanDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "entitlements": obj.entitlements
          ? obj.entitlements.map(item => {
              return model.Entitlement.getDeserializedJsonObj(item);
            })
          : undefined,

        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.AddResourceLockDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
