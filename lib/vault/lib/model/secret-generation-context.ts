/**
 * Vault Secret Management API
 * Use the Secret Management API to manage secrets and secret versions. For more information, see [Managing Secrets](https://docs.oracle.com/iaas/Content/KeyManagement/Tasks/managingsecrets.htm).
 * OpenAPI spec version: 20180608
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
 * Captures a configurable set of secret generation rules such as length, base characters, additional characters, and so on.
 */
export interface SecretGenerationContext {
  /**
   * SecretTemplate captures structure in which customer wants to store secrets. This is optional and a default structure is available for each secret type.
   * The template can have any structure with static values that are not generated. Within the template, you can insert predefined placeholders to store secrets.
   * These placeholders are later replaced with the generated content and saved as a Base64 encoded content.
   *
   */
  "secretTemplate"?: string;

  "generationType": string;
}

export namespace SecretGenerationContext {
  export function getJsonObj(obj: SecretGenerationContext): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "generationType" in obj && obj.generationType) {
      switch (obj.generationType) {
        case "PASSPHRASE":
          return model.PassphraseGenerationContext.getJsonObj(
            <model.PassphraseGenerationContext>(<object>jsonObj),
            true
          );
        case "SSH_KEY":
          return model.SshKeyGenerationContext.getJsonObj(
            <model.SshKeyGenerationContext>(<object>jsonObj),
            true
          );
        case "BYTES":
          return model.BytesGenerationContext.getJsonObj(
            <model.BytesGenerationContext>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.generationType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SecretGenerationContext): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "generationType" in obj && obj.generationType) {
      switch (obj.generationType) {
        case "PASSPHRASE":
          return model.PassphraseGenerationContext.getDeserializedJsonObj(
            <model.PassphraseGenerationContext>(<object>jsonObj),
            true
          );
        case "SSH_KEY":
          return model.SshKeyGenerationContext.getDeserializedJsonObj(
            <model.SshKeyGenerationContext>(<object>jsonObj),
            true
          );
        case "BYTES":
          return model.BytesGenerationContext.getDeserializedJsonObj(
            <model.BytesGenerationContext>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.generationType}`);
      }
    }
    return jsonObj;
  }
}
