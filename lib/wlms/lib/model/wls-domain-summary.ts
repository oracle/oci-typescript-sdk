/**
 * WebLogic Management Service API
 * WebLogic Management Service is an OCI service that enables a unified view and management of WebLogic domains
in Oracle Cloud Infrastructure. Features include on-demand patching of WebLogic domains, rollback of the
last applied patch, discovery and management of WebLogic instances on a compute host.

 * OpenAPI spec version: 20241101
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
 * The summary information about a Weblogic domain.
 *
 */
export interface WlsDomainSummary {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the WebLogic domain.
   */
  "id": string;
  /**
   * A user-friendly name that does not have to be unique and is changeable.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The middleware type on the administration server of the WebLogic domain.
   */
  "middlewareType"?: string;
  /**
   * The version of the WebLogic domain.
   */
  "weblogicVersion"?: string;
  /**
   * The patch readiness status of the WebLogic domain.
   */
  "patchReadinessStatus"?: model.PatchReadinessStatus;
  /**
   * The current state of the WebLogic domain.
   */
  "lifecycleState": string;
  /**
   * A message that describes the current state of the WebLogic domain in more detail. For example,
   * can be used to provide actionable information for a resource in the 'Failed' state.
   *
   */
  "lifecycleDetails"?: string;
  /**
    * The date and time the WebLogic domain was created (in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) format).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated"?: Date;
  /**
    * The date and time the WebLogic domain was updated (in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) format).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeUpdated"?: Date;
  /**
    * Free-form tags for this resource. Each tag is a key-value pair with no predefined name, type, or namespace.
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

export namespace WlsDomainSummary {
  export function getJsonObj(obj: WlsDomainSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WlsDomainSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
