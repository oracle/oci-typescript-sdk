import { ObjectSerializer } from "./object-serializer";
import { convertStringToType } from "./helper";

/*
 * Interface for an API Response
 */

interface ResponseParams<T> {
  readonly responseObject: T;
  readonly responseHeaders: HeaderInfo[];
  readonly body?: ObjectSerializer.BodyType;
  readonly bodyModel?: string;
  readonly bodyKey?: string;
}

interface HeaderInfo {
  key: string;
  value: string | null;
  dataType: string;
}

/*
 * Composes an SDKResponse.
 * @param ResponseParams to create a response
 */
export function composeResponse<T>(params: ResponseParams<T>): T {
  const response = params.responseObject;
  let content = params.body;
  if (content) {
    const bodyContent = ObjectSerializer.deserialize(content, params.bodyModel);
    const key = params.bodyKey;
    Object.assign(response, { [key as string]: bodyContent });
  }
  computeHeaders(params.responseHeaders, response);
  return response;
}

function computeHeaders<T>(responseHeaders: HeaderInfo[], response: T) {
  if (responseHeaders) {
    responseHeaders.forEach(header => {
      if (header.value) {
        Object.assign(response, {
          [header.key]: convertStringToType(header.value, header.dataType)
        });
      }
    });
  }
}
