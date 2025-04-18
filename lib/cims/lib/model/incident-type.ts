/**
 * Support Management API
 * Use the Support Management API to manage support requests.
For more information, see [Getting Help and Contacting Support](https://docs.oracle.com/iaas/Content/GSG/Tasks/contactingsupport.htm).
**Note**: Before you can create service requests with this API,
complete user registration at My Oracle Cloud Support 
and then ask your tenancy administrator to provide you authorization for the related user groups.

 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
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
 * Details about the incident type associated with the support ticket.
 */
export interface IncidentType {
  /**
   * Unique identifier for the incident type.
   */
  "id"?: string;
  /**
   * The name of the incident type.
   */
  "name"?: string;
  /**
   * The label associated with the incident type.
   */
  "label"?: string;
  /**
   * The description of the incident type.
   */
  "description"?: string;
  /**
   * The list of classifiers.
   */
  "classifierList"?: Array<model.Classifier>;
}

export namespace IncidentType {
  export function getJsonObj(obj: IncidentType): object {
    const jsonObj = {
      ...obj,
      ...{
        "classifierList": obj.classifierList
          ? obj.classifierList.map(item => {
              return model.Classifier.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IncidentType): object {
    const jsonObj = {
      ...obj,
      ...{
        "classifierList": obj.classifierList
          ? obj.classifierList.map(item => {
              return model.Classifier.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
