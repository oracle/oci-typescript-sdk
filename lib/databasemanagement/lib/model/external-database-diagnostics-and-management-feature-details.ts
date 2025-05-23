/**
 * Database Management API
 * Use the Database Management API to monitor and manage resources such as
Oracle Databases, MySQL Databases, and External Database Systems. 
For more information, see [Database Management](https://docs.oracle.com/iaas/database-management/home.htm).

 * OpenAPI spec version: 20201101
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
 * The details required to enable the Diagnostics and Management feature.
 */
export interface ExternalDatabaseDiagnosticsAndManagementFeatureDetails
  extends model.ExternalDatabaseFeatureDetails {
  /**
   * The Oracle license model that applies to the external database.
   *
   */
  "licenseModel": ExternalDatabaseDiagnosticsAndManagementFeatureDetails.LicenseModel;
  /**
   * Indicates whether Diagnostics & Management should be enabled for all the current pluggable databases in the container database.
   */
  "canEnableAllCurrentPdbs"?: boolean;
  /**
   * Indicates whether Diagnostics & Management should be enabled automatically for all the pluggable databases in the container database.
   */
  "isAutoEnablePluggableDatabase"?: boolean;

  "feature": string;
}

export namespace ExternalDatabaseDiagnosticsAndManagementFeatureDetails {
  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE"
  }

  export function getJsonObj(
    obj: ExternalDatabaseDiagnosticsAndManagementFeatureDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ExternalDatabaseFeatureDetails.getJsonObj(
            obj
          ) as ExternalDatabaseDiagnosticsAndManagementFeatureDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const feature = "DIAGNOSTICS_AND_MANAGEMENT";
  export function getDeserializedJsonObj(
    obj: ExternalDatabaseDiagnosticsAndManagementFeatureDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ExternalDatabaseFeatureDetails.getDeserializedJsonObj(
            obj
          ) as ExternalDatabaseDiagnosticsAndManagementFeatureDetails)),
      ...{}
    };

    return jsonObj;
  }
}
