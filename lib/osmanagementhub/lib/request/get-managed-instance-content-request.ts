/**
 *
 *
 * OpenAPI spec version: 20220901
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osmanagementhub/GetManagedInstanceContent.ts.html |here} to see how to use GetManagedInstanceContentRequest.
 */
export interface GetManagedInstanceContentRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the managed instance.
   */
  "managedInstanceId": string;
  /**
   * A filter to return only vulnerabilities matching the given types.
   */
  "vulnerabilityType": Array<model.VulnerabilityTypes>;
  /**
 * The assigned erratum name. It's unique and not changeable.
* <p>
Example: {@code ELSA-2020-5804}
* 
 */
  "advisoryName"?: Array<string>;
  /**
   * A filter to return resources that may partially match the erratum advisory name given.
   */
  "advisoryNameContains"?: string;
  /**
   * A filter to return only errata that match the given advisory types.
   */
  "advisoryType"?: Array<model.AdvisoryTypes>;
  /**
   * A filter to return vulnerabilities that match the given name. For Linux instances, this refers to the advisory name. For Windows instances, this refers to the Windows update display name.
   */
  "vulnerabilityName"?: Array<string>;
  /**
   * A filter to return vulnerabilities that partially match the given name. For Linux instances, this refers to the advisory name. For Windows instances, this refers to the Windows update display name.
   */
  "vulnerabilityNameContains"?: string;
  /**
   * The format of the report to download. Default is CSV.
   */
  "reportFormat"?: GetManagedInstanceContentRequest.ReportFormat;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
}

export namespace GetManagedInstanceContentRequest {
  export enum ReportFormat {
    Csv = "csv",
    Json = "json",
    Xml = "xml"
  }
}
