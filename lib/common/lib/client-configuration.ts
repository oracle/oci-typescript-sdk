/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { RetryConfiguration } from "./retrier";
import CircuitBreaker from "./circuit-breaker";

/**
 * This interface defines the client configuration properties to be used at the client level
 */
export interface ClientConfiguration {
  /**
   * RetryConfiguration to be used for the client
   * NOTE : Retries are not supported for requests that have binary or stream bodies
   * this also affects UploadManager operations
   * For all requests with binary/stream bodies, retry attempts will not be made
   */
  retryConfiguration?: RetryConfiguration;

  /*
   * Optional CircuitBreaker used for the client.
   */
  circuitBreaker?: CircuitBreaker;

  /*
   * Optional httpOptions used for the client making the request.
   */
  httpOptions?: { [key: string]: any };
}
