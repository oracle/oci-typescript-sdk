/**
 * Audit API
 * API for the Audit Service. Use this API for compliance monitoring in your tenancy.
For more information, see [Overview of Audit](https://docs.oracle.com/iaas/Content/Audit/Concepts/auditoverview.htm).

**Tip**: This API is good for queries, but not bulk-export operations.

 * OpenAPI spec version: 20190901
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
 * The payload of the event. Information within {@code data} comes from the resource emitting the event.
 *
 */
export interface Data {
  /**
   * This value links multiple audit events that are part of the same API operation. For example,
   * a long running API operations that emit an event at the start and the end of an operation
   * would use the same value in this field for both events.
   *
   */
  "eventGroupingId"?: string;
  /**
    * Name of the API operation that generated this event.
* <p>
Example: {@code GetInstance}
* 
    */
  "eventName"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment of the resource
   * emitting the event.
   *
   */
  "compartmentId"?: string;
  /**
    * The name of the compartment. This value is the friendly name associated with compartmentId.
* This value can change, but the service logs the value that appeared at the time of the audit
* event.
* <p>
Example: {@code CompartmentA}
* 
    */
  "compartmentName"?: string;
  /**
   * The name of the resource emitting the event.
   *
   */
  "resourceName"?: string;
  /**
   * An [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) or some other ID for the resource
   * emitting the event.
   *
   */
  "resourceId"?: string;
  /**
   * The availability domain where the resource resides.
   *
   */
  "availabilityDomain"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, 
* type, or namespace. Exists for cross-compatibility only. For more information, 
* see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more
* information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  "identity"?: model.Identity;
  "request"?: model.Request;
  "response"?: model.Response;
  "stateChange"?: model.StateChange;
  /**
    * A container object for attribues unique to the resource emitting the event.
* <p>
Example:
* <p>
  -----
*     {
*       \"imageId\": \"ocid1.image.oc1.phx.<unique_ID>\",
*       \"shape\": \"VM.Standard1.1\",
*       \"type\": \"CustomerVmi\"
*     }
*   -----
* 
    */
  "additionalDetails"?: { [key: string]: any };
}

export namespace Data {
  export function getJsonObj(obj: Data): object {
    const jsonObj = {
      ...obj,
      ...{
        "identity": obj.identity ? model.Identity.getJsonObj(obj.identity) : undefined,
        "request": obj.request ? model.Request.getJsonObj(obj.request) : undefined,
        "response": obj.response ? model.Response.getJsonObj(obj.response) : undefined,
        "stateChange": obj.stateChange ? model.StateChange.getJsonObj(obj.stateChange) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Data): object {
    const jsonObj = {
      ...obj,
      ...{
        "identity": obj.identity ? model.Identity.getDeserializedJsonObj(obj.identity) : undefined,
        "request": obj.request ? model.Request.getDeserializedJsonObj(obj.request) : undefined,
        "response": obj.response ? model.Response.getDeserializedJsonObj(obj.response) : undefined,
        "stateChange": obj.stateChange
          ? model.StateChange.getDeserializedJsonObj(obj.stateChange)
          : undefined
      }
    };

    return jsonObj;
  }
}
