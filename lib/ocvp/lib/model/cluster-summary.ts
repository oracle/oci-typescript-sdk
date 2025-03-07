/**
 * Oracle Cloud VMware Solution API
 * Use the Oracle Cloud VMware API to create SDDCs and manage ESXi hosts and software. 
For more information, see [Oracle Cloud VMware Solution](https://docs.oracle.com/iaas/Content/VMware/Concepts/ocvsoverview.htm).

 * OpenAPI spec version: 20230701
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
 * A summary of the Cluster.
 */
export interface ClusterSummary {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that
   * contains the Cluster.
   *
   */
  "id": string;
  /**
   * The availability domain that the Cluster's ESXi hosts are running in. For Multi-AD Cluster, it is {@code multi-AD}.
   *
   */
  "computeAvailabilityDomain": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the SDDC that the
   * Cluster belongs to.
   *
   */
  "sddcId": string;
  /**
   * A descriptive name for the Cluster. It must be unique, start with a letter, and contain only letters, digits,
   * whitespaces, dashes and underscores.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
    * In general, this is a specific version of bundled VMware software supported by
* Oracle Cloud VMware Solution (see
* {@link #listSupportedVmwareSoftwareVersions(ListSupportedVmwareSoftwareVersionsRequest) listSupportedVmwareSoftwareVersions}).
* <p>
This attribute is not guaranteed to reflect the version of
* software currently installed on the ESXi hosts in the Cluster. The purpose
* of this attribute is to show the version of software that the Oracle
* Cloud VMware Solution will install on any new ESXi hosts that you *add to this
* Cluster in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you upgrade the existing ESXi hosts in the Cluster to use a newer
* version of bundled VMware software supported by the Oracle Cloud VMware Solution, you
* should use {@link #updateCluster(UpdateClusterRequest) updateCluster} to update the Cluster's
* {@code vmwareSoftwareVersion} with that new version.
* 
    */
  "vmwareSoftwareVersion": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that
   * contains the Cluster.
   *
   */
  "compartmentId": string;
  /**
   * The number of ESXi hosts in the Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "esxiHostsCount": number;
  /**
    * The date and time the Cluster was created, in the format defined by
* [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated"?: Date;
  /**
   * The date and time the Cluster was updated, in the format defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the Cluster.
   */
  "lifecycleState"?: model.LifecycleStates;
  /**
   * Indicates whether shielded instance is enabled at the Cluster level.
   *
   */
  "isShieldedInstanceEnabled"?: boolean;
  /**
   * The initial compute shape of the Cluster's ESXi hosts.
   * {@link #listSupportedHostShapes(ListSupportedHostShapesRequest) listSupportedHostShapes}.
   *
   */
  "initialHostShapeName": string;
  /**
   * The initial OCPU count of the Cluster's ESXi hosts.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "initialHostOcpuCount"?: number;
  /**
   * vSphere Cluster types.
   *
   */
  "vsphereType": model.VsphereTypes;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags": { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {orcl-cloud: {free-tier-retain: true}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ClusterSummary {
  export function getJsonObj(obj: ClusterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ClusterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
