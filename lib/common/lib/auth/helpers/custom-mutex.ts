/**
 * Copyright (c) 2020, 2026 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

export class CustomMutex {
  protected _locked: boolean;
  protected _queue: any;

  /**
   * Creates a new Mutex instance.
   */
  constructor() {
    this._locked = false;
    this._queue = [];
  }

  /**
   * Acquires the mutex.
   * @returns {Promise<void>} A promise that resolves when the mutex is acquired.
   */
  async acquire() {
    if (this._locked) {
      await new Promise(resolve => {
        this._queue.push(resolve);
      });
    }
    this._locked = true;
  }

  /**
   * Releases the mutex.
   */
  release() {
    if (!this._locked) {
      throw new Error("Mutex is not locked");
    }
    this._locked = false;
    const next = this._queue.shift();
    if (next) {
      next();
    }
  }
}
