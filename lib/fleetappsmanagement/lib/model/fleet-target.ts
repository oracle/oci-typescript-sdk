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
 * Description of FleetTarget.
 */
export interface FleetTarget {
  /**
   * The OCID of the resource.
   */
  "id": string;
  /**
   * Tenancy OCID
   */
  "compartmentId"?: string;
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: {@code My new resource}
* 
    */
  "displayName": string;
  /**
   * The time this resource was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * Current version of Target
   */
  "version"?: string;
  /**
   * Product to which the target belongs to.
   */
  "product"?: string;
  "resource"?: model.TargetResource;
  /**
   * Last known compliance state of Target.
   */
  "complianceState"?: model.ComplianceState;
  /**
   * The current state of the FleetTarget.
   */
  "lifecycleState"?: FleetTarget.LifecycleState;
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace FleetTarget {
  export enum LifecycleState {
    Active = "ACTIVE",
    Deleted = "DELETED",
    Failed = "FAILED"
  }

  export function getJsonObj(obj: FleetTarget): object {
    const jsonObj = {
      ...obj,
      ...{
        "resource": obj.resource ? model.TargetResource.getJsonObj(obj.resource) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FleetTarget): object {
    const jsonObj = {
      ...obj,
      ...{
        "resource": obj.resource
          ? model.TargetResource.getDeserializedJsonObj(obj.resource)
          : undefined
      }
    };

    return jsonObj;
  }
}