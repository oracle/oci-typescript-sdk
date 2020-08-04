/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { RetryConfiguration } from "./retrier";

/**
 * This interface defines the client configuration properties to be used at the client level
 */
export interface ClientConfiguration {
  "retryConfiguration"?: RetryConfiguration;
}
