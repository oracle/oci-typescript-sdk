/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
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
 * Description of the VM target environment.
 */
export interface VmTargetEnvironment extends model.TargetEnvironment {
  /**
   * Availability Domain of the VM configuration.
   */
  "availabilityDomain"?: string;
  /**
   * Fault domain of the VM configuration.
   */
  "faultDomain"?: string;
  /**
   * OCID of the VM configuration VCN.
   */
  "vcn": string;
  /**
   * OCID of the VM configuration subnet.
   */
  "subnet": string;
  /**
   * OCID of the dedicated VM configuration host.
   */
  "dedicatedVmHost"?: string;
  /**
   * Microsoft license for the VM configuration.
   */
  "msLicense"?: string;
  /**
   * Preferred VM shape type provided by the customer.
   */
  "preferredShapeType"?: string;

  "targetEnvironmentType": string;
}

export namespace VmTargetEnvironment {
  export function getJsonObj(obj: VmTargetEnvironment, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TargetEnvironment.getJsonObj(obj) as VmTargetEnvironment)),
      ...{}
    };

    return jsonObj;
  }
  export const targetEnvironmentType = "VM_TARGET_ENV";
  export function getDeserializedJsonObj(
    obj: VmTargetEnvironment,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TargetEnvironment.getDeserializedJsonObj(obj) as VmTargetEnvironment)),
      ...{}
    };

    return jsonObj;
  }
}
