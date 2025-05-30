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
 * Transcription object.
 */
export interface RealtimeMessageResultTranscription {
  /**
   * Transcription text.
   */
  "transcription": string;
  /**
   * Whether the transcription is final or partial.
   */
  "isFinal": boolean;
  /**
   * Start time in milliseconds for the transcription text. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "startTimeInMs": number;
  /**
   * End time in milliseconds for the transcription text. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "endTimeInMs": number;
  /**
   * Confidence for the transcription text. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "confidence": number;
  /**
   * Trailing silence after the transcription text. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "trailingSilence": number;
  /**
   * Array of individual transcription tokens.
   */
  "tokens": Array<model.RealtimeMessageResultTranscriptionToken>;
}

export namespace RealtimeMessageResultTranscription {
  export function getJsonObj(obj: RealtimeMessageResultTranscription): object {
    const jsonObj = {
      ...obj,
      ...{
        "tokens": obj.tokens
          ? obj.tokens.map(item => {
              return model.RealtimeMessageResultTranscriptionToken.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RealtimeMessageResultTranscription): object {
    const jsonObj = {
      ...obj,
      ...{
        "tokens": obj.tokens
          ? obj.tokens.map(item => {
              return model.RealtimeMessageResultTranscriptionToken.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
