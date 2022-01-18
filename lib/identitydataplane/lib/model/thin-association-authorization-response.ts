/**
 * Identity Service
 * API for the Identity Dataplane
 * OpenAPI spec version: v1
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

export interface ThinAssociationAuthorizationResponse {
  /**
   * The authorization responses.
   */
  "responses": Array<model.ThinAuthorizationResponse>;
  /**
   * The association verification result.
   */
  "associationResult": ThinAssociationAuthorizationResponse.AssociationResult;
  /**
   * The decision cache duration.
   */
  "decisionCacheDuration"?: string;
}

export namespace ThinAssociationAuthorizationResponse {
  export enum AssociationResult {
    FailUnknown = "FAIL_UNKNOWN",
    FailBadRequest = "FAIL_BAD_REQUEST",
    FailMissingEndorse = "FAIL_MISSING_ENDORSE",
    FailMissingAdmit = "FAIL_MISSING_ADMIT",
    Success = "SUCCESS"
  }

  export function getJsonObj(obj: ThinAssociationAuthorizationResponse): object {
    const jsonObj = {
      ...obj,
      ...{
        "responses": obj.responses
          ? obj.responses.map(item => {
              return model.ThinAuthorizationResponse.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ThinAssociationAuthorizationResponse): object {
    const jsonObj = {
      ...obj,
      ...{
        "responses": obj.responses
          ? obj.responses.map(item => {
              return model.ThinAuthorizationResponse.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}