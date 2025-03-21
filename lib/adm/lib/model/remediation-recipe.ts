/**
 * Application Dependency Management API
 * Use the Application Dependency Management API to create knowledge bases and vulnerability audits.  For more information, see [ADM](https://docs.oracle.com/iaas/Content/application-dependency-management/home.htm).
 * OpenAPI spec version: 20220421
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
 * An Application Dependency Management (ADM) remediation recipe contains the basic configuration and the
 * details of each of the remediation stages (Detect, Recommend, Verify, and Apply).
 *
 */
export interface RemediationRecipe {
  /**
   * The Oracle Cloud Identifier ([OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm)) of the remediation recipe.
   */
  "id": string;
  /**
   * The name of the Remediation Recipe.
   */
  "displayName": string;
  /**
   * The creation date and time of the Remediation Recipe (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   */
  "timeCreated": Date;
  /**
   * The date and time the Remediation Recipe was last updated (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   */
  "timeUpdated": Date;
  /**
   * The current lifecycle state of the Remediation Recipe.
   */
  "lifecycleState": RemediationRecipe.LifecycleState;
  /**
   * The compartment Oracle Cloud Identifier ([OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm)) of the remediation recipe.
   */
  "compartmentId": string;
  /**
   * The Oracle Cloud Identifier ([OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm)) of the knowledge base.
   */
  "knowledgeBaseId": string;
  /**
   * Boolean indicating if a run should be automatically triggered once the Knowledge Base contents are updated.
   */
  "isRunTriggeredOnKbChange": boolean;
  "scmConfiguration": model.OciCodeRepositoryConfiguration | model.ExternalScmConfiguration;
  "verifyConfiguration":
    | model.JenkinsPipelineConfiguration
    | model.NoneVerifyConfiguration
    | model.OciDevOpsBuildConfiguration
    | model.GitHubActionsConfiguration
    | model.GitLabPipelineConfiguration;
  "detectConfiguration": model.DetectConfiguration;
  "networkConfiguration": model.NetworkConfiguration;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace RemediationRecipe {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Inactive = "INACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING",
    Deleted = "DELETED",
    NeedsAttention = "NEEDS_ATTENTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: RemediationRecipe): object {
    const jsonObj = {
      ...obj,
      ...{
        "scmConfiguration": obj.scmConfiguration
          ? model.ScmConfiguration.getJsonObj(obj.scmConfiguration)
          : undefined,
        "verifyConfiguration": obj.verifyConfiguration
          ? model.VerifyConfiguration.getJsonObj(obj.verifyConfiguration)
          : undefined,
        "detectConfiguration": obj.detectConfiguration
          ? model.DetectConfiguration.getJsonObj(obj.detectConfiguration)
          : undefined,
        "networkConfiguration": obj.networkConfiguration
          ? model.NetworkConfiguration.getJsonObj(obj.networkConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RemediationRecipe): object {
    const jsonObj = {
      ...obj,
      ...{
        "scmConfiguration": obj.scmConfiguration
          ? model.ScmConfiguration.getDeserializedJsonObj(obj.scmConfiguration)
          : undefined,
        "verifyConfiguration": obj.verifyConfiguration
          ? model.VerifyConfiguration.getDeserializedJsonObj(obj.verifyConfiguration)
          : undefined,
        "detectConfiguration": obj.detectConfiguration
          ? model.DetectConfiguration.getDeserializedJsonObj(obj.detectConfiguration)
          : undefined,
        "networkConfiguration": obj.networkConfiguration
          ? model.NetworkConfiguration.getDeserializedJsonObj(obj.networkConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
}
