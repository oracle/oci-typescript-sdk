/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

const Breaker = require("opossum");

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
}

export default class CircuitBreaker {
  static enableDefault = false;
  circuit = null;
  static defaultCircuit = new Breaker(fetch, {
    timeout: 10000, // If our function takes longer than 10 seconds, trigger a failure
    errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
    resetTimeout: 30000 // After 30 seconds, try again.
  });

  static internalCircuit = new Breaker(fetch, {
    timeout: 10000, // If our function takes longer than 10 seconds, trigger a failure
    errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
    resetTimeout: 30000 // After 30 seconds, try again.
  });

  constructor(options?: CircuitBreakerOptions) {
    this.circuit = options
      ? new Breaker(fetch, options)
      : new Breaker(fetch, {
          timeout: 10000, // If our function takes longer than 10 seconds, trigger a failure
          errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
          resetTimeout: 30000 // After 30 seconds, try again.
        });
  }
}
