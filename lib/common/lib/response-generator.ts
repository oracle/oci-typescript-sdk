/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { ObjectSerializer } from "./object-serializer";
import { convertStringToType } from "./helper";

/*
 * Interface for an API Response
 */

interface ResponseParams<T> {
  readonly responseObject: T;
  readonly responseHeaders: HeaderInfo[];
  readonly body?: ObjectSerializer.BodyType;
  readonly bodyModel?: any;
  readonly bodyKey?: string;
  readonly type?: string;
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
    const bodyContent = ObjectSerializer.deserialize(content, params.type, params.bodyModel);
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
