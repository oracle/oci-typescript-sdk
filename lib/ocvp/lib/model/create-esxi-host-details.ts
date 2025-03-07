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
 * Details of the ESXi host to add to the Cluster.
 */
export interface CreateEsxiHostDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Cluster to add the ESXi host to.
   *
   */
  "clusterId": string;
  /**
    * A descriptive name for the ESXi host. It's changeable.
* Esxi Host name requirements are 1-16 character length limit, Must start with a letter, 
* Must be English letters, numbers, - only, No repeating hyphens, Must be unique within the Cluster.
* <p>
If this attribute is not specified, the Cluster's {@code instanceDisplayNamePrefix} attribute is used
* to name and incrementally number the ESXi host. For example, if you're creating the fourth
* ESXi host in the Cluster, and {@code instanceDisplayNamePrefix} is {@code MyCluster}, the host's display
* name is {@code MyCluster-4}.
* <p>
Avoid entering confidential information.
* 
    */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the deleted ESXi Host with LeftOver billing cycle.
   *
   */
  "billingDonorHostId"?: string;
  /**
   * The billing option currently used by the ESXi host.
   * {@link #listSupportedCommitments(ListSupportedCommitmentsRequest) listSupportedCommitments}.
   *
   */
  "currentCommitment"?: model.Commitment;
  /**
   * The billing option to switch to after the existing billing cycle ends.
   * If {@code nextCommitment} is null or empty, {@code currentCommitment} continues to the next billing cycle.
   * {@link #listSupportedCommitments(ListSupportedCommitmentsRequest) listSupportedCommitments}.
   *
   */
  "nextCommitment"?: model.Commitment;
  /**
   * The availability domain to create the ESXi host in.
   * If keep empty, for AD-specific Cluster, new ESXi host will be created in the same availability domain;
   * for multi-AD Cluster, new ESXi host will be auto assigned to the next availability domain following evenly distribution strategy.
   *
   */
  "computeAvailabilityDomain"?: string;
  /**
   * The compute shape name of the ESXi host.
   * {@link #listSupportedHostShapes(ListSupportedHostShapesRequest) listSupportedHostShapes}.
   *
   */
  "hostShapeName"?: string;
  /**
   * The OCPU count of the ESXi host.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "hostOcpuCount"?: number;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Capacity Reservation.
   *
   */
  "capacityReservationId"?: string;
  /**
   * The ESXi software bundle to install on the ESXi host.
   * Only versions under the same vmwareSoftwareVersion and have been validate by Oracle Cloud VMware Solution will be accepted.
   * To get a list of the available versions, use
   * {@link #listSupportedVmwareSoftwareVersions(ListSupportedVmwareSoftwareVersionsRequest) listSupportedVmwareSoftwareVersions}.
   *
   */
  "esxiSoftwareVersion"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateEsxiHostDetails {
  export function getJsonObj(obj: CreateEsxiHostDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateEsxiHostDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
