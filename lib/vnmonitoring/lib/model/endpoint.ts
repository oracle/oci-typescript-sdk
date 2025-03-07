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
 * Information describing a source or destination in a {@code PathAnalyzerTest} resource.
 *
 */
export interface Endpoint {
  "type": string;
}

export namespace Endpoint {
  export function getJsonObj(obj: Endpoint): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "NETWORK_LOAD_BALANCER_LISTENER":
          return model.NetworkLoadBalancerListenerEndpoint.getJsonObj(
            <model.NetworkLoadBalancerListenerEndpoint>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE":
          return model.ComputeInstanceEndpoint.getJsonObj(
            <model.ComputeInstanceEndpoint>(<object>jsonObj),
            true
          );
        case "NETWORK_LOAD_BALANCER":
          return model.NetworkLoadBalancerEndpoint.getJsonObj(
            <model.NetworkLoadBalancerEndpoint>(<object>jsonObj),
            true
          );
        case "ON_PREM":
          return model.OnPremEndpoint.getJsonObj(<model.OnPremEndpoint>(<object>jsonObj), true);
        case "LOAD_BALANCER":
          return model.LoadBalancerEndpoint.getJsonObj(
            <model.LoadBalancerEndpoint>(<object>jsonObj),
            true
          );
        case "VNIC":
          return model.VnicEndpoint.getJsonObj(<model.VnicEndpoint>(<object>jsonObj), true);
        case "IP_ADDRESS":
          return model.IpAddressEndpoint.getJsonObj(
            <model.IpAddressEndpoint>(<object>jsonObj),
            true
          );
        case "VLAN":
          return model.VlanEndpoint.getJsonObj(<model.VlanEndpoint>(<object>jsonObj), true);
        case "SUBNET":
          return model.SubnetEndpoint.getJsonObj(<model.SubnetEndpoint>(<object>jsonObj), true);
        case "LOAD_BALANCER_LISTENER":
          return model.LoadBalancerListenerEndpoint.getJsonObj(
            <model.LoadBalancerListenerEndpoint>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Endpoint): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "NETWORK_LOAD_BALANCER_LISTENER":
          return model.NetworkLoadBalancerListenerEndpoint.getDeserializedJsonObj(
            <model.NetworkLoadBalancerListenerEndpoint>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE":
          return model.ComputeInstanceEndpoint.getDeserializedJsonObj(
            <model.ComputeInstanceEndpoint>(<object>jsonObj),
            true
          );
        case "NETWORK_LOAD_BALANCER":
          return model.NetworkLoadBalancerEndpoint.getDeserializedJsonObj(
            <model.NetworkLoadBalancerEndpoint>(<object>jsonObj),
            true
          );
        case "ON_PREM":
          return model.OnPremEndpoint.getDeserializedJsonObj(
            <model.OnPremEndpoint>(<object>jsonObj),
            true
          );
        case "LOAD_BALANCER":
          return model.LoadBalancerEndpoint.getDeserializedJsonObj(
            <model.LoadBalancerEndpoint>(<object>jsonObj),
            true
          );
        case "VNIC":
          return model.VnicEndpoint.getDeserializedJsonObj(
            <model.VnicEndpoint>(<object>jsonObj),
            true
          );
        case "IP_ADDRESS":
          return model.IpAddressEndpoint.getDeserializedJsonObj(
            <model.IpAddressEndpoint>(<object>jsonObj),
            true
          );
        case "VLAN":
          return model.VlanEndpoint.getDeserializedJsonObj(
            <model.VlanEndpoint>(<object>jsonObj),
            true
          );
        case "SUBNET":
          return model.SubnetEndpoint.getDeserializedJsonObj(
            <model.SubnetEndpoint>(<object>jsonObj),
            true
          );
        case "LOAD_BALANCER_LISTENER":
          return model.LoadBalancerListenerEndpoint.getDeserializedJsonObj(
            <model.LoadBalancerListenerEndpoint>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
