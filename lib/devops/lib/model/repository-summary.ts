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
 * Summary of the repository.
 */
export interface RepositorySummary {
  /**
   * The OCID of the repository. This value is unique and immutable.
   */
  "id": string;
  /**
   * Name of the repository. Should be unique within the project. This value is mutable.
   */
  "name"?: string;
  /**
   * The OCID of the repository's compartment.
   */
  "compartmentId": string;
  /**
   * The OCID of the DevOps project containing the repository.
   */
  "projectId": string;
  /**
   * The OCID of the parent repository.
   */
  "parentRepositoryId"?: string;
  /**
   * Tenancy unique namespace.
   */
  "namespace"?: string;
  /**
   * Unique project name in a namespace.
   */
  "projectName"?: string;
  /**
   * Details of the repository. Avoid entering confidential information.
   */
  "description"?: string;
  /**
   * The default branch of the repository.
   */
  "defaultBranch"?: string;
  /**
   * Type of repository. Allowed values:
   * {@code MIRRORED}
   * {@code HOSTED}
   * {@code FORKED}
   *
   */
  "repositoryType"?: string;
  /**
   * SSH URL that you use to git clone, pull and push.
   */
  "sshUrl"?: string;
  /**
   * HTTP URL that you use to git clone, pull and push.
   */
  "httpUrl"?: string;
  "mirrorRepositoryConfig"?: model.MirrorRepositoryConfig;
  /**
   * The time the repository was created. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * The time the repository was updated. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the repository.
   */
  "lifecycleState"?: string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
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
}

export namespace RepositorySummary {
  export function getJsonObj(obj: RepositorySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "mirrorRepositoryConfig": obj.mirrorRepositoryConfig
          ? model.MirrorRepositoryConfig.getJsonObj(obj.mirrorRepositoryConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RepositorySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "mirrorRepositoryConfig": obj.mirrorRepositoryConfig
          ? model.MirrorRepositoryConfig.getDeserializedJsonObj(obj.mirrorRepositoryConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
