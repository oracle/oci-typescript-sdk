/**
 * Globally Distributed Database
 * Use the Globally Distributed Database service APIs to create and manage the Globally distributed databases.
 * OpenAPI spec version: 20250101
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
 * The configuration details for moving the resource for private endpoint to other compartment.
 *
 */
export interface ChangeDistributedDatabasePrivateEndpointCompartmentDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to move the resource to.
   *
   */
  "compartmentId": string;
}

export namespace ChangeDistributedDatabasePrivateEndpointCompartmentDetails {
  export function getJsonObj(
    obj: ChangeDistributedDatabasePrivateEndpointCompartmentDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: ChangeDistributedDatabasePrivateEndpointCompartmentDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
