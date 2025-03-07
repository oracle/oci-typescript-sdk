/**
 * Oracle Cloud Bridge API
 * API for Oracle Cloud Bridge service.
 * OpenAPI spec version: 20220509
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
 * Asset source creation request.
 */
export interface CreateAssetSourceDetails {
  /**
   * A user-friendly name for the asset source. Does not have to be unique, and it's mutable.
   * Avoid entering confidential information. The name is generated by the service if it is not
   * explicitly provided.
   *
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment for the resource.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the environment.
   */
  "environmentId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the inventory that will contain created assets.
   */
  "inventoryId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that is going to be used to create assets.
   */
  "assetsCompartmentId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the discovery schedule that is going to be attached to the created asset.
   */
  "discoveryScheduleId"?: string;
  /**
   * The freeform tags associated with this resource, if any. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace/scope. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags associated with this resource, if any. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {orcl-cloud: {free-tier-retain: true}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };

  "type": string;
}

export namespace CreateAssetSourceDetails {
  export function getJsonObj(obj: CreateAssetSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "VMWARE":
          return model.CreateVmWareAssetSourceDetails.getJsonObj(
            <model.CreateVmWareAssetSourceDetails>(<object>jsonObj),
            true
          );
        case "AWS":
          return model.CreateAwsAssetSourceDetails.getJsonObj(
            <model.CreateAwsAssetSourceDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateAssetSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "VMWARE":
          return model.CreateVmWareAssetSourceDetails.getDeserializedJsonObj(
            <model.CreateVmWareAssetSourceDetails>(<object>jsonObj),
            true
          );
        case "AWS":
          return model.CreateAwsAssetSourceDetails.getDeserializedJsonObj(
            <model.CreateAwsAssetSourceDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
