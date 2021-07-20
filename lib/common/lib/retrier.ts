/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { Readable } from "stream";
import {
  ExponentialBackoffDelayStrategy,
  MaxAttemptsTerminationStrategy,
  WaiterConfigurationDetails,
  delay,
  WaitContextImpl,
  ExponentialBackoffDelayStrategyWithJitter
} from "./waiter";
import { HttpClient } from "./http";
import { HttpRequest } from "./http-request";
import { isReadableStream } from "./helper";
import { handleErrorBody, handleErrorResponse } from "./helper";
import { OciError } from "..";
import { Logger } from "./log";
import { BooleanString } from "./constants";

/**
 * This class implements the retrier
 * NOTE : Retries are not supported for requests that have binary or stream bodies
 * this also affects UploadManager operations
 * For all requests with binary/stream bodies, retry attempts will be made if RetryConfigurationDetails.backupBinaryBody
 * is set to true, or if the original stream body is able to be retried
 *
 */

export type RetryConfiguration = Partial<RetryConfigurationDetails>;

export interface RetryConfigurationDetails extends WaiterConfigurationDetails {
  retryCondition: (response: OciError) => boolean;
  /*
    By Default, stream bodies will be not be backed up. Stream bodies will only be backed up if backupBinaryBody is set to true
    or if the content-length is not provided by the user.
  */
  backupBinaryBody: boolean;
}

export class DefaultRetryCondition {
  /**
   * Default retry condition for Retry mechanism
   * NOTE : Retries are not supported for requests that have binary or stream bodies
   */
  private static RETRYABLE_SERVICE_ERRORS: Map<number, string> = new Map([
    [409, "IncorrectState"],
    [429, "TooManyRequests"]
  ]);

  static shouldBeRetried(error: OciError): boolean {
    return (
      error.statusCode === 500 ||
      error.statusCode === 502 ||
      error.statusCode === 503 ||
      error.statusCode === 504 ||
      error.statusCode == -1 ||
      isNaN(error.statusCode) || // no StatusCode means client side error. These are considered retryable.
      (DefaultRetryCondition.RETRYABLE_SERVICE_ERRORS.has(error.statusCode) &&
        DefaultRetryCondition.RETRYABLE_SERVICE_ERRORS.get(error.statusCode) === error.serviceCode)
    );
  }
}

const NO_RETRY_MAXIMUM_NUMBER_OF_ATTEMPTS = 1;
const NO_RETRY_MAXIMUM_DELAY_IN_SECONDS = 30;

export const NoRetryConfigurationDetails: RetryConfigurationDetails = {
  terminationStrategy: new MaxAttemptsTerminationStrategy(NO_RETRY_MAXIMUM_NUMBER_OF_ATTEMPTS),
  delayStrategy: new ExponentialBackoffDelayStrategyWithJitter(NO_RETRY_MAXIMUM_DELAY_IN_SECONDS),
  retryCondition: DefaultRetryCondition.shouldBeRetried,
  backupBinaryBody: false
};

export class GenericRetrier {
  private _retryConfiguration: RetryConfigurationDetails;
  private _logger: Logger = (undefined as unknown) as Logger;
  private static OCI_SDK_DEFAULT_RETRY_ENABLED = "OCI_SDK_DEFAULT_RETRY_ENABLED";
  private static DEFAULT_RETRY_MAXIMUM_NUMBER_OF_ATTEMPTS = 8;
  private static DEFAULT_RETRY_MAXIMUM_DELAY_IN_SECONDS = 30;

  private static OPC_CLIENT_RETRIES_HEADER = "opc-client-retries";
  constructor(retryConfiguration: RetryConfiguration) {
    const preferredRetryConfig = { ...NoRetryConfigurationDetails, ...retryConfiguration };
    this._retryConfiguration = preferredRetryConfig;
  }

  private static DefaultRetryConfiguration: RetryConfigurationDetails =
    process.env[GenericRetrier.OCI_SDK_DEFAULT_RETRY_ENABLED] === BooleanString.FALSE
      ? NoRetryConfigurationDetails
      : {
          terminationStrategy: new MaxAttemptsTerminationStrategy(
            GenericRetrier.DEFAULT_RETRY_MAXIMUM_NUMBER_OF_ATTEMPTS
          ),
          delayStrategy: new ExponentialBackoffDelayStrategyWithJitter(
            GenericRetrier.DEFAULT_RETRY_MAXIMUM_DELAY_IN_SECONDS
          ),
          retryCondition: DefaultRetryCondition.shouldBeRetried,
          backupBinaryBody: false
        };

