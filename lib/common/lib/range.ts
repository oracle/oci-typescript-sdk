/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

export class Range {
  /**
   * Construct an instance of [[Range]].
   * @param startByte The start byte, if given.
   * @param endByte  The end byte, if given.
   * @param contentLength The content length as returned by the server, or null if unknown.
   */
  constructor(
    private startByte: number | null,
    private endByte: number | null,
    private contentLength: number | null
  ) {
    this.startByte = startByte;
    this.endByte = endByte;
    this.contentLength = contentLength;
  }

  /**
   * Parse the "content-range" header per https://tools.ietf.org/html/rfc7233#section-4.2.
   * <p>
   * Note, this is only for successful responses (206).  It does not handle 416 (range not satisfiable).
   * @param value The response header value.
   * @return A new Range header.
   */
  public static parse(value: string) {
    console.debug("Attempting to parse range: %s", value);
    value = value.replace("bytes", "").trim();
    const parts: string[] = value.split("/");
    if (parts.length != 2)
      throw Error("Must provide <range>/<length> format for range request: " + value);
    const byteRangePart: string = parts[0];
    const contentLengthPart: string = parts[1];
    const contentLength: number | null =
      contentLengthPart === "*" ? null : Number(contentLengthPart);
    const byteValues: string[] = byteRangePart.split("-", -1); // include trailing empty strings
    if (byteValues.length != 2) {
      throw new Error("Must provide <start>-<end> format for range request: " + value);
    }

    const startByte: number | null = byteValues[0] === "" ? null : Number(byteValues[0]);
    const endByte: number | null = byteValues[1] === "" ? null : Number(byteValues[1]);
    if (startByte == null && endByte == null) {
      throw new Error("Must provide start/end byte for range request: " + value);
    }
    let range: Range = new Range(startByte, endByte, contentLength);
    return range;
    return;
  }
}
