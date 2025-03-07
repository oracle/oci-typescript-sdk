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
 * The network configurations used by Cluster, including
 * [OCIDs](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the management subnet and VLANs.
 *
 */
export interface NetworkConfiguration {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the management subnet used
   * to provision the Cluster.
   *
   */
  "provisioningSubnetId": string;
  /**
    * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VLAN used by the SDDC
* for the vSphere component of the VMware environment. This VLAN is a mandatory attribute
* for Management Cluster.
* <p>
This attribute is not guaranteed to reflect the vSphere VLAN
* currently used by the ESXi hosts in the Cluster. The purpose
* of this attribute is to show the vSphere VLAN that the Oracle
* Cloud VMware Solution will use for any new ESXi hosts that you *add to this
* Cluster in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you change the existing ESXi hosts in the Cluster to use a different VLAN
* for the vSphere component of the VMware environment, you
* should use {@link #updateSddc(UpdateSddcRequest) updateSddc} to update the Cluster's
* {@code vsphereVlanId} with that new VLAN's OCID.
* 
    */
  "vsphereVlanId"?: string;
  /**
    * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VLAN used by the Cluster
* for the vMotion component of the VMware environment.
* <p>
This attribute is not guaranteed to reflect the vMotion VLAN
* currently used by the ESXi hosts in the Cluster. The purpose
* of this attribute is to show the vMotion VLAN that the Oracle
* Cloud VMware Solution will use for any new ESXi hosts that you *add to this
* Cluster in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you change the existing ESXi hosts in the Cluster to use a different VLAN
* for the vMotion component of the VMware environment, you
* should use {@link #updateCluster(UpdateClusterRequest) updateCluster} to update the Cluster's
* {@code vmotionVlanId} with that new VLAN's OCID.
* 
    */
  "vmotionVlanId": string;
  /**
    * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VLAN used by the Cluster
* for the vSAN component of the VMware environment.
* <p>
This attribute is not guaranteed to reflect the vSAN VLAN
* currently used by the ESXi hosts in the Cluster. The purpose
* of this attribute is to show the vSAN VLAN that the Oracle
* Cloud VMware Solution will use for any new ESXi hosts that you *add to this
* Cluster in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you change the existing ESXi hosts in the Cluster to use a different VLAN
* for the vSAN component of the VMware environment, you
* should use {@link #updateCluster(UpdateClusterRequest) updateCluster} to update the Cluster's
* {@code vsanVlanId} with that new VLAN's OCID.
* 
    */
  "vsanVlanId": string;
  /**
    * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VLAN used by the Cluster
* for the NSX VTEP component of the VMware environment.
* <p>
This attribute is not guaranteed to reflect the NSX VTEP VLAN
* currently used by the ESXi hosts in the Cluster. The purpose
* of this attribute is to show the NSX VTEP VLAN that the Oracle
* Cloud VMware Solution will use for any new ESXi hosts that you *add to this
* Cluster in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you change the existing ESXi hosts in the Cluster to use a different VLAN
* for the NSX VTEP component of the VMware environment, you
* should use {@link #updateCluster(UpdateClusterRequest) updateCluster} to update the Cluster's
* {@code nsxVTepVlanId} with that new VLAN's OCID.
* 
    */
  "nsxVTepVlanId": string;
  /**
    * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VLAN used by the Cluster
* for the NSX Edge VTEP component of the VMware environment.
* <p>
This attribute is not guaranteed to reflect the NSX Edge VTEP VLAN
* currently used by the ESXi hosts in the Cluster. The purpose
* of this attribute is to show the NSX Edge VTEP VLAN that the Oracle
* Cloud VMware Solution will use for any new ESXi hosts that you *add to this
* Cluster in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you change the existing ESXi hosts in the Cluster to use a different VLAN
* for the NSX Edge VTEP component of the VMware environment, you
* should use {@link #updateCluster(UpdateClusterRequest) updateCluster} to update the Cluster's
* {@code nsxEdgeVTepVlanId} with that new VLAN's OCID.
* 
    */
  "nsxEdgeVTepVlanId": string;
  /**
    * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VLAN used by the SDDC
* for the NSX Edge Uplink 1 component of the VMware environment. This VLAN is a mandatory
* attribute for Management Cluster.
* <p>
This attribute is not guaranteed to reflect the NSX Edge Uplink 1 VLAN
* currently used by the ESXi hosts in the Cluster. The purpose
* of this attribute is to show the NSX Edge Uplink 1 VLAN that the Oracle
* Cloud VMware Solution will use for any new ESXi hosts that you *add to this
* Cluster in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you change the existing ESXi hosts in the Cluster to use a different VLAN
* for the NSX Edge Uplink 1 component of the VMware environment, you
* should use {@link #updateCluster(UpdateClusterRequest) updateCluster} to update the Cluster's
* {@code nsxEdgeUplink1VlanId} with that new VLAN's OCID.
* 
    */
  "nsxEdgeUplink1VlanId"?: string;
  /**
    * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VLAN used by the SDDC 
* for the NSX Edge Uplink 2 component of the VMware environment. This VLAN is a mandatory
* attribute for Management Cluster.
* <p>
This attribute is not guaranteed to reflect the NSX Edge Uplink 2 VLAN
* currently used by the ESXi hosts in the Cluster. The purpose
* of this attribute is to show the NSX Edge Uplink 2 VLAN that the Oracle
* Cloud VMware Solution will use for any new ESXi hosts that you *add to this
* Cluster in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you change the existing ESXi hosts in the Cluster to use a different VLAN
* for the NSX Edge Uplink 2 component of the VMware environment, you
* should use {@link #updateCluster(UpdateClusterRequest) updateCluster} to update the Cluster's
* {@code nsxEdgeUplink2VlanId} with that new VLAN's OCID.
* 
    */
  "nsxEdgeUplink2VlanId"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VLAN used by the Cluster
   * for the vSphere Replication component of the VMware environment.
   *
   */
  "replicationVlanId"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VLAN used by the Cluster
   * for the Provisioning component of the VMware environment.
   *
   */
  "provisioningVlanId"?: string;
  /**
    * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VLAN used by the SDDC
* for the HCX component of the VMware environment. This VLAN is a mandatory attribute 
* for Management Cluster when HCX is enabled.
* <p>
This attribute is not guaranteed to reflect the HCX VLAN
* currently used by the ESXi hosts in the SDDC. The purpose
* of this attribute is to show the HCX VLAN that the Oracle
* Cloud VMware Solution will use for any new ESXi hosts that you *add to this
* SDDC in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you change the existing ESXi hosts in the SDDC to use a different VLAN
* for the HCX component of the VMware environment, you
* should use {@link #updateSddc(UpdateSddcRequest) updateSddc} to update the SDDC's
* {@code hcxVlanId} with that new VLAN's OCID.
* 
    */
  "hcxVlanId"?: string;
}

export namespace NetworkConfiguration {
  export function getJsonObj(obj: NetworkConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NetworkConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
