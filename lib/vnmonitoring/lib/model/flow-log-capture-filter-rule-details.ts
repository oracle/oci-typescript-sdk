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
 * The set of rules governing what traffic the flow log collects when creating a flow log capture filter.
 *
 */
export interface FlowLogCaptureFilterRuleDetails {
  /**
   * Indicates whether a flow log capture filter rule is enabled.
   *
   */
  "isEnabled"?: boolean;
  /**
   * A lower number indicates a higher priority, range 0-9. Each rule must have a distinct priority.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "priority"?: number;
  /**
   * Sampling interval as 1 of X, where X is an integer not greater than 100000.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "samplingRate"?: number;
  /**
   * Traffic from this CIDR will be captured in the flow log.
   *
   */
  "sourceCidr"?: string;
  /**
   * Traffic to this CIDR will be captured in the flow log.
   *
   */
  "destinationCidr"?: string;
  /**
   * The transport protocol the filter uses.
   *
   */
  "protocol"?: string;
  "icmpOptions"?: model.IcmpOptions;
  "tcpOptions"?: model.TcpOptions;
  "udpOptions"?: model.UdpOptions;
  /**
   * Type or types of flow logs to store. {@code ALL} includes records for both accepted traffic and
   * rejected traffic.
   *
   */
  "flowLogType"?: FlowLogCaptureFilterRuleDetails.FlowLogType;
  /**
   * Include or exclude a ruleAction object.
   *
   */
  "ruleAction"?: FlowLogCaptureFilterRuleDetails.RuleAction;
}

export namespace FlowLogCaptureFilterRuleDetails {
  export enum FlowLogType {
    All = "ALL",
    Reject = "REJECT",
    Accept = "ACCEPT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum RuleAction {
    Include = "INCLUDE",
    Exclude = "EXCLUDE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: FlowLogCaptureFilterRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "icmpOptions": obj.icmpOptions ? model.IcmpOptions.getJsonObj(obj.icmpOptions) : undefined,
        "tcpOptions": obj.tcpOptions ? model.TcpOptions.getJsonObj(obj.tcpOptions) : undefined,
        "udpOptions": obj.udpOptions ? model.UdpOptions.getJsonObj(obj.udpOptions) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FlowLogCaptureFilterRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "icmpOptions": obj.icmpOptions
          ? model.IcmpOptions.getDeserializedJsonObj(obj.icmpOptions)
          : undefined,
        "tcpOptions": obj.tcpOptions
          ? model.TcpOptions.getDeserializedJsonObj(obj.tcpOptions)
          : undefined,
        "udpOptions": obj.udpOptions
          ? model.UdpOptions.getDeserializedJsonObj(obj.udpOptions)
          : undefined
      }
    };

    return jsonObj;
  }
}
