/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { handleErrorBody, handleErrorResponse } from "./helper";
import { DefaultRetryCondition } from "./retrier";
import { LOG } from "./log";

const Breaker = require("opossum");

async function FetchWrapper(
  req: RequestInfo,
  options: RequestInit | undefined,
  targetService: string,
  operationName: string,
  timestamp: string,
  endpoint: string,
  apiReferenceLink: string
) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(req, options);
      if (response.status && response.status >= 200 && response.status <= 299) {
        resolve({ response });
      } else {
        const responseClone = response.clone();
        const errBody = await handleErrorBody(responseClone);
        const errorObject = handleErrorResponse(
          responseClone,
          errBody,
          targetService,
          operationName,
          timestamp,
          endpoint,
          apiReferenceLink
        );
        reject({
          response,
          errorObject
        });
      }
    } catch (e) {
      // If we get here, that means response was a client side error
      reject(e);
    }
  });
}

function defaultErrorFilterFunction(e: any) {
  if (LOG.logger) LOG.logger.error("error from defaultErrorFunction: ", e);
  // Only consider client side errors or retry-able server errors
  if (e.code || (e.errorObject && DefaultRetryCondition.shouldBeRetried(e.errorObject))) {
    return false;
  }
  return true;
}

// For more information on options visit: https://nodeshift.dev/opossum/
interface CircuitBreakerOptions {
  timeout?: number;
  resetTimeout?: number;
  rollingCountTimeout?: number;
  rollingCountBuckets?: number;
  name?: string;
  rollingPercentilesEnabled?: boolean;
  capacity?: number;
  errorThresholdPercentage?: number;
  enabled?: boolean;
  allowWarmUp?: boolean;
  volumeThreshold?: number;
  errorFilter?: Function;
  cache?: boolean;
  disableClientCircuitBreaker?: boolean; // Configuration to disable client level circuit breaker
}

export default class CircuitBreaker {
  circuit: any = null;
  noCircuit: boolean = false;
  static get envVariableCheckForDefaultCircuitBreaker() {
    if (process.env.OCI_SDK_DEFAULT_CIRCUITBREAKER_ENABLED === "true") {
      CircuitBreaker.DefaultCircuitBreakerOverriden = true;
    } else if (process.env.OCI_SDK_DEFAULT_CIRCUITBREAKER_ENABLED === "false") {
      CircuitBreaker.DefaultCircuitBreakerOverriden = true;
    }
    return process.env.OCI_SDK_DEFAULT_CIRCUITBREAKER_ENABLED;
  }
  static EnableGlobalCircuitBreaker = true; // Configuration to turn on/off the global circuit breaker.
  static EnableDefaultCircuitBreaker = CircuitBreaker.envVariableCheckForDefaultCircuitBreaker;
  public static DefaultCircuitBreakerOverriden = false;

  private static DefaultConfiguration: CircuitBreakerOptions = {
    timeout: 3600000, // If our function takes longer than 60 minutes, trigger a failure
    errorThresholdPercentage: 80, // When 80% of requests fail, trip the circuit
    resetTimeout: 30000, // After 30 seconds, try again.
    rollingCountTimeout: 120000,
    rollingCountBuckets: 120,
    volumeThreshold: 10,
    errorFilter: defaultErrorFilterFunction
  };

  private static MIN_WAIT_DURATION_IN_OPEN_STATE_FOR_AUTH_CLIENT_CB = 30;
  private static MAX_WAIT_DURATION_IN_OPEN_STATE_FOR_AUTH_CLIENT_CB = 49;
  public static DefaultAuthConfiguration: CircuitBreakerOptions = {
    timeout: 60000, // If our function takes longer than 60 seconds, trigger a failure
    errorThresholdPercentage: 65,
    resetTimeout:
      Math.floor(
        Math.random() *
          (CircuitBreaker.MAX_WAIT_DURATION_IN_OPEN_STATE_FOR_AUTH_CLIENT_CB -
            CircuitBreaker.MIN_WAIT_DURATION_IN_OPEN_STATE_FOR_AUTH_CLIENT_CB +
            1) +
          CircuitBreaker.MIN_WAIT_DURATION_IN_OPEN_STATE_FOR_AUTH_CLIENT_CB
      ) * 1000,
    rollingCountTimeout: 120000,
    rollingCountBuckets: 120,
    volumeThreshold: 3,
    errorFilter: (e: any) => {
      return false;
    } // Treat all exceptions as failure
  };

  static get defaultAuthConfiguration(): CircuitBreakerOptions {
    return CircuitBreaker.DefaultAuthConfiguration;
  }

  static get defaultConfiguration(): CircuitBreakerOptions {
    return CircuitBreaker.DefaultConfiguration;
  }

  static set defaultConfiguration(circuitBreakerConfig: CircuitBreakerOptions) {
    CircuitBreaker.DefaultConfiguration = {
      ...CircuitBreaker.DefaultConfiguration,
      ...circuitBreakerConfig
    };
    CircuitBreaker.DefaultCircuitBreakerOverriden = true;
  }

  constructor(options?: CircuitBreakerOptions) {
    if (options?.disableClientCircuitBreaker) {
      this.noCircuit = true;
      return;
    }

    this.circuit = options
      ? new Breaker(FetchWrapper, options)
      : new Breaker(FetchWrapper, CircuitBreaker.DefaultConfiguration);

    // Add emitters
    this.circuit.on("open", () => {
      if (LOG.logger) LOG.logger.debug("circuit breaker is now in OPEN state");
    });
    this.circuit.on("halfOpen", () => {
      if (LOG.logger) LOG.logger.debug("circuit breaker is now in HALF OPEN state");
    });
    this.circuit.on("close", () => {
      if (LOG.logger) LOG.logger.debug("circuit breaker is now in CLOSE state");
    });
    this.circuit.on("shutdown", () => {
      if (LOG.logger) LOG.logger.debug("circuit breaker is now SHUTDOWN");
    });
  }
}
