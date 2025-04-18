/**
 * Cloud Advisor API
 * Use the Cloud Advisor API to find potential inefficiencies in your tenancy and address them.
Cloud Advisor can help you save money, improve performance, strengthen system resilience, and improve security.
For more information, see [Cloud Advisor](https://docs.oracle.com/iaas/Content/CloudAdvisor/Concepts/cloudadvisoroverview.htm).

 * OpenAPI spec version: 20200606
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
 * The request object for updating the recommendation details.
 */
export interface UpdateRecommendationDetails {
  /**
   * The status of the recommendation.
   */
  "status": model.Status;
  /**
    * The date and time the current status will change. The format is defined by RFC3339.
* <p>
For example, \"The current {@code postponed} status of the recommendation will end and change to {@code pending} on this
* date and time.\"
* 
    */
  "timeStatusEnd"?: Date;
}

export namespace UpdateRecommendationDetails {
  export function getJsonObj(obj: UpdateRecommendationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateRecommendationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
