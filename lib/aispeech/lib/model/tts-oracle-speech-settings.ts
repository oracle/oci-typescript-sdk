/**
 * Speech API
 * The OCI Speech Service harnesses the power of spoken language by allowing developers to easily convert file-based data containing human speech into highly accurate text transcriptions.
 * OpenAPI spec version: 20220101
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Settings to use for generating speech with a model from ORACLE family.
 */
export interface TtsOracleSpeechSettings {
  /**
   * The format in which the input text has been supplied i.e., Text or SSML. The supported text types are:
   * - TEXT
   * - SSML
   *
   */
  "textType"?: TtsOracleSpeechSettings.TextType;
  /**
   * The sample rate of the generated audio. By default, the audio will be generated with speaker voice sample rate.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sampleRateInHz"?: number;
  /**
   * The format of audio in which the user wants the audio to be in. The supported output formats are:
   * - MP3
   * - OGG
   * - PCM
   * - JSON
   *
   */
  "outputFormat"?: TtsOracleSpeechSettings.OutputFormat;
  /**
   * The kind of time stamp markings the user wants for the audio.
   * This property should be provided if outputFormat is json, otherwise it will be ignored.
   * null value (i.e. no value is not specified) indicates no speech marking.
   * The supported speech mark types are:
   * - SENTENCE
   * - WORD
   *
   */
  "speechMarkTypes"?: Array<TtsOracleSpeechSettings.SpeechMarkTypes>;
}

export namespace TtsOracleSpeechSettings {
  export enum TextType {
    Text = "TEXT",
    Ssml = "SSML"
  }

  export enum OutputFormat {
    Mp3 = "MP3",
    Ogg = "OGG",
    Pcm = "PCM",
    Json = "JSON"
  }

  export enum SpeechMarkTypes {
    Sentence = "SENTENCE",
    Word = "WORD"
  }

  export function getJsonObj(obj: TtsOracleSpeechSettings): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TtsOracleSpeechSettings): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}