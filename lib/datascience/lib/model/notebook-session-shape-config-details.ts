/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * Details for the notebook session shape configuration.
 */
export interface NotebookSessionShapeConfigDetails {
  /**
   * The total number of OCPUs available to the notebook session instance.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocpus"?: number;
  /**
   * The total amount of memory available to the notebook session instance, in gigabytes.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryInGBs"?: number;
}

export namespace NotebookSessionShapeConfigDetails {
  export function getJsonObj(obj: NotebookSessionShapeConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NotebookSessionShapeConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
