/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * Defines the backup schedule details for update operation.
 *
 */
export interface UpdateBackupScheduleDetails {
  /**
   * The start timestamp for the deployment backup schedule. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2024-10-25T18:19:29.600Z}.
   *
   */
  "timeBackupScheduled"?: Date;
  /**
   * The frequency of the deployment backup schedule. Frequency can be DAILY, WEEKLY or MONTHLY.
   *
   */
  "frequencyBackupScheduled"?: UpdateBackupScheduleDetails.FrequencyBackupScheduled;
  /**
   * Name of the bucket where the object is to be uploaded in the object storage
   */
  "bucketName"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment being referenced.
   *
   */
  "compartmentId"?: string;
  /**
   * Name of namespace that serves as a container for all of your buckets
   */
  "namespaceName"?: string;
  /**
   * Parameter to allow users to create backup without trails
   */
  "isMetadataOnly"?: boolean;
}

export namespace UpdateBackupScheduleDetails {
  export enum FrequencyBackupScheduled {
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY"
  }

  export function getJsonObj(obj: UpdateBackupScheduleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateBackupScheduleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
