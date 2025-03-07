/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](https://docs.oracle.com/iaas/Content/Network/Concepts/overview.htm),
[Compute](https://docs.oracle.com/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](https://docs.oracle.com/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](https://docs.oracle.com/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
 * A base object for all types of instance power action requests.
 */
export interface InstancePowerActionDetails {
  "actionType": string;
}

export namespace InstancePowerActionDetails {
  export function getJsonObj(obj: InstancePowerActionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "actionType" in obj && obj.actionType) {
      switch (obj.actionType) {
        case "reset":
          return model.ResetActionDetails.getJsonObj(
            <model.ResetActionDetails>(<object>jsonObj),
            true
          );
        case "rebootMigrate":
          return model.RebootMigrateActionDetails.getJsonObj(
            <model.RebootMigrateActionDetails>(<object>jsonObj),
            true
          );
        case "softreset":
          return model.SoftResetActionDetails.getJsonObj(
            <model.SoftResetActionDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.actionType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstancePowerActionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "actionType" in obj && obj.actionType) {
      switch (obj.actionType) {
        case "reset":
          return model.ResetActionDetails.getDeserializedJsonObj(
            <model.ResetActionDetails>(<object>jsonObj),
            true
          );
        case "rebootMigrate":
          return model.RebootMigrateActionDetails.getDeserializedJsonObj(
            <model.RebootMigrateActionDetails>(<object>jsonObj),
            true
          );
        case "softreset":
          return model.SoftResetActionDetails.getDeserializedJsonObj(
            <model.SoftResetActionDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.actionType}`);
      }
    }
    return jsonObj;
  }
}
