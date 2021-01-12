/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { RetryConfiguration } from "./retrier";

/**
 * This interface defines the base request properties
 */
export interface BaseRequest {
  /**
   * RetryConfiguration to be used for the request
   * NOTE : Retries are not supported for requests that have binary or stream bodies
   * this also affects UploadManager operations
   * For all requests with binary/stream bodies, retry attempts are not made
   */
  "retryConfiguration"?: RetryConfiguration;
}
