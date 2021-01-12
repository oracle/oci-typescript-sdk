/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { statSync, createReadStream } from "fs";
import { Readable } from "stream";
import { createHash } from "crypto";
import { UploadableBlob } from "./uploadable-blob";

/*
 * NodeFSBlob to support Upload manager in Node
 */
export class NodeFSBlob implements UploadableBlob {
  size: number;
  type: string = "";

  private readonly start: number;
  private readonly end: number;
  private readonly fileSize: number;

  public constructor(
    private readonly filePath: string,
    private readonly highWaterMark: number,
    start?: number,
    end?: number,
    fileSize?: number
  ) {
    this.fileSize = fileSize || statSync(this.filePath).size;
    this.start = start || 0;
    this.end = end || this.fileSize;

    if (this.end > this.fileSize) {
      this.end = this.fileSize;
    }

    this.size = this.end - this.start;
  }

  /*
   * @Summary Get Data for the given NodeFSBlob
   * returns stream.Readable object
   */
  public async getData(): Promise<Readable> {
    return createReadStream(this.filePath, {
      start: this.start,
      // As per https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options, end is inclusive.
      // However, as per https://developer.mozilla.org/en-US/docs/Web/API/Blob/slice, end is non-inclusive.
      // Read till end - 1 to match Blob's behavior
      end: this.end - 1,
      highWaterMark: this.highWaterMark
    });
  }

  /*
   * Slice NodeFSBlob in to smaller chunk
   * @param start start byte of NodeFSBlob
   * @param end end byte of NodeFSBlob
   * @param cntentType contentType of NodeFSBlob
   * @returns NodeFSBlob Chunk
   */
  public slice(
    start?: number | undefined,
    end?: number | undefined,
    contentType?: string | undefined
  ): UploadableBlob {
    return new NodeFSBlob(this.filePath, this.highWaterMark, start, end, this.fileSize);
  }

  /*
   * Get MD5 hash of the NodeFSBlob
   * @return Md5 hash string
   */
  public async getMD5Hash(): Promise<string> {
    return new Promise(async resolve => {
      const md5Hash = createHash("md5");
      const dataStream = await this.getData();
      dataStream
        .on("data", data => md5Hash.update(data))
        .on("end", () => resolve(md5Hash.digest("base64")));
    });
  }
}
