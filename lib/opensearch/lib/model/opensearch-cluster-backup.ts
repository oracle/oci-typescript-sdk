/**
 * OpenSearch Service API
 * The OpenSearch service API provides access to OCI Search Service with OpenSearch.
 * OpenAPI spec version: 20180828
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
 * An OpenSearch cluster backup resource. An cluster is set of instances that provide OpenSearch functionality in OCI Search Service with OpenSearch.
 * For more information, see [Cluster Backups](https://docs.oracle.com/iaas/Content/search-opensearch/Concepts/ociopensearchbackups.htm).
 *
 */
export interface OpensearchClusterBackup {
  /**
   * The OCID of the cluster backup.
   */
  "id": string;
  /**
   * The name of the cluster backup. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The OCID of the compartment where the cluster backup is located.
   */
  "compartmentId": string;
  /**
   * Specifies whether the cluster backup was created manually, or automatically as a scheduled backup.
   */
  "backupType": OpensearchClusterBackup.BackupType;
  /**
   * The date and time the cluster backup was created. Format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * The date and time the cluster backup was updated. Format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the cluster backup.
   */
  "lifecycleState": OpensearchClusterBackup.LifecycleState;
  /**
   * Additional information about the current lifecycle state of the cluster backup.
   */
  "lifecyleDetails"?: string;
  /**
   * The OCID of the source OpenSearch cluster for the cluster backup.
   */
  "sourceClusterId": string;
  /**
   * The Object Storage namespace for the cluster backup.
   */
  "namespace"?: string;
  /**
   * The name of the Object Storage bucket for the cluster backup.
   */
  "bucketName"?: string;
  /**
   * The prefix within the Object Storage bucket for the cluster backup.
   */
  "prefix"?: string;
  /**
   * The date and time the cluster backup expires. Format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeExpired"?: Date;
  /**
   * The size in GB of the cluster backup. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "backupSize"?: number;
  /**
   * The name of the source OpenSearch cluster for the cluster backup.
   */
  "sourceClusterDisplayName"?: string;
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
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace OpensearchClusterBackup {
  export enum BackupType {
    Scheduled = "SCHEDULED",
    Manual = "MANUAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OpensearchClusterBackup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OpensearchClusterBackup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
