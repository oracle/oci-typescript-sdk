/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { UploadableBlob } from "./uploadable-blob";
import { createHash } from "crypto";

/*
 * BrowserBlob to support Upload manager in Browser
 */
export class BrowserBlob implements UploadableBlob {
  size: number;
  type: string;
  private readonly chunkSize: number;
  private readonly blob: Blob;

  constructor(blob: Blob, chunkSize: number) {
    this.size = blob.size;
    this.blob = blob;
    this.chunkSize = chunkSize;
    this.type = blob.type;
  }

  /*
   * @Summary Get Data for the given BrowserBlob
   * returns UploadableBlob object
   */
  public async getData(): Promise<Blob> {
    return new Promise(resolve => {
      resolve(this.blob);
    });
  }

  /*
   * @Summary Get text for the given BrowserBlob
   * returns string object
   */
  public async text(): Promise<string> {
    return this.blob.text();
  }

  /*
   * @Summary Get array buffer for the given BrowserBlob
   * returns ArrayBuffer object
   */
  public async arrayBuffer(): Promise<ArrayBuffer> {
    return this.blob.arrayBuffer();
  }

  /*
   * @Summary Get stream for the given BrowserBlob
   * returns Readable object
   */
  public stream(): ReadableStream<any> {
    return (this.blob.stream() as unknown) as ReadableStream<any>;
  }

  /*
   * Get MD5 hash of the BrowserBlob
   * @return Md5 hash string
   */
  public async getMD5Hash(): Promise<string> {
    return new Promise(resolve => {
      const blobSize = this.size - 1;
      const chunkSize = this.chunkSize;
      const md5 = createHash("md5");
      const fileReader = new FileReader();

      var updateMD5 = function() {
        md5.update(fileReader.result as string);
      };

      // Read blob in smaller chunks of size this.chunkSize specified by user as UploadOptions
      // to avoid loading whole blob in memory.
      for (var startPos = 0; startPos < blobSize; startPos += chunkSize) {
        ((blb, start) => {
          const browserBlob = <BrowserBlob>blb.slice(start, chunkSize + start);
          fileReader.onload = updateMD5;
          fileReader.readAsBinaryString(browserBlob.blob);
        })(this, startPos);
      }
      resolve(md5.digest("base64"));
    });
  }

  /*
   * Slice BrowserBlob in to smaller chunk
   * @param start start byte of BrowserBlob
   * @param end end byte of BrowserBlob
   * @param cntentType contentType of BrowserBlob
   * @returns BrowserBlob Chunk
   */
  public slice(start?: number, end?: number, contentType?: string): UploadableBlob {
    return new BrowserBlob(this.blob.slice(start, end, contentType), this.chunkSize);
  }
}
