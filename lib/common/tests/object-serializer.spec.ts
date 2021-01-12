/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { expect } from "chai";
import { ObjectSerializer } from "../lib/object-serializer";
import {
  ObjectSerializerTestBaseType,
  ObjectSerializerTestSubTypeOne,
  ObjectSerializerTestSubTypeTwo,
  ObjectSerializerTestComplexModel,
  ObjectSerializerTestEnumRef
} from "./object-serializer-test-types";

describe("Test ObjectSerializer", () => {
  it("base class contains codegen renamed variable", function() {
    const subTypeOne: ObjectSerializerTestSubTypeOne.SubTypeOne = {
      underscoreName: "variable name renamed",
      subtypeOneRename: "subtypeOneName",
      source: ObjectSerializerTestSubTypeOne.source
    };

    const serializedJson = ObjectSerializer.serialize(
      subTypeOne,
      "ObjectSerializerTestSubTypeOne.SubTypeOne",
      ObjectSerializerTestBaseType.getJsonObj
    );
    expect(serializedJson).to.not.have.string("underscoreName");
    expect(serializedJson).to.have.string("underscore_Name");
    expect(serializedJson).to.not.have.string("subtypeOneRename");
    expect(serializedJson).to.have.string("subtype_one_rename");
  });

  it("polymorphics serializer - subtype serialization", function() {
    const object:
      | ObjectSerializerTestSubTypeOne.SubTypeOne
      | ObjectSerializerTestSubTypeTwo.SubTypeTwo = {
      underscoreName: "variable name renamed",
      subtypeOneRename: "subtypeOneName",
      source: ObjectSerializerTestSubTypeOne.source
    };

    const serializedJson = ObjectSerializer.serialize(
      object,
      "ObjectSerializerTestBaseType.BaseType",
      ObjectSerializerTestBaseType.getJsonObj
    );
    expect(serializedJson).to.not.have.string("underscoreName");
    expect(serializedJson).to.have.string("underscore_Name");
    expect(serializedJson).to.not.have.string("subtypeOneRename");
    expect(serializedJson).to.have.string("subtype_one_rename");

    // optional renamed properties should be removed from json if no input value provide
    expect(serializedJson).to.not.have.string("optional_renamed");
  });

  it("complex type references", function() {
    const object: ObjectSerializerTestComplexModel.ComplexModel = {
      // complex type references
      "complexType": {
        underscorename: "name"
      },

      // inline enum
      "inLineEnum": ObjectSerializerTestComplexModel.InLineEnum.V1,

      // enum ref
      "enumRef": ObjectSerializerTestEnumRef.EnumRef.V_2,

      // list of native type
      "listStr": ["str1", "str2"],

      // list of complex type
      "listComplex": [
        {
          underscorename: "name1"
        },
        {
          underscorename: "name2"
        }
      ]
    };

    const serializedJson = ObjectSerializer.serialize(
      object,
      "ObjectSerializerTestComplexModel.ComplexModel",
      ObjectSerializerTestComplexModel.getJsonObj
    );

    // complex type ref
    expect(serializedJson).to.not.have.string("underscorename");
    expect(serializedJson).to.have.string("underscore_name");

    // inline enum
    expect(serializedJson).to.have.string("inLineEnum");
    expect(serializedJson).to.have.string("V1");

    // enum ref
    expect(serializedJson).to.have.string("enumRef");
    expect(serializedJson).to.have.string("RefV2");

    // list of native type
    expect(serializedJson).to.have.string("listStr");
    expect(serializedJson).to.have.string("str1");
    expect(serializedJson).to.have.string("str2");

    // list of complex type
    expect(serializedJson).to.have.string("listComplex");
    expect(serializedJson).to.have.string("name1");
    expect(serializedJson).to.have.string("name2");
  });
});
