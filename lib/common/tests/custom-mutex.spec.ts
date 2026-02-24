/**
 * Copyright (c) 2020, 2026 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

const { expect } = require("chai");
import { CustomMutex } from "../lib/auth/helpers/custom-mutex";

describe("Mutex", () => {
  let mutex: CustomMutex;

  beforeEach(() => {
    mutex = new CustomMutex();
  });

  it("should acquire the mutex", async () => {
    await mutex.acquire();
    const acquirePromise = mutex.acquire();
    let isResolved = false;
    acquirePromise.then(() => {
      isResolved = true;
    });
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(isResolved).to.be.false;
  });

  it("should release the mutex", async () => {
    await mutex.acquire();
    mutex.release();
    // Check that we can acquire the mutex again.
    await mutex.acquire();
    mutex.release();
  });

  it("should throw an error if releasing an unlocked mutex", () => {
    expect(() => mutex.release()).to.throw("Mutex is not locked");
  });

  it("should allow the next task to acquire the mutex after release", async () => {
    await mutex.acquire();
    const acquirePromise = mutex.acquire();
    mutex.release();
    await acquirePromise;
    mutex.release();
  });

  it("should handle multiple tasks waiting to acquire the mutex", async () => {
    await mutex.acquire();
    const acquirePromises = [mutex.acquire(), mutex.acquire(), mutex.acquire()];
    mutex.release();
    await acquirePromises[0];
    mutex.release();
    await acquirePromises[1];
    mutex.release();
    await acquirePromises[2];
  });

  it("should handle concurrent acquire and release", async () => {
    await mutex.acquire();
    const acquirePromise1 = mutex.acquire();
    const acquirePromise2 = mutex.acquire();
    mutex.release();
    await acquirePromise1;
    mutex.release();
    await acquirePromise2;
  });
});
