/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of an entity attribute. An attribute of a data entity describing an item of data,
 * with a name and data type. Synonymous with 'column' in a database.
 *
 */
export interface Attribute {
  /**
   * Unique attribute key that is immutable.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Optional user friendly business name of the attribute. If set, this supplements the harvested display name of the object.
   */
  "businessName"?: string;
  /**
   * Detailed description of the attribute.
   */
  "description"?: string;
  /**
   * The unique key of the parent entity.
   */
  "entityKey"?: string;
  /**
   * State of the attribute.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A message describing the current state in more detail. An object not in ACTIVE state may have functional limitations,
   * see service documentation for details.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time the attribute was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: {@code 2019-03-25T21:10:29.600Z}
   *
   */
  "timeCreated"?: Date;
  /**
   * The last time that any change was made to the attribute. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
  /**
   * OCID of the user who created this attribute in the data catalog.
   */
  "createdById"?: string;
  /**
   * OCID of the user who modified this attribute in the data catalog.
   */
  "updatedById"?: string;
  /**
   * Data type of the attribute as defined in the external system. Type mapping across systems can be achieved
   * through term associations across domains in the ontology. The attribute can also be tagged to the datatype in
   * the domain ontology to resolve any ambiguity arising from type name similarity that can occur with user
   * defined types.
   *
   */
  "externalDataType"?: string;
  /**
   * Unique external key of this attribute in the external source system.
   */
  "externalKey"?: string;
  /**
   * Property that identifies if this attribute can be used as a watermark to extract incremental data.
   */
  "isIncrementalData"?: boolean;
  /**
   * Property that identifies if this attribute can be assigned null values.
   */
  "isNullable"?: boolean;
  /**
   * The type of the attribute. Type keys can be found via the '/types' endpoint.
   */
  "typeKey"?: string;
  /**
   * The minimum count for the number of instances of a given type stored in this collection type attribute,applicable if this attribute is a complex type. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minCollectionCount"?: number;
  /**
   * The maximum count for the number of instances of a given type stored in this collection type attribute,applicable if this attribute is a complex type.
   * For type specifications in systems that specify only \"capacity\" without upper or lower bound , this property can also be used to just mean \"capacity\".
   * Some examples are Varray size in Oracle , Occurs Clause in Cobol , capacity in XmlSchemaObjectCollection , maxOccurs in  Xml , maxItems in Json
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxCollectionCount"?: number;
  /**
   * Entity key that represents the datatype of this attribute , applicable if this attribute is a complex type.
   */
  "datatypeEntityKey"?: string;
  /**
   * External entity key that represents the datatype of this attribute , applicable if this attribute is a complex type.
   */
  "externalDatatypeEntityKey"?: string;
  /**
   * Attribute key that represents the parent attribute of this attribute , applicable if the parent attribute is of complex datatype.
   */
  "parentAttributeKey"?: string;
  /**
   * External attribute key that represents the parent attribute  of this attribute , applicable if the parent attribute is of complex type.
   */
  "externalParentAttributeKey"?: string;
  /**
   * Max allowed length of the attribute value. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "length"?: number;
  /**
   * Position of the attribute in the record definition. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "position"?: number;
  /**
   * Precision of the attribute value usually applies to float data type. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "precision"?: number;
  /**
   * Scale of the attribute value usually applies to float data type. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "scale"?: number;
  /**
   * Last modified timestamp of this object in the external system.
   */
  "timeExternal"?: Date;
  /**
   * The date and time the attribute was harvested, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeHarvested"?: Date;
  /**
   * List of objects and their relationships to this attribute.
   */
  "objectRelationships"?: Array<model.ObjectRelationship>;
  /**
   * Whether a column is derived or not.
   */
  "isDerivedAttribute"?: boolean;
  /**
   * URI to the attribute instance in the API.
   */
  "uri"?: string;
  /**
   * Full path of the attribute.
   */
  "path"?: string;
  /**
   * The list of customized properties along with the values for this object
   */
  "customPropertyMembers"?: Array<model.CustomPropertyGetUsage>;
  /**
   * A map of maps that contains the properties which are specific to the attribute type. Each attribute type
   * definition defines it's set of required and optional properties. The map keys are category names and the
   * values are maps of property name to property value. Every property is contained inside of a category. Most
   * attributes have required properties within the \"default\" category.
   * Example: {@code {\"properties\": { \"default\": { \"key1\": \"value1\"}}}}
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
  /**
   * Rule types associated with attribute.
   */
  "associatedRuleTypes"?: Array<Attribute.AssociatedRuleTypes>;
}

export namespace Attribute {
  export enum AssociatedRuleTypes {
    Primarykey = "PRIMARYKEY",
    Foreignkey = "FOREIGNKEY",
    Uniquekey = "UNIQUEKEY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Attribute): object {
    const jsonObj = {
      ...obj,
      ...{
        "objectRelationships": obj.objectRelationships
          ? obj.objectRelationships.map(item => {
              return model.ObjectRelationship.getJsonObj(item);
            })
          : undefined,

        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertyGetUsage.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Attribute): object {
    const jsonObj = {
      ...obj,
      ...{
        "objectRelationships": obj.objectRelationships
          ? obj.objectRelationships.map(item => {
              return model.ObjectRelationship.getDeserializedJsonObj(item);
            })
          : undefined,

        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertyGetUsage.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
