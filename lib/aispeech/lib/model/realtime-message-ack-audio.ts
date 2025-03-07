/**
 * Speech API
 * The OCI Speech Service harnesses the power of spoken language by allowing developers to easily convert file-based data containing human speech into highly accurate text transcriptions.
 * OpenAPI spec version: 20220101
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
 * The websocket ack message received from service.
 */
export interface RealtimeMessageAckAudio extends model.RealtimeMessage {
  "details": model.RealtimeMessageAckAudioDetails;

  "event": string;
}

export namespace RealtimeMessageAckAudio {
  export function getJsonObj(obj: RealtimeMessageAckAudio, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.RealtimeMessage.getJsonObj(obj) as RealtimeMessageAckAudio)),
      ...{
        "details": obj.details
          ? model.RealtimeMessageAckAudioDetails.getJsonObj(obj.details)
          : undefined
      }
    };

    return jsonObj;
  }
  export const event = "ACKAUDIO";
  export function getDeserializedJsonObj(
    obj: RealtimeMessageAckAudio,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.RealtimeMessage.getDeserializedJsonObj(obj) as RealtimeMessageAckAudio)),
      ...{
        "details": obj.details
          ? model.RealtimeMessageAckAudioDetails.getDeserializedJsonObj(obj.details)
          : undefined
      }
    };

    return jsonObj;
  }
}
