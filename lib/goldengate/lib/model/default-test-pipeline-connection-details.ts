/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Additional attribute with which to test the pipeline's connection. The connectionId must be one of the pipeline's assigned connections.
 *
 */
export interface DefaultTestPipelineConnectionDetails extends model.TestPipelineConnectionDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the connection being
   * referenced.
   *
   */
  "connectionId": string;

  "type": string;
}

export namespace DefaultTestPipelineConnectionDetails {
  export function getJsonObj(
    obj: DefaultTestPipelineConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TestPipelineConnectionDetails.getJsonObj(
            obj
          ) as DefaultTestPipelineConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "DEFAULT";
  export function getDeserializedJsonObj(
    obj: DefaultTestPipelineConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TestPipelineConnectionDetails.getDeserializedJsonObj(
            obj
          ) as DefaultTestPipelineConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}