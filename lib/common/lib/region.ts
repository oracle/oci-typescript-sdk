/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { Realm } from "./realm";

export class Region {
  /**
   * Region ID.
   */
  private readonly _regionId: string;
  /**
   * Realm this region belongs to.
   */
  private readonly _realm: Realm;

  get realm(): Realm {
    return this._realm;
  }

  get regionId(): string {
    return this._regionId;
  }

  private static REGIONS_SHORT_NAMES: { [key: string]: string } = {
    "phx": "us-phoenix-1",
    "iad": "us-ashburn-1",
    "fra": "eu-frankfurt-1",
    "lhr": "uk-london-1",
    "yyz": "ca-toronto-1",
    "gru": "sa-saopaulo-1",
    "ams": "eu-amsterdam-1",
    "jed": "me-jeddah-1",
    "kix": "ap-osaka-1",
    "ltn": "uk-gov-london-1",
    "nrt": "ap-tokyo-1",
    "icn": "ap-seoul-1",
    "hyd": "ap-hyderabad-1",
    "bom": "ap-mumbai-1",
    "yny": "ap-chuncheon-1",
    "syd": "ap-sydney-1",
    "mel": "ap-melbourne-1",
    "yul": "ca-montreal-1",
    "zrh": "eu-zurich-1",
    "lfi": "us-langley-1",
    "luf": "us-luke-1",
    "ric": "us-gov-ashburn-1",
    "pia": "us-gov-chicago-1",
    "tus": "us-gov-phoenix-1",
    "sjc": "us-sanjose-1"
  };

  private static KNOWN_REGIONS: Map<string, Region> = new Map();

  private constructor(regionId: string, realm: Realm) {
    this._realm = realm;
    this._regionId = regionId;
    Region.KNOWN_REGIONS.set(regionId, this);
  }

  // OC1
  public static AP_CHUNCHEON_1: Region = Region.register("ap-chuncheon-1", Realm.OC1);
  public static AP_MUMBAI_1: Region = Region.register("ap-mumbai-1", Realm.OC1);
  public static AP_HYDERABAD_1: Region = Region.register("ap-hyderabad-1", Realm.OC1);
  public static AP_SEOUL_1: Region = Region.register("ap-seoul-1", Realm.OC1);
  public static AP_SYDNEY_1: Region = Region.register("ap-sydney-1", Realm.OC1);
  public static AP_MELBOURNE_1: Region = Region.register("ap-melbourne-1", Realm.OC1);
  public static AP_OSAKA_1: Region = Region.register("ap-osaka-1", Realm.OC1);
  public static AP_TOKYO_1: Region = Region.register("ap-tokyo-1", Realm.OC1);
  public static CA_MONTREAL_1: Region = Region.register("ca-montreal-1", Realm.OC1);
  public static CA_TORONTO_1: Region = Region.register("ca-toronto-1", Realm.OC1);
  public static EU_FRANKFURT_1: Region = Region.register("eu-frankfurt-1", Realm.OC1);
  public static EU_ZURICH_1: Region = Region.register("eu-zurich-1", Realm.OC1);
  public static SA_SAOPAULO_1: Region = Region.register("sa-saopaulo-1", Realm.OC1);
  public static UK_LONDON_1: Region = Region.register("uk-london-1", Realm.OC1);
  public static US_ASHBURN_1: Region = Region.register("us-ashburn-1", Realm.OC1);
  public static US_PHOENIX_1: Region = Region.register("us-phoenix-1", Realm.OC1);
  public static EU_AMSTERDAM_1: Region = Region.register("eu-amsterdam-1", Realm.OC1);
  public static ME_JEDDAH_1: Region = Region.register("me-jeddah-1", Realm.OC1);
  public static US_SANJOSE_1: Region = Region.register("us-sanjose-1", Realm.OC1);

  // OC2
  public static US_LANGLEY_1: Region = Region.register("us-langley-1", Realm.OC2);
  public static US_LUKE_1: Region = Region.register("us-luke-1", Realm.OC2);

  // OC3
  public static US_GOV_ASHBURN_1: Region = Region.register("us-gov-ashburn-1", Realm.OC3);
  public static US_GOV_CHICAGO_1: Region = Region.register("us-gov-chicago-1", Realm.OC3);
  public static US_GOV_PHOENIX_1: Region = Region.register("us-gov-phoenix-1", Realm.OC3);

  // OC4
  public static UK_GOV_LONDON_1: Region = Region.register("uk-gov-london-1", Realm.OC4);

  public static fromRegionId(regionId: string): Region {
    if (!regionId) throw Error("RegionId can not be empty or undefined");
    regionId = (regionId.trim() as any).toLocaleLowerCase("en-US");
    return Region.KNOWN_REGIONS.get(regionId)!;
  }

  public static register(regionId: string, realm: Realm): Region {
    if (!regionId) throw Error("RegionId can not be empty or undefined");
    regionId = (regionId.trim() as any).toLocaleLowerCase("en-US");
    const region = Region.KNOWN_REGIONS.get(regionId);
    if (region) {
      if (region.realm.secondLevelDomain !== realm.secondLevelDomain) {
        throw Error(
          " Region " +
            regionId +
            " is already associated with another Realm " +
            region.realm +
            " It cannot be re-registered with a different realm."
        );
      }
      return region;
    }
    return new Region(regionId, realm);
  }

  /**
   * Function to get regionId based regionStr: regionStr can be a short code or regionId
   * if it is a shortCode then we want to return the corresponding regionId
   * @param regionStr
   * @return regionId
   */
  public static getRegionIdFromShortCode(regionStr: string): string {
    regionStr = regionStr.toLocaleLowerCase();
    return Region.REGIONS_SHORT_NAMES[regionStr]
      ? Region.REGIONS_SHORT_NAMES[regionStr]
      : regionStr;
  }
}
