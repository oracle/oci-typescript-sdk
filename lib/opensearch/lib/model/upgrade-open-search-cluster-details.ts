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
 * Minor or major version upgrade of a cluster.
 */
export interface UpgradeOpenSearchClusterDetails {
  /**
   * The display name of the original cluster.
   * This is required to validate that the cluster ID has the same display name.
   *
   */
  "originalClusterDisplayName": string;
  /**
   * The software version the cluster is desired.
   */
  "desiredSoftwareVersion": string;
  /**
   * The upgrade type of cluster (major or minor).
   */
  "upgradeType": model.UpgradeType;
  /**
   * The cluster would be cloned for true and updated for false with the provided version.
   */
  "isClone"?: boolean;
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

export namespace UpgradeOpenSearchClusterDetails {
  export function getJsonObj(obj: UpgradeOpenSearchClusterDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpgradeOpenSearchClusterDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
