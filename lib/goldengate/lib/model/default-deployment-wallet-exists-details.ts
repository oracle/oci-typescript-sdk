/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Definition of the additional attributes for default check of a wallet in deployment .
 */
export interface DefaultDeploymentWalletExistsDetails extends model.DeploymentWalletExistsDetails {
  "type": string;
}

export namespace DefaultDeploymentWalletExistsDetails {
  export function getJsonObj(
    obj: DefaultDeploymentWalletExistsDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeploymentWalletExistsDetails.getJsonObj(
            obj
          ) as DefaultDeploymentWalletExistsDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "DEFAULT";
  export function getDeserializedJsonObj(
    obj: DefaultDeploymentWalletExistsDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeploymentWalletExistsDetails.getDeserializedJsonObj(
            obj
          ) as DefaultDeploymentWalletExistsDetails)),
      ...{}
    };

    return jsonObj;
  }
}