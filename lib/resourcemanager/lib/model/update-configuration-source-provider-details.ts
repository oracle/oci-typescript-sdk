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
 * Update details for a configuration source provider.
 *
 */
export interface UpdateConfigurationSourceProviderDetails {
  /**
   * Human-readable name of the configuration source provider. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Description of the configuration source provider. Avoid entering confidential information.
   */
  "description"?: string;
  "privateServerConfigDetails"?: model.PrivateServerConfigDetails;
  /**
   * Free-form tags associated with the resource. Each tag is a key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "configSourceProviderType": string;
}

export namespace UpdateConfigurationSourceProviderDetails {
  export function getJsonObj(obj: UpdateConfigurationSourceProviderDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "privateServerConfigDetails": obj.privateServerConfigDetails
          ? model.PrivateServerConfigDetails.getJsonObj(obj.privateServerConfigDetails)
          : undefined
      }
    };

    if (obj && "configSourceProviderType" in obj && obj.configSourceProviderType) {
      switch (obj.configSourceProviderType) {
        case "BITBUCKET_CLOUD_USERNAME_APPPASSWORD":
          return model.UpdateBitbucketCloudUsernameAppPasswordConfigurationSourceProviderDetails.getJsonObj(
            <model.UpdateBitbucketCloudUsernameAppPasswordConfigurationSourceProviderDetails>(
              (<object>jsonObj)
            ),
            true
          );
        case "BITBUCKET_SERVER_ACCESS_TOKEN":
          return model.UpdateBitbucketServerAccessTokenConfigurationSourceProviderDetails.getJsonObj(
            <model.UpdateBitbucketServerAccessTokenConfigurationSourceProviderDetails>(
              (<object>jsonObj)
            ),
            true
          );
        case "GITLAB_ACCESS_TOKEN":
          return model.UpdateGitlabAccessTokenConfigurationSourceProviderDetails.getJsonObj(
            <model.UpdateGitlabAccessTokenConfigurationSourceProviderDetails>(<object>jsonObj),
            true
          );
        case "GITHUB_ACCESS_TOKEN":
          return model.UpdateGithubAccessTokenConfigurationSourceProviderDetails.getJsonObj(
            <model.UpdateGithubAccessTokenConfigurationSourceProviderDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.configSourceProviderType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateConfigurationSourceProviderDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "privateServerConfigDetails": obj.privateServerConfigDetails
          ? model.PrivateServerConfigDetails.getDeserializedJsonObj(obj.privateServerConfigDetails)
          : undefined
      }
    };

    if (obj && "configSourceProviderType" in obj && obj.configSourceProviderType) {
      switch (obj.configSourceProviderType) {
        case "BITBUCKET_CLOUD_USERNAME_APPPASSWORD":
          return model.UpdateBitbucketCloudUsernameAppPasswordConfigurationSourceProviderDetails.getDeserializedJsonObj(
            <model.UpdateBitbucketCloudUsernameAppPasswordConfigurationSourceProviderDetails>(
              (<object>jsonObj)
            ),
            true
          );
        case "BITBUCKET_SERVER_ACCESS_TOKEN":
          return model.UpdateBitbucketServerAccessTokenConfigurationSourceProviderDetails.getDeserializedJsonObj(
            <model.UpdateBitbucketServerAccessTokenConfigurationSourceProviderDetails>(
              (<object>jsonObj)
            ),
            true
          );
        case "GITLAB_ACCESS_TOKEN":
          return model.UpdateGitlabAccessTokenConfigurationSourceProviderDetails.getDeserializedJsonObj(
            <model.UpdateGitlabAccessTokenConfigurationSourceProviderDetails>(<object>jsonObj),
            true
          );
        case "GITHUB_ACCESS_TOKEN":
          return model.UpdateGithubAccessTokenConfigurationSourceProviderDetails.getDeserializedJsonObj(
            <model.UpdateGithubAccessTokenConfigurationSourceProviderDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.configSourceProviderType}`);
      }
    }
    return jsonObj;
  }
}
