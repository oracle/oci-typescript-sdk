/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { createHash } from "crypto";
import { byteLength } from "../helper";
import { RawData } from "../types";

export async function* ChunkBuffer(
  data: Buffer,
  partSize: number
): AsyncGenerator<RawData, void, undefined> {
  let partNumber = 1;
  let startByte = 0;
  let endByte = partSize;
  let content;
  let md5Hash;
  while (endByte < data.length) {
    content = data.slice(startByte, endByte);
    md5Hash = createHash("md5");
    md5Hash.update(content);
    yield {
      size: byteLength(content),
      data: content,
      md5Hash: md5Hash.digest("base64")
    };
    partNumber += 1;
    startByte = endByte;
    endByte = startByte + partSize;
  }
  content = data.slice(startByte);
  md5Hash = createHash("md5");
  md5Hash.update(content);
  yield {
    size: byteLength(content),
    data: content,
    md5Hash: md5Hash.digest("base64")
  };
}
