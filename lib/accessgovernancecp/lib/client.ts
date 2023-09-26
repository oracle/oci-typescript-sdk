/**
 * Access Governance APIs
 * Use the Oracle Access Governance API to create, view, and manage GovernanceInstances.
 * OpenAPI spec version: 20220518
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { AccessGovernanceCPWaiter } from "./accessgovernancecp-waiter";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AccessGovernanceCPApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class AccessGovernanceCPClient {
  protected static serviceEndpointTemplate =
    "https://cp-prod.access-governance.{region}.oci.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_realmSpecificEndpointTemplateEnabled": boolean = false;
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": AccessGovernanceCPWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;
  protected _httpOptions: any = undefined;
  protected _bodyDuplexMode: any = undefined;
  public targetService = "AccessGovernanceCP";
  protected _regionId: string = "";
  protected "_region": common.Region;
  protected _lastSetRegionOrRegionId: string = "";

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
      this._httpOptions = clientConfiguration.httpOptions
        ? clientConfiguration.httpOptions
        : undefined;
      this._bodyDuplexMode = clientConfiguration.bodyDuplexMode
        ? clientConfiguration.bodyDuplexMode
        : undefined;
    }
    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient ||
      new common.FetchHttpClient(
        requestSigner,
        this._circuitBreaker,
        this._httpOptions,
        this._bodyDuplexMode
      );

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20220518";
    if (this.logger) this.logger.info(`AccessGovernanceCPClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Determines whether realm specific endpoint should be used or not.
   * Set realmSpecificEndpointTemplateEnabled to "true" if the user wants to enable use of realm specific endpoint template, otherwise set it to "false"
   * @param realmSpecificEndpointTemplateEnabled flag to enable the use of realm specific endpoint template
   */
  public set useRealmSpecificEndpointTemplate(realmSpecificEndpointTemplateEnabled: boolean) {
    this._realmSpecificEndpointTemplateEnabled = realmSpecificEndpointTemplateEnabled;
    if (this.logger)
      this.logger.info(
        `realmSpecificEndpointTemplateEnabled set to ${this._realmSpecificEndpointTemplateEnabled}`
      );
    if (this._lastSetRegionOrRegionId === common.Region.REGION_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
        AccessGovernanceCPClient.serviceEndpointTemplate,
        this._region,
        AccessGovernanceCPClient.endpointServiceName
      );
    } else if (this._lastSetRegionOrRegionId === common.Region.REGION_ID_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
        AccessGovernanceCPClient.serviceEndpointTemplate,
        this._regionId,
        AccessGovernanceCPClient.endpointServiceName
      );
    }
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this._region = region;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      AccessGovernanceCPClient.serviceEndpointTemplate,
      region,
      AccessGovernanceCPClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_STRING;
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this._regionId = regionId;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      AccessGovernanceCPClient.serviceEndpointTemplate,
      regionId,
      AccessGovernanceCPClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_ID_STRING;
  }

  /**
   * Creates a new AccessGovernanceCPWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): AccessGovernanceCPWaiter {
    this._waiters = new AccessGovernanceCPWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): AccessGovernanceCPWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Moves a GovernanceInstance resource from one compartment identifier to another. When provided, If-Match is checked against ETag values of the resource.
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ChangeGovernanceInstanceCompartmentRequest
   * @return ChangeGovernanceInstanceCompartmentResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/accessgovernancecp/ChangeGovernanceInstanceCompartment.ts.html |here} to see how to use ChangeGovernanceInstanceCompartment API.
   */
  public async changeGovernanceInstanceCompartment(
    changeGovernanceInstanceCompartmentRequest: requests.ChangeGovernanceInstanceCompartmentRequest
  ): Promise<responses.ChangeGovernanceInstanceCompartmentResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation AccessGovernanceCPClient#changeGovernanceInstanceCompartment."
      );
    const operationName = "changeGovernanceInstanceCompartment";
    const apiReferenceLink = "";
    const pathParams = {
      "{governanceInstanceId}": changeGovernanceInstanceCompartmentRequest.governanceInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": changeGovernanceInstanceCompartmentRequest.ifMatch,
      "opc-request-id": changeGovernanceInstanceCompartmentRequest.opcRequestId,
      "opc-retry-token": changeGovernanceInstanceCompartmentRequest.opcRetryToken
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      changeGovernanceInstanceCompartmentRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/governanceInstances/{governanceInstanceId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeGovernanceInstanceCompartmentRequest.changeGovernanceInstanceCompartmentDetails,
        "ChangeGovernanceInstanceCompartmentDetails",
        model.ChangeGovernanceInstanceCompartmentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ChangeGovernanceInstanceCompartmentResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Creates a new GovernanceInstance.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param CreateGovernanceInstanceRequest
   * @return CreateGovernanceInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/accessgovernancecp/CreateGovernanceInstance.ts.html |here} to see how to use CreateGovernanceInstance API.
   */
  public async createGovernanceInstance(
    createGovernanceInstanceRequest: requests.CreateGovernanceInstanceRequest
  ): Promise<responses.CreateGovernanceInstanceResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AccessGovernanceCPClient#createGovernanceInstance.");
    const operationName = "createGovernanceInstance";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": createGovernanceInstanceRequest.opcRetryToken,
      "opc-request-id": createGovernanceInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      createGovernanceInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/governanceInstances",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createGovernanceInstanceRequest.createGovernanceInstanceDetails,
        "CreateGovernanceInstanceDetails",
        model.CreateGovernanceInstanceDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateGovernanceInstanceResponse>{},
        body: await response.json(),
        bodyKey: "governanceInstance",
        bodyModel: model.GovernanceInstance,
        type: "model.GovernanceInstance",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Deletes an existing GovernanceInstance.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param DeleteGovernanceInstanceRequest
   * @return DeleteGovernanceInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/accessgovernancecp/DeleteGovernanceInstance.ts.html |here} to see how to use DeleteGovernanceInstance API.
   */
  public async deleteGovernanceInstance(
    deleteGovernanceInstanceRequest: requests.DeleteGovernanceInstanceRequest
  ): Promise<responses.DeleteGovernanceInstanceResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AccessGovernanceCPClient#deleteGovernanceInstance.");
    const operationName = "deleteGovernanceInstance";
    const apiReferenceLink = "";
    const pathParams = {
      "{governanceInstanceId}": deleteGovernanceInstanceRequest.governanceInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteGovernanceInstanceRequest.ifMatch,
      "opc-retry-token": deleteGovernanceInstanceRequest.opcRetryToken,
      "opc-request-id": deleteGovernanceInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      deleteGovernanceInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/governanceInstances/{governanceInstanceId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteGovernanceInstanceResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets a GovernanceInstance by OCID.
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param GetGovernanceInstanceRequest
   * @return GetGovernanceInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/accessgovernancecp/GetGovernanceInstance.ts.html |here} to see how to use GetGovernanceInstance API.
   */
  public async getGovernanceInstance(
    getGovernanceInstanceRequest: requests.GetGovernanceInstanceRequest
  ): Promise<responses.GetGovernanceInstanceResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AccessGovernanceCPClient#getGovernanceInstance.");
    const operationName = "getGovernanceInstance";
    const apiReferenceLink = "";
    const pathParams = {
      "{governanceInstanceId}": getGovernanceInstanceRequest.governanceInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getGovernanceInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getGovernanceInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/governanceInstances/{governanceInstanceId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetGovernanceInstanceResponse>{},
        body: await response.json(),
        bodyKey: "governanceInstance",
        bodyModel: model.GovernanceInstance,
        type: "model.GovernanceInstance",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets the tenancy-wide configuration for GovernanceInstances
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param GetGovernanceInstanceConfigurationRequest
   * @return GetGovernanceInstanceConfigurationResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/accessgovernancecp/GetGovernanceInstanceConfiguration.ts.html |here} to see how to use GetGovernanceInstanceConfiguration API.
   */
  public async getGovernanceInstanceConfiguration(
    getGovernanceInstanceConfigurationRequest: requests.GetGovernanceInstanceConfigurationRequest
  ): Promise<responses.GetGovernanceInstanceConfigurationResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation AccessGovernanceCPClient#getGovernanceInstanceConfiguration."
      );
    const operationName = "getGovernanceInstanceConfiguration";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {
      "compartmentId": getGovernanceInstanceConfigurationRequest.compartmentId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getGovernanceInstanceConfigurationRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getGovernanceInstanceConfigurationRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/governanceInstances/configuration",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetGovernanceInstanceConfigurationResponse>{},
        body: await response.json(),
        bodyKey: "governanceInstanceConfiguration",
        bodyModel: model.GovernanceInstanceConfiguration,
        type: "model.GovernanceInstanceConfiguration",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Returns a list of Governance Instances.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ListGovernanceInstancesRequest
   * @return ListGovernanceInstancesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/accessgovernancecp/ListGovernanceInstances.ts.html |here} to see how to use ListGovernanceInstances API.
   */
  public async listGovernanceInstances(
    listGovernanceInstancesRequest: requests.ListGovernanceInstancesRequest
  ): Promise<responses.ListGovernanceInstancesResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AccessGovernanceCPClient#listGovernanceInstances.");
    const operationName = "listGovernanceInstances";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {
      "compartmentId": listGovernanceInstancesRequest.compartmentId,
      "lifecycleState": listGovernanceInstancesRequest.lifecycleState,
      "displayName": listGovernanceInstancesRequest.displayName,
      "id": listGovernanceInstancesRequest.id,
      "limit": listGovernanceInstancesRequest.limit,
      "page": listGovernanceInstancesRequest.page,
      "sortOrder": listGovernanceInstancesRequest.sortOrder,
      "sortBy": listGovernanceInstancesRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listGovernanceInstancesRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listGovernanceInstancesRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/governanceInstances",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListGovernanceInstancesResponse>{},
        body: await response.json(),
        bodyKey: "governanceInstanceCollection",
        bodyModel: model.GovernanceInstanceCollection,
        type: "model.GovernanceInstanceCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Updates the GovernanceInstance.
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param UpdateGovernanceInstanceRequest
   * @return UpdateGovernanceInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/accessgovernancecp/UpdateGovernanceInstance.ts.html |here} to see how to use UpdateGovernanceInstance API.
   */
  public async updateGovernanceInstance(
    updateGovernanceInstanceRequest: requests.UpdateGovernanceInstanceRequest
  ): Promise<responses.UpdateGovernanceInstanceResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AccessGovernanceCPClient#updateGovernanceInstance.");
    const operationName = "updateGovernanceInstance";
    const apiReferenceLink = "";
    const pathParams = {
      "{governanceInstanceId}": updateGovernanceInstanceRequest.governanceInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateGovernanceInstanceRequest.ifMatch,
      "opc-request-id": updateGovernanceInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      updateGovernanceInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/governanceInstances/{governanceInstanceId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateGovernanceInstanceRequest.updateGovernanceInstanceDetails,
        "UpdateGovernanceInstanceDetails",
        model.UpdateGovernanceInstanceDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateGovernanceInstanceResponse>{},
        body: await response.json(),
        bodyKey: "governanceInstance",
        bodyModel: model.GovernanceInstance,
        type: "model.GovernanceInstance",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Updates the tenancy-wide configuration for GovernanceInstances
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param UpdateGovernanceInstanceConfigurationRequest
   * @return UpdateGovernanceInstanceConfigurationResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/accessgovernancecp/UpdateGovernanceInstanceConfiguration.ts.html |here} to see how to use UpdateGovernanceInstanceConfiguration API.
   */
  public async updateGovernanceInstanceConfiguration(
    updateGovernanceInstanceConfigurationRequest: requests.UpdateGovernanceInstanceConfigurationRequest
  ): Promise<responses.UpdateGovernanceInstanceConfigurationResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation AccessGovernanceCPClient#updateGovernanceInstanceConfiguration."
      );
    const operationName = "updateGovernanceInstanceConfiguration";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {
      "compartmentId": updateGovernanceInstanceConfigurationRequest.compartmentId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateGovernanceInstanceConfigurationRequest.ifMatch,
      "opc-request-id": updateGovernanceInstanceConfigurationRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      updateGovernanceInstanceConfigurationRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/governanceInstances/configuration",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateGovernanceInstanceConfigurationRequest.updateGovernanceInstanceConfigurationDetails,
        "UpdateGovernanceInstanceConfigurationDetails",
        model.UpdateGovernanceInstanceConfigurationDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateGovernanceInstanceConfigurationResponse>{},
        body: await response.json(),
        bodyKey: "governanceInstanceConfiguration",
        bodyModel: model.GovernanceInstanceConfiguration,
        type: "model.GovernanceInstanceConfiguration",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}