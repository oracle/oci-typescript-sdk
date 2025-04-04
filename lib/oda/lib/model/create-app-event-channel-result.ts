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
 * The configuration for an Application Event channel.
 */
export interface CreateAppEventChannelResult extends model.CreateChannelResult {
  /**
   * The secret key used to verify the authenticity of received messages.
   * This is only returned this once.  If it is lost the keys will need to be rotated to generate a new key.
   *
   */
  "secretKey": string;
  /**
   * The URL for sending errors and responses to.
   */
  "outboundUrl": string;
  /**
   * The IDs of the Skills and Digital Assistants that the Channel is routed to.
   */
  "eventSinkBotIds"?: Array<string>;
  /**
   * The URL to use to send messages to this channel.
   * This will be generally be used to configure a webhook in a 3rd party messaging system to send messages to this channel.
   *
   */
  "webhookUrl": string;

  "type": string;
}

export namespace CreateAppEventChannelResult {
  export function getJsonObj(obj: CreateAppEventChannelResult, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateChannelResult.getJsonObj(obj) as CreateAppEventChannelResult)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "APPEVENT";
  export function getDeserializedJsonObj(
    obj: CreateAppEventChannelResult,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateChannelResult.getDeserializedJsonObj(obj) as CreateAppEventChannelResult)),
      ...{}
    };

    return jsonObj;
  }
}
