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

  private static KNOWN_REGIONS: Map<string, Region> = new Map();

  private constructor(regionId: string, realm: Realm) {
    this._realm = realm;
    this._regionId = regionId;
    Region.KNOWN_REGIONS.set(regionId, this);
  }

  // OC1
  public static AP_MUMBAI_1: Region = Region.register("ap-mumbai-1", Realm.OC1);
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
}
