/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * Summary of a Process Set, used to construct a list of Process Sets when fetching all Process Sets in a compartment.
 */
export interface ProcessSetSummary {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Process Set.
   *
   */
  "id": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   *
   */
  "compartmentId": string;
  /**
   * The current state of the Resource.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * Name of the Process Set.
   */
  "displayName": string;
  "specification": model.ProcessSetSpecification;
  /**
   * The time the process set was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time the process set was last updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current revision of the Process Set.
   */
  "revision": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ProcessSetSummary {
  export function getJsonObj(obj: ProcessSetSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "specification": obj.specification
          ? model.ProcessSetSpecification.getJsonObj(obj.specification)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProcessSetSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "specification": obj.specification
          ? model.ProcessSetSpecification.getDeserializedJsonObj(obj.specification)
          : undefined
      }
    };

    return jsonObj;
  }
}
