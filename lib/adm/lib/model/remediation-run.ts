/**
 * Application Dependency Management API
 * Use the Application Dependency Management API to create knowledge bases and vulnerability audits.  For more information, see [ADM](/Content/application-dependency-management/home.htm).
 * OpenAPI spec version: 20220421
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
 * A remediation run represents an execution of a Remediation Recipe to detect and fix vulnerabilities based on current state of the
 * Vulnerabilities curated in the Knowledge Base.
 * A Run can be triggered manually or when a new CVE is discovered.
 *
 */
export interface RemediationRun {
  /**
   * The Oracle Cloud Identifier ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the remediation run.
   */
  "id": string;
  /**
   * The name of the remediation run.
   */
  "displayName"?: string;
  /**
   * The list of remediation run stage summaries.
   */
  "stages"?: Array<model.StageSummary>;
  /**
   * The Oracle Cloud Identifier ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the Remediation Recipe.
   */
  "remediationRecipeId": string;
  /**
   * The source that triggered the Remediation Recipe.
   */
  "remediationRunSource": RemediationRun.RemediationRunSource;
  /**
   * The creation date and time of the remediation run (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   */
  "timeCreated": Date;
  /**
   * The date and time the remediation run was last updated (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   */
  "timeUpdated": Date;
  /**
   * The date and time of the start of the remediation run (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   */
  "timeStarted"?: Date;
  /**
   * The date and time of the finish of the remediation run (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   */
  "timeFinished"?: Date;
  /**
   * The type of the current stage of the remediation run.
   */
  "currentStageType"?: model.RemediationRunStageType;
  /**
   * The compartment Oracle Cloud Identifier ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the remediation run.
   */
  "compartmentId": string;
  /**
   * The current lifecycle state of the remediation run.
   */
  "lifecycleState": RemediationRun.LifecycleState;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace RemediationRun {
  export enum RemediationRunSource {
    Manual = "MANUAL",
    KnowledgeBase = "KNOWLEDGE_BASE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Accepted = "ACCEPTED",
    Canceled = "CANCELED",
    Canceling = "CANCELING",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: RemediationRun): object {
    const jsonObj = {
      ...obj,
      ...{
        "stages": obj.stages
          ? obj.stages.map(item => {
              return model.StageSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RemediationRun): object {
    const jsonObj = {
      ...obj,
      ...{
        "stages": obj.stages
          ? obj.stages.map(item => {
              return model.StageSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}