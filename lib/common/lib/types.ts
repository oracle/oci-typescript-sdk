/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { HttpClient } from "./http";
import { AuthenticationDetailsProvider } from "./auth/auth";
import { Readable } from "stream";
export interface RawData {
  size: number;
  data: BinaryBody;
  md5Hash: string;
}

export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

interface ClientParams {
  httpClient?: HttpClient;
  authenticationDetailsProvider?: AuthenticationDetailsProvider;
}

export type BinaryBody = Uint8Array | Buffer | Readable | ReadableStream | string | Blob;

/*
 * Type to intialize service clients
 */
export type AuthParams = RequireOnlyOne<ClientParams>;