  static get defaultRetryConfiguration(): RetryConfiguration {
    return GenericRetrier.DefaultRetryConfiguration;
  }

  static set defaultRetryConfiguration(retryConfig: RetryConfiguration) {
    GenericRetrier.DefaultRetryConfiguration = {
      ...GenericRetrier.DefaultRetryConfiguration,
      ...retryConfig
    };
  }

  public set logger(logger: Logger) {
    this._logger = logger;
  }

  public get backUpBinaryBody(): boolean {
    return this.retryConfiguration.backupBinaryBody;
  }

  public get retryConfiguration(): RetryConfigurationDetails {
    return this._retryConfiguration;
  }

  public static createPreferredRetrier(
    clientRetryConfiguration?: RetryConfiguration,
    requestRetryConfiguration?: RetryConfiguration
  ): GenericRetrier {
    let retryConfigToUse = [requestRetryConfiguration, clientRetryConfiguration, {}].filter(
      configuration => configuration !== null && configuration !== undefined
    )[0];
    retryConfigToUse = { ...GenericRetrier.defaultRetryConfiguration, ...retryConfigToUse };
    return new GenericRetrier(retryConfigToUse);
  }

  public async makeServiceCall(
    httpClient: HttpClient,
    request: HttpRequest,
    excludeBody?: boolean
  ): Promise<Response> {
    const waitContext = new WaitContextImpl();
    let lastKnownError!: Error | OciError;
    let shouldBeRetried: boolean = true;
    while (true) {
      try {
        this.addOpcClientRetryHeader(request);
        const response: Response = await httpClient.send(request, excludeBody);
        if (response.status && response.status >= 200 && response.status <= 299) {
          return response;
        } else if ((response as any).code === "EOPENBREAKER") {
          // Circuit Breaker is in OPEN state
          const circuitBreakerError: any = response;
          const errorObject = new OciError(
            circuitBreakerError.code,
            "unknown code",
            circuitBreakerError.message,
            "unknown"
          );
          shouldBeRetried = this.retryConfiguration.retryCondition(errorObject); // TODO: need retryCondition to accept errorObject coming from Circuit Breaker
          lastKnownError = errorObject;
        } else {
          const errBody = await handleErrorBody(response);
          const errorObject = handleErrorResponse(response, errBody);
          shouldBeRetried = this.retryConfiguration.retryCondition(errorObject);
          lastKnownError = errorObject;
        }
      } catch (err) {
        lastKnownError = new OciError(err.code, "unknown code", err.message, "unknown");
        shouldBeRetried = true;
      }
      if (!shouldBeRetried || !GenericRetrier.isRequestRetryable(request)) {
        console.warn(
          `Request cannot be retried. Not Retrying. Exception occurred : ${lastKnownError}`
        );
        throw lastKnownError;
      } else if (this.retryConfiguration.terminationStrategy.shouldTerminate(waitContext)) {
        console.warn(
          `All retry attempts have exhausted. Total Attempts : ${waitContext.attemptCount +
            1}. Last exception occurred : ${lastKnownError}`
        );
        throw lastKnownError;
      }
      const delayTime = this.retryConfiguration.delayStrategy.delay(waitContext);
      waitContext.attemptCount++;
      console.warn(
        `Request failed with Exception : ${lastKnownError}\nRetrying request -> Total Attempts : ${waitContext.attemptCount}, Retrying after ${delayTime} seconds...`
      );
      await delay(delayTime);
      GenericRetrier.refreshRequest(request);
    }
  }

  private static refreshRequest(request: HttpRequest) {
    request.headers.set("x-date", new Date().toUTCString());
  }

  private addOpcClientRetryHeader(request: HttpRequest) {
    const terminationStrategy = this.retryConfiguration.terminationStrategy;
    const opcClientRetryHeader = request.headers.get(GenericRetrier.OPC_CLIENT_RETRIES_HEADER);
    if (
      terminationStrategy instanceof MaxAttemptsTerminationStrategy &&
      terminationStrategy.maxAttempts > 1 &&
      (opcClientRetryHeader === undefined || opcClientRetryHeader === null)
    ) {
      request.headers.set(GenericRetrier.OPC_CLIENT_RETRIES_HEADER, "true");
    }
  }

  private static isRequestRetryable(request: HttpRequest) {
    if (!request.body) return true;
    else if (request.body) {
      return this.isRetryableStream(request.body);
    }
  }

  private static isRetryableStream(obj: any) {
    if (obj instanceof Uint8Array || obj instanceof Buffer || typeof obj === "string") {
      return true;
    }
    //Node.JS's Readable, JavaScript's ReadableStream & Blobs are not retry-able stream, return false
    return false;
  }
}
