/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * The information about monitored resource.
 */
export interface MonitoredResourceSummary {
  /**
   * Monitored resource identifier [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "id": string;
  /**
   * Monitored Resource Name.
   *
   */
  "name": string;
  /**
   * Monitored resource display name.
   */
  "displayName"?: string;
  /**
   * Monitored Resource Type.
   *
   */
  "type": string;
  /**
   * Compartment Identifier [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId"?: string;
  /**
   * Monitored Resource Host Name.
   *
   */
  "hostName"?: string;
  /**
   * External resource is any OCI resource identifier [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm)
   * which is not a Stack Monitoring service resource.
   *
   */
  "externalId"?: string;
  /**
   * Management Agent Identifier [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "managementAgentId"?: string;
  /**
   * Monitored resource creation time. An RFC3339 formatted datetime string.
   *
   */
  "timeCreated"?: Date;
  /**
   * Monitored resource update time. An RFC3339 formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the monitored resource.
   */
  "lifecycleState"?: model.ResourceLifecycleState;
  /**
   * List of monitored resource properties.
   *
   */
  "properties"?: Array<model.MonitoredResourceProperty>;
  /**
   * License edition of the monitored resource.
   */
  "license"?: model.LicenseType;
  /**
   * Source type to indicate if the resource is stack monitoring discovered, OCI native resource, etc.
   *
   */
  "sourceType"?: model.SourceType;
  /**
   * Resource Category to indicate the kind of resource type.
   *
   */
  "resourceCategory"?: model.ResourceCategory;
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

export namespace MonitoredResourceSummary {
  export function getJsonObj(obj: MonitoredResourceSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "properties": obj.properties
          ? obj.properties.map(item => {
              return model.MonitoredResourceProperty.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MonitoredResourceSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "properties": obj.properties
          ? obj.properties.map(item => {
              return model.MonitoredResourceProperty.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
