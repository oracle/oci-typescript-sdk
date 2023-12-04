/**
 * Application Dependency Management API
 * Use the Application Dependency Management API to create knowledge bases and vulnerability audits.  For more information, see [ADM](/Content/application-dependency-management/home.htm).
 * OpenAPI spec version: 20220421
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * An application dependency with the recommended version that does not contain any CVE.
 * Each application dependency has a property specifying multiple node identifiers on which which this current node depends.
 *
 */
export interface ApplicationDependencyRecommendationSummary {
  /**
   * Unique Group Artifact Version (GAV) identifier in the format _Group:Artifact:Version_, e.g. org.graalvm.nativeimage:svm:21.1.0.
   */
  "gav": string;
  /**
   * Unique node identifier of an application dependency with an associated Recommendation, e.g. nodeId1.
   */
  "nodeId": string;
  /**
   * List of (application dependencies) node identifiers from which this node depends.
   */
  "applicationDependencyNodeIds": Array<string>;
  /**
   * Recommended application dependency in \"group:artifact:version\" (GAV) format, e.g. org.graalvm.nativeimage:svm:21.2.0.
   */
  "recommendedGav"?: string;
}

export namespace ApplicationDependencyRecommendationSummary {
  export function getJsonObj(obj: ApplicationDependencyRecommendationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApplicationDependencyRecommendationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}