/**
 * Application Performance Monitoring Trace Explorer API
 * Use the Application Performance Monitoring Trace Explorer API to query traces and associated spans in Trace Explorer. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

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
 * Metadata about the bulk deactivation operation.  The bulk deactivation operation is atomic and binary.  If the processing of any of the attributes
 * in the bulk deactivation request results in a processing or validation error, then none of the attributes in the request are deactivated.
 * The bulk deactivation request succeeds only when all the attributes in the bulk deactivation request are processed and they get a successful
 * attributeStatus back.
 *
 */
export interface BulkDeActivationMetadata {
  /**
   * Operation status of the bulk deactivation operation.  The bulk deactivation operation could have either a success or an error status as defined below.  Note that
   * if a bulk operation has not succeeded, we do not deactivate any tags in the request set.
   * SUCCESS - The bulk deactivation operation has succeeded and all the attributes in the bulk deactivation request have been deactivated by this operation or deactivated earlier.
   * The following are error statuses for the bulk deactivation operation.  Note that none of the attributes (string or numeric) in the bulk request have been deactivated by this bulk
   * deactivation operation if any of the below statuses are returned.
   * EMPTY_ATTRIBUTE_LIST - The bulk deactivation request object was empty and did not contain any attributes to be deactivated.
   * NUMERIC_ATTRIBUTE_LIMIT_EXCEEDED - The number of numeric attributes in the bulk request exceeded the maximum limit (100) of numeric attributes that could be present in the APM Domain.
   * STRING_ATTRIBUTE_LIMIT_EXCEEDED - The number of string attributes in the bulk request exceeded the maximum limit (700) of string attributes that could be present in the APM Domain.
   * INVALID_BULK_REQUEST - The bulk request contains invalid attribute(s), or attribute(s) that resulted in a validation error, or an attribute that resulted
   * in a processing error.
   *
   */
  "operationStatus": BulkDeActivationMetadata.OperationStatus;
  /**
   * Type of operation.
   *
   */
  "operationType": BulkDeActivationMetadata.OperationType;
  /**
   * Total number attributes (both string and numeric) in TRACES namespace that were deactivated.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "attributesDeActivated"?: number;
  /**
   * Total number attributes (both string and numeric) in SYNTHETIC namespace that were deactivated.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "syntheticAttributesDeActivated"?: number;
  /**
   * Total number of free slots available for activation of additional string attributes in TRACES namespace in the APM Domain.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableStringAttributes"?: number;
  /**
   * Total number of free slots available for activation of additional numeric attributes in TRACES namespace in the APM Domain.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableNumericAttributes"?: number;
  /**
   * Total number of free slots available for activation of additional string attributes in SYNTHETIC namespace in the APM Domain.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableSyntheticStringAttributes"?: number;
  /**
   * Total number of free slots available for activation of additional numeric attributes in SYNTHETIC namespace in the APM Domain.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableSyntheticNumericAttributes"?: number;
}

export namespace BulkDeActivationMetadata {
  export enum OperationStatus {
    Success = "SUCCESS",
    EmptyAttributeList = "EMPTY_ATTRIBUTE_LIST",
    NumericAttributeLimitExceeded = "NUMERIC_ATTRIBUTE_LIMIT_EXCEEDED",
    StringAttributeLimitExceeded = "STRING_ATTRIBUTE_LIMIT_EXCEEDED",
    InvalidBulkRequest = "INVALID_BULK_REQUEST",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum OperationType {
    Deactivate = "DEACTIVATE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BulkDeActivationMetadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BulkDeActivationMetadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
