/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.

 * Utility method to check if environment is node or browser
 */

import CircuitBreaker from "./circuit-breaker";
import { ClientConfiguration } from "./client-configuration";

export function isBrowser() {
  if (typeof window === "undefined") {
    return false;
  }
  return true;
}

// utility method checks if object is empty or not
export function isEmpty(obj: any): boolean {
  return Object.keys(obj).length === 0;
}

// Utility method to check if value is null, else throw error with msg.
export function checkNotNull(value: string | null, msg: string): string {
  if (value) {
    return value;
  }
  throw new Error(msg);
}

// Utility method to check if circuit breaker should be created
// This is used when no circuit breaker was created for the client, if not: Check if it was disabled at the client level / global level / environment level in respective order
// return false means do not create circuit breaker.
export function isCircuitBreakerSystemEnabled(clientConfiguration: ClientConfiguration): boolean {
  // Client level check
  const clientLevelCheck =
    clientConfiguration &&
    clientConfiguration.circuitBreaker &&
    clientConfiguration.circuitBreaker.noCircuit;
  if (
    clientLevelCheck ||
    !CircuitBreaker.EnableGlobalCircuitBreaker ||
    CircuitBreaker.EnableDefaultCircuitBreaker === "false"
  ) {
    return false;
  }
  return true;
}
