/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](https://docs.oracle.com/iaas/Content/Network/Concepts/overview.htm),
[Compute](https://docs.oracle.com/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](https://docs.oracle.com/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](https://docs.oracle.com/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
 * These details are included in a request to create a virtual test access point (VTAP).
 */
export interface CreateVtapDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the {@code Vtap} resource.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VCN containing the {@code Vtap} resource.
   */
  "vcnId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the source point where packets are captured.
   *
   */
  "sourceId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the destination resource where mirrored packets are sent.
   *
   */
  "targetId"?: string;
  /**
   * The IP address of the destination resource where mirrored packets are sent.
   *
   */
  "targetIp"?: string;
  /**
   * The capture filter's Oracle ID ([OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm)).
   *
   */
  "captureFilterId": string;
  /**
   * Defines an encapsulation header type for the VTAP's mirrored traffic.
   *
   */
  "encapsulationProtocol"?: CreateVtapDetails.EncapsulationProtocol;
  /**
   * The virtual extensible LAN (VXLAN) network identifier (or VXLAN segment ID) that uniquely identifies the VXLAN.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "vxlanNetworkIdentifier"?: number;
  /**
   * Used to start or stop a {@code Vtap} resource.
   * <p>
   * {@code TRUE} directs the VTAP to start mirroring traffic.
   * * {@code FALSE} (Default) directs the VTAP to stop mirroring traffic.
   *
   */
  "isVtapEnabled"?: boolean;
  /**
   * The source type for the VTAP.
   *
   */
  "sourceType"?: CreateVtapDetails.SourceType;
  /**
   * Used to control the priority of traffic. It is an optional field. If it not passed, the value is DEFAULT
   */
  "trafficMode"?: CreateVtapDetails.TrafficMode;
  /**
   * The maximum size of the packets to be included in the filter. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxPacketSize"?: number;
  /**
   * The target type for the VTAP.
   *
   */
  "targetType"?: CreateVtapDetails.TargetType;
  /**
   * The IP Address of the source private endpoint.
   *
   */
  "sourcePrivateEndpointIp"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the subnet that source private endpoint belongs to.
   *
   */
  "sourcePrivateEndpointSubnetId"?: string;
}

export namespace CreateVtapDetails {
  export enum EncapsulationProtocol {
    Vxlan = "VXLAN"
  }

  export enum SourceType {
    Vnic = "VNIC",
    Subnet = "SUBNET",
    LoadBalancer = "LOAD_BALANCER",
    DbSystem = "DB_SYSTEM",
    ExadataVmCluster = "EXADATA_VM_CLUSTER",
    AutonomousDataWarehouse = "AUTONOMOUS_DATA_WAREHOUSE"
  }

  export enum TrafficMode {
    Default = "DEFAULT",
    Priority = "PRIORITY"
  }

  export enum TargetType {
    Vnic = "VNIC",
    NetworkLoadBalancer = "NETWORK_LOAD_BALANCER",
    IpAddress = "IP_ADDRESS"
  }

  export function getJsonObj(obj: CreateVtapDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateVtapDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
