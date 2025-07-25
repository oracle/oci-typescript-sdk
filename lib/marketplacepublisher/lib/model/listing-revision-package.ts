/**
 * MarketplacePublisherService API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20241201
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
 * A base object for all types of listing revision packages.
 */
export interface ListingRevisionPackage {
  /**
   * The OCID for the listing revision package in Marketplace Publisher.
   */
  "id"?: string;
  /**
   * The name of the listing revision package.
   */
  "displayName": string;
  /**
   * The description of this package.
   */
  "description"?: string;
  /**
   * The unique identifier for the listing revision.
   */
  "listingRevisionId": string;
  /**
   * The unique identifier for the compartment.
   */
  "compartmentId": string;
  /**
   * The unique identifier for the artifact.
   */
  "artifactId": string;
  /**
   * The unique identifier for the term.
   */
  "termId": string;
  /**
   * The version for the package.
   */
  "packageVersion": string;
  /**
   * The current state for the listing revision package.
   */
  "lifecycleState": ListingRevisionPackage.LifecycleState;
  /**
   * The current status for the listing revision package.
   */
  "status": ListingRevisionPackage.Status;
  /**
   * Identifies whether security upgrades will be provided for this package.
   */
  "areSecurityUpgradesProvided": boolean;
  /**
   * Identifies that this will be default package for the listing revision.
   */
  "isDefault": boolean;
  /**
    * The date and time this listing revision package was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
* timestamp format.
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
  /**
    * The date and time this listing revision package was updated, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
* timestamp format.
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeUpdated": Date;
  /**
    * Additional metadata key/value pairs for the listing revision package summary.
* <p>
For example:
* <p>
{@code {\"partnerListingRevisionPackageStatus\": \"Published\",\"parentListingRevisionPackageId\": \"1\" }}
* 
    */
  "extendedMetadata"?: { [key: string]: string };
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
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };

  "packageType": string;
}

export namespace ListingRevisionPackage {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Status {
    New = "NEW",
    PublishInProgress = "PUBLISH_IN_PROGRESS",
    UnpublishInProgress = "UNPUBLISH_IN_PROGRESS",
    PublishFailed = "PUBLISH_FAILED",
    Published = "PUBLISHED",
    PublishedAsPrivate = "PUBLISHED_AS_PRIVATE",
    Unpublished = "UNPUBLISHED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ListingRevisionPackage): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "packageType" in obj && obj.packageType) {
      switch (obj.packageType) {
        case "STACK":
          return model.StackPackage.getJsonObj(<model.StackPackage>(<object>jsonObj), true);
        case "HELM_CHART":
          return model.HelmChartPackage.getJsonObj(<model.HelmChartPackage>(<object>jsonObj), true);
        case "MACHINE_IMAGE":
          return model.MachineImagePackage.getJsonObj(
            <model.MachineImagePackage>(<object>jsonObj),
            true
          );
        case "CONTAINER_IMAGE":
          return model.ContainerPackage.getJsonObj(<model.ContainerPackage>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.packageType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ListingRevisionPackage): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "packageType" in obj && obj.packageType) {
      switch (obj.packageType) {
        case "STACK":
          return model.StackPackage.getDeserializedJsonObj(
            <model.StackPackage>(<object>jsonObj),
            true
          );
        case "HELM_CHART":
          return model.HelmChartPackage.getDeserializedJsonObj(
            <model.HelmChartPackage>(<object>jsonObj),
            true
          );
        case "MACHINE_IMAGE":
          return model.MachineImagePackage.getDeserializedJsonObj(
            <model.MachineImagePackage>(<object>jsonObj),
            true
          );
        case "CONTAINER_IMAGE":
          return model.ContainerPackage.getDeserializedJsonObj(
            <model.ContainerPackage>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.packageType}`);
      }
    }
    return jsonObj;
  }
}
