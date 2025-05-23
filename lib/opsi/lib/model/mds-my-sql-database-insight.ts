/**
 * Ops Insights API
 * Use the Ops Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Ops Insights](https://docs.oracle.com/iaas/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Database insight resource.
 */
export interface MdsMySqlDatabaseInsight extends model.DatabaseInsight {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database.
   */
  "databaseId": string;
  /**
   * Name of database
   */
  "databaseName": string;
  /**
   * Display name of database
   */
  "databaseDisplayName"?: string;
  /**
   * OCI database resource type
   */
  "databaseResourceType": string;
  /**
   * Specifies if MYSQL DB System is highly available.
   */
  "isHighlyAvailable"?: boolean;
  /**
   * Specifies if MYSQL DB System has heatwave cluster attached.
   */
  "isHeatWaveClusterAttached"?: boolean;
  /**
   * Additional details of a db system in JSON format.
   * For MySQL DB System, this is the DbSystem object serialized as a JSON string as defined in https://docs.oracle.com/en-us/iaas/api/#/en/mysql/20190415/DbSystem/.
   *
   */
  "dbAdditionalDetails"?: any;

  "entitySource": string;
}

export namespace MdsMySqlDatabaseInsight {
  export function getJsonObj(obj: MdsMySqlDatabaseInsight, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseInsight.getJsonObj(obj) as MdsMySqlDatabaseInsight)),
      ...{}
    };

    return jsonObj;
  }
  export const entitySource = "MDS_MYSQL_DATABASE_SYSTEM";
  export function getDeserializedJsonObj(
    obj: MdsMySqlDatabaseInsight,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseInsight.getDeserializedJsonObj(obj) as MdsMySqlDatabaseInsight)),
      ...{}
    };

    return jsonObj;
  }
}
