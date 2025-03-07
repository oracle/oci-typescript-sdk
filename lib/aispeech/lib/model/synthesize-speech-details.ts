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
 * Input JSON to get audio inference from TTS Service.
 */
export interface SynthesizeSpeechDetails {
  /**
   * The text input to get the inference audio from TTS Service.
   */
  "text": string;
  /**
   * If set to true, response will be sent in the chunked transfer-encoding and audio chunks
   * are sent back as and when they are ready. If set to false, response will be sent only once
   * the entire audio is generated.
   *
   */
  "isStreamEnabled"?: boolean;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment where the user has access to call {@code SpeechSynthesize} api. But default user access will be checked at tenancy level.
   */
  "compartmentId"?: string;
  "configuration"?: model.TtsOracleConfiguration;
  "audioConfig"?: model.TtsBaseAudioConfig;
}

export namespace SynthesizeSpeechDetails {
  export function getJsonObj(obj: SynthesizeSpeechDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configuration": obj.configuration
          ? model.TtsConfiguration.getJsonObj(obj.configuration)
          : undefined,
        "audioConfig": obj.audioConfig
          ? model.TtsAudioConfig.getJsonObj(obj.audioConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SynthesizeSpeechDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configuration": obj.configuration
          ? model.TtsConfiguration.getDeserializedJsonObj(obj.configuration)
          : undefined,
        "audioConfig": obj.audioConfig
          ? model.TtsAudioConfig.getDeserializedJsonObj(obj.audioConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
