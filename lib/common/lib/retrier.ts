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

const TROUBLESHOOT_URL =
  "https://docs.oracle.com/en-us/iaas/Content/API/Concepts/sdk_troubleshooting.htm";

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

const OCI_SDK_DEFAULT_RETRY_MAXIMUM_NUMBER_OF_ATTEMPTS = 8;
const OCI_SDK_DEFAULT_RETRY_MAXIMUM_DELAY_IN_SECONDS = 30;

export const NoRetryConfigurationDetails: RetryConfigurationDetails = {
  terminationStrategy: new MaxAttemptsTerminationStrategy(NO_RETRY_MAXIMUM_NUMBER_OF_ATTEMPTS),
  delayStrategy: new ExponentialBackoffDelayStrategyWithJitter(NO_RETRY_MAXIMUM_DELAY_IN_SECONDS),
  retryCondition: DefaultRetryCondition.shouldBeRetried,
  backupBinaryBody: false
};

export const OciSdkDefaultRetryConfiguration: RetryConfigurationDetails = {
  terminationStrategy: new MaxAttemptsTerminationStrategy(
    OCI_SDK_DEFAULT_RETRY_MAXIMUM_NUMBER_OF_ATTEMPTS
  ),
  delayStrategy: new ExponentialBackoffDelayStrategyWithJitter(
    OCI_SDK_DEFAULT_RETRY_MAXIMUM_DELAY_IN_SECONDS
  ),
  retryCondition: DefaultRetryCondition.shouldBeRetried,
  backupBinaryBody: false
};

export class GenericRetrier {
  private _retryConfiguration: RetryConfigurationDetails;
  private _logger: Logger = (undefined as unknown) as Logger;
  private static OPC_CLIENT_RETRIES_HEADER = "opc-client-retries";
  private static OCI_SDK_DEFAULT_RETRY_ENABLED = "OCI_SDK_DEFAULT_RETRY_ENABLED";

  constructor(retryConfiguration: RetryConfiguration) {
    const preferredRetryConfig = { ...NoRetryConfigurationDetails, ...retryConfiguration };
    this._retryConfiguration = preferredRetryConfig;
  }

  static get envVariableCheckForDefaultRetry(): RetryConfiguration | null {
    if (process.env[GenericRetrier.OCI_SDK_DEFAULT_RETRY_ENABLED] === BooleanString.FALSE) {
      return NoRetryConfigurationDetails;
    } else if (process.env[GenericRetrier.OCI_SDK_DEFAULT_RETRY_ENABLED] === BooleanString.TRUE) {
      return OciSdkDefaultRetryConfiguration;
    } else return null;
  }

  private static DefaultRetryConfiguration: RetryConfiguration | null =
    GenericRetrier.envVariableCheckForDefaultRetry;

  static get defaultRetryConfiguration(): RetryConfiguration | null {
    return GenericRetrier.DefaultRetryConfiguration;
  }

  static set defaultRetryConfiguration(retryConfig: RetryConfiguration | null) {
    GenericRetrier.DefaultRetryConfiguration = {
      ...GenericRetrier.DefaultRetryConfiguration,
      ...retryConfig
    };
  }

  public set logger(logger: Logger) {
    this._logger = logger;
  }

  public get logger(): Logger {
    return this._logger;
  }

  public get backUpBinaryBody(): boolean {
    return this.retryConfiguration.backupBinaryBody;
  }

  public get retryConfiguration(): RetryConfigurationDetails {
    return this._retryConfiguration;
  }

  public static createPreferredRetrier(
    clientRetryConfiguration?: RetryConfiguration,
    requestRetryConfiguration?: RetryConfiguration,
    specRetryConfiguration?: RetryConfiguration
  ): GenericRetrier {
    let retryConfigToUse = [
      requestRetryConfiguration,
      clientRetryConfiguration,
      GenericRetrier.defaultRetryConfiguration
    ].filter(configuration => configuration !== null && configuration !== undefined)[0];
    retryConfigToUse = { ...specRetryConfiguration, ...retryConfigToUse };
    return new GenericRetrier(retryConfigToUse);
  }

