/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * Properties required to create an Android channel.
 */
export interface CreateAndroidChannelDetails extends model.CreateChannelDetails {
  /**
   * The maximum time until the token expires (in minutes). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxTokenExpirationTimeInMinutes"?: number;
  /**
   * Whether client authentication is enabled or not.
   */
  "isClientAuthenticationEnabled": boolean;
  /**
   * The ID of the Skill or Digital Assistant that the Channel is routed to.
   */
  "botId"?: string;

  "type": string;
}

export namespace CreateAndroidChannelDetails {
  export function getJsonObj(obj: CreateAndroidChannelDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateChannelDetails.getJsonObj(obj) as CreateAndroidChannelDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "ANDROID";
  export function getDeserializedJsonObj(
    obj: CreateAndroidChannelDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateChannelDetails.getDeserializedJsonObj(obj) as CreateAndroidChannelDetails)),
      ...{}
    };

    return jsonObj;
  }
}
