/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { Region } from "./region";
import { Realm } from "./realm";

export class EndpointBuilder {
  public static createEndpointFromRegion(
    template: string,
    region: Region,
    endpointServiceName?: string
  ): string {
    const regionId = region.regionId;
    const secondLevelDomain = region.realm.secondLevelDomain;

    // If regionId is a dotted region, call createEndpointForDottedRegion
    if (regionId.includes(".")) {
      return EndpointBuilder.createEndpointForDottedRegion(template, regionId, endpointServiceName);
    } else {
      // Default to using regionId and secondLevelDomain
      return EndpointBuilder.createEndpointFromRegionIdAndSecondLevelDomain(
        template,
        regionId,
        secondLevelDomain
      );
    }
  }

  public static createEndpointFromRegionId(
    template: string,
    regionId: string,
    endpointServiceName?: string
  ): string {
    // If regionId is a dotted region, call createEndpointForDottedRegion
    if (regionId.includes("."))
      return EndpointBuilder.createEndpointForDottedRegion(template, regionId, endpointServiceName);

    const region = Region.fromRegionId(regionId);
    if (region)
      return EndpointBuilder.createEndpointFromRegion(template, region, endpointServiceName);

    // If regionId does not return a known region, check to see if there is a fallback second level domain from env.OCI_DEFAULT_REALM
    // If no fallback for second level domain, default it to OC1's second level domain.
    const fallbackSecondLevelDomain = process.env["OCI_DEFAULT_REALM"];
    let secondLevelDomain = fallbackSecondLevelDomain
      ? fallbackSecondLevelDomain
      : Realm.OC1.secondLevelDomain;
    console.log(
      `Unknown regionId [${regionId}], falling back to using ${secondLevelDomain} as the second level domain.`
    );
    return EndpointBuilder.createEndpointFromRegionIdAndSecondLevelDomain(
      template,
      regionId,
      secondLevelDomain
    );
  }

  public static createEndpointFromRegionIdAndSecondLevelDomain(
    template: string,
    regionId: string,
    secondLevelDomain: string
  ): string {
    if (!template) throw Error("Template can not be undefined or empty");
    if (!regionId) throw Error("regionId can not be undefined or empty");
    if (!secondLevelDomain) throw Error("secondLevelDomain can not be undefined or empty");
    return template.replace("{secondLevelDomain}", secondLevelDomain).replace("{region}", regionId);
  }

  public static createEndpointForDottedRegion(
    template: string, // https://identity.{region}.oci.{secondLevelDomain}
    regionId: string,
    endpointServiceName?: string
  ): string {
    if (endpointServiceName) {
      return `https://${endpointServiceName}.${regionId}`;
    } else {
      const serviceName = template.substring(template.lastIndexOf("/") + 1, template.indexOf(".")); // Extract service name
      return `https://${serviceName}.${regionId}`;
    }
  }
}
