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
 * An API is simple container for an API Specification. For more information, see [API Gateway Concepts](https://docs.oracle.com/iaas/Content/APIGateway/Concepts/apigatewayconcepts.htm).
 *
 */
export interface Api {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the resource.
   *
   */
  "id": string;
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: {@code My new resource}
* 
    */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment in which the
   * resource is created.
   *
   */
  "compartmentId": string;
  /**
   * The time this resource was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time this resource was last updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * Locks associated with this resource.
   */
  "locks"?: Array<model.ResourceLock>;
  /**
   * The current state of the API.
   */
  "lifecycleState"?: Api.LifecycleState;
  /**
    * A message describing the current lifecycleState in more detail. For ACTIVE
* state it describes if the document has been validated and the possible values are:
* - 'New' for just updated API Specifications
* - 'Validating' for a document which is being validated.
* - 'Valid' the document has been validated without any errors or warnings
* - 'Warning' the document has been validated and contains warnings
* - 'Error' the document has been validated and contains errors
* - 'Failed' the document validation failed
* - 'Canceled' the document validation was canceled 
* <p>
For other states it may provide more details like actionable information.
* 
    */
  "lifecycleDetails"?: string;
  /**
   * Type of API Specification file.
   */
  "specificationType"?: string;
  /**
   * Status of each feature available from the API.
   */
  "validationResults"?: Array<model.ApiValidationResult>;
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
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Api {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Api): object {
    const jsonObj = {
      ...obj,
      ...{
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getJsonObj(item);
            })
          : undefined,

        "validationResults": obj.validationResults
          ? obj.validationResults.map(item => {
              return model.ApiValidationResult.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Api): object {
    const jsonObj = {
      ...obj,
      ...{
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getDeserializedJsonObj(item);
            })
          : undefined,

        "validationResults": obj.validationResults
          ? obj.validationResults.map(item => {
              return model.ApiValidationResult.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
