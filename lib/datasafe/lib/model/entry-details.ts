/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Details specific to the security policy entry.
 */
export interface EntryDetails {
  "entryType": string;
}

export namespace EntryDetails {
  export function getJsonObj(obj: EntryDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entryType" in obj && obj.entryType) {
      switch (obj.entryType) {
        case "FIREWALL_POLICY":
          return model.FirewallPolicyEntryDetails.getJsonObj(
            <model.FirewallPolicyEntryDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.entryType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EntryDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entryType" in obj && obj.entryType) {
      switch (obj.entryType) {
        case "FIREWALL_POLICY":
          return model.FirewallPolicyEntryDetails.getDeserializedJsonObj(
            <model.FirewallPolicyEntryDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.entryType}`);
      }
    }
    return jsonObj;
  }
}
