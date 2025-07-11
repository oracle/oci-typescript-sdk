/**
 * Oracle API Access Control
 * This service is used to restrict the control plane service apis; so that everybody won't be 
able to access those apis.
There are two main resouces defined as a part of this service
1. PrivilegedApiControl: This is created by the customer which defines which service apis are 
   controlled and who can access it.
2. PrivilegedApiRequest: This is a request object again created by the customer operators who           seek access to those privileged apis. After a request is obtained based on the                       PrivilegedAccessControl for which the api belongs to, either it can be approved so that the          requested person can execute the service apis or it will wait for the customer to approve it.

 * OpenAPI spec version: 20241130
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
 * Summary of access request.
 */
export interface PrivilegedApiRequestSummary {
  /**
   * The OCID of the access request.
   */
  "id": string;
  /**
   * Name of the privilegedApi control. The name must be unique.
   */
  "displayName"?: string;
  /**
   * This is a system-generated identifier to identity a Request in human readable form in the form of REQYYYYMMDD<number>.
   *
   */
  "requestId"?: string;
  /**
   * Comment associated with the privilegedApi request.
   */
  "reasonSummary": string;
  /**
   * The OCID of the compartment that contains the privilegedApi request.
   */
  "compartmentId"?: string;
  /**
   * resourceName for which the PrivilegedApiRequest is applicable
   */
  "resourceName"?: string;
  /**
   * The OCID of the target resource associated with the privilegedApi request. The operator raises an privilegedApi request to get approval to access the target resource.
   *
   */
  "resourceId": string;
  /**
   * The subresource names requested for approval.
   */
  "subResourceNameList"?: Array<string>;
  /**
   * resourceType for which the PrivilegedApiRequest is applicable
   */
  "resourceType"?: string;
  /**
   * List of api names, attributes for which approval is sought by the user.
   *
   */
  "privilegedOperationList"?: Array<model.PrivilegedApiRequestOperationDetails>;
  /**
   * The current state of the Access Request.
   */
  "state"?: string;
  /**
   * The current state of the PrivilegedApiRequest.
   */
  "lifecycleState"?: string;
  /**
   * More in detail about the lifeCycleState.
   */
  "lifecycleDetails"?: string;
  /**
   * Time when the privilegedApi request was created by the operator user in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeCreated"?: Date;
  /**
   * Time when the privilegedApi request was last modified in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeUpdated"?: Date;
  /**
   * Duration in hours for which access is sought on the target resource. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "durationInHrs"?: number;
  /**
   * Priority assigned to the privilegedApi request by the operator
   */
  "severity"?: model.PrivilegedApiRequestSeverity;
  /**
   * Time in future when the user for the access request needs to be created in [RFC 3339](https://tools.ietf.org/html/rfc3339)timestamp format. Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeRequestedForFutureAccess"?: Date;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace PrivilegedApiRequestSummary {
  export function getJsonObj(obj: PrivilegedApiRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "privilegedOperationList": obj.privilegedOperationList
          ? obj.privilegedOperationList.map(item => {
              return model.PrivilegedApiRequestOperationDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PrivilegedApiRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "privilegedOperationList": obj.privilegedOperationList
          ? obj.privilegedOperationList.map(item => {
              return model.PrivilegedApiRequestOperationDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
