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
 * Defines the details saved in a {@code PathAnalyzerTest} resource. These configuration details are used to
 * run a [Network Path Analyzer](https://docs.oracle.com/iaas/Content/Network/Concepts/path_analyzer.htm) analysis.
 *
 */
export interface PathAnalyzerTest {
  /**
   * A unique identifier established when the resource is created. The identifier can't be changed later.
   *
   */
  "id": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the {@code PathAnalyzerTest} resource's compartment.
   */
  "compartmentId": string;
  /**
   * The IP protocol to use for the {@code PathAnalyzerTest} resource. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "protocol": number;
  "sourceEndpoint":
    | model.NetworkLoadBalancerListenerEndpoint
    | model.ComputeInstanceEndpoint
    | model.NetworkLoadBalancerEndpoint
    | model.OnPremEndpoint
    | model.LoadBalancerEndpoint
    | model.VnicEndpoint
    | model.IpAddressEndpoint
    | model.VlanEndpoint
    | model.SubnetEndpoint
    | model.LoadBalancerListenerEndpoint;
  "destinationEndpoint":
    | model.NetworkLoadBalancerListenerEndpoint
    | model.ComputeInstanceEndpoint
    | model.NetworkLoadBalancerEndpoint
    | model.OnPremEndpoint
    | model.LoadBalancerEndpoint
    | model.VnicEndpoint
    | model.IpAddressEndpoint
    | model.VlanEndpoint
    | model.SubnetEndpoint
    | model.LoadBalancerListenerEndpoint;
  "protocolParameters"?:
    | model.UdpProtocolParameters
    | model.TcpProtocolParameters
    | model.IcmpProtocolParameters;
  "queryOptions": model.QueryOptions;
  /**
   * The date and time the {@code PathAnalyzerTest} resource was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeCreated": Date;
  /**
   * The date and time the {@code PathAnalyzerTest} resource was last updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeUpdated": Date;
  /**
   * The current state of the {@code PathAnalyzerTest} resource.
   */
  "lifecycleState": PathAnalyzerTest.LifecycleState;
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

export namespace PathAnalyzerTest {
  export enum LifecycleState {
    Active = "ACTIVE",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: PathAnalyzerTest): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceEndpoint": obj.sourceEndpoint
          ? model.Endpoint.getJsonObj(obj.sourceEndpoint)
          : undefined,
        "destinationEndpoint": obj.destinationEndpoint
          ? model.Endpoint.getJsonObj(obj.destinationEndpoint)
          : undefined,
        "protocolParameters": obj.protocolParameters
          ? model.ProtocolParameters.getJsonObj(obj.protocolParameters)
          : undefined,
        "queryOptions": obj.queryOptions
          ? model.QueryOptions.getJsonObj(obj.queryOptions)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PathAnalyzerTest): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceEndpoint": obj.sourceEndpoint
          ? model.Endpoint.getDeserializedJsonObj(obj.sourceEndpoint)
          : undefined,
        "destinationEndpoint": obj.destinationEndpoint
          ? model.Endpoint.getDeserializedJsonObj(obj.destinationEndpoint)
          : undefined,
        "protocolParameters": obj.protocolParameters
          ? model.ProtocolParameters.getDeserializedJsonObj(obj.protocolParameters)
          : undefined,
        "queryOptions": obj.queryOptions
          ? model.QueryOptions.getDeserializedJsonObj(obj.queryOptions)
          : undefined
      }
    };

    return jsonObj;
  }
}
