/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * The human interaction challenge settings. The human interaction challenge checks various event listeners in the user's browser to determine if there is a human user making a request.
 */
export interface HumanInteractionChallenge {
  /**
   * Enables or disables the human interaction challenge Web Application Firewall feature.
   */
  "isEnabled": boolean;
  /**
   * The action to take against requests from detected bots. If unspecified, defaults to {@code DETECT}.
   */
  "action"?: HumanInteractionChallenge.Action;
  /**
   * The number of failed requests before taking action. If unspecified, defaults to {@code 10}. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "failureThreshold"?: number;
  /**
   * The number of seconds between challenges for the same IP address. If unspecified, defaults to {@code 60}. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "actionExpirationInSeconds"?: number;
  /**
   * The number of seconds before the failure threshold resets. If unspecified, defaults to  {@code 60}. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "failureThresholdExpirationInSeconds"?: number;
  /**
   * The number of interactions required to pass the challenge. If unspecified, defaults to {@code 3}. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "interactionThreshold"?: number;
  /**
   * The number of seconds to record the interactions from the user. If unspecified, defaults to {@code 15}. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "recordingPeriodInSeconds"?: number;
  /**
   * Adds an additional HTTP header to requests that fail the challenge before being passed to the origin. Only applicable when the {@code action} is set to {@code DETECT}.
   */
  "setHttpHeader"?: model.Header;
  "challengeSettings"?: model.BlockChallengeSettings;
  /**
   * When enabled, the user is identified not only by the IP address but also by an unique additional hash, which prevents blocking visitors with shared IP addresses.
   */
  "isNatEnabled"?: boolean;
}

export namespace HumanInteractionChallenge {
  export enum Action {
    Detect = "DETECT",
    Block = "BLOCK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: HumanInteractionChallenge): object {
    const jsonObj = {
      ...obj,
      ...{
        "setHttpHeader": obj.setHttpHeader ? model.Header.getJsonObj(obj.setHttpHeader) : undefined,
        "challengeSettings": obj.challengeSettings
          ? model.BlockChallengeSettings.getJsonObj(obj.challengeSettings)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: HumanInteractionChallenge): object {
    const jsonObj = {
      ...obj,
      ...{
        "setHttpHeader": obj.setHttpHeader
          ? model.Header.getDeserializedJsonObj(obj.setHttpHeader)
          : undefined,
        "challengeSettings": obj.challengeSettings
          ? model.BlockChallengeSettings.getDeserializedJsonObj(obj.challengeSettings)
          : undefined
      }
    };

    return jsonObj;
  }
}
