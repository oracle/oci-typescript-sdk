/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The information about a new Microsoft Fabric Connection.
 *
 */
export interface CreateMicrosoftFabricConnectionDetails extends model.CreateConnectionDetails {
  /**
   * The Microsoft Fabric technology type.
   */
  "technologyType": string;
  /**
   * Azure tenant ID of the application.
   * e.g.: 14593954-d337-4a61-a364-9f758c64f97f
   *
   */
  "tenantId": string;
  /**
   * Azure client ID of the application.
   * e.g.: 06ecaabf-8b80-4ec8-a0ec-20cbf463703d
   *
   */
  "clientId": string;
  /**
   * Client secret associated with the client id.
   * Deprecated: This field is deprecated and replaced by \"clientSecretSecretId\". This field will be removed after February 15 2026.
   *
   */
  "clientSecret"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Secret where the client secret is stored.
   * Note: When provided, 'clientSecret' field must not be provided.
   *
   */
  "clientSecretSecretId"?: string;
  /**
   * Optional Microsoft Fabric service endpoint.
   * Default value: https://onelake.dfs.fabric.microsoft.com
   *
   */
  "endpoint"?: string;

  "connectionType": string;
}

export namespace CreateMicrosoftFabricConnectionDetails {
  export function getJsonObj(
    obj: CreateMicrosoftFabricConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getJsonObj(
            obj
          ) as CreateMicrosoftFabricConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "MICROSOFT_FABRIC";
  export function getDeserializedJsonObj(
    obj: CreateMicrosoftFabricConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as CreateMicrosoftFabricConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}
