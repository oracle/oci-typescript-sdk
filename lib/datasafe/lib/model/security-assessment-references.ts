/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * A filter to return only findings that match the specified reference. Currently supported values are STIG, CIS, and GDPR.
 * Here STIG refers to DISA STIG, CIS refers to CIS Benchmark, and GDPR refers to EU GDPR.
 *
 **/
export enum SecurityAssessmentReferences {
  Stig = "STIG",
  Cis = "CIS",
  Gdpr = "GDPR"
}

export namespace SecurityAssessmentReferences {
  export function getJsonObj(obj: SecurityAssessmentReferences): SecurityAssessmentReferences {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: SecurityAssessmentReferences
  ): SecurityAssessmentReferences {
    return obj;
  }
}
