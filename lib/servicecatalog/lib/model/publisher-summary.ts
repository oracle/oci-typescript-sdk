/**
 * Service Catalog API
 * Manage solutions in Oracle Cloud Infrastructure Service Catalog.
 * OpenAPI spec version: 20210527
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
 * Summary details about the publisher of the resource.
 */
export interface PublisherSummary {
  /**
   * The unique identifier for the publisher.
   */
  "id": string;
  /**
   * The name of the publisher.
   */
  "displayName": string;
}

export namespace PublisherSummary {
  export function getJsonObj(obj: PublisherSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PublisherSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
