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
 * Describes the modification parameters for the Scheduling Policy.
 *
 */
export interface UpdateSchedulingPolicyDetails {
  /**
   * The user-friendly name for the Scheduling Policy. The name does not need to be unique.
   */
  "displayName"?: string;
  /**
   * The cadence period.
   */
  "cadence"?: UpdateSchedulingPolicyDetails.Cadence;
  /**
   * Start of the month to be followed during the cadence period.
   */
  "cadenceStartMonth"?: model.Month;
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

export namespace UpdateSchedulingPolicyDetails {
  export enum Cadence {
    Halfyearly = "HALFYEARLY",
    Quarterly = "QUARTERLY",
    Monthly = "MONTHLY"
  }

  export function getJsonObj(obj: UpdateSchedulingPolicyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "cadenceStartMonth": obj.cadenceStartMonth
          ? model.Month.getJsonObj(obj.cadenceStartMonth)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateSchedulingPolicyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "cadenceStartMonth": obj.cadenceStartMonth
          ? model.Month.getDeserializedJsonObj(obj.cadenceStartMonth)
          : undefined
      }
    };

    return jsonObj;
  }
}
