/**
 * Oracle Database MultiCloud Data plane Integration
 * 1. Oracle Azure Connector Resource: This is for installing Azure Arc Server in ExaCS VM Cluster.
  There are two way to install Azure Arc Server (Azure Identity) in ExaCS VMCluster.
    a. Using Bearer Access Token or
    b. By providing Authentication token

2. Oracle Azure Blob Container Resource: This is for to capture Azure Container details 
   and same will be used in multiple ExaCS VMCluster to mount the Azure Container.

3. Oracle Azure Blob Mount Resource: This is for to mount Azure Container in ExaCS VMCluster 
   using Oracle Azure Connector and Oracle Azure Blob Container Resource.

 * OpenAPI spec version: 20240501
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
 * Multi Cloud Resource Discovery Object.
 *
 */
export interface MultiCloudResourceDiscovery {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Multi Cloud Discovery Resource.
   */
  "id": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains Multi Cloud Discovery Resource.
   */
  "compartmentId": string;
  /**
   * Display name of Multi Cloud Discovery Resource.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Oracle DB Connector Resource.
   */
  "oracleDbConnectorId": string;
  /**
   * List of All Discovered resources.
   */
  "resources"?: Array<model.Resources>;
  /**
   * Resource Type to discover.
   */
  "resourceType": MultiCloudResourceDiscovery.ResourceType;
  /**
   * The current lifecycle state of the discovered resource.
   */
  "lifecycleState"?: MultiCloudResourceDiscovery.LifecycleState;
  /**
   * Description of the current lifecycle state in more detail.
   */
  "lifecycleStateDetails"?: string;
  /**
   * Time when the Multi Cloud Discovery Resource was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format, e.g. '2020-05-22T21:10:29.600Z'
   *
   */
  "timeCreated"?: Date;
  /**
   * Time when the Multi Cloud Discovery Resource was last modified, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format, e.g. '2020-05-22T21:10:29.600Z'
   *
   */
  "timeUpdated"?: Date;
  /**
   * Description of the latest modification of the Multi Cloud Discovery Resource.
   */
  "lastModification"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace MultiCloudResourceDiscovery {
  export enum ResourceType {
    Vaults = "VAULTS",
    Storage = "STORAGE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Waiting = "WAITING",
    Succeeded = "SUCCEEDED",
    Updating = "UPDATING",
    Canceling = "CANCELING",
    Canceled = "CANCELED",
    Failed = "FAILED",
    NeedsAttention = "NEEDS_ATTENTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MultiCloudResourceDiscovery): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.Resources.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MultiCloudResourceDiscovery): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.Resources.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
