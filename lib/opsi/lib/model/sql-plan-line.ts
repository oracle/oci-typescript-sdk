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
 * SQL Plan Line type object.
 */
export interface SqlPlanLine {
  /**
   * Version
   * Example: {@code 1}
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "version"?: number;
  /**
   * Unique SQL_ID for a SQL Statement.
   *
   */
  "sqlIdentifier": string;
  /**
   * Plan hash value for the SQL Execution Plan Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "planHash": number;
  /**
   * Force matching signature
   * Example: {@code \"18067345456756876713\"}
   *
   */
  "forceMatchingSignature"?: string;
  /**
   * Generation time stamp
   * Example: {@code \"2020-05-05T02:10:00.000Z\"}
   *
   */
  "timeGenerated"?: Date;
  /**
   * Collection time stamp
   * Example: {@code \"2020-05-06T00:00:00.000Z\"}
   *
   */
  "timeCollected": Date;
  /**
   * Operation
   * Example: {@code \"SELECT STATEMENT\"}
   *
   */
  "operation": string;
  /**
   * Remark
   * Example: {@code \"\"}
   *
   */
  "remark"?: string;
  /**
   * Options
   * Example: {@code \"RANGE SCAN\"}
   *
   */
  "options"?: string;
  /**
   * Object Node
   * Example: {@code \"Q4000\"}
   *
   */
  "objectNode"?: string;
  /**
   * Object Owner
   * Example: {@code \"TENANT_A#SCHEMA\"}
   *
   */
  "objectOwner"?: string;
  /**
   * Object Name
   * Example: {@code \"PLAN_LINES_PK\"}
   *
   */
  "objectName"?: string;
  /**
   * Object Alias
   * Example: {@code \"PLAN_LINES@SEL$1\"}
   *
   */
  "objectAlias"?: string;
  /**
   * Object Instance
   * Example: {@code 37472}
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectInstance"?: number;
  /**
   * Object Type
   * Example: {@code \"INDEX (UNIQUE)\"}
   *
   */
  "objectType"?: string;
  /**
   * Optimizer
   * Example: {@code \"CLUSTER\"}
   *
   */
  "optimizer"?: string;
  /**
   * Search Columns
   * Example: {@code 3}
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "searchColumns"?: number;
  /**
   * Identifier
   * Example: {@code 3}
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "identifier": number;
  /**
   * Parent Identifier
   * Example: {@code 2}
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "parentIdentifier"?: number;
  /**
   * Depth
   * Example: {@code 3}
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "depth"?: number;
  /**
   * Position
   * Example: {@code 1}
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "position"?: number;
  /**
   * Cost
   * Example: {@code 1}
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cost"?: number;
  /**
   * Cardinality
   * Example: {@code 1}
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cardinality"?: number;
  /**
   * Bytes
   * Example: {@code 150}
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "bytes"?: number;
  /**
   * Other
   * Example:
   *
   */
  "other"?: string;
  /**
   * Other Tag
   * Example: {@code \"PARALLEL_COMBINED_WITH_PARENT\"}
   *
   */
  "otherTag"?: string;
  /**
   * Partition start
   * Example: {@code 1}
   *
   */
  "partitionStart"?: string;
  /**
   * Partition stop
   * Example: {@code 2}
   *
   */
  "partitionStop"?: string;
  /**
   * Partition identifier
   * Example: {@code 8}
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "partitionIdentifier"?: number;
  /**
   * Distribution
   * Example: {@code \"QC (RANDOM)\"}
   *
   */
  "distribution"?: string;
  /**
   * CPU cost
   * Example: {@code 7321}
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCost"?: number;
  /**
   * IO cost
   * Example: {@code 1}
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ioCost"?: number;
  /**
   * Time space
   * Example: {@code 15614000}
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "tempSpace"?: number;
  /**
   * Access predicates
   * Example: {@code \"\\\"RESOURCE_ID\\\"=:1 AND \\\"QUERY_ID\\\"=:2\"}
   *
   */
  "accessPredicates"?: string;
  /**
   * Filter predicates
   * Example: {@code \"(INTERNAL_FUNCTION(\\\"J\\\".\\\"DATABASE_ROLE\\\") OR (\\\"J\\\".\\\"DATABASE_ROLE\\\" IS NULL AND SYS_CONTEXT('userenv','database_role')='PRIMARY'))\"}
   *
   */
  "filterPredicates"?: string;
  /**
   * Projection
   * Example: {@code \"COUNT(*)[22]\"}
   *
   */
  "projection"?: string;
  /**
   * Qblock Name
   * Example: {@code \"SEL$1\"}
   *
   */
  "qblockName"?: string;
  /**
   * Total elapsed time
   * Example: {@code 1.2}
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "elapsedTimeInSec"?: number;
  /**
   * Other SQL
   * Example: {@code \"<other_xml><info type=\\\"db_version\\\">18.0.0.0</info><info type=\\\"parse_schema\\\"><![CDATA[\\\"SYS\\\"]]></info><info type=\\\"plan_hash_full\\\">483892784</info><info type=\\\"plan_hash\\\">2709293936</info><info type=\\\"plan_hash_2\\\">483892784</info><outline_data><hint><![CDATA[IGNORE_OPTIM_EMBEDDED_HINTS]]></hint><hint><![CDATA[OPTIMIZER_FEATURES_ENABLE('18.1.0')]]></hint><hint><![CDATA[DB_VERSION('18.1.0')]]></hint><hint><![CDATA[OPT_PARAM('_b_tree_bitmap_plans' 'false')]]></hint><hint><![CDATA[OPT_PARAM('_optim_peek_user_binds' 'false')]]></hint><hint><![CDATA[OPT_PARAM('result_cache_mode' 'FORCE')]]></hint><hint><![CDATA[OPT_PARAM('_fix_control' '20648883:0 27745220:1 30001331:1 30142527:1 30539126:1')]]></hint><hint><![CDATA[OUTLINE_LEAF(@\\\"SEL$1\\\")]]></hint><hint><![CDATA[INDEX(@\\\"SEL$1\\\" \\\"USER$\\\"@\\\"SEL$1\\\" \\\"I_USER#\\\")]]></hint></outline_data></other_xml>\"}
   *
   */
  "otherXML"?: string;
}

export namespace SqlPlanLine {
  export function getJsonObj(obj: SqlPlanLine): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlPlanLine): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
