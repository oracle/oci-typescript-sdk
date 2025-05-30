/**
 * Language API
 * OCI Language Service solutions can help enterprise customers integrate AI into their products immediately using our proven,
pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20221001
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
 * The information needed to create a new endpoint and expose to end users.
 */
export interface CreateEndpointDetails {
  /**
   * A user-friendly display name for the resource. It should be unique and can be modified. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Compute infra type for endpoint.
   */
  "computeType"?: CreateEndpointDetails.ComputeType;
  /**
   * Unique name across user tenancy in a region to identify an endpoint to be used for inferencing.
   */
  "alias"?: string;
  /**
   * A short description of the an endpoint.
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) compartment identifier for the endpoint
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the model to associate with the endpoint.
   */
  "modelId": string;
  /**
   * Number of replicas required for this endpoint. This will be optional parameter. Default will be 1. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inferenceUnits"?: number;
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

export namespace CreateEndpointDetails {
  export enum ComputeType {
    Cpu = "CPU",
    Gpu = "GPU"
  }

  export function getJsonObj(obj: CreateEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
