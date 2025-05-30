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
 * Properties that are required to create a Translator.
 */
export interface CreateTranslatorDetails {
  /**
   * The Translation Service to use for this Translator.
   */
  "type": model.TranslationService;
  /**
   * The base URL for invoking the Translation Service.
   */
  "baseUrl": string;
  /**
   * The authentication token to use when invoking the Translation Service
   */
  "authToken": string;
  /**
   * Properties used when invoking the translation service.
   * Each property is a simple key-value pair.
   *
   */
  "properties"?: { [key: string]: string };
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateTranslatorDetails {
  export function getJsonObj(obj: CreateTranslatorDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateTranslatorDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
