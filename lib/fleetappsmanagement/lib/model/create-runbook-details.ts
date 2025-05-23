/**
 * Fleet Application Management Service API
 * Fleet Application Management provides a centralized platform to help you automate resource management tasks, validate patch compliance, and enhance operational efficiency across an enterprise.

 * OpenAPI spec version: 20250228
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
 * The information about new Runbook.
 */
export interface CreateRunbookDetails {
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: {@code My new resource}
* 
    */
  "displayName": string;
  /**
   * A user-friendly description. To provide some insight about the resource.
   * Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * The lifecycle operation performed by the task.
   */
  "operation": string;
  /**
   * The OS type for the runbook.
   */
  "osType"?: model.OsType;
  /**
   * The platform of the runbook.
   */
  "platform"?: string;
  /**
   * Is the runbook default?
   */
  "isDefault"?: boolean;
  /**
   * Does this runbook need SUDO access to execute?
   */
  "isSudoAccessNeeded"?: boolean;
  /**
   * Estimated time to successfully complete the runbook execution.
   */
  "estimatedTime"?: string;
  "runbookVersion": model.Version;
  /**
   * OCID of the compartment to which the resource belongs to.
   */
  "compartmentId": string;
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
}

export namespace CreateRunbookDetails {
  export function getJsonObj(obj: CreateRunbookDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "runbookVersion": obj.runbookVersion
          ? model.Version.getJsonObj(obj.runbookVersion)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateRunbookDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "runbookVersion": obj.runbookVersion
          ? model.Version.getDeserializedJsonObj(obj.runbookVersion)
          : undefined
      }
    };

    return jsonObj;
  }
}
