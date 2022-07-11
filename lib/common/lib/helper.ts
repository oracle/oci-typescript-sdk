/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
import { statSync, ReadStream } from "fs";
import { OciError } from "./error";
import { Range } from "./range";
import { Readable, PassThrough } from "stream";
import { addOpcRequestId, addUserAgent } from "./headers";
import { isEmpty } from "./utils";
import { RequestParams } from "./request-generator";
import { RawData, BinaryBody } from "./types";
import getChunk from "./chunker";

interface ReqBodyAndContentLength {
  body: any;
  contentLength: number;
}

export function mapContainer(obj: { [k: string]: any }, getJsonObj: Function): object {
  const constructedObj: { [k: string]: any } = {};
  for (let key in obj) {
    constructedObj[key] = getJsonObj(obj[key]);
  }
  return constructedObj;
}

export function handleErrorResponse(
  response: Response,
  body: any,
  targetService: string,
  operationName: string,
  timestamp: string,
  endpoint: string,
  apiReferenceLink: string
): OciError {
  const statusCode = response.status || -1;
  const requestId = response.headers.get("opc-request-id");

  if (body && body.code && body.message) {
    return new OciError(
      statusCode,
      body.code,
      body.message,
      requestId,
      targetService,
      operationName,
      timestamp,
      endpoint,
      apiReferenceLink
    );
  } else if (typeof body == "string" && body.length > 0) {
    return new OciError(
      statusCode,
      "None",
      body,
      requestId,
      targetService,
      operationName,
      timestamp,
      endpoint,
      apiReferenceLink
    );
  } else if (response.statusText && response.statusText.length > 0) {
    // There is no body text but statusText exists
    return new OciError(
      statusCode,
      "None",
      response.statusText,
      requestId,
      targetService,
      operationName,
      timestamp,
      endpoint,
      apiReferenceLink
    );
  } else {
    return new OciError(
      statusCode,
      "None",
      "unknown reason.",
      requestId,
      targetService,
      operationName,
      timestamp,
      endpoint,
      apiReferenceLink
    );
  }
}

export async function handleErrorBody(response: Response): Promise<string | object> {
  let data = await response.text();
  //  Try to parse string as an object
  try {
    data = JSON.parse(data);
  } catch (err) {
    return data;
  }
  return data;
}

export function convertStringToType(str: string | null, expectedType: string): any {
  if (str == null) return str;
  expectedType = expectedType.toLowerCase();
  switch (expectedType) {
    case "string":
      return str;
    case "number":
      return Number(str);
    case "date":
      return formatDateToRFC3339(new Date(str));
    case "common.Range":
      return Range.parse(str);
  }
}
// get string content from response body
export async function getStringFromResponseBody(body: any): Promise<string> {
  if (typeof body === "string") {
    return body as string;
  }

  if (body instanceof Readable) {
    // body is a stream type
    return readStringFromReadable(body);
  }
  // else if (body instanceof Blob) {
  //   // body is a blob type
  //   return readStringFromBlob(body);
  // } else if (body instanceof ReadableStream) {
  //   // body is a fetch readableStream type
  //   return readStringFromFetchReadableStream(body);
  // }
  else {
    // unknown type, unable to read body content for signing, reject it
    throw new Error("Unable to read body content to sign the request");
  }
}

// read string from Readable asynchronously, return a string content of it
export async function readStringFromReadable(readable: Readable): Promise<string> {
  let contentBuffer: Array<string> = [];
  let size = 0;
  const MEMIBYTES = 1024 * 1024;
  const sizeLimit = 2000 * MEMIBYTES;
  // set the encoding to return string instead of Buffer
  readable.setEncoding("utf8");

  return new Promise<string>((resolve, reject) => {
    readable.on("end", () => {
      resolve(contentBuffer.join(""));
    });
    readable.on("data", chunk => {
      if (size > sizeLimit) {
        throw Error("Tried to read stream but content length is greater than 2GB.");
      }
      contentBuffer.push(chunk);
      size += chunk.length;
    });
    readable.on("error", err => {
      // if error happened, it will be catched at http signer global error handling
      reject(err);
    });
  });
}

// read string from fetch ReadbaleString asynchronously, return a string content of it
// export async function readStringFromFetchReadableStream(readable: ReadableStream): Promise<string> {
//   let contentBuffer: Array<string> = [];
//   const reader = readable.getReader();
//   const decoder = new TextDecoder("utf-8");

//   return new Promise<string>((resolve, reject) => {
//     reader
//       .read()
//       .then(function processText({ done, value }): any {
//         if (done) {
//           // reading stream done, resolve it
//           resolve(contentBuffer.join(""));
//         }

//         // put each chunk into a buffer
//         contentBuffer.push(decoder.decode(value));

//         // read more data and call processText function again to read more
//         return reader.read().then(processText);
//       })
//       .catch(function(e) {
//         // reject if has error
//         reject(e);
//       });
//   });
// }

// read string from Blob asynchronously, return a string content of it
// export async function readStringFromBlob(blob: Blob): Promise<string> {
//   const reader = new FileReader();

