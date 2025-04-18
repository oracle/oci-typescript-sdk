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
 * Reference to instance component
 */
export interface InstanceComponent {
  /**
   * Name of referenced resource (generally resources do not have to have any name but most resources have name exposed as 'name' or 'displayName' field).
   */
  "name"?: string;
  /**
   * Name of instance component
   */
  "componentName": string;

  "type": string;
}

export namespace InstanceComponent {
  export function getJsonObj(obj: InstanceComponent): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "DATA_SCIENCE_MODEL_DEPLOYMENT":
          return model.DataScienceModelDeploymentInstanceComponent.getJsonObj(
            <model.DataScienceModelDeploymentInstanceComponent>(<object>jsonObj),
            true
          );
        case "GENERIC_OCI_RESOURCE":
          return model.GenericOciResourceInstanceComponent.getJsonObj(
            <model.GenericOciResourceInstanceComponent>(<object>jsonObj),
            true
          );
        case "ML_APPLICATION_INSTANCE_INTERNAL_TRIGGER":
          return model.MlApplicationInstanceInternalTrigger.getJsonObj(
            <model.MlApplicationInstanceInternalTrigger>(<object>jsonObj),
            true
          );
        case "DATA_SCIENCE_SCHEDULE":
          return model.DataScienceScheduleInstanceComponent.getJsonObj(
            <model.DataScienceScheduleInstanceComponent>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_OBJECT":
          return model.ObjectStorageObjectInstanceComponent.getJsonObj(
            <model.ObjectStorageObjectInstanceComponent>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_BUCKET":
          return model.ObjectStorageBucketInstanceComponent.getJsonObj(
            <model.ObjectStorageBucketInstanceComponent>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceComponent): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "DATA_SCIENCE_MODEL_DEPLOYMENT":
          return model.DataScienceModelDeploymentInstanceComponent.getDeserializedJsonObj(
            <model.DataScienceModelDeploymentInstanceComponent>(<object>jsonObj),
            true
          );
        case "GENERIC_OCI_RESOURCE":
          return model.GenericOciResourceInstanceComponent.getDeserializedJsonObj(
            <model.GenericOciResourceInstanceComponent>(<object>jsonObj),
            true
          );
        case "ML_APPLICATION_INSTANCE_INTERNAL_TRIGGER":
          return model.MlApplicationInstanceInternalTrigger.getDeserializedJsonObj(
            <model.MlApplicationInstanceInternalTrigger>(<object>jsonObj),
            true
          );
        case "DATA_SCIENCE_SCHEDULE":
          return model.DataScienceScheduleInstanceComponent.getDeserializedJsonObj(
            <model.DataScienceScheduleInstanceComponent>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_OBJECT":
          return model.ObjectStorageObjectInstanceComponent.getDeserializedJsonObj(
            <model.ObjectStorageObjectInstanceComponent>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_BUCKET":
          return model.ObjectStorageBucketInstanceComponent.getDeserializedJsonObj(
            <model.ObjectStorageBucketInstanceComponent>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
