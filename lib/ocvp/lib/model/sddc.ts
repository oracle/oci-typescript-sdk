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
* An [Oracle Cloud VMware Solution](https://docs.oracle.com/iaas/Content/VMware/Concepts/ocvsoverview.htm) software-defined data center (SDDC) contains the resources required for a
* functional VMware environment. Instances in an SDDC
* (see {@link EsxiHost}) run in a virtual cloud network (VCN)
* and are preconfigured with VMware and storage. Use the vCenter utility to manage
* and deploy VMware virtual machines (VMs) in the SDDC.
* <p>
The SDDC uses a single management subnet for provisioning the SDDC. It also uses a
* set of VLANs for various components of the VMware environment (vSphere, vMotion,
* vSAN, and so on). See the Core Services API for information about VCN subnets and VLANs.
* 
*/
export interface Sddc {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the SDDC.
   *
   */
  "id": string;
  /**
   * A descriptive name for the SDDC. It must be unique, start with a letter, and contain only letters, digits,
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
* software currently installed on the ESXi hosts in the SDDC. The purpose
* of this attribute is to show the version of software that the Oracle
* Cloud VMware Solution will install on any new ESXi hosts that you *add to this
* SDDC in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you upgrade the existing ESXi hosts in the SDDC to use a newer
* version of bundled VMware software supported by the Oracle Cloud VMware Solution, you
* should use {@link #updateSddc(UpdateSddcRequest) updateSddc} to update the SDDC's
* {@code vmwareSoftwareVersion} with that new version.
* 
    */
  "vmwareSoftwareVersion": string;
  /**
    * In general, this is a specific version of bundled ESXi software supported by
* Oracle Cloud VMware Solution (see
* {@link #listSupportedVmwareSoftwareVersions(ListSupportedVmwareSoftwareVersionsRequest) listSupportedVmwareSoftwareVersions}).
* <p>
This attribute is not guaranteed to reflect the version of
* software currently installed on the ESXi hosts in the SDDC. The purpose
* of this attribute is to show the version of software that the Oracle
* Cloud VMware Solution will install on any new ESXi hosts that you *add to this
* SDDC in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost} 
* unless a different version is configured on the Cluster or ESXi host level.
* <p>
Therefore, if you upgrade the existing ESXi hosts in the SDDC to use a newer
* version of bundled ESXi software supported by the Oracle Cloud VMware Solution, you
* should use {@link #updateSddc(UpdateSddcRequest) updateSddc} to update the SDDC's
* {@code vmwareSoftwareVersion} with that new version.
* 
    */
  "esxiSoftwareVersion"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that
   * contains the SDDC.
   *
   */
  "compartmentId": string;
  /**
   * The number of Clusters in the SDDC. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "clustersCount": number;
  /**
    * The FQDN for vCenter.
* <p>
Example: {@code vcenter-my-sddc.sddc.us-phoenix-1.oraclecloud.com}
* 
    */
  "vcenterFqdn": string;
  /**
    * The FQDN for NSX Manager.
* <p>
Example: {@code nsx-my-sddc.sddc.us-phoenix-1.oraclecloud.com}
* 
    */
  "nsxManagerFqdn": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the {@code PrivateIp} object that is
   * the virtual IP (VIP) for vCenter. For information about {@code PrivateIp} objects, see the
   * Core Services API.
   *
   */
  "vcenterPrivateIpId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the {@code PrivateIp} object that is
   * the virtual IP (VIP) for NSX Manager. For information about {@code PrivateIp} objects, see the
   * Core Services API.
   *
   */
  "nsxManagerPrivateIpId": string;
  /**
   * The SDDC includes an administrator username and password for vCenter. You can
   * change this initial username to a different value in vCenter.
   *
   */
  "vcenterUsername"?: string;
  /**
   * The SDDC includes an administrator username and initial password for NSX Manager. You
   * can change this initial username to a different value in NSX Manager.
   *
   */
  "nsxManagerUsername"?: string;
  /**
    * One or more public SSH keys to be included in the {@code ~/.ssh/authorized_keys} file for
* the default user on each ESXi host. Use a newline character to separate multiple keys.
* The SSH keys must be in the format required for the {@code authorized_keys} file.
* <p>
This attribute is not guaranteed to reflect the public SSH keys
* currently installed on the ESXi hosts in the SDDC. The purpose
* of this attribute is to show the public SSH keys that Oracle
* Cloud VMware Solution will install on any new ESXi hosts that you *add to this
* SDDC in the future* with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
* <p>
Therefore, if you upgrade the existing ESXi hosts in the SDDC to use different
* SSH keys, you should use {@link #updateSddc(UpdateSddcRequest) updateSddc} to update
* the SDDC's {@code sshAuthorizedKeys} with the new public keys.
* 
    */
  "sshAuthorizedKeys": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the {@code PrivateIp} object that is
   * the virtual IP (VIP) for the NSX Edge Uplink. Use this OCID as the route target for
   * route table rules when setting up connectivity between the SDDC and other networks.
   * For information about {@code PrivateIp} objects, see the Core Services API.
   *
   */
  "nsxEdgeUplinkIpId"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the {@code PrivateIp} object that is
   * the virtual IP (VIP) for HCX Manager. For information about {@code PrivateIp} objects, see the
   * Core Services API.
   *
   */
  "hcxPrivateIpId"?: string;
  /**
    * The FQDN for HCX Manager.
* <p>
Example: {@code hcx-my-sddc.sddc.us-phoenix-1.oraclecloud.com}
* 
    */
  "hcxFqdn"?: string;
  /**
   * HCX configuration of the SDDC.
   *
   */
  "hcxMode": model.HcxModes;
  "initialConfiguration": model.InitialConfiguration;
  /**
   * Indicates whether SDDC is pending downgrade from HCX Enterprise to HCX Advanced.
   */
  "isHcxPendingDowngrade"?: boolean;
  /**
   * The activation licenses to use on the on-premises HCX Enterprise appliance you site pair with HCX Manager in your VMware Solution.
   *
   */
  "hcxOnPremLicenses"?: Array<model.HcxLicenseSummary>;
  /**
    * The date and time current HCX Enterprise billing cycle ends, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeHcxBillingCycleEnd"?: Date;
  /**
    * The date and time the SDDC's HCX on-premise license status was updated, in the format defined by
* [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeHcxLicenseStatusUpdated"?: Date;
  /**
   * Indicates whether this SDDC is designated for only single ESXi host.
   */
  "isSingleHostSddc"?: boolean;
  /**
    * The date and time the SDDC was created, in the format defined by
* [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
  /**
   * The date and time the SDDC was updated, in the format defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the SDDC.
   */
  "lifecycleState"?: model.LifecycleStates;
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

export namespace Sddc {
  export function getJsonObj(obj: Sddc): object {
    const jsonObj = {
      ...obj,
      ...{
        "initialConfiguration": obj.initialConfiguration
          ? model.InitialConfiguration.getJsonObj(obj.initialConfiguration)
          : undefined,

        "hcxOnPremLicenses": obj.hcxOnPremLicenses
          ? obj.hcxOnPremLicenses.map(item => {
              return model.HcxLicenseSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Sddc): object {
    const jsonObj = {
      ...obj,
      ...{
        "initialConfiguration": obj.initialConfiguration
          ? model.InitialConfiguration.getDeserializedJsonObj(obj.initialConfiguration)
          : undefined,

        "hcxOnPremLicenses": obj.hcxOnPremLicenses
          ? obj.hcxOnPremLicenses.map(item => {
              return model.HcxLicenseSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
