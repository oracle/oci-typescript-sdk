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
 * Details of the Product
 */
export interface ComplianceReportProduct {
  /**
   * Product Name
   */
  "productName": string;
  /**
   * Managed Targets associated with the Product.
   */
  "targets"?: Array<model.ComplianceReportTarget>;
}

export namespace ComplianceReportProduct {
  export function getJsonObj(obj: ComplianceReportProduct): object {
    const jsonObj = {
      ...obj,
      ...{
        "targets": obj.targets
          ? obj.targets.map(item => {
              return model.ComplianceReportTarget.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ComplianceReportProduct): object {
    const jsonObj = {
      ...obj,
      ...{
        "targets": obj.targets
          ? obj.targets.map(item => {
              return model.ComplianceReportTarget.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}