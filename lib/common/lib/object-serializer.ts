export namespace ObjectSerializer {
  export type BodyType = string | ReadableStream | Blob;

  export function serialize(data: any, type: string, getJsonObj?: (obj: any) => object): string {
    if (getJsonObj) {
      if (isList(type)) {
        // constuct List of json object first, such as: List<NonPrimaryType>
        // then return JSON.stringify of it
        return JSON.stringify(
          data.forEach((item: object) => {
            return getJsonObj(item);
          })
        );
      } else if (isMap(type)) {
        // construct a map of json object, such as { [key: string]: model.NonPrimaryType }
        // Notes: we don't have any spec fall into this case now, put it here just in case it
        // has in the future
        return JSON.stringify(
          Object.keys(data).map((key: string | number) => {
            return { [key]: getJsonObj(data[key]) };
          })
        );
      } else {
        return JSON.stringify(getJsonObj(data));
      }
    }

    // for type without getJsonObj callback use native stringify
    return JSON.stringify(data);
  }

  export function deserialize<T>(data: any, type?: string): T {
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
