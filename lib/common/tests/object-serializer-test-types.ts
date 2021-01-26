/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

export namespace ObjectSerializerTestBaseType {
  export interface BaseType {
    "displayName"?: string;
    "underscoreName"?: string;
    "source": string;
  }

  // following method is generated via code gen and tested in swagger
  export function getJsonObj(obj: BaseType): object {
    const jsonObj = {
      ...obj,
      ...{
        "underscore_Name": obj.underscoreName
      }
    };
    delete jsonObj.underscoreName;
    if ("source" in obj && obj.source) {
      switch (obj.source) {
        case "SUBTYPE1":
          return ObjectSerializerTestSubTypeOne.getJsonObj(
            <ObjectSerializerTestSubTypeOne.SubTypeOne>(<object>jsonObj),
            true
          );
        case "SUBTYPE2":
          return ObjectSerializerTestSubTypeTwo.getJsonObj(
            <ObjectSerializerTestSubTypeTwo.SubTypeTwo>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.source);
      }
    }
    return jsonObj;
  }
}

export namespace ObjectSerializerTestSubTypeOne {
  export interface SubTypeOne extends ObjectSerializerTestBaseType.BaseType {
    "subtypeOneRename"?: string;
    "optionalRenamed"?: string;
    "source": string;
  }

  export const source = "SUBTYPE1";

  export function getJsonObj(obj: SubTypeOne, isParentJson?: boolean): object {
    const jsonObj = {
      ...(isParentJson ? obj : (ObjectSerializerTestBaseType.getJsonObj(obj) as SubTypeOne)),
      ...{
        "subtype_one_rename": obj.subtypeOneRename,
        "optional_renamed": obj.optionalRenamed ? obj.optionalRenamed : undefined
      }
    };

    delete jsonObj.subtypeOneRename;
    return jsonObj;
  }
}

export namespace ObjectSerializerTestSubTypeTwo {
  export interface SubTypeTwo extends ObjectSerializerTestBaseType.BaseType {
    "source": string;
  }

  export function getJsonObj(obj: SubTypeTwo, isParentJsonObj: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : ObjectSerializerTestBaseType.getJsonObj(obj))
    };
    return jsonObj;
  }
}

export namespace ObjectSerializerTestComplexModel {
  export enum InLineEnum {
    V1 = "V1",
    V2 = "V2"
  }

  export interface ComplexModel {
    // complex type references
    "complexType": ObjectSerializerTestComplexTypeRef.ComplexTypeRef;

    // inline enum
    "inLineEnum": InLineEnum;

    // enum ref
    "enumRef": ObjectSerializerTestEnumRef.EnumRef;

    // list of native type
    "listStr": Array<string>;

    // list of complex type
    "listComplex": Array<ObjectSerializerTestComplexTypeRef.ComplexTypeRef>;
  }

  export function getJsonObj(obj: ComplexModel): Object {
    const jsonObj = {
      ...obj,
      ...{
        "complexType": obj.complexType
          ? ObjectSerializerTestComplexTypeRef.getJsonObj(obj.complexType)
          : undefined,
        "in_line_enum": obj.inLineEnum,
        "enum_ref": obj.enumRef ? ObjectSerializerTestEnumRef.getJsonObj(obj.enumRef) : undefined,
        "listComplex": obj.listComplex
          ? obj.listComplex.map(item => {
              return ObjectSerializerTestComplexTypeRef.getJsonObj(item);
            })
          : undefined
      }
    };
    return jsonObj;
  }
}

export namespace ObjectSerializerTestComplexTypeRef {
  export interface ComplexTypeRef {
    "underscorename"?: string;
  }

  export function getJsonObj(obj: ComplexTypeRef): Object {
    const jsonObj = {
      ...obj,
      ...{
        "underscore_name": obj.underscorename
      }
    };

    delete jsonObj.underscorename;
    return jsonObj;
  }
}

export namespace ObjectSerializerTestEnumRef {
  export enum EnumRef {
    V_1 = "RefV1",
    V_2 = "RefV2"
  }
  export function getJsonObj(obj: EnumRef): object {
    return { obj };
  }
}
