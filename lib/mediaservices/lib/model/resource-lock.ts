/**
 * Media Services API
 * Media Services (includes Media Flow and Media Streams) is a fully managed service for processing media (video) source content. Use Media Flow and Media Streams to transcode and package digital video using configurable workflows and stream video outputs.

Use the Media Services API to configure media workflows and run Media Flow jobs, create distribution channels, ingest assets, create Preview URLs and play assets. For more information, see [Media Flow](/iaas/Content/dms-mediaflow/home.htm) and [Media Streams](/iaas/Content/dms-mediastream/home.htm).

 * OpenAPI spec version: 20211101
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
 * Resource locks are used to prevent certain APIs from being called for the resource.
 * A full lock prevents both updating the resource and deleting the resource. A delete
 * lock prevents deleting the resource.
 *
 */
export interface ResourceLock {
  /**
   * Type of the lock.
   */
  "type": ResourceLock.Type;
  /**
   * The compartment ID of the lock.
   */
  "compartmentId": string;
  /**
   * The ID of the resource that is locking this resource. Indicates that deleting this resource will remove the lock.
   *
   */
  "relatedResourceId"?: string;
  /**
   * A message added by the creator of the lock. This is typically used to give an
   * indication of why the resource is locked.
   *
   */
  "message"?: string;
  /**
   * When the lock was created.
   */
  "timeCreated"?: Date;
}

export namespace ResourceLock {
  export enum Type {
    Full = "FULL",
    Delete = "DELETE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ResourceLock): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResourceLock): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}