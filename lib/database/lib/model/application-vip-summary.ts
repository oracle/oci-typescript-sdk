/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](https://docs.oracle.com/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details of an application virtual IP (VIP) address.
 *
 */
export interface ApplicationVipSummary {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the application virtual IP (VIP) address.
   */
  "id": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the cloud VM cluster associated with the application virtual IP (VIP) address.
   */
  "cloudVmClusterId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the subnet associated with the application virtual IP (VIP) address.
   */
  "subnetId"?: string;
  /**
   * The application virtual IP (VIP) IPv4 address.
   */
  "ipAddress"?: string;
  /**
   * The application virtual IP (VIP) IPv6 address.
   */
  "ipv6Address"?: string;
  /**
   * The hostname of the application virtual IP (VIP) address.
   */
  "hostnameLabel": string;
  /**
   * The current lifecycle state of the application virtual IP (VIP) address.
   */
  "lifecycleState": ApplicationVipSummary.LifecycleState;
  /**
   * Additional information about the current lifecycle state of the application virtual IP (VIP) address.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time when the create operation for the application virtual IP (VIP) address completed.
   */
  "timeAssigned": Date;
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
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ApplicationVipSummary {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ApplicationVipSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApplicationVipSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
