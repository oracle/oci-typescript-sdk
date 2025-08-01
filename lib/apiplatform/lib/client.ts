/**
 * APIP Control Plane API
 * Control Plane designed to manage lifecycle of APIP Instances
 * OpenAPI spec version: 20240829
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { ApiPlatformWaiter } from "./apiplatform-waiter";
import {
  composeResponse,
  composeRequest,
  GenericRetrier,
  developerToolConfiguration
} from "oci-common";
const Breaker = require("opossum");

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ApiPlatformApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class ApiPlatformClient {
  protected static serviceEndpointTemplate = "https://apip.{region}.ocp.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_realmSpecificEndpointTemplateEnabled": boolean | undefined = undefined;
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": ApiPlatformWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker: typeof Breaker | null = null;
  protected _httpOptions: any = undefined;
  protected _bodyDuplexMode: any = undefined;
  public targetService = "ApiPlatform";
  protected _regionId: string = "";
  protected "_region": common.Region;
  protected _lastSetRegionOrRegionId: string = "";

  protected _httpClient: common.HttpClient;
  protected _authProvider: common.AuthenticationDetailsProvider | undefined;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    this._authProvider = params.authenticationDetailsProvider;
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

    if (!developerToolConfiguration.isServiceEnabled("apiplatform")) {
      let errmsg =
        "The developerToolConfiguration configuration disabled this service, this behavior is controlled by developerToolConfiguration.ociEnabledServiceSet variable. Please check if your local developer_tool_configuration file has configured the service you're targeting or contact the cloud provider on the availability of this service : ";
      throw errmsg.concat("apiplatform");
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
    this._endpoint = this._endpoint + "/20240829";
    if (this.logger) this.logger.info(`ApiPlatformClient endpoint set to ${this._endpoint}`);
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
        ApiPlatformClient.serviceEndpointTemplate,
        this._region,
        ApiPlatformClient.endpointServiceName
      );
    } else if (this._lastSetRegionOrRegionId === common.Region.REGION_ID_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
        ApiPlatformClient.serviceEndpointTemplate,
        this._regionId,
        ApiPlatformClient.endpointServiceName
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
      ApiPlatformClient.serviceEndpointTemplate,
      region,
      ApiPlatformClient.endpointServiceName
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
      ApiPlatformClient.serviceEndpointTemplate,
      regionId,
      ApiPlatformClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_ID_STRING;
  }

  /**
   * Creates a new ApiPlatformWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): ApiPlatformWaiter {
    this._waiters = new ApiPlatformWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): ApiPlatformWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Shutdown the circuit breaker used by the client when it is no longer needed
   */
  public shutdownCircuitBreaker() {
    if (this._circuitBreaker) {
      this._circuitBreaker.shutdown();
    }
  }

  /**
   * Close the provider if possible which in turn shuts down any associated circuit breaker
   */
  public closeProvider() {
    if (this._authProvider) {
      if (this._authProvider instanceof common.AbstractRequestingAuthenticationDetailsProvider)
        (<common.AbstractRequestingAuthenticationDetailsProvider>(
          this._authProvider
        )).closeProvider();
    }
  }

  /**
   * Close the client once it is no longer needed
   */
  public close() {
    this.shutdownCircuitBreaker();
    this.closeProvider();
  }

  /**
   * Moves an API Platform Instance into a different compartment within the same tenancy. For information about moving resources between
   * compartments, see [Moving Resources to a Different Compartment](https://docs.oracle.com/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ChangeApiPlatformInstanceCompartmentRequest
   * @return ChangeApiPlatformInstanceCompartmentResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apiplatform/ChangeApiPlatformInstanceCompartment.ts.html |here} to see how to use ChangeApiPlatformInstanceCompartment API.
   */
  public async changeApiPlatformInstanceCompartment(
    changeApiPlatformInstanceCompartmentRequest: requests.ChangeApiPlatformInstanceCompartmentRequest
  ): Promise<responses.ChangeApiPlatformInstanceCompartmentResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation ApiPlatformClient#changeApiPlatformInstanceCompartment."
      );
    const operationName = "changeApiPlatformInstanceCompartment";
    const apiReferenceLink = "";
    const pathParams = {
      "{apiPlatformInstanceId}": changeApiPlatformInstanceCompartmentRequest.apiPlatformInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": changeApiPlatformInstanceCompartmentRequest.ifMatch,
      "opc-retry-token": changeApiPlatformInstanceCompartmentRequest.opcRetryToken,
      "opc-request-id": changeApiPlatformInstanceCompartmentRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      changeApiPlatformInstanceCompartmentRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/apiPlatformInstances/{apiPlatformInstanceId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeApiPlatformInstanceCompartmentRequest.changeApiPlatformInstanceCompartmentDetails,
        "ChangeApiPlatformInstanceCompartmentDetails",
        model.ChangeApiPlatformInstanceCompartmentDetails.getJsonObj
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
        responseObject: <responses.ChangeApiPlatformInstanceCompartmentResponse>{},
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
   * Creates an API Platform Instance
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param CreateApiPlatformInstanceRequest
   * @return CreateApiPlatformInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apiplatform/CreateApiPlatformInstance.ts.html |here} to see how to use CreateApiPlatformInstance API.
   */
  public async createApiPlatformInstance(
    createApiPlatformInstanceRequest: requests.CreateApiPlatformInstanceRequest
  ): Promise<responses.CreateApiPlatformInstanceResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ApiPlatformClient#createApiPlatformInstance.");
    const operationName = "createApiPlatformInstance";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": createApiPlatformInstanceRequest.opcRetryToken,
      "opc-request-id": createApiPlatformInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      createApiPlatformInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/apiPlatformInstances",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createApiPlatformInstanceRequest.createApiPlatformInstanceDetails,
        "CreateApiPlatformInstanceDetails",
        model.CreateApiPlatformInstanceDetails.getJsonObj
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
        responseObject: <responses.CreateApiPlatformInstanceResponse>{},
        body: await response.json(),
        bodyKey: "apiPlatformInstance",
        bodyModel: model.ApiPlatformInstance,
        type: "model.ApiPlatformInstance",
        responseHeaders: [
          {
            value: response.headers.get("location"),
            key: "location",
            dataType: "string"
          },
          {
            value: response.headers.get("content-location"),
            key: "contentLocation",
            dataType: "string"
          },
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
   * Deletes an API Platform Instance
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param DeleteApiPlatformInstanceRequest
   * @return DeleteApiPlatformInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apiplatform/DeleteApiPlatformInstance.ts.html |here} to see how to use DeleteApiPlatformInstance API.
   */
  public async deleteApiPlatformInstance(
    deleteApiPlatformInstanceRequest: requests.DeleteApiPlatformInstanceRequest
  ): Promise<responses.DeleteApiPlatformInstanceResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ApiPlatformClient#deleteApiPlatformInstance.");
    const operationName = "deleteApiPlatformInstance";
    const apiReferenceLink = "";
    const pathParams = {
      "{apiPlatformInstanceId}": deleteApiPlatformInstanceRequest.apiPlatformInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteApiPlatformInstanceRequest.ifMatch,
      "opc-request-id": deleteApiPlatformInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      deleteApiPlatformInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/apiPlatformInstances/{apiPlatformInstanceId}",
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
        responseObject: <responses.DeleteApiPlatformInstanceResponse>{},
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
   * Gets information about an API Platform Instance
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param GetApiPlatformInstanceRequest
   * @return GetApiPlatformInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apiplatform/GetApiPlatformInstance.ts.html |here} to see how to use GetApiPlatformInstance API.
   */
  public async getApiPlatformInstance(
    getApiPlatformInstanceRequest: requests.GetApiPlatformInstanceRequest
  ): Promise<responses.GetApiPlatformInstanceResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ApiPlatformClient#getApiPlatformInstance.");
    const operationName = "getApiPlatformInstance";
    const apiReferenceLink = "";
    const pathParams = {
      "{apiPlatformInstanceId}": getApiPlatformInstanceRequest.apiPlatformInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getApiPlatformInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getApiPlatformInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/apiPlatformInstances/{apiPlatformInstanceId}",
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
        responseObject: <responses.GetApiPlatformInstanceResponse>{},
        body: await response.json(),
        bodyKey: "apiPlatformInstance",
        bodyModel: model.ApiPlatformInstance,
        type: "model.ApiPlatformInstance",
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
   * Gets the details of a work request.
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param GetWorkRequestRequest
   * @return GetWorkRequestResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apiplatform/GetWorkRequest.ts.html |here} to see how to use GetWorkRequest API.
   */
  public async getWorkRequest(
    getWorkRequestRequest: requests.GetWorkRequestRequest
  ): Promise<responses.GetWorkRequestResponse> {
    if (this.logger) this.logger.debug("Calling operation ApiPlatformClient#getWorkRequest.");
    const operationName = "getWorkRequest";
    const apiReferenceLink = "";
    const pathParams = {
      "{workRequestId}": getWorkRequestRequest.workRequestId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getWorkRequestRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getWorkRequestRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}",
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
        responseObject: <responses.GetWorkRequestResponse>{},
        body: await response.json(),
        bodyKey: "workRequest",
        bodyModel: model.WorkRequest,
        type: "model.WorkRequest",
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
          },
          {
            value: response.headers.get("retry-after"),
            key: "retryAfter",
            dataType: "number"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets a list of API Platform Instances
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ListApiPlatformInstancesRequest
   * @return ListApiPlatformInstancesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apiplatform/ListApiPlatformInstances.ts.html |here} to see how to use ListApiPlatformInstances API.
   */
  public async listApiPlatformInstances(
    listApiPlatformInstancesRequest: requests.ListApiPlatformInstancesRequest
  ): Promise<responses.ListApiPlatformInstancesResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ApiPlatformClient#listApiPlatformInstances.");
    const operationName = "listApiPlatformInstances";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {
      "compartmentId": listApiPlatformInstancesRequest.compartmentId,
      "lifecycleState": listApiPlatformInstancesRequest.lifecycleState,
      "name": listApiPlatformInstancesRequest.name,
      "id": listApiPlatformInstancesRequest.id,
      "limit": listApiPlatformInstancesRequest.limit,
      "page": listApiPlatformInstancesRequest.page,
      "sortOrder": listApiPlatformInstancesRequest.sortOrder,
      "sortBy": listApiPlatformInstancesRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listApiPlatformInstancesRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listApiPlatformInstancesRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/apiPlatformInstances",
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
        responseObject: <responses.ListApiPlatformInstancesResponse>{},
        body: await response.json(),
        bodyKey: "apiPlatformInstanceCollection",
        bodyModel: model.ApiPlatformInstanceCollection,
        type: "model.ApiPlatformInstanceCollection",
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
   * Lists the errors for a work request.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ListWorkRequestErrorsRequest
   * @return ListWorkRequestErrorsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apiplatform/ListWorkRequestErrors.ts.html |here} to see how to use ListWorkRequestErrors API.
   */
  public async listWorkRequestErrors(
    listWorkRequestErrorsRequest: requests.ListWorkRequestErrorsRequest
  ): Promise<responses.ListWorkRequestErrorsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ApiPlatformClient#listWorkRequestErrors.");
    const operationName = "listWorkRequestErrors";
    const apiReferenceLink = "";
    const pathParams = {
      "{workRequestId}": listWorkRequestErrorsRequest.workRequestId
    };

    const queryParams = {
      "page": listWorkRequestErrorsRequest.page,
      "limit": listWorkRequestErrorsRequest.limit,
      "sortBy": listWorkRequestErrorsRequest.sortBy,
      "sortOrder": listWorkRequestErrorsRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestErrorsRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listWorkRequestErrorsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}/errors",
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
        responseObject: <responses.ListWorkRequestErrorsResponse>{},
        body: await response.json(),
        bodyKey: "workRequestErrorCollection",
        bodyModel: model.WorkRequestErrorCollection,
        type: "model.WorkRequestErrorCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
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
   * Lists the logs for a work request.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ListWorkRequestLogsRequest
   * @return ListWorkRequestLogsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apiplatform/ListWorkRequestLogs.ts.html |here} to see how to use ListWorkRequestLogs API.
   */
  public async listWorkRequestLogs(
    listWorkRequestLogsRequest: requests.ListWorkRequestLogsRequest
  ): Promise<responses.ListWorkRequestLogsResponse> {
    if (this.logger) this.logger.debug("Calling operation ApiPlatformClient#listWorkRequestLogs.");
    const operationName = "listWorkRequestLogs";
    const apiReferenceLink = "";
    const pathParams = {
      "{workRequestId}": listWorkRequestLogsRequest.workRequestId
    };

    const queryParams = {
      "page": listWorkRequestLogsRequest.page,
      "limit": listWorkRequestLogsRequest.limit,
      "sortBy": listWorkRequestLogsRequest.sortBy,
      "sortOrder": listWorkRequestLogsRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestLogsRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listWorkRequestLogsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}/logs",
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
        responseObject: <responses.ListWorkRequestLogsResponse>{},
        body: await response.json(),
        bodyKey: "workRequestLogEntryCollection",
        bodyModel: model.WorkRequestLogEntryCollection,
        type: "model.WorkRequestLogEntryCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
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
   * Lists the work requests in a compartment.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ListWorkRequestsRequest
   * @return ListWorkRequestsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apiplatform/ListWorkRequests.ts.html |here} to see how to use ListWorkRequests API.
   */
  public async listWorkRequests(
    listWorkRequestsRequest: requests.ListWorkRequestsRequest
  ): Promise<responses.ListWorkRequestsResponse> {
    if (this.logger) this.logger.debug("Calling operation ApiPlatformClient#listWorkRequests.");
    const operationName = "listWorkRequests";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {
      "compartmentId": listWorkRequestsRequest.compartmentId,
      "workRequestId": listWorkRequestsRequest.workRequestId,
      "status": listWorkRequestsRequest.status,
      "resourceId": listWorkRequestsRequest.resourceId,
      "page": listWorkRequestsRequest.page,
      "limit": listWorkRequestsRequest.limit,
      "sortOrder": listWorkRequestsRequest.sortOrder,
      "sortBy": listWorkRequestsRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestsRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listWorkRequestsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests",
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
        responseObject: <responses.ListWorkRequestsResponse>{},
        body: await response.json(),
        bodyKey: "workRequestSummaryCollection",
        bodyModel: model.WorkRequestSummaryCollection,
        type: "model.WorkRequestSummaryCollection",
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
   * Updates an API Platform Instance
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param UpdateApiPlatformInstanceRequest
   * @return UpdateApiPlatformInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apiplatform/UpdateApiPlatformInstance.ts.html |here} to see how to use UpdateApiPlatformInstance API.
   */
  public async updateApiPlatformInstance(
    updateApiPlatformInstanceRequest: requests.UpdateApiPlatformInstanceRequest
  ): Promise<responses.UpdateApiPlatformInstanceResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ApiPlatformClient#updateApiPlatformInstance.");
    const operationName = "updateApiPlatformInstance";
    const apiReferenceLink = "";
    const pathParams = {
      "{apiPlatformInstanceId}": updateApiPlatformInstanceRequest.apiPlatformInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateApiPlatformInstanceRequest.ifMatch,
      "opc-request-id": updateApiPlatformInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      updateApiPlatformInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/apiPlatformInstances/{apiPlatformInstanceId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateApiPlatformInstanceRequest.updateApiPlatformInstanceDetails,
        "UpdateApiPlatformInstanceDetails",
        model.UpdateApiPlatformInstanceDetails.getJsonObj
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
        responseObject: <responses.UpdateApiPlatformInstanceResponse>{},
        body: await response.json(),
        bodyKey: "apiPlatformInstance",
        bodyModel: model.ApiPlatformInstance,
        type: "model.ApiPlatformInstance",
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
}
