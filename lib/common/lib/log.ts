/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 * An interface defines the logger related APIs.
 */
export interface Logger {
  level: string;

  debug(message?: any, ...optionalParams: any[]): void;
  info(message?: any, ...optionalParams: any[]): void;
  warn(message?: any, ...optionalParams: any[]): void;
  error(message?: any, ...optionalParams: any[]): void;
  trace(message?: any, ...optionalParams: any[]): void;
}

export module LOG {
  var _logger: Logger;

  export declare var logger: Logger;
  Object.defineProperty(LOG, "logger", {
    get: function() {
      return _logger;
    },
    set: function(log: Logger) {
      _logger = log;
    }
  });
}
