/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information about RuntimeOperator.
 */
export interface RuntimeOperatorSummary {
  /**
   * The RuntimeOperator key.
   */
  "key"?: string;
  /**
   * The TaskRun key.
   */
  "taskRunKey"?: string;
  /**
   * The runtime operator start time. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "startTimeInMillis"?: number;
  /**
   * The runtime operator end time. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "endTimeInMillis"?: number;
  /**
   * Status of RuntimeOperator. This field is deprecated, use RuntimeOperator's executionState field instead.
   */
  "status"?: RuntimeOperatorSummary.Status;
  /**
   * The type of the object.
   */
  "modelType"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * Value can only contain upper case letters, underscore and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  /**
   * status
   */
  "executionState"?: RuntimeOperatorSummary.ExecutionState;
  /**
   * A list of parameters for the pipeline, this allows certain aspects of the pipeline to be configured when the pipeline is executed.
   */
  "parameters"?: Array<model.Parameter>;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  "metadata"?: model.ObjectMetadata;
  "operator"?:
    | model.Joiner
    | model.TaskOperator
    | model.Flatten
    | model.Aggregator
    | model.SortOper
    | model.Projection
    | model.EndOperator
    | model.Source
    | model.Union
    | model.ExpressionOperator
    | model.Function
    | model.DecisionOperator
    | model.Intersect
    | model.Target
    | model.Distinct
    | model.Filter
    | model.Lookup
    | model.Pivot
    | model.StartOperator
    | model.MergeOperator
    | model.Split
    | model.Minus;
  /**
   * The configuration provider bindings.
   */
  "inputs"?: { [key: string]: model.ParameterValue };
  /**
   * The configuration provider bindings.
   */
  "outputs"?: { [key: string]: model.ParameterValue };
  /**
   * The type of task run.
   */
  "taskType"?: RuntimeOperatorSummary.TaskType;
  "configProvider"?: model.ConfigProvider;
  /**
   * The type of Runtime Operator
   */
  "operatorType"?: RuntimeOperatorSummary.OperatorType;
  /**
   * A map metrics for the task run.
   */
  "metrics"?: { [key: string]: number };
}

export namespace RuntimeOperatorSummary {
  export enum Status {
    NotStarted = "NOT_STARTED",
    Queued = "QUEUED",
    Running = "RUNNING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Success = "SUCCESS",
    Error = "ERROR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ExecutionState {
    NotStarted = "NOT_STARTED",
    Running = "RUNNING",
    Terminated = "TERMINATED",
    Success = "SUCCESS",
    Error = "ERROR",
    Skipped = "SKIPPED",
    Unknown = "UNKNOWN",
    Ignored = "IGNORED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TaskType {
    IntegrationTask = "INTEGRATION_TASK",
    DataLoaderTask = "DATA_LOADER_TASK",
    PipelineTask = "PIPELINE_TASK",
    SqlTask = "SQL_TASK",
    OciDataflowTask = "OCI_DATAFLOW_TASK",
    RestTask = "REST_TASK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum OperatorType {
    BashOperator = "BASH_OPERATOR",
    TaskOperator = "TASK_OPERATOR",
    RestOperator = "REST_OPERATOR",
    StartOperator = "START_OPERATOR",
    EndOperator = "END_OPERATOR",
    ExpressionOperator = "EXPRESSION_OPERATOR",
    MergeOperator = "MERGE_OPERATOR",
    DecisionOperator = "DECISION_OPERATOR",
    LoopOperator = "LOOP_OPERATOR",
    ActualEndOperator = "ACTUAL_END_OPERATOR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: RuntimeOperatorSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.Parameter.getJsonObj(item);
            })
          : undefined,

        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined,
        "operator": obj.operator ? model.Operator.getJsonObj(obj.operator) : undefined,
        "inputs": obj.inputs
          ? common.mapContainer(obj.inputs, model.ParameterValue.getJsonObj)
          : undefined,
        "outputs": obj.outputs
          ? common.mapContainer(obj.outputs, model.ParameterValue.getJsonObj)
          : undefined,

        "configProvider": obj.configProvider
          ? model.ConfigProvider.getJsonObj(obj.configProvider)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RuntimeOperatorSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.Parameter.getDeserializedJsonObj(item);
            })
          : undefined,

        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined,
        "operator": obj.operator ? model.Operator.getDeserializedJsonObj(obj.operator) : undefined,
        "inputs": obj.inputs
          ? common.mapContainer(obj.inputs, model.ParameterValue.getDeserializedJsonObj)
          : undefined,
        "outputs": obj.outputs
          ? common.mapContainer(obj.outputs, model.ParameterValue.getDeserializedJsonObj)
          : undefined,

        "configProvider": obj.configProvider
          ? model.ConfigProvider.getDeserializedJsonObj(obj.configProvider)
          : undefined
      }
    };

    return jsonObj;
  }
}
