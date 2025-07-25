/**
 * MarketplacePublisherService API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20241201
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
 * Details to create Stack artifact.
 */
export interface CreateStackArtifactDetails extends model.CreateArtifactDetails {
  "stack": model.CreateStackDetails;

  "artifactType": string;
}

export namespace CreateStackArtifactDetails {
  export function getJsonObj(obj: CreateStackArtifactDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateArtifactDetails.getJsonObj(obj) as CreateStackArtifactDetails)),
      ...{
        "stack": obj.stack ? model.CreateStackDetails.getJsonObj(obj.stack) : undefined
      }
    };

    return jsonObj;
  }
  export const artifactType = "STACK";
  export function getDeserializedJsonObj(
    obj: CreateStackArtifactDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateArtifactDetails.getDeserializedJsonObj(obj) as CreateStackArtifactDetails)),
      ...{
        "stack": obj.stack ? model.CreateStackDetails.getDeserializedJsonObj(obj.stack) : undefined
      }
    };

    return jsonObj;
  }
}
