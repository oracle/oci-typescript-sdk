/**
 * Monitoring API
 * Use the Monitoring API to manage metric queries and alarms for assessing the health, capacity, and performance of your cloud resources.
Endpoints vary by operation. For PostMetricData, use the `telemetry-ingestion` endpoints; for all other operations, use the `telemetry` endpoints.
For more information, see
[the Monitoring documentation](/iaas/Content/Monitoring/home.htm).

 * OpenAPI spec version: 20180401
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
 * The compartment target of the alarm suppression.
 */
export interface AlarmSuppressionCompartmentTarget extends model.AlarmSuppressionTarget {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment or tenancy that is the
   * target of the alarm suppression.
   * Example: {@code ocid1.compartment.oc1..exampleuniqueID}
   *
   */
  "compartmentId": string;
  /**
   * When true, the alarm suppression targets all alarms under all compartments and subcompartments of
   * the tenancy specified. The parameter can only be set to true when compartmentId is the tenancy OCID
   * (the tenancy is the root compartment). When false, the alarm suppression targets only the alarms under
   * the specified compartment.
   *
   */
  "compartmentIdInSubtree"?: boolean;

  "targetType": string;
}

export namespace AlarmSuppressionCompartmentTarget {
  export function getJsonObj(
    obj: AlarmSuppressionCompartmentTarget,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AlarmSuppressionTarget.getJsonObj(obj) as AlarmSuppressionCompartmentTarget)),
      ...{}
    };

    return jsonObj;
  }
  export const targetType = "COMPARTMENT";
  export function getDeserializedJsonObj(
    obj: AlarmSuppressionCompartmentTarget,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AlarmSuppressionTarget.getDeserializedJsonObj(
            obj
          ) as AlarmSuppressionCompartmentTarget)),
      ...{}
    };

    return jsonObj;
  }
}