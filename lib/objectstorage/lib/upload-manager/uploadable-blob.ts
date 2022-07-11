/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { Readable } from "stream";
import { BinaryBody } from "./types";

/*
 * Interface for UploadableBlob.
 */
export interface UploadableBlob {
  size: number;
  type: string;
  getData(): Promise<BinaryBody>;
  getMD5Hash(): Promise<string>;
  slice(
    start?: number | undefined,
    end?: number | undefined,
    contentType?: string | undefined
  ): UploadableBlob;
  text(): Promise<string>;
  arrayBuffer(): Promise<ArrayBuffer>;
  stream(): ReadableStream;
}
