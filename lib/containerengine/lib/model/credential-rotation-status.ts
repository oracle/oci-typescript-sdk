/**
 * Kubernetes Engine API
 * API for the Kubernetes Engine service (also known as the Container Engine for Kubernetes service). Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Kubernetes Engine](https://docs.oracle.com/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * Information regarding cluster's credential rotation.
 */
export interface CredentialRotationStatus {
  /**
   * The time by which retirement of old credentials should start.
   */
  "timeAutoCompletionScheduled"?: Date;
  /**
   * Credential rotation status of a kubernetes cluster
   * IN_PROGRESS: Issuing new credentials to kubernetes cluster control plane and worker nodes or retiring old credentials from kubernetes cluster control plane and worker nodes.
   * WAITING: Waiting for customer to invoke the complete rotation action or the automcatic complete rotation action.
   * COMPLETED: New credentials are functional on kuberentes cluster.
   *
   */
  "status": CredentialRotationStatus.Status;
  /**
   * Details of a kuberenetes cluster credential rotation status:
   * ISSUING_NEW_CREDENTIALS: Credential rotation is in progress. Starting to issue new credentials to kubernetes cluster control plane and worker nodes.
   * NEW_CREDENTIALS_ISSUED: New credentials are added. At this stage cluster has both old and new credentials and is awaiting old credentials retirement.
   * RETIRING_OLD_CREDENTIALS: Retirement of old credentials is in progress. Starting to remove old credentials from kubernetes cluster control plane and worker nodes.
   * COMPLETED: Credential rotation is complete. Old credentials are retired.
   *
   */
  "statusDetails": CredentialRotationStatus.StatusDetails;
}

export namespace CredentialRotationStatus {
  export enum Status {
    InProgress = "IN_PROGRESS",
    Waiting = "WAITING",
    Completed = "COMPLETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum StatusDetails {
    IssuingNewCredentials = "ISSUING_NEW_CREDENTIALS",
    NewCredentialsIssued = "NEW_CREDENTIALS_ISSUED",
    RetiringOldCredentials = "RETIRING_OLD_CREDENTIALS",
    Completed = "COMPLETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CredentialRotationStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CredentialRotationStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
