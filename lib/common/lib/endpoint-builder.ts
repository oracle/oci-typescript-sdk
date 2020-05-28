/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { Region } from "./region";
import { Realm } from "./realm";

export class EndpointBuilder {
  public static createEndpointFromRegion(template: string, region: Region): string {
    const regionId = region.regionId;
    const secondLevelDomain = region.realm.secondLevelDomain;
    return EndpointBuilder.createEndpointFromRegionIdAndSecondLevelDomain(
      template,
      regionId,
      secondLevelDomain
    );
  }

  public static createEndpointFromRegionId(template: string, regionId: string): string {
    const region = Region.fromRegionId(regionId);
    if (region) return EndpointBuilder.createEndpointFromRegion(template, region);

    console.log(`Unknown regionId [${regionId}], Assuming its in default Realm OC1`);
    const defaultRealm = Realm.OC1;
    return EndpointBuilder.createEndpointFromRegionIdAndSecondLevelDomain(
      template,
      regionId,
      defaultRealm.secondLevelDomain
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
}
