/**
 * OCI Control Center Capacity Management API
 * OCI Control Center (OCC) Capacity Management enables you to manage capacity requests in realms where OCI Control Center Capacity Management is available. For more information, see [OCI Control Center](https://docs.oracle.com/iaas/Content/control-center/home.htm).
 * OpenAPI spec version: 20231107
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
 * An internal model containing details about the properties required for creating a demand signal delivery resource.
 *
 */
export interface CreateInternalOccmDemandSignalDeliveryDetails {
  /**
   * The OCID of the tenancy from which the demand signal delivery resource is created.
   *
   */
  "compartmentId": string;
  /**
   * The OCID of the corresponding customer group to which this demand signal delivery resource belongs to.
   *
   */
  "occCustomerGroupId": string;
  /**
   * The OCID of the demand signal under which this delivery will be grouped.
   *
   */
  "demandSignalId": string;
  /**
   * The OCID of the demand signal item corresponding to which this delivery is made.
   *
   */
  "demandSignalItemId": string;
  /**
   * The quantity of the resource that OCI will supply to the customer.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "acceptedQuantity": number;
  /**
   * This field could be used by OCI to communicate the reason for declining the request.
   *
   */
  "justification"?: string;
  /**
   * This field acts as a notes section for operators.
   *
   */
  "notes"?: string;
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

export namespace CreateInternalOccmDemandSignalDeliveryDetails {
  export function getJsonObj(obj: CreateInternalOccmDemandSignalDeliveryDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: CreateInternalOccmDemandSignalDeliveryDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
