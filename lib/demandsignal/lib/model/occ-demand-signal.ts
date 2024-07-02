/**
 * OCI Control Center Demand Signal API
 * Use the OCI Control Center Demand Signal API to manage Demand Signals.
 * OpenAPI spec version: 20240430
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
* An OccDemandSignal is a forecast created for different Resource Types.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to
* an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/policiesgs/get-started-with-policies.htm).
* 
*/
export interface OccDemandSignal {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the OccDemandSignal.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   */
  "displayName": string;
  /**
   * The OccDemandSignal data.
   */
  "occDemandSignals": Array<model.OccDemandSignalData>;
  /**
   * Indicator of whether to share the data with Oracle.
   */
  "isActive": boolean;
  /**
   * The current state of the OccDemandSignal.
   */
  "lifecycleState": OccDemandSignal.LifecycleState;
  /**
    * The date and time the OccDemandSignal was created, in the format defined by [RFC 3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
  /**
    * The date and time the OccDemandSignal was updated, in the format defined by [RFC 3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeUpdated"?: Date;
  /**
   * A message that describes the current state of the OccDemandSignal in more detail. For example,
   * can be used to provide actionable information for a resource in the Failed state.
   *
   */
  "lifecycleDetails"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags": { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace OccDemandSignal {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OccDemandSignal): object {
    const jsonObj = {
      ...obj,
      ...{
        "occDemandSignals": obj.occDemandSignals
          ? obj.occDemandSignals.map(item => {
              return model.OccDemandSignalData.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OccDemandSignal): object {
    const jsonObj = {
      ...obj,
      ...{
        "occDemandSignals": obj.occDemandSignals
          ? obj.occDemandSignals.map(item => {
              return model.OccDemandSignalData.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}