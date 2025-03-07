/**
 * Cloud Guard and Security Zones API
 * Use the Cloud Guard and Security Zones API to automate processes that you would otherwise perform through the Cloud Guard Console or the Security Zones Console. For more information on these services, see the [Cloud Guard](https://docs.oracle.com/iaas/cloud-guard/home.htm) and [Security Zones](https://docs.oracle.com/iaas/security-zone/home.htm) documentation.

**Note:** For Cloud Guard, you can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations from any region.

 * OpenAPI spec version: 20200131
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
 * A DetectorRecipeDetectorRule resource defines a single recipe rule in the collection for a DetectorRecipe resource.
 */
export interface DetectorRecipeDetectorRule {
  /**
   * The unique identifier of the detector rule.
   */
  "detectorRuleId": string;
  /**
   * Display name for DetectorRecipeDetectorRule resource
   */
  "displayName"?: string;
  /**
   * Description for DetectorRecipeDetectorRule resource
   */
  "description"?: string;
  /**
   * Recommendation for DetectorRecipeDetectorRule resource
   */
  "recommendation"?: string;
  /**
   * Detector recipe for the rule
   */
  "detector": model.DetectorEnum;
  /**
   * Service type of the configuration to which the rule is applied
   */
  "serviceType": string;
  /**
   * Resource type of the configuration to which the rule is applied
   */
  "resourceType": string;
  "details"?: model.DetectorDetails;
  /**
   * List of managed list types related to this rule
   */
  "managedListTypes"?: Array<DetectorRecipeDetectorRule.ManagedListTypes>;
  /**
   * List of responder rules that can be used to remediate this detector rule
   */
  "candidateResponderRules"?: Array<model.CandidateResponderRule>;
  /**
   * The date and time the detector recipe rule was created. Format defined by RFC3339.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the detector recipe rule was last updated. Format defined by RFC3339.
   */
  "timeUpdated"?: Date;
  /**
   * The current lifecycle state of the detector rule.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * The unique identifier of the attached data source
   */
  "dataSourceId"?: string;
  /**
   * Data source entities mapping for the detector rule
   */
  "entitiesMappings"?: Array<model.EntitiesMapping>;
  /**
   * Locks associated with this resource.
   */
  "locks"?: Array<model.ResourceLock>;
}

export namespace DetectorRecipeDetectorRule {
  export enum ManagedListTypes {
    CidrBlock = "CIDR_BLOCK",
    Users = "USERS",
    Groups = "GROUPS",
    Ipv4Address = "IPV4ADDRESS",
    Ipv6Address = "IPV6ADDRESS",
    ResourceOcid = "RESOURCE_OCID",
    Region = "REGION",
    Country = "COUNTRY",
    State = "STATE",
    City = "CITY",
    Tags = "TAGS",
    Generic = "GENERIC",
    FusionAppsRole = "FUSION_APPS_ROLE",
    FusionAppsPermission = "FUSION_APPS_PERMISSION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DetectorRecipeDetectorRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "details": obj.details ? model.DetectorDetails.getJsonObj(obj.details) : undefined,

        "candidateResponderRules": obj.candidateResponderRules
          ? obj.candidateResponderRules.map(item => {
              return model.CandidateResponderRule.getJsonObj(item);
            })
          : undefined,

        "entitiesMappings": obj.entitiesMappings
          ? obj.entitiesMappings.map(item => {
              return model.EntitiesMapping.getJsonObj(item);
            })
          : undefined,
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DetectorRecipeDetectorRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "details": obj.details
          ? model.DetectorDetails.getDeserializedJsonObj(obj.details)
          : undefined,

        "candidateResponderRules": obj.candidateResponderRules
          ? obj.candidateResponderRules.map(item => {
              return model.CandidateResponderRule.getDeserializedJsonObj(item);
            })
          : undefined,

        "entitiesMappings": obj.entitiesMappings
          ? obj.entitiesMappings.map(item => {
              return model.EntitiesMapping.getDeserializedJsonObj(item);
            })
          : undefined,
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
