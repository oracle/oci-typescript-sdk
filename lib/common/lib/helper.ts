import { OciError } from "./error";
import { Range } from "./range";
import { Readable, PassThrough } from "stream";
import { addOpcRequestId, addUserAgent } from "./headers";
import { addRetryToken } from "./retry-token-header";
import { isEmpty } from "./utils";

export function handleErrorResponse(response: Response, body: any): OciError {
  const statusCode = response.status || -1;
  const requestId = response.headers.get("opc-request-id");

  if (body && body.code && body.message) {
    return new OciError(statusCode, body.code, body.message, requestId);
  } else {
    return new OciError(statusCode, "unknown code", "unknown reason.", requestId);
  }
}

export function convertStringToType(str: string | null, expectedType: string): any {
  if (str == null) return str;
  expectedType = expectedType.toLowerCase();
  switch (expectedType) {
    case "string":
      return str;
    case "number":
      return Number(str);
    case "common.Range":
      return Range.parse(str);
  }
}

// read string from Readable asynchronously, return a string content of it
export async function readStringFromReadable(readable: Readable): Promise<string> {
  let contentBuffer: Array<string> = [];

  // set the encoding to return string instead of Buffer
  readable.setEncoding("utf8");

  return new Promise<string>((resolve, reject) => {
    readable.on("end", () => {
      resolve(contentBuffer.join(""));
    });
    readable.on("data", chunk => {
      contentBuffer.push(chunk);
    });
    readable.on("error", err => {
      // if error happened, it will be catched at http signer global error handling
      reject(err);
    });
  });
}

// read string from fetch ReadbaleString asynchronously, return a string content of it
export async function readStringFromFetchReadableStream(readable: ReadableStream): Promise<string> {
  let contentBuffer: Array<string> = [];
  const reader = readable.getReader();
  const decoder = new TextDecoder("utf-8");

  return new Promise<string>((resolve, reject) => {
    reader
      .read()
      .then(function processText({ done, value }): any {
        if (done) {
          // reading stream done, resolve it
          resolve(contentBuffer.join(""));
        }

        // put each chunk into a buffer
        contentBuffer.push(decoder.decode(value));

        // read more data and call processText function again to read more
        return reader.read().then(processText);
      })
      .catch(function(e) {
        // reject if has error
        reject(e);
      });
  });
}

// read string from Blob asynchronously, return a string content of it
export async function readStringFromBlob(blob: Blob): Promise<string> {
  const reader = new FileReader();

  return new Promise<string>((resolve, reject) => {
    reader.onerror = err => {
      reader.abort();
      reject(err);
    };

    reader.onload = () => {
      // read as Text is called, so this will be a string
      resolve(reader.result as string);
    };

    // utf-8 default encoding is used here
    reader.readAsText(blob);
  });
}

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
  //if body instance of blob, can be duplicated.
  else if (body instanceof Blob) {
    return { signerBody: body, requestBody: body };
  }
  // if body instance of ReadableStream, tee() it.
  else if (body instanceof ReadableStream) {
    // body.tee() not supported in IE.
    // https://jira.oci.oraclecorp.com/browse/DEX-7126
    const duplicateStream = body.tee();
    return { signerBody: duplicateStream[0], requestBody: duplicateStream[1] };
  }
  // unknown type, unable to read body content.
  else throw new Error("Unable to read body content");
}

export function addAdditionalHeaders(headers: Headers) {
  addOpcRequestId(headers);
  addUserAgent(headers);
  addRetryToken(headers);
}
