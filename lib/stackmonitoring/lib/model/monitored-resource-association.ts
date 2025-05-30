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
 * Association details between two monitored resources.
 */
export interface MonitoredResourceAssociation {
  /**
   * Association Type.
   *
   */
  "associationType": string;
  /**
   * Compartment Identifier [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "compartmentId": string;
  /**
   * Tenancy Identifier [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "tenantId": string;
  /**
   * Source Monitored Resource Identifier [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "sourceResourceId": string;
  /**
   * Destination Monitored Resource Identifier [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "destinationResourceId": string;
  "sourceResourceDetails"?: model.AssociationResourceDetails;
  "destinationResourceDetails"?: model.AssociationResourceDetails;
  /**
   * The time when the association was created. An RFC3339 formatted datetime string.
   *
   */
  "timeCreated"?: Date;
  /**
   * Association category. Possible values are:
   * - System created (SYSTEM),
   * - User created using API (USER_API)
   * - User created using tags (USER_TAG_ASSOC).
   *
   */
  "category"?: MonitoredResourceAssociation.Category;
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

export namespace MonitoredResourceAssociation {
  export enum Category {
    System = "SYSTEM",
    UserApi = "USER_API",
    UserTagAssoc = "USER_TAG_ASSOC",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MonitoredResourceAssociation): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceResourceDetails": obj.sourceResourceDetails
          ? model.AssociationResourceDetails.getJsonObj(obj.sourceResourceDetails)
          : undefined,
        "destinationResourceDetails": obj.destinationResourceDetails
          ? model.AssociationResourceDetails.getJsonObj(obj.destinationResourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MonitoredResourceAssociation): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceResourceDetails": obj.sourceResourceDetails
          ? model.AssociationResourceDetails.getDeserializedJsonObj(obj.sourceResourceDetails)
          : undefined,
        "destinationResourceDetails": obj.destinationResourceDetails
          ? model.AssociationResourceDetails.getDeserializedJsonObj(obj.destinationResourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
