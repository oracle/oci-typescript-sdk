/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](https://docs.oracle.com/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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

export interface CreateCrossConnectDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the cross-connect.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the cross-connect group to put this cross-connect in.
   *
   */
  "crossConnectGroupId"?: string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * If you already have an existing cross-connect or cross-connect group at this FastConnect
   * location, and you want this new cross-connect to be on a different router (for the
   * purposes of redundancy), provide the [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of that existing cross-connect or
   * cross-connect group.
   *
   */
  "farCrossConnectOrCrossConnectGroupId"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
    * The name of the FastConnect location where this cross-connect will be installed.
* To get a list of the available locations, see
* {@link #listCrossConnectLocations(ListCrossConnectLocationsRequest) listCrossConnectLocations}.
* <p>
Example: {@code CyrusOne, Chandler, AZ}
* 
    */
  "locationName": string;
  /**
   * If you already have an existing cross-connect or cross-connect group at this FastConnect
   * location, and you want this new cross-connect to be on the same router, provide the
   * [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of that existing cross-connect or cross-connect group.
   *
   */
  "nearCrossConnectOrCrossConnectGroupId"?: string;
  /**
    * The port speed for this cross-connect. To get a list of the available port speeds, see
* {@link #listCrossconnectPortSpeedShapes(ListCrossconnectPortSpeedShapesRequest) listCrossconnectPortSpeedShapes}.
* <p>
Example: {@code 10 Gbps}
* 
    */
  "portSpeedShapeName": string;
  /**
   * A reference name or identifier for the physical fiber connection that this cross-connect
   * uses.
   *
   */
  "customerReferenceName"?: string;
  "macsecProperties"?: model.CreateMacsecProperties;
}

export namespace CreateCrossConnectDetails {
  export function getJsonObj(obj: CreateCrossConnectDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "macsecProperties": obj.macsecProperties
          ? model.CreateMacsecProperties.getJsonObj(obj.macsecProperties)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateCrossConnectDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "macsecProperties": obj.macsecProperties
          ? model.CreateMacsecProperties.getDeserializedJsonObj(obj.macsecProperties)
          : undefined
      }
    };

    return jsonObj;
  }
}
