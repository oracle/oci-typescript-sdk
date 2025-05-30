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
 * Details to create a new Remediation Recipe.
 */
export interface CreateRemediationRecipeDetails {
  /**
   * The compartment Oracle Cloud Identifier ([OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm)) of the remediation recipe.
   */
  "compartmentId": string;
  /**
   * The name of the remediation recipe.
   */
  "displayName"?: string;
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
   * The Oracle Cloud Identifier ([OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm)) of the knowledge base.
   */
  "knowledgeBaseId": string;
  /**
   * Boolean indicating if a run should be automatically triggered once the knowledge base is updated.
   */
  "isRunTriggeredOnKbChange": boolean;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateRemediationRecipeDetails {
  export function getJsonObj(obj: CreateRemediationRecipeDetails): object {
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
  export function getDeserializedJsonObj(obj: CreateRemediationRecipeDetails): object {
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
