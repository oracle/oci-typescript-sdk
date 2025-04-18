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
 * Properties of a Channel.
 */
export interface CreateChannelResult {
  /**
   * Unique immutable identifier that was assigned when the Channel was created.
   */
  "id": string;
  /**
   * The Channel's name. The name can contain only letters, numbers, periods, and underscores. The name must begin with a letter.
   *
   */
  "name": string;
  /**
   * A short description of the Channel.
   */
  "description"?: string;
  /**
   * The category of the Channel.
   */
  "category": model.ChannelCategory;
  /**
   * The number of milliseconds before a session expires. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sessionExpiryDurationInMilliseconds"?: number;
  /**
   * The Channel's current state.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * When the resource was created. A date-time string as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "timeCreated": Date;
  /**
   * When the resource was last updated. A date-time string as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "timeUpdated": Date;
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

  "type": string;
}

export namespace CreateChannelResult {
  export function getJsonObj(obj: CreateChannelResult): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "WEB":
          return model.CreateWebChannelResult.getJsonObj(
            <model.CreateWebChannelResult>(<object>jsonObj),
            true
          );
        case "SLACK":
          return model.CreateSlackChannelResult.getJsonObj(
            <model.CreateSlackChannelResult>(<object>jsonObj),
            true
          );
        case "WEBHOOK":
          return model.CreateWebhookChannelResult.getJsonObj(
            <model.CreateWebhookChannelResult>(<object>jsonObj),
            true
          );
        case "ANDROID":
          return model.CreateAndroidChannelResult.getJsonObj(
            <model.CreateAndroidChannelResult>(<object>jsonObj),
            true
          );
        case "TWILIO":
          return model.CreateTwilioChannelResult.getJsonObj(
            <model.CreateTwilioChannelResult>(<object>jsonObj),
            true
          );
        case "CORTANA":
          return model.CreateCortanaChannelResult.getJsonObj(
            <model.CreateCortanaChannelResult>(<object>jsonObj),
            true
          );
        case "SERVICECLOUD":
          return model.CreateServiceCloudChannelResult.getJsonObj(
            <model.CreateServiceCloudChannelResult>(<object>jsonObj),
            true
          );
        case "FACEBOOK":
          return model.CreateFacebookChannelResult.getJsonObj(
            <model.CreateFacebookChannelResult>(<object>jsonObj),
            true
          );
        case "APPLICATION":
          return model.CreateApplicationChannelResult.getJsonObj(
            <model.CreateApplicationChannelResult>(<object>jsonObj),
            true
          );
        case "IOS":
          return model.CreateIosChannelResult.getJsonObj(
            <model.CreateIosChannelResult>(<object>jsonObj),
            true
          );
        case "MSTEAMS":
          return model.CreateMSTeamsChannelResult.getJsonObj(
            <model.CreateMSTeamsChannelResult>(<object>jsonObj),
            true
          );
        case "APPEVENT":
          return model.CreateAppEventChannelResult.getJsonObj(
            <model.CreateAppEventChannelResult>(<object>jsonObj),
            true
          );
        case "OSVC":
          return model.CreateOsvcChannelResult.getJsonObj(
            <model.CreateOsvcChannelResult>(<object>jsonObj),
            true
          );
        case "OSS":
          return model.CreateOSSChannelResult.getJsonObj(
            <model.CreateOSSChannelResult>(<object>jsonObj),
            true
          );
        case "TEST":
          return model.CreateTestChannelResult.getJsonObj(
            <model.CreateTestChannelResult>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateChannelResult): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "WEB":
          return model.CreateWebChannelResult.getDeserializedJsonObj(
            <model.CreateWebChannelResult>(<object>jsonObj),
            true
          );
        case "SLACK":
          return model.CreateSlackChannelResult.getDeserializedJsonObj(
            <model.CreateSlackChannelResult>(<object>jsonObj),
            true
          );
        case "WEBHOOK":
          return model.CreateWebhookChannelResult.getDeserializedJsonObj(
            <model.CreateWebhookChannelResult>(<object>jsonObj),
            true
          );
        case "ANDROID":
          return model.CreateAndroidChannelResult.getDeserializedJsonObj(
            <model.CreateAndroidChannelResult>(<object>jsonObj),
            true
          );
        case "TWILIO":
          return model.CreateTwilioChannelResult.getDeserializedJsonObj(
            <model.CreateTwilioChannelResult>(<object>jsonObj),
            true
          );
        case "CORTANA":
          return model.CreateCortanaChannelResult.getDeserializedJsonObj(
            <model.CreateCortanaChannelResult>(<object>jsonObj),
            true
          );
        case "SERVICECLOUD":
          return model.CreateServiceCloudChannelResult.getDeserializedJsonObj(
            <model.CreateServiceCloudChannelResult>(<object>jsonObj),
            true
          );
        case "FACEBOOK":
          return model.CreateFacebookChannelResult.getDeserializedJsonObj(
            <model.CreateFacebookChannelResult>(<object>jsonObj),
            true
          );
        case "APPLICATION":
          return model.CreateApplicationChannelResult.getDeserializedJsonObj(
            <model.CreateApplicationChannelResult>(<object>jsonObj),
            true
          );
        case "IOS":
          return model.CreateIosChannelResult.getDeserializedJsonObj(
            <model.CreateIosChannelResult>(<object>jsonObj),
            true
          );
        case "MSTEAMS":
          return model.CreateMSTeamsChannelResult.getDeserializedJsonObj(
            <model.CreateMSTeamsChannelResult>(<object>jsonObj),
            true
          );
        case "APPEVENT":
          return model.CreateAppEventChannelResult.getDeserializedJsonObj(
            <model.CreateAppEventChannelResult>(<object>jsonObj),
            true
          );
        case "OSVC":
          return model.CreateOsvcChannelResult.getDeserializedJsonObj(
            <model.CreateOsvcChannelResult>(<object>jsonObj),
            true
          );
        case "OSS":
          return model.CreateOSSChannelResult.getDeserializedJsonObj(
            <model.CreateOSSChannelResult>(<object>jsonObj),
            true
          );
        case "TEST":
          return model.CreateTestChannelResult.getDeserializedJsonObj(
            <model.CreateTestChannelResult>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
