/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](https://docs.oracle.com/iaas/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Details of the trigger create response.
 */
export interface TriggerCreateResult {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Trigger display name. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Description about the trigger.
   */
  "description"?: string;
  /**
   * The OCID of the DevOps project to which the trigger belongs to.
   */
  "projectId": string;
  /**
   * The OCID of the compartment that contains the trigger.
   */
  "compartmentId": string;
  /**
   * The time the trigger was created. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * The time the trigger was updated. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the trigger.
   */
  "lifecycleState"?: string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * The list of actions that are to be performed for this trigger.
   */
  "actions": Array<model.TriggerAction>;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm). Example: {@code {\"bar-key\": \"value\"}}
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm). Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces. See [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm). Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };

  "triggerSource": string;
}

export namespace TriggerCreateResult {
  export function getJsonObj(obj: TriggerCreateResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "actions": obj.actions
          ? obj.actions.map(item => {
              return model.TriggerAction.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "triggerSource" in obj && obj.triggerSource) {
      switch (obj.triggerSource) {
        case "GITLAB_SERVER":
          return model.GitlabServerTriggerCreateResult.getJsonObj(
            <model.GitlabServerTriggerCreateResult>(<object>jsonObj),
            true
          );
        case "GITHUB":
          return model.GithubTriggerCreateResult.getJsonObj(
            <model.GithubTriggerCreateResult>(<object>jsonObj),
            true
          );
        case "VBS":
          return model.VbsTriggerCreateResult.getJsonObj(
            <model.VbsTriggerCreateResult>(<object>jsonObj),
            true
          );
        case "GITLAB":
          return model.GitlabTriggerCreateResult.getJsonObj(
            <model.GitlabTriggerCreateResult>(<object>jsonObj),
            true
          );
        case "DEVOPS_CODE_REPOSITORY":
          return model.DevopsCodeRepositoryTriggerCreateResult.getJsonObj(
            <model.DevopsCodeRepositoryTriggerCreateResult>(<object>jsonObj),
            true
          );
        case "BITBUCKET_CLOUD":
          return model.BitbucketCloudTriggerCreateResult.getJsonObj(
            <model.BitbucketCloudTriggerCreateResult>(<object>jsonObj),
            true
          );
        case "BITBUCKET_SERVER":
          return model.BitbucketServerTriggerCreateResult.getJsonObj(
            <model.BitbucketServerTriggerCreateResult>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.triggerSource}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TriggerCreateResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "actions": obj.actions
          ? obj.actions.map(item => {
              return model.TriggerAction.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "triggerSource" in obj && obj.triggerSource) {
      switch (obj.triggerSource) {
        case "GITLAB_SERVER":
          return model.GitlabServerTriggerCreateResult.getDeserializedJsonObj(
            <model.GitlabServerTriggerCreateResult>(<object>jsonObj),
            true
          );
        case "GITHUB":
          return model.GithubTriggerCreateResult.getDeserializedJsonObj(
            <model.GithubTriggerCreateResult>(<object>jsonObj),
            true
          );
        case "VBS":
          return model.VbsTriggerCreateResult.getDeserializedJsonObj(
            <model.VbsTriggerCreateResult>(<object>jsonObj),
            true
          );
        case "GITLAB":
          return model.GitlabTriggerCreateResult.getDeserializedJsonObj(
            <model.GitlabTriggerCreateResult>(<object>jsonObj),
            true
          );
        case "DEVOPS_CODE_REPOSITORY":
          return model.DevopsCodeRepositoryTriggerCreateResult.getDeserializedJsonObj(
            <model.DevopsCodeRepositoryTriggerCreateResult>(<object>jsonObj),
            true
          );
        case "BITBUCKET_CLOUD":
          return model.BitbucketCloudTriggerCreateResult.getDeserializedJsonObj(
            <model.BitbucketCloudTriggerCreateResult>(<object>jsonObj),
            true
          );
        case "BITBUCKET_SERVER":
          return model.BitbucketServerTriggerCreateResult.getDeserializedJsonObj(
            <model.BitbucketServerTriggerCreateResult>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.triggerSource}`);
      }
    }
    return jsonObj;
  }
}
