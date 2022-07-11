/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { OciError } from "..";

export interface DelayStrategy {
  delay(context: WaitContext): number;
}

export interface TerminationStrategy {
  shouldTerminate(context: WaitContext): boolean;
}

export interface WaitContext {
  readonly startTime: Date;
  readonly attemptCount: number;
}

export class WaitContextImpl implements WaitContext {
  public readonly startTime: Date = new Date();
  public attemptCount: number = 0;
}

export class ExponentialBackoffDelayStrategy implements DelayStrategy {
  public constructor(protected maxDelayInSeconds: number) {}

  delay(context: WaitContext): number {
    const currentDelayInSeconds = Math.pow(2, context.attemptCount);
    const delay = Math.min(currentDelayInSeconds, this.maxDelayInSeconds);
    return delay;
  }
}

export class ExponentialBackoffDelayStrategyWithJitter extends ExponentialBackoffDelayStrategy {
  public constructor(protected maxDelayInSeconds: number) {
    super(maxDelayInSeconds);
  }

  delay(context: WaitContext): number {
    let jitterValue: number = Math.round(Math.random() * 1000) / 1000;
    return super.delay(context) + jitterValue;
  }
}

export class FixedTimeDelayStrategy implements DelayStrategy {
  public constructor(private timeBetweenAttempsInSeconds: number) {}

  delay(context: WaitContext): number {
    return this.timeBetweenAttempsInSeconds;
  }
}

export class MaxAttemptsTerminationStrategy implements TerminationStrategy {
  private _maxAttempts: number;
  public constructor(maxAttempts: number) {
    this._maxAttempts = maxAttempts - 1;
  }

  public shouldTerminate(context: WaitContext): boolean {
    return context.attemptCount >= this._maxAttempts;
  }

  public get maxAttempts(): number {
    return this._maxAttempts;
  }
}

export class MaxTimeTerminationStrategy implements TerminationStrategy {
  public constructor(private maxTimeInSeconds: number) {}

  public shouldTerminate(context: WaitContext): boolean {
    const endTime = new Date();
    endTime.setTime(context.startTime.getTime() + this.maxTimeInSeconds * 1000);

    return new Date() >= endTime;
  }
}

export interface WaiterConfigurationDetails {
  terminationStrategy: TerminationStrategy;
  delayStrategy: DelayStrategy;
}

export type WaiterConfiguration = Partial<WaiterConfigurationDetails>;

const DefaultWaiterConfigurationDetails: WaiterConfigurationDetails = {
  terminationStrategy: new MaxTimeTerminationStrategy(1200),
  delayStrategy: new ExponentialBackoffDelayStrategy(30)
};

export async function delay(second: number) {
  return new Promise(resolve => setTimeout(resolve, second * 1000));
}

export async function genericTerminalConditionWaiter<Response>(
  config: WaiterConfiguration | undefined,
  serviceCall: () => Promise<Response>,
  terminationPredicate: (response: Response) => boolean,
  allow404: boolean = false
): Promise<Response | null> {
  try {
    return genericWaiter(config, serviceCall, terminationPredicate);
  } catch (ex) {
    if (ex instanceof OciError && ex.statusCode == 404 && allow404) {
      return null;
    }
    throw ex;
  }
}

export async function genericWaiter<Response>(
  config: WaiterConfiguration | undefined,
  serviceCall: () => Promise<Response>,
  terminationPredicate: (response: Response) => boolean
): Promise<Response> {
  const waitContext = new WaitContextImpl();
  const { terminationStrategy, delayStrategy } = {
    ...DefaultWaiterConfigurationDetails,
    ...config
  };
  while (true) {
    const response: Response = await serviceCall();
    if (terminationPredicate(response)) {
      return response;
    }
    if (terminationStrategy.shouldTerminate(waitContext)) {
      throw Error(`Termination strategy decided to terminate with context at: ${waitContext}`);
    }
    await delay(delayStrategy.delay(waitContext));
    waitContext.attemptCount++;
  }
}
