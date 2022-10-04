/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as auth from "./lib/auth/auth";
import * as error from "./lib/error";
import * as signer from "./lib/signer";
import * as helper from "./lib/helper";
import * as http from "./lib/http";
import * as serializer from "./lib/object-serializer";
import * as range from "./lib/range";
import * as utils from "./lib/utils";
import { Region } from "./lib/region";
import { Realm } from "./lib/realm";
import { EndpointBuilder } from "./lib/endpoint-builder";
import { LOG } from "./lib/log";
import Constants from "./lib/constants";
import CircuitBreaker from "./lib/circuit-breaker";

import {
  DelayStrategy,
  TerminationStrategy,
  ExponentialBackoffDelayStrategy,
  MaxTimeTerminationStrategy,
  genericWaiter,
  genericTerminalConditionWaiter,
  WaiterConfiguration,
  MaxAttemptsTerminationStrategy,
  FixedTimeDelayStrategy
} from "./lib/waiter";
import {
  GenericRetrier,
  RetryConfiguration,
  NoRetryConfigurationDetails,
  OciSdkDefaultRetryConfiguration
} from "./lib/retrier";
import { RequireOnlyOne, AuthParams } from "./lib/types";
import { HttpRequest } from "./lib/http-request";
import InstancePrincipalsAuthenticationDetailsProviderBuilder from "./lib/auth/instance-principals-authentication-detail-provider";
import ResourcePrincipalAuthenticationDetailsProvider from "./lib/auth/resource-principal-authentication-details-provider";
import { BaseRequest } from "./lib/base-request";
import { ClientConfiguration } from "./lib/client-configuration";
import {
  paginateRecords,
  genericPaginateRecords,
  paginatedRecordsWithLimit,
  paginateResponses,
  genericPaginateResponses,
  paginatedResponsesWithLimit
} from "./lib/paginators";

import { ConfigFileAuthenticationDetailsProvider } from "./lib/auth/config-file-auth";
import { SessionAuthDetailProvider } from "./lib/auth/session-auth-details-provider";
import getChunk from "./lib/chunker";
import { ConfigFileReader } from "./lib/config-file-reader";
import { Method, composeRequest, Params } from "./lib/request-generator";
import { composeResponse } from "./lib/response-generator";
export import AuthenticationDetailsProvider = auth.AuthenticationDetailsProvider;
export import SimpleAuthenticationDetailsProvider = auth.SimpleAuthenticationDetailsProvider;
export import RegionProvider = auth.RegionProvider;
export import isRegionProvider = auth.isRegionProvider;

export import HttpClient = http.HttpClient;
export import FetchHttpClient = http.FetchHttpClient;

export import OciError = error.OciError;

export import RequestSigner = signer.RequestSigner;
export import DefaultRequestSigner = signer.DefaultRequestSigner;

export import getStringFromResponseBody = helper.getStringFromResponseBody;
export import handleErrorResponse = helper.handleErrorResponse;
export import mapContainer = helper.mapContainer;
export import handleErrorBody = helper.handleErrorBody;
export import convertStringToType = helper.convertStringToType;
export import ObjectSerializer = serializer.ObjectSerializer;
export import byteLength = helper.byteLength;

export import Range = range.Range;
export {
  Region,
  Realm,
  EndpointBuilder,
  DelayStrategy,
  TerminationStrategy,
  ExponentialBackoffDelayStrategy,
  MaxTimeTerminationStrategy,
  genericWaiter,
  genericTerminalConditionWaiter,
  WaiterConfiguration,
  RequireOnlyOne,
  AuthParams,
  paginateRecords,
  paginatedResponsesWithLimit,
  paginatedRecordsWithLimit,
  genericPaginateRecords,
  paginateResponses,
  genericPaginateResponses,
  Method,
  composeRequest,
  Params,
  composeResponse,
  HttpRequest,
  ConfigFileAuthenticationDetailsProvider,
  SessionAuthDetailProvider,
  ConfigFileReader,
  InstancePrincipalsAuthenticationDetailsProviderBuilder,
  ResourcePrincipalAuthenticationDetailsProvider,
  LOG,
  GenericRetrier,
  FixedTimeDelayStrategy,
  MaxAttemptsTerminationStrategy,
  RetryConfiguration,
  NoRetryConfigurationDetails,
  OciSdkDefaultRetryConfiguration,
  BaseRequest,
  ClientConfiguration,
  Constants,
  CircuitBreaker,
  getChunk,
  utils
};
