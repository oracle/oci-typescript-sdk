/**
 * Marketplace Service API
 * Use the Marketplace API to manage applications in Oracle Cloud Infrastructure Marketplace. For more information, see [Overview of Marketplace](https://docs.oracle.com/iaas/Content/Marketplace/Concepts/marketoverview.htm)
 * OpenAPI spec version: 20181001
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
 * The model for the parameters needed to export a listing.
 */
export interface ExportPackageDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want to export container image or helm chart.
   */
  "compartmentId": string;
  /**
   * The repository path (/Content/General/Concepts/identifiers.htm) of the container reposistory where the container image or helm chart should be exported.
   */
  "containerRepositoryPath": string;
}

export namespace ExportPackageDetails {
  export function getJsonObj(obj: ExportPackageDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExportPackageDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
