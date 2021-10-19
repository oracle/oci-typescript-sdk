/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { Readable } from "stream";
import { Buffer } from "buffer";
import { isReadableStream } from "./helper";
import { ChunkBuffer } from "./chunks/ChunkBuffer";
import { ChunkStream } from "./chunks/ChunkStream";
import { getReadableStreamData } from "./chunks/getReadableStreamData";
import { getReadableData } from "./chunks/getReadableData";
import { BinaryBody } from "./types";

export default function getChunk(data: BinaryBody, partSize: number) {
  if (data instanceof Buffer) {
    return ChunkBuffer(data, partSize);
  } else if (data instanceof Readable) {
    return ChunkStream<Readable>(data, partSize, getReadableData);
  } else if (data instanceof String || typeof data === "string" || data instanceof Uint8Array) {
    // chunk Strings, Uint8Array.
    return ChunkBuffer(Buffer.from(data as string), partSize);
  }

  if (typeof (data as any).stream === "function") {
    // support for blob
    let stream = (data as any).stream();
    if (stream.getReader) {
      return ChunkStream<ReadableStream>(stream, partSize, getReadableStreamData);
    } else {
      // Some fetch libraries have blob's .stream implemented as NodeJS's readable
      return ChunkStream<Readable>(stream as Readable, partSize, getReadableData);
    }
  } else if (isReadableStream(data)) {
    // NodeJS run-time does not know what ReadableStream is, isReadableStream helps detect if stream is a ReadableStream
    return ChunkStream<ReadableStream>(data as ReadableStream, partSize, getReadableStreamData);
  } else {
    throw new Error(
      "Body Data is unsupported format, expected data to be one of: string | Uint8Array | Buffer | Readable | ReadableStream | Blob;."
    );
  }
}
