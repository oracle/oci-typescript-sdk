/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](https://docs.oracle.com/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * The properties that define a configuration source provider of the type {@code BITBUCKET_SERVER_ACCESS_TOKEN}.
 * This type corresponds to a configuration source provider in Bitbucket server that is authenticated with a personal access token.
 *
 */
export interface BitbucketServerAccessTokenConfigurationSourceProvider
  extends model.ConfigurationSourceProvider {
  /**
   * The Bitbucket server service endpoint.
   * Example: {@code https://bitbucket.org/}
   *
   */
  "apiEndpoint"?: string;

  "configSourceProviderType": string;
}

export namespace BitbucketServerAccessTokenConfigurationSourceProvider {
  export function getJsonObj(
    obj: BitbucketServerAccessTokenConfigurationSourceProvider,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigurationSourceProvider.getJsonObj(
            obj
          ) as BitbucketServerAccessTokenConfigurationSourceProvider)),
      ...{}
    };

    return jsonObj;
  }
  export const configSourceProviderType = "BITBUCKET_SERVER_ACCESS_TOKEN";
  export function getDeserializedJsonObj(
    obj: BitbucketServerAccessTokenConfigurationSourceProvider,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigurationSourceProvider.getDeserializedJsonObj(
            obj
          ) as BitbucketServerAccessTokenConfigurationSourceProvider)),
      ...{}
    };

    return jsonObj;
  }
}
