/**
 * Fleet Application Management Service API
 * Fleet Application Management Service API. Use this API to for all FAMS related activities.
To manage fleets,view complaince report for the Fleet,scedule patches and other lifecycle activities

 * OpenAPI spec version: 20230831
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
 * The information about new FleetCredential.
 */
export interface AssociatedFleetCredentialDetails {
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: {@code My new resource}
* 
    */
  "displayName": string;
  /**
   * Tenancy OCID
   */
  "compartmentId": string;
  "entitySpecifics": model.TargetCredentialEntitySpecificDetails;
  "user":
    | model.PlainTextCredentialDetails
    | model.KeyEncryptionCredentialDetails
    | model.VaultSecretCredentialDetails;
  "password":
    | model.PlainTextCredentialDetails
    | model.KeyEncryptionCredentialDetails
    | model.VaultSecretCredentialDetails;
}

export namespace AssociatedFleetCredentialDetails {
  export function getJsonObj(obj: AssociatedFleetCredentialDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "entitySpecifics": obj.entitySpecifics
          ? model.CredentialEntitySpecificDetails.getJsonObj(obj.entitySpecifics)
          : undefined,
        "user": obj.user ? model.CredentialDetails.getJsonObj(obj.user) : undefined,
        "password": obj.password ? model.CredentialDetails.getJsonObj(obj.password) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AssociatedFleetCredentialDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "entitySpecifics": obj.entitySpecifics
          ? model.CredentialEntitySpecificDetails.getDeserializedJsonObj(obj.entitySpecifics)
          : undefined,
        "user": obj.user ? model.CredentialDetails.getDeserializedJsonObj(obj.user) : undefined,
        "password": obj.password
          ? model.CredentialDetails.getDeserializedJsonObj(obj.password)
          : undefined
      }
    };

    return jsonObj;
  }
}