  public async makeServiceCall(
    httpClient: HttpClient,
    request: HttpRequest,
    targetService: string,
    operationName: string,
    apiReferenceLink: string,
    excludeBody?: boolean
  ): Promise<Response> {
    const waitContext = new WaitContextImpl();
    let lastKnownError!: any;
    let shouldBeRetried: boolean = true;
    const timestamp = new Date();
    const endpoint = `${request.method} ${request.uri}`;
    let attempt = 0;
    const configuration: any = this.retryConfiguration;
    let maxDelayInSeconds = undefined;
    let maxAttempts = undefined;
    if (configuration.delayStrategy && configuration.delayStrategy.maxDelayInSeconds) {
      maxDelayInSeconds = configuration.delayStrategy.maxDelayInSeconds;
    }
    if (configuration.terminationStrategy && configuration.terminationStrategy.maxAttempts) {
      maxAttempts = configuration.terminationStrategy.maxAttempts;
    }

    if (this.logger) {
      this.logger.debug(
        `Retry policy to use: MaximumNumberAttempts=${maxAttempts}, MaxSleepBetween=${maxDelayInSeconds}, ExponentialBackoffBase=2`
      );
    }
    while (true) {
      try {
        this.addOpcClientRetryHeader(request);
        const response: Response = await httpClient.send(
          request,
          excludeBody,
          targetService,
          operationName,
          timestamp.toISOString(),
          endpoint,
          apiReferenceLink
        );
        if (response.status && response.status >= 200 && response.status <= 299) {
          const currentTime = new Date().getTime();
          const timeElapsed = currentTime - timestamp.getTime();
          if (this.logger) {
            this.logger.debug(`Total Latency for this API call is: ${timeElapsed} ms`);
          }
          return response;
        } else if ((response as any).code === "EOPENBREAKER") {
          // Circuit Breaker is in OPEN state
          const circuitBreakerError: any = response;
          const errorObject = new OciError(
            circuitBreakerError.code,
            "unknown code",
            circuitBreakerError.message,
            "unknown",
            targetService,
            operationName,
            timestamp.toISOString(),
            endpoint,
            apiReferenceLink
          );
          shouldBeRetried = this.retryConfiguration.retryCondition(errorObject); // TODO: need retryCondition to accept errorObject coming from Circuit Breaker
          lastKnownError = errorObject;
        } else {
          const errBody = await handleErrorBody(response);
          const errorObject = handleErrorResponse(
            response,
            errBody,
            targetService,
            operationName,
            timestamp.toISOString(),
            endpoint,
            apiReferenceLink
          );
          shouldBeRetried = this.retryConfiguration.retryCondition(errorObject);
          lastKnownError = errorObject;
        }
      } catch (err) {
        // These are non-service errors
        lastKnownError = {
          code: err.code,
          message: err.message,
          requestEndpoint: endpoint,
          troubleshootingPage: `See ${TROUBLESHOOT_URL} for help troubleshooting this error, or contact support and provide this full error message.`
        };
        shouldBeRetried = true;
      }
      let currentTime = new Date().getTime();
      let timeElapsed = currentTime - timestamp.getTime();
      if (!shouldBeRetried || !GenericRetrier.isRequestRetryable(request)) {
        console.warn(
          `Request cannot be retried. Not Retrying. Exception occurred : ${lastKnownError}`
        );
        if (this.logger) {
          this.logger.debug(`Total Latency for this API call is: ${timeElapsed} ms`);
        }
        throw lastKnownError;
      } else if (this.retryConfiguration.terminationStrategy.shouldTerminate(waitContext)) {
        console.warn(
          `All retry attempts have exhausted. Total Attempts : ${waitContext.attemptCount +
            1}. Last exception occurred : ${lastKnownError}`
        );
        if (this.logger) {
          this.logger.debug(`Total Latency for this API call is: ${timeElapsed} ms`);
        }
        throw lastKnownError;
      }
      const delayTime = this.retryConfiguration.delayStrategy.delay(waitContext);
      waitContext.attemptCount++;
      console.warn(
        `Request failed with Exception : ${lastKnownError}\nRetrying request -> Total Attempts : ${waitContext.attemptCount}, Retrying after ${delayTime} seconds...`
      );
      await delay(delayTime);
      GenericRetrier.refreshRequest(request);
      attempt += 1;
      if (this.logger) {
        lastKnownError instanceof OciError
          ? this.logger.debug(
              `Http Status Code: ${lastKnownError.statusCode}, Error Code: ${lastKnownError.serviceCode}, Attempt: ${attempt}`
            )
          : this.logger.debug(
              `Code: ${lastKnownError.code}, Message: ${lastKnownError.message}, Attempt: ${attempt}`
            );
      }
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
