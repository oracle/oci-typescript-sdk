/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import {
  ExponentialBackoffDelayStrategy,
  MaxAttemptsTerminationStrategy,
  WaiterConfigurationDetails,
  delay,
  WaitContextImpl
} from "./waiter";

export type RetryConfiguration = Partial<RetryConfigurationDetails>;

export interface RetryConfigurationDetails extends WaiterConfigurationDetails {
  retryCondition: (response: Response) => boolean;
}

class DefaultRetryCondition {
  /**
   * Default retry condition for Retry mechanism
   */
  private static RETRYABLE_SERVICE_ERRORS: Map<number, string> = new Map([
    [401, "NotAuthenticated"],
    [404, "NotAuthorizedOrNotFound"],
    [409, "IncorrectState"],
    [409, "NotAuthorizedOrResourceAlreadyExists"],
    [429, "TooManyRequests"],
    [500, "InternalServerError"],
    [401, "NotAuthenticated"],
    [404, "NotAuthorizedOrNotFound"],
    [409, "IncorrectState"],
    [409, "NotAuthorizedOrResourceAlreadyExists"],
    [429, "TooManyRequests"],
    [500, "InternalServerError"]
  ]);

  static shouldBeRetried(response: Response): boolean {
    return (
      response.status >= 500 || DefaultRetryCondition.RETRYABLE_SERVICE_ERRORS.has(response.status)
    );
  }
}

const NoRetryConfigurationDetails: RetryConfigurationDetails = {
  terminationStrategy: new MaxAttemptsTerminationStrategy(1),
  delayStrategy: new ExponentialBackoffDelayStrategy(30),
  retryCondition: DefaultRetryCondition.shouldBeRetried
};

export class GenericRetrier {
  private retryConfiguration: RetryConfigurationDetails;

  constructor(retryConfiguration: RetryConfiguration) {
    const preferredRetryConfig = { ...NoRetryConfigurationDetails, ...retryConfiguration };
    this.retryConfiguration = preferredRetryConfig;
  }

  public static createPreferredRetrier(
    clientRetryConfiguration?: RetryConfiguration,
    requestRetryConfiguration?: RetryConfiguration
  ): GenericRetrier {
    let retryConfigToUse = [requestRetryConfiguration, clientRetryConfiguration, {}].filter(
      configuration => configuration !== null && configuration !== undefined
    )[0];
    retryConfigToUse = { ...NoRetryConfigurationDetails, ...retryConfigToUse };
    return new GenericRetrier(retryConfigToUse);
  }

  public async makeServiceCall(serviceCall: () => Promise<Response>): Promise<Response> {
    const waitContext = new WaitContextImpl();
    let delayTime = 0;
    let lastKnownError!: Error;
    let lastKnownRetriableResponse!: Response;
    while (true) {
      try {
        const response: Response = await serviceCall();
        if (!this.retryConfiguration.retryCondition(response)) {
          return response;
        }
        lastKnownRetriableResponse = response;
      } catch (err) {
        lastKnownError = err;
      }
      if (this.retryConfiguration.terminationStrategy.shouldTerminate(waitContext)) {
        if (lastKnownRetriableResponse !== null && lastKnownRetriableResponse !== undefined) {
          return lastKnownRetriableResponse;
        }
        throw lastKnownError;
      }
      delayTime = this.retryConfiguration.delayStrategy.delay(waitContext);
      await delay(delayTime);
      waitContext.attemptCount++;
    }
  }
}
