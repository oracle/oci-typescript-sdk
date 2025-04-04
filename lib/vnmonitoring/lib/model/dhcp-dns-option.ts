/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](https://docs.oracle.com/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

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
 * DHCP option for specifying how DNS (hostname resolution) is handled in the subnets in the VCN.
 * For more information, see
 * [DNS in Your Virtual Cloud Network](https://docs.oracle.com/iaas/Content/Network/Concepts/dns.htm).
 *
 */
export interface DhcpDnsOption extends model.DhcpOption {
  /**
   * If you set {@code serverType} to {@code CustomDnsServer}, specify the
   * IP address of at least one DNS server of your choice (three maximum).
   *
   */
  "customDnsServers"?: Array<string>;
  /**
   * * **VcnLocal:** Reserved for future use.
   * <p>
   * **VcnLocalPlusInternet:** Also referred to as \"Internet and VCN Resolver\".
   * Instances can resolve internet hostnames (no internet gateway is required),
   * and can resolve hostnames of instances in the VCN. This is the default
   * value in the default set of DHCP options in the VCN. For the Internet and
   * VCN Resolver to work across the VCN, there must also be a DNS label set for
   * the VCN, a DNS label set for each subnet, and a hostname for each instance.
   * The Internet and VCN Resolver also enables reverse DNS lookup, which lets
   * you determine the hostname corresponding to the private IP address. For more
   * information, see
   * [DNS in Your Virtual Cloud Network](https://docs.oracle.com/iaas/Content/Network/Concepts/dns.htm).
   * <p>
   * **CustomDnsServer:** Instances use a DNS server of your choice (three
   * maximum).
   *
   */
  "serverType": DhcpDnsOption.ServerType;

  "type": string;
}

export namespace DhcpDnsOption {
  export enum ServerType {
    VcnLocal = "VcnLocal",
    VcnLocalPlusInternet = "VcnLocalPlusInternet",
    CustomDnsServer = "CustomDnsServer",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DhcpDnsOption, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.DhcpOption.getJsonObj(obj) as DhcpDnsOption)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "DomainNameServer";
  export function getDeserializedJsonObj(obj: DhcpDnsOption, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.DhcpOption.getDeserializedJsonObj(obj) as DhcpDnsOption)),
      ...{}
    };

    return jsonObj;
  }
}
