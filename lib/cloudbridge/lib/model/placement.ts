/**
 * Oracle Cloud Bridge API
 * API for Oracle Cloud Bridge service.
 * OpenAPI spec version: 20220509
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
 * Describes the placement of an instance.
 */
export interface Placement {
  /**
   * The affinity setting for the instance on the Dedicated Host.
   */
  "affinity"?: string;
  /**
   * The Availability Zone of the instance.
   */
  "availabilityZone"?: string;
  /**
   * The name of the placement group the instance is in.
   */
  "groupName"?: string;
  /**
   * The ID of the Dedicated Host on which the instance resides.
   */
  "hostKey"?: string;
  /**
   * The ARN of the host resource group in which to launch the instances.
   */
  "hostResourceGroupArn"?: string;
  /**
   * The number of the partition that the instance is in. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "partitionNumber"?: number;
  /**
   * Reserved for future use.
   */
  "spreadDomain"?: string;
  /**
   * The tenancy of the instance (if the instance is running in a VPC).
   */
  "tenancy"?: string;
}

export namespace Placement {
  export function getJsonObj(obj: Placement): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Placement): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
