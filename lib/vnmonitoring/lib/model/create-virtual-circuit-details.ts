/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface CreateVirtualCircuitDetails {
  /**
    * The provisioned data rate of the connection. To get a list of the
* available bandwidth levels (that is, shapes), see
* {@link #listFastConnectProviderVirtualCircuitBandwidthShapes(ListFastConnectProviderVirtualCircuitBandwidthShapesRequest) listFastConnectProviderVirtualCircuitBandwidthShapes}.
* <p>
Example: `10 Gbps`
* 
    */
  "bandwidthShapeName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the virtual circuit.
   *
   */
  "compartmentId": string;
  /**
   * Create a `CrossConnectMapping` for each cross-connect or cross-connect
   * group this virtual circuit will run on.
   *
   */
  "crossConnectMappings"?: Array<model.CrossConnectMapping>;
  /**
   * Your BGP ASN (either public or private). Provide this value only if
   * there's a BGP session that goes from your edge router to Oracle.
   * Otherwise, leave this empty or null.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "customerBgpAsn"?: number;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * For private virtual circuits only. The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the {@link Drg}
   * that this virtual circuit uses.
   *
   */
  "gatewayId"?: string;
  /**
   * Deprecated. Instead use `providerServiceId`.
   * To get a list of the provider names, see
   * {@link #listFastConnectProviderServices(ListFastConnectProviderServicesRequest) listFastConnectProviderServices}.
   *
   */
  "providerName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the service offered by the provider (if you're connecting
   * via a provider). To get a list of the available service offerings, see
   * {@link #listFastConnectProviderServices(ListFastConnectProviderServicesRequest) listFastConnectProviderServices}.
   *
   */
  "providerServiceId"?: string;
  /**
   * Deprecated. Instead use `providerServiceId`.
   * To get a list of the provider names, see
   * {@link #listFastConnectProviderServices(ListFastConnectProviderServicesRequest) listFastConnectProviderServices}.
   *
   */
  "providerServiceName"?: string;
  /**
   * For a public virtual circuit. The public IP prefixes (CIDRs) the customer wants to
   * advertise across the connection.
   *
   */
  "publicPrefixes"?: Array<model.CreateVirtualCircuitPublicPrefixDetails>;
  /**
   * The Oracle Cloud Infrastructure region where this virtual
   * circuit is located.
   * Example: `phx`
   *
   */
  "region"?: string;
  /**
   * The type of IP addresses used in this virtual circuit. PRIVATE
   * means [RFC 1918](https://tools.ietf.org/html/rfc1918) addresses
   * (10.0.0.0/8, 172.16/12, and 192.168/16).
   *
   */
  "type": CreateVirtualCircuitDetails.Type;
}

export namespace CreateVirtualCircuitDetails {
  export enum Type {
    Public = "PUBLIC",
    Private = "PRIVATE"
  }

  export function getJsonObj(obj: CreateVirtualCircuitDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "crossConnectMappings": obj.crossConnectMappings
          ? obj.crossConnectMappings.map(item => {
              return model.CrossConnectMapping.getJsonObj(item);
            })
          : undefined,

        "publicPrefixes": obj.publicPrefixes
          ? obj.publicPrefixes.map(item => {
              return model.CreateVirtualCircuitPublicPrefixDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateVirtualCircuitDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "crossConnectMappings": obj.crossConnectMappings
          ? obj.crossConnectMappings.map(item => {
              return model.CrossConnectMapping.getDeserializedJsonObj(item);
            })
          : undefined,

        "publicPrefixes": obj.publicPrefixes
          ? obj.publicPrefixes.map(item => {
              return model.CreateVirtualCircuitPublicPrefixDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}