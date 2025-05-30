/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
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
 * An ingress gateway allows resources that are outside of a mesh to communicate to resources that are inside the mesh. It sits on the edge of a service mesh receiving incoming HTTP/TCP connections to the mesh.
 */
export interface IngressGateway {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
    * A user-friendly name. The name has to be unique within the same service mesh and cannot be changed after creation.
* Avoid entering confidential information.
* <p>
Example: {@code My unique resource name}
* 
    */
  "name": string;
  /**
    * Description of the resource. It can be changed after creation.
* Avoid entering confidential information.
* <p>
Example: {@code This is my new resource}
* 
    */
  "description"?: string;
  /**
   * The OCID of the service mesh in which this ingress gateway is created.
   */
  "meshId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   *
   */
  "compartmentId": string;
  /**
   * The time when this resource was created in an RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time when this resource was updated in an RFC3339 formatted datetime string.
   */
  "timeUpdated": Date;
  /**
   * Array of hostnames and their listener configuration that this gateway will bind to.
   */
  "hosts"?: Array<model.IngressGatewayHost>;
  "mtls"?: model.IngressGatewayMutualTransportLayerSecurity;
  "accessLogging"?: model.AccessLoggingConfiguration;
  /**
   * The current state of the Resource.
   */
  "lifecycleState": IngressGateway.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in a Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace IngressGateway {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: IngressGateway): object {
    const jsonObj = {
      ...obj,
      ...{
        "hosts": obj.hosts
          ? obj.hosts.map(item => {
              return model.IngressGatewayHost.getJsonObj(item);
            })
          : undefined,
        "mtls": obj.mtls
          ? model.IngressGatewayMutualTransportLayerSecurity.getJsonObj(obj.mtls)
          : undefined,
        "accessLogging": obj.accessLogging
          ? model.AccessLoggingConfiguration.getJsonObj(obj.accessLogging)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IngressGateway): object {
    const jsonObj = {
      ...obj,
      ...{
        "hosts": obj.hosts
          ? obj.hosts.map(item => {
              return model.IngressGatewayHost.getDeserializedJsonObj(item);
            })
          : undefined,
        "mtls": obj.mtls
          ? model.IngressGatewayMutualTransportLayerSecurity.getDeserializedJsonObj(obj.mtls)
          : undefined,
        "accessLogging": obj.accessLogging
          ? model.AccessLoggingConfiguration.getDeserializedJsonObj(obj.accessLogging)
          : undefined
      }
    };

    return jsonObj;
  }
}
