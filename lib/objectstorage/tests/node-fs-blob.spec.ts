/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { expect } from "chai";
import { NodeFSBlob } from "../lib/upload-manager/node-fs-blob";
import { Readable } from "stream";
import { join } from "path";

const HIGH_WATER_MARK = 20 * 1024 * 1024;

describe("Test Node FS Blob ", () => {
  var filename = "sample-file.txt";
  var fullpath = join(__dirname, filename);

  const blob: NodeFSBlob = new NodeFSBlob(fullpath, HIGH_WATER_MARK);

  it("should return correct MD5 hash for the Blob ", async function() {
    expect(await blob.getMD5Hash()).equals("s1ysCdHSTNe25nVk1MTpDQ==");
  });

  it("should return correct Data for the Blob ", async function() {
    const data = await blob.getData();
    expect(await streamToString(data)).equals("This is sample file for upload manager unit tests.");
  });

  function streamToString(stream: Readable) {
    const chunks: Buffer[] = [];
    return new Promise((resolve, reject) => {
      stream.on("data", chunk => chunks.push(chunk));
      stream.on("error", reject);
      stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    });
  }
});
