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
 * Details to update Stack Artifact.
 *
 */
export interface UpdateStackArtifactDetails extends model.UpdateArtifactDetails {
  "stack"?: model.UpdateStackDetails;

  "artifactType": string;
}

export namespace UpdateStackArtifactDetails {
  export function getJsonObj(obj: UpdateStackArtifactDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateArtifactDetails.getJsonObj(obj) as UpdateStackArtifactDetails)),
      ...{
        "stack": obj.stack ? model.UpdateStackDetails.getJsonObj(obj.stack) : undefined
      }
    };

    return jsonObj;
  }
  export const artifactType = "STACK";
  export function getDeserializedJsonObj(
    obj: UpdateStackArtifactDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateArtifactDetails.getDeserializedJsonObj(obj) as UpdateStackArtifactDetails)),
      ...{
        "stack": obj.stack ? model.UpdateStackDetails.getDeserializedJsonObj(obj.stack) : undefined
      }
    };

    return jsonObj;
  }
}
