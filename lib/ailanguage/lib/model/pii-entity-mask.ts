/**
 * Language API
 * OCI Language Service solutions can help enterprise customers integrate AI into their products immediately using our proven,
pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20221001
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Mask PII entities with the given masking character.
 */
export interface PiiEntityMask extends model.PiiEntityMasking {
  /**
   * Masking character. By default, the character is an asterisk (*)
   */
  "maskingCharacter"?: string;
  /**
   * Number of characters to leave unmasked. By default, the whole entity is masked. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "leaveCharactersUnmasked"?: number;
  /**
   * Unmask from the end. By default, the whole entity is masked. This field works in concert with
   * leaveCharactersUnmasked. For example, leaveCharactersUnmasked is 3 and isUnmaskedFromEnd is true,
   * then if the entity is India the masked entity/result is **dia.
   *
   */
  "isUnmaskedFromEnd"?: boolean;

  "mode": string;
}

export namespace PiiEntityMask {
  export function getJsonObj(obj: PiiEntityMask, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.PiiEntityMasking.getJsonObj(obj) as PiiEntityMask)),
      ...{}
    };

    return jsonObj;
  }
  export const mode = "MASK";
  export function getDeserializedJsonObj(obj: PiiEntityMask, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PiiEntityMasking.getDeserializedJsonObj(obj) as PiiEntityMask)),
      ...{}
    };

    return jsonObj;
  }
}