/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { byteLength } from "oci-common";
import { BinaryBody } from "./types";
import { UploadableStream } from "./uploadable-stream";

export class StreamBlob implements UploadableStream {
  streamBody: BinaryBody;
  size: number;

  constructor(stream: BinaryBody, public partSize: number) {
    this.streamBody = stream;
    this.size = byteLength(stream);
  }
  /*
   * @Summary Get Data for the given Stream Body
   * returns
   */
  public async getData(): Promise<BinaryBody> {
    return this.streamBody;
  }

  /*
   * Get MD5 hash of the NodeFSBlob (NOT USED)
   * @return Md5 hash string
   */
  public async getMD5Hash(): Promise<string> {
    return "";
  }
}
