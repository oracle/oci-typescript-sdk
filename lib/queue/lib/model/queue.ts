/**
 * Queue API
 * A description of the Queue API
 * OpenAPI spec version: 20210201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Description of Queue.
 */
export interface Queue {
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * Queue Identifier, can be renamed
   */
  "displayName"?: string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * The time the the Queue was created. An RFC3339 formatted datetime string
   */
  "timeCreated": Date;
  /**
   * The time the Queue was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated": Date;
  /**
   * The current state of the Queue.
   */
  "lifecycleState": Queue.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * The endpoint to use to consume or publish messages in the queue.
   */
  "messagesEndpoint": string;
  /**
   * The retention period of the messages in the queue, in seconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "retentionInSeconds": number;
  /**
   * The default visibility of the messages consumed from the queue. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "visibilityInSeconds": number;
  /**
   * The default polling timeout of the messages in the queue, in seconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeoutInSeconds": number;
  /**
   * The number of times a message can be delivered to a consumer before being moved to the dead letter queue. A value of 0 indicates that the DLQ is not used. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "deadLetterQueueDeliveryCount": number;
  /**
   * Id of the custom master encryption key which will be used to encrypt messages content
   */
  "customEncryptionKeyId"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Queue {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Queue): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Queue): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}