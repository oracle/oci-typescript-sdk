/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20230518
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
 * Details of a parameter file
 */
export interface ParameterFileVersionSummary {
  /**
   * A unique name associated with the current migration/job and extract/replicat name
   */
  "name": string;
  /**
   * Indicator of Parameter File 'kind' (for an EXTRACT or a REPLICAT)
   */
  "kind": model.JobParameterFileVersionKind;
  /**
   * A description to discribe the current parameter file version
   */
  "description"?: string;
  /**
   * Return boolean true/false for the currently in-use parameter file (factory or a versioned file)
   */
  "isCurrent": boolean;
  /**
   * Return true/false for whether the parameter file is oracle provided (Factory)
   */
  "isFactory": boolean;
  /**
   * The time when this parameter file was applied on the process
   *
   */
  "timeCreated": Date;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see Resource Tags. Example: {\"Department\": \"Finance\"}
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

export namespace ParameterFileVersionSummary {
  export function getJsonObj(obj: ParameterFileVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ParameterFileVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
