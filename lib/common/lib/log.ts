/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 * An interface defines the logger related APIs.
 */

import * as bunyan from "bunyan";

export interface Logger {
  log(message?: any, ...optionalParams: any[]): void;
  debug(message?: any, ...optionalParams: any[]): void;
  info(message?: any, ...optionalParams: any[]): void;
  warn(message?: any, ...optionalParams: any[]): void;
  error(message?: any, ...optionalParams: any[]): void;
  trace(message?: any, ...optionalParams: any[]): void;
}

class DefaultSdkLogger implements Logger {
  private static instance: DefaultSdkLogger;
  private _logger: Console | bunyan;

  private constructor() {
    const useBunyan = process.env.USE_BUNYAN === "true";
    this._logger = useBunyan
      ? bunyan.createLogger({ name: "OCI TypeScript SDK default logger", level: "info" })
      : console;
  }

  static getInstance(): DefaultSdkLogger {
    if (!DefaultSdkLogger.instance) {
      DefaultSdkLogger.instance = new DefaultSdkLogger();
    }
    return DefaultSdkLogger.instance;
  }

  log(message: string) {
    console.log(message);
  }
  debug(message: string) {
    this._logger.debug(message);
  }
  info(message: string) {
    this._logger.info(message);
  }
  warn(message: string) {
    this._logger.warn(message);
  }
  error(message: string) {
    this._logger.error(message);
  }
  trace(message: string) {
    this._logger.trace(message);
  }
}

export const logger = DefaultSdkLogger.getInstance();
