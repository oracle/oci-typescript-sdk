/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, move and delete
log groups, log objects, log saved searches, and agent configurations.

For more information, see [Logging Overview](https://docs.oracle.com/iaas/Content/Logging/Concepts/loggingoverview.htm).

 * OpenAPI spec version: 20200531
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
 * Source parser object.
 */
export interface UnifiedAgentParser {
  /**
   * Specifies the time field for the event time. If the event doesn't have this field, the current time is used.
   */
  "fieldTimeKey"?: string;
  /**
    * Specify types for converting a field into another type.
* For example,
*   With this configuration:
*       <parse>
*         @type csv
*         keys time,host,req_id,user
*         time_key time
*       </parse>
* <p>
  This incoming event:
*     \"2013/02/28 12:00:00,192.168.0.1,111,-\"
* <p>
  is parsed as:
*     1362020400 (2013/02/28/ 12:00:00)
* <p>
    record:
*     {
*       \"host\"   : \"192.168.0.1\",
*       \"req_id\" : \"111\",
*       \"user\"   : \"-\"
*     }
* 
    */
  "types"?: { [key: string]: string };
  /**
   * Specify the null value pattern.
   */
  "nullValuePattern"?: string;
  /**
   * If true, an empty string field is replaced with a null value.
   */
  "isNullEmptyString"?: boolean;
  /**
   * If true, use Fluent::EventTime.now(current time) as a timestamp when the time_key is specified.
   */
  "isEstimateCurrentEvent"?: boolean;
  /**
   * If true, keep the time field in the record.
   */
  "isKeepTimeKey"?: boolean;
  /**
   * Specify the timeout for parse processing. This is mainly for detecting an incorrect regexp pattern. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeoutInMilliseconds"?: number;

  "parserType": string;
}

export namespace UnifiedAgentParser {
  export function getJsonObj(obj: UnifiedAgentParser): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "parserType" in obj && obj.parserType) {
      switch (obj.parserType) {
        case "MULTILINE_GROK":
          return model.UnifiedAgentMultilineGrokParser.getJsonObj(
            <model.UnifiedAgentMultilineGrokParser>(<object>jsonObj),
            true
          );
        case "JSON":
          return model.UnifiedJSONParser.getJsonObj(
            <model.UnifiedJSONParser>(<object>jsonObj),
            true
          );
        case "GROK":
          return model.UnifiedAgentGrokParser.getJsonObj(
            <model.UnifiedAgentGrokParser>(<object>jsonObj),
            true
          );
        case "NONE":
          return model.UnifiedAgentNoneParser.getJsonObj(
            <model.UnifiedAgentNoneParser>(<object>jsonObj),
            true
          );
        case "SYSLOG":
          return model.UnifiedAgentSyslogParser.getJsonObj(
            <model.UnifiedAgentSyslogParser>(<object>jsonObj),
            true
          );
        case "OPENMETRICS":
          return model.UnifiedAgentOpenmetricsParser.getJsonObj(
            <model.UnifiedAgentOpenmetricsParser>(<object>jsonObj),
            true
          );
        case "AUDITD":
          return model.UnifiedAgentAuditdParser.getJsonObj(
            <model.UnifiedAgentAuditdParser>(<object>jsonObj),
            true
          );
        case "APACHE2":
          return model.UnifiedAgentApache2Parser.getJsonObj(
            <model.UnifiedAgentApache2Parser>(<object>jsonObj),
            true
          );
        case "REGEXP":
          return model.UnifiedAgentRegexParser.getJsonObj(
            <model.UnifiedAgentRegexParser>(<object>jsonObj),
            true
          );
        case "MULTILINE":
          return model.UnifiedAgentMultilineParser.getJsonObj(
            <model.UnifiedAgentMultilineParser>(<object>jsonObj),
            true
          );
        case "TSV":
          return model.UnifiedAgentTsvParser.getJsonObj(
            <model.UnifiedAgentTsvParser>(<object>jsonObj),
            true
          );
        case "CRI":
          return model.UnifiedAgentCriParser.getJsonObj(
            <model.UnifiedAgentCriParser>(<object>jsonObj),
            true
          );
        case "APACHE_ERROR":
          return model.UnifiedAgentApacheErrorParser.getJsonObj(
            <model.UnifiedAgentApacheErrorParser>(<object>jsonObj),
            true
          );
        case "MSGPACK":
          return model.UnifiedAgentMsgpackParser.getJsonObj(
            <model.UnifiedAgentMsgpackParser>(<object>jsonObj),
            true
          );
        case "CSV":
          return model.UnifiedAgentCsvParser.getJsonObj(
            <model.UnifiedAgentCsvParser>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.parserType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UnifiedAgentParser): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "parserType" in obj && obj.parserType) {
      switch (obj.parserType) {
        case "MULTILINE_GROK":
          return model.UnifiedAgentMultilineGrokParser.getDeserializedJsonObj(
            <model.UnifiedAgentMultilineGrokParser>(<object>jsonObj),
            true
          );
        case "JSON":
          return model.UnifiedJSONParser.getDeserializedJsonObj(
            <model.UnifiedJSONParser>(<object>jsonObj),
            true
          );
        case "GROK":
          return model.UnifiedAgentGrokParser.getDeserializedJsonObj(
            <model.UnifiedAgentGrokParser>(<object>jsonObj),
            true
          );
        case "NONE":
          return model.UnifiedAgentNoneParser.getDeserializedJsonObj(
            <model.UnifiedAgentNoneParser>(<object>jsonObj),
            true
          );
        case "SYSLOG":
          return model.UnifiedAgentSyslogParser.getDeserializedJsonObj(
            <model.UnifiedAgentSyslogParser>(<object>jsonObj),
            true
          );
        case "OPENMETRICS":
          return model.UnifiedAgentOpenmetricsParser.getDeserializedJsonObj(
            <model.UnifiedAgentOpenmetricsParser>(<object>jsonObj),
            true
          );
        case "AUDITD":
          return model.UnifiedAgentAuditdParser.getDeserializedJsonObj(
            <model.UnifiedAgentAuditdParser>(<object>jsonObj),
            true
          );
        case "APACHE2":
          return model.UnifiedAgentApache2Parser.getDeserializedJsonObj(
            <model.UnifiedAgentApache2Parser>(<object>jsonObj),
            true
          );
        case "REGEXP":
          return model.UnifiedAgentRegexParser.getDeserializedJsonObj(
            <model.UnifiedAgentRegexParser>(<object>jsonObj),
            true
          );
        case "MULTILINE":
          return model.UnifiedAgentMultilineParser.getDeserializedJsonObj(
            <model.UnifiedAgentMultilineParser>(<object>jsonObj),
            true
          );
        case "TSV":
          return model.UnifiedAgentTsvParser.getDeserializedJsonObj(
            <model.UnifiedAgentTsvParser>(<object>jsonObj),
            true
          );
        case "CRI":
          return model.UnifiedAgentCriParser.getDeserializedJsonObj(
            <model.UnifiedAgentCriParser>(<object>jsonObj),
            true
          );
        case "APACHE_ERROR":
          return model.UnifiedAgentApacheErrorParser.getDeserializedJsonObj(
            <model.UnifiedAgentApacheErrorParser>(<object>jsonObj),
            true
          );
        case "MSGPACK":
          return model.UnifiedAgentMsgpackParser.getDeserializedJsonObj(
            <model.UnifiedAgentMsgpackParser>(<object>jsonObj),
            true
          );
        case "CSV":
          return model.UnifiedAgentCsvParser.getDeserializedJsonObj(
            <model.UnifiedAgentCsvParser>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.parserType}`);
      }
    }
    return jsonObj;
  }
}
