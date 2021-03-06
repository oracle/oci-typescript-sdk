/**
 * Application Performance Monitoring (APM) Control Plane API
 * Provide a set of APIs for tenant to perform operations like create, update, delete and list APM domains, and also
work request APIs to monitor progress of these operations.

 * OpenAPI spec version: 20200630
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information needed for the change compartment operation.
 */
export interface ChangeApmDomainCompartmentDetails {
  /**
   * The OCID of the destination compartment for the APM Domain.
   */
  "compartmentId": string;
}

export namespace ChangeApmDomainCompartmentDetails {
  export function getJsonObj(obj: ChangeApmDomainCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ChangeApmDomainCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
