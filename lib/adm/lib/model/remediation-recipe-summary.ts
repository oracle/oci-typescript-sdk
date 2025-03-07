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
 * The summary of a Remediation Recipe.
 */
export interface RemediationRecipeSummary {
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
   * The compartment Oracle Cloud Identifier ([OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm)) of the remediation recipe.
   */
  "compartmentId": string;
  /**
   * The current lifecycle state of the Remediation Recipe.
   */
  "lifecycleState": string;
  /**
   * The Oracle Cloud Identifier ([OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm)) of the knowledge base.
   */
  "knowledgeBaseId": string;
  /**
   * Boolean indicating if a run should be automatically triggered once the Knowledge Base is updated.
   */
  "isRunTriggeredOnKbChange": boolean;
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

export namespace RemediationRecipeSummary {
  export function getJsonObj(obj: RemediationRecipeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RemediationRecipeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
