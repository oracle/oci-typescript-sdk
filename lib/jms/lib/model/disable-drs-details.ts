/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of the request to disable DRS file from active managed instance(s) in a Fleet.
 * When the targets aren't specified, then all active managed instance(s) currently in the Fleet are selected.
 *
 */
export interface DisableDrsDetails {
  "manageDrsDetails"?: model.ManageDrsDetails;
}

export namespace DisableDrsDetails {
  export function getJsonObj(obj: DisableDrsDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "manageDrsDetails": obj.manageDrsDetails
          ? model.ManageDrsDetails.getJsonObj(obj.manageDrsDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DisableDrsDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "manageDrsDetails": obj.manageDrsDetails
          ? model.ManageDrsDetails.getDeserializedJsonObj(obj.manageDrsDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}