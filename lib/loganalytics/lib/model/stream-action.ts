/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Stream action for scheduled task.
 */
export interface StreamAction extends model.Action {
  /**
   * The ManagementSavedSearch id [OCID] utilized in the action.
   */
  "savedSearchId"?: string;
  "templateDetails"?: model.TemplateDetails;
  "metricExtraction"?: model.MetricExtraction;
  /**
    * The duration of data to be searched for SAVED_SEARCH tasks,
* used when the task fires to calculate the query time range.
* <p>
Duration in ISO 8601 extended format as described in
* https://en.wikipedia.org/wiki/ISO_8601#Durations.
* The value should be positive.
* The largest supported unit (as opposed to value) is D, e.g.  P14D (not P2W).
* <p>
There are restrictions on the maximum duration value relative to the task schedule 
* value as specified in the following table.
*    Schedule Interval Range          | Maximum Duration 
* ----------------------------------- | -----------------
*   5 Minutes     to 30 Minutes       |   1 hour  \"PT60M\"
*  31 Minutes     to  1 Hour          |  12 hours \"PT720M\"
*  1 Hour+1Minute to  1 Day           |   1 day   \"P1D\"
*  1 Day+1Minute  to  1 Week-1Minute  |   7 days  \"P7D\"
*  1 Week         to  2 Weeks         |  14 days  \"P14D\"
*  greater than 2 Weeks               |  30 days  \"P30D\"
* <p>
If not specified, the duration will be based on the schedule. For example,
* if the schedule is every 5 minutes then the savedSearchDuration will be \"PT5M\";
* if the schedule is every 3 weeks then the savedSearchDuration will be \"P21D\".
* 
    */
  "savedSearchDuration"?: string;

  "type": string;
}

export namespace StreamAction {
  export function getJsonObj(obj: StreamAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Action.getJsonObj(obj) as StreamAction)),
      ...{
        "templateDetails": obj.templateDetails
          ? model.TemplateDetails.getJsonObj(obj.templateDetails)
          : undefined,
        "metricExtraction": obj.metricExtraction
          ? model.MetricExtraction.getJsonObj(obj.metricExtraction)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "STREAM";
  export function getDeserializedJsonObj(obj: StreamAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Action.getDeserializedJsonObj(obj) as StreamAction)),
      ...{
        "templateDetails": obj.templateDetails
          ? model.TemplateDetails.getDeserializedJsonObj(obj.templateDetails)
          : undefined,
        "metricExtraction": obj.metricExtraction
          ? model.MetricExtraction.getDeserializedJsonObj(obj.metricExtraction)
          : undefined
      }
    };

    return jsonObj;
  }
}
