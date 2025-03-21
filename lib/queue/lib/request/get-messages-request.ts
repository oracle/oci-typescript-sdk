/**
 *
 *
 * OpenAPI spec version: 20210201
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/queue/GetMessages.ts.html |here} to see how to use GetMessagesRequest.
 */
export interface GetMessagesRequest extends common.BaseRequest {
  /**
   * The unique queue identifier.
   */
  "queueId": string;
  /**
 * If the {@code visibilityInSeconds} parameter is set, messages will be hidden for {@code visibilityInSeconds} seconds and won't be consumable by other consumers during that time.
* If it isn't set it defaults to the value set at the queue level.
* <p>
Using a {@code visibilityInSeconds} value of 0 effectively acts as a peek functionality.
* Messages retrieved that way aren't meant to be deleted because they will most likely be delivered to another consumer as their visibility won't change, but will still increase the delivery count by one.
* 
 */
  "visibilityInSeconds"?: number;
  /**
 * If the {@code timeoutInSeconds parameter} isn't set or it is set to a value greater than 0, the request is using the long-polling mode and will only return when a message is available for consumption (it does not wait for limit messages but still only returns at-most limit messages) or after {@code timeoutInSeconds} seconds (in which case it will return an empty response), whichever comes first.
* <p>
If the parameter is set to 0, the request is using the short-polling mode and immediately returns whether messages have been retrieved or not.
* In same rare-cases a long-polling request could be interrupted (returned with empty response) before the end of the timeout.
* 
 */
  "timeoutInSeconds"?: number;
  /**
   * The limit parameter controls how many messages is returned at-most.
   *
   */
  "limit"?: number;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
  /**
   * Optional parameter to filter the channels.
   */
  "channelFilter"?: string;
}
