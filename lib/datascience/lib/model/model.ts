/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * Models are mathematical representations of the relationships between data. Models are represented by their associated metadata and artifacts.
 */
export interface Model {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the model.
   */
  "id": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the model's compartment.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the project associated with the model.
   */
  "projectId": string;
  /**
   * A user-friendly display name for the resource. It does not have to be unique and can be modified. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * A short description of the model.
   */
  "description"?: string;
  /**
   * The state of the model.
   */
  "lifecycleState": model.ModelLifecycleState;
  /**
   * Details about the lifecycle state of the model.
   */
  "lifecycleDetails": string;
  /**
   * The date and time the resource was created in the timestamp format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: 2019-08-25T21:10:29.41Z
   *
   */
  "timeCreated": Date;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the user who created the model.
   */
  "createdBy": string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. See [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * An array of custom metadata details for the model.
   */
  "customMetadataList"?: Array<model.Metadata>;
  /**
   * An array of defined metadata details for the model.
   */
  "definedMetadataList"?: Array<model.Metadata>;
  /**
   * Input schema file content in String format
   */
  "inputSchema"?: string;
  /**
   * Output schema file content in String format
   */
  "outputSchema"?: string;
  /**
   * The OCID of the model version set that the model is associated to.
   */
  "modelVersionSetId": string;
  /**
   * The name of the model version set that the model is associated to.
   */
  "modelVersionSetName": string;
  /**
   * Unique identifier assigned to each version of the model. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "versionId": number;
  /**
   * The version label can add an additional description of the lifecycle state of the model or the application using and training the model.
   */
  "versionLabel": string;
  /**
   * The category of the model.
   */
  "category": model.ModelCategory;
  /**
   * Identifier to indicate whether a model artifact resides in the Service Tenancy or Customer Tenancy.
   */
  "isModelByReference": boolean;
  "retentionSetting": model.RetentionSetting;
  "backupSetting": model.BackupSetting;
  "retentionOperationDetails": model.RetentionOperationDetails;
  "backupOperationDetails": model.BackupOperationDetails;
}

export namespace Model {
  export function getJsonObj(obj: Model): object {
    const jsonObj = {
      ...obj,
      ...{
        "customMetadataList": obj.customMetadataList
          ? obj.customMetadataList.map(item => {
              return model.Metadata.getJsonObj(item);
            })
          : undefined,
        "definedMetadataList": obj.definedMetadataList
          ? obj.definedMetadataList.map(item => {
              return model.Metadata.getJsonObj(item);
            })
          : undefined,

        "retentionSetting": obj.retentionSetting
          ? model.RetentionSetting.getJsonObj(obj.retentionSetting)
          : undefined,
        "backupSetting": obj.backupSetting
          ? model.BackupSetting.getJsonObj(obj.backupSetting)
          : undefined,
        "retentionOperationDetails": obj.retentionOperationDetails
          ? model.RetentionOperationDetails.getJsonObj(obj.retentionOperationDetails)
          : undefined,
        "backupOperationDetails": obj.backupOperationDetails
          ? model.BackupOperationDetails.getJsonObj(obj.backupOperationDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Model): object {
    const jsonObj = {
      ...obj,
      ...{
        "customMetadataList": obj.customMetadataList
          ? obj.customMetadataList.map(item => {
              return model.Metadata.getDeserializedJsonObj(item);
            })
          : undefined,
        "definedMetadataList": obj.definedMetadataList
          ? obj.definedMetadataList.map(item => {
              return model.Metadata.getDeserializedJsonObj(item);
            })
          : undefined,

        "retentionSetting": obj.retentionSetting
          ? model.RetentionSetting.getDeserializedJsonObj(obj.retentionSetting)
          : undefined,
        "backupSetting": obj.backupSetting
          ? model.BackupSetting.getDeserializedJsonObj(obj.backupSetting)
          : undefined,
        "retentionOperationDetails": obj.retentionOperationDetails
          ? model.RetentionOperationDetails.getDeserializedJsonObj(obj.retentionOperationDetails)
          : undefined,
        "backupOperationDetails": obj.backupOperationDetails
          ? model.BackupOperationDetails.getDeserializedJsonObj(obj.backupOperationDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