//   return new Promise<string>((resolve, reject) => {
//     reader.onerror = err => {
//       reader.abort();
//       reject(err);
//     };

//     reader.onload = () => {
//       // read as Text is called, so this will be a string
//       resolve(reader.result as string);
//     };

//     // utf-8 default encoding is used here
//     reader.readAsText(blob);
//   });
// }

// returns duplicated body for separate consumption by signer and Fetch Request
export function getSignerAndReqBody(
  body?: any,
  forceExcludeBody?: boolean
): { signerBody: any; requestBody: any } {
  const singerAndReqBody = { signerBody: undefined, requestBody: undefined };

  // If body does not exist or empty body
  if (!body || isEmpty(body)) {
    return singerAndReqBody;
  }

  // If body is excluded for signing, no need to send signer body
  if (forceExcludeBody) {
    singerAndReqBody.requestBody = body;
    return singerAndReqBody;
  }

  // if body of type string, can be duplicated.
  if (typeof body === "string") {
    return { signerBody: body, requestBody: body };
  }
  // If body instance of Readable , duplicate the stream for signer and request body
  else if (body instanceof Readable) {
    const signerbody = body.pipe(new PassThrough());
    const reqBody = body.pipe(new PassThrough());
    return { signerBody: signerbody, requestBody: reqBody };
  }
  // //if body instance of blob, can be duplicated.
  // else if (body instanceof Blob) {
  //   return { signerBody: body, requestBody: body };
  // }
  // // if body instance of ReadableStream, tee() it.
  // else if (body instanceof ReadableStream) {
  //   // body.tee() not supported in IE.
  //   // https://jira.oci.oraclecorp.com/browse/DEX-7126
  //   const duplicateStream = body.tee();
  //   return { signerBody: duplicateStream[0], requestBody: duplicateStream[1] };
  // }
  // unknown type, unable to read body content.
  else throw new Error("Unable to read body content");
}

export function addAdditionalHeaders(headers: Headers, params: RequestParams) {
  addOpcRequestId(headers);
  addUserAgent(headers);
}

export async function autoDetectContentLengthAndReadBody(headers: Headers, params: RequestParams) {
  // Auto Detect content-length if needed, also read binary content if stream length cannot be determined.
  const reqHeaders = params.headerParams;
  if (reqHeaders) {
    const shouldReadBodyAndCalculateContentLength =
      ("content-length" in reqHeaders && reqHeaders["content-length"] === undefined) ||
      ("Content-Length" in reqHeaders && reqHeaders["Content-Length"] === undefined) ||
      params.backupBinaryBody;
    if (shouldReadBodyAndCalculateContentLength) {
      const { body, contentLength } = await calculateContentLengthAndBodyContent(
        params.bodyContent!
      );
      headers.append("content-length", String(contentLength));
      return body;
    }
  }
}

// Helper method to auto detect content-length if not given.
async function calculateContentLengthAndBodyContent(
  body: BinaryBody
): Promise<ReqBodyAndContentLength> {
  try {
    const dataFeeder = getChunk(body, Number.MAX_SAFE_INTEGER);
    const dataPart = (await dataFeeder.next()).value as RawData;
    const content = dataPart.data;
    const contentLength = dataPart.size;
    return { body: content, contentLength };
  } catch (e) {
    throw Error(
      "SDK could not calculate contentLength from the request stream, please add contentLength and try again."
    );
  }
}

// Helper method to format Date Objects to RFC3339 timestamp string.
export function formatDateToRFC3339(date: Date): string {
  return (
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2) +
    "T" +
    date.getHours() +
    ":" +
    ("0" + date.getMinutes()).slice(-2) +
    ":" +
    ("0" + date.getSeconds()).slice(-2) +
    "Z"
  );
}

// get string content from body
export async function getStringFromRequestBody(body: any): Promise<string> {
  if (typeof body === "string") {
    return body as string;
  }

  if (body instanceof Readable) {
    // body is a stream type
    return readStringFromReadable(body);
  }
  // else if (body instanceof Blob) {
  //   // body is a blob type
  //   return readStringFromBlob(body);
  // } else if (body instanceof ReadableStream) {
  //   // body is a fetch readableStream type
  //   return readStringFromFetchReadableStream(body);
  // }
  else {
    // unknown type, unable to read body content for signing, reject it
    throw new Error("Unable to read body content to sign the request");
  }
}

export function isReadableStream(body: any): Boolean {
  // Check if the body object contains all property of a ReadableStream
  if (body.cancel && body.getReader && body.pipeThrough && body.pipeTo && body.tee) {
    return true;
  }
  return false;
}

export function byteLength(input: any) {
  if (input === null || input === undefined) return 0;
  if (typeof input === "string") input = Buffer.from(input);
  if (typeof input.byteLength === "number") {
    return input.byteLength;
  } else if (typeof input.length === "number") {
    return input.length;
  } else if (typeof input.size === "number") {
    return input.size;
  }
  return undefined;
}
