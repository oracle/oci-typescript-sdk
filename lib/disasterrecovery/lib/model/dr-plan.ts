/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (DR) API to manage disaster recovery for business applications.
Full Stack DR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster 
recovery capabilities for all layers of an application stack, including infrastructure, middleware, database, 
and application.

 * OpenAPI spec version: 20220125
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
 * The details of a DR plan.
 */
export interface DrPlan {
  /**
    * The OCID of the DR plan.
* <p>
Example: {@code ocid1.drplan.oc1..uniqueID}
* 
    */
  "id": string;
  /**
    * The display name of the DR plan.
* <p>
Example: {@code EBS Switchover PHX to IAD}
* 
    */
  "displayName": string;
  /**
    * The OCID of the compartment containing the DR plan.
* <p>
Example: {@code ocid1.compartment.oc1..uniqueID}
* 
    */
  "compartmentId": string;
  /**
   * The type of the DR plan.
   *
   */
  "type": model.DrPlanType;
  /**
    * The date and time the DR plan was created. An RFC3339 formatted datetime string.
* <p>
Example: {@code 2019-03-29T09:36:42Z}
* 
    */
  "timeCreated": Date;
  /**
    * The date and time the DR plan was updated. An RFC3339 formatted datetime string.
* <p>
Example: {@code 2019-03-29T09:36:42Z}
* 
    */
  "timeUpdated": Date;
  /**
    * The OCID of the DR protection group to which this DR plan belongs.
* <p>
Example: {@code ocid1.drplan.oc1..uniqueID}
* 
    */
  "drProtectionGroupId": string;
  /**
    * The OCID of the peer DR protection group associated with this plan's
* DR protection group.
* <p>
Example: {@code ocid1.drprotectiongroup.oc1..uniqueID}
* 
    */
  "peerDrProtectionGroupId": string;
  /**
    * The region of the peer DR protection group associated with this plan's
* DR protection group.
* <p>
Example: {@code us-ashburn-1}
* 
    */
  "peerRegion": string;
  /**
    * If this is a cloned DR plan, the OCID of the source DR plan that was used to clone this DR plan.
* If this DR plan was not cloned, then the value for this will be {@code null}.
* <p>
Example: {@code ocid1.drplan.oc1..uniqueID}
* 
    */
  "sourcePlanId"?: string;
  /**
   * The list of groups in this DR plan.
   *
   */
  "planGroups": Array<model.DrPlanGroup>;
  /**
   * The current state of the DR plan.
   *
   */
  "lifecycleState": model.DrPlanLifecycleState;
  /**
   * The current state of the DR plan.
   *
   */
  "lifecycleSubState"?: model.DrPlanLifecycleSubState;
  /**
   * A message describing the DR plan's current state in more detail.
   *
   */
  "lifeCycleDetails"?: string;
  /**
    * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * Usage of system tag keys. These predefined keys are scoped to namespaces.
* <p>
Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DrPlan {
  export function getJsonObj(obj: DrPlan): object {
    const jsonObj = {
      ...obj,
      ...{
        "planGroups": obj.planGroups
          ? obj.planGroups.map(item => {
              return model.DrPlanGroup.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrPlan): object {
    const jsonObj = {
      ...obj,
      ...{
        "planGroups": obj.planGroups
          ? obj.planGroups.map(item => {
              return model.DrPlanGroup.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
