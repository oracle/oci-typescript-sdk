/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

export namespace ObjectSerializer {
  export type BodyType = string | ReadableStream | Blob;

  export function serialize(data: any, type: string, getJsonObj?: (obj: any) => object): string {
    let jsonString: string;
    if (getJsonObj) {
      if (isList(type)) {
        // constuct List of json object first, such as: List<NonPrimaryType>
        // then return JSON.stringify of it
        jsonString = JSON.stringify(
          data.map((item: object) => {
            return getJsonObj(item);
          })
        );
      } else if (isMap(type)) {
        // construct a map of json object, such as { [key: string]: model.NonPrimaryType }
        // Notes: we don't have any spec fall into this case now, put it here just in case it
        // has in the future
        const obj: { [k: string]: any } = {};
        Object.keys(data).forEach((key: string | number) => {
          obj[key] = getJsonObj(data[key]);
        });
        jsonString = JSON.stringify(obj);
      } else {
        jsonString = JSON.stringify(getJsonObj(data));
      }
    } else {
      // for type without getJsonObj callback use native stringify
      jsonString = JSON.stringify(data);
    }

    // Safely escape non-ASCII characters if OCI_SDK_ESCAPE_JSON_ASCII is set to true.
    if (process.env.OCI_SDK_ESCAPE_JSON_ASCII === "true") {
      return escapeNonAscii(jsonString);
    }

    return jsonString;
  }

  /**
   * Escapes non-ASCII characters in a string to \uXXXX unicode escapes.
   * @param str The input string
   * @returns ASCII-safe unicode-escaped string
   */
  function escapeNonAscii(str: string): string {
    return str.replace(/[\u0080-\uFFFF]/g, function(ch) {
      const hex = ch
        .charCodeAt(0)
        .toString(16)
        .padStart(4, "0");
      return "\\u" + hex;
    });
  }

  export function deserialize<T>(data: any, type?: any, bodyModel?: any): T {
    if (typeof bodyModel === "object") {
      if (isList(type)) {
        return data.map((item: object) => {
          return bodyModel.getDeserializedJsonObj(item);
        });
      } else if (isMap(type)) {
        const obj: { [k: string]: any } = {};
        Object.keys(data).forEach((key: string | number) => {
          obj[key] = bodyModel.getDeserializedJsonObj(data[key]);
        });
        return obj as T;
      } else {
        return bodyModel.getDeserializedJsonObj(data);
      }
    }
    return data;
  }

  // check if type is List
  function isList(type: string): boolean {
    return type.lastIndexOf("Array<", 0) === 0;
  }

  const mapRegex = new RegExp("^{\\[\\w*:\\w*]:model.\\w*}$");
  // check if type is a map, such as: { [key: string]: model.ComplexType }
  function isMap(type: string): boolean {
    // remove whitespace from type for regex match
    return mapRegex.test(type.replace(/\s/g, ""));
  }
}
