/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { Realm } from "./realm";
import { ConfigFileReader } from "./config-file-reader";
import { readFileSync } from "fs";
import { RegionMetadataSchema } from "./region-metadata-schema";
import { FetchHttpClient } from "./http";

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
    "cwl": "uk-cardiff-1",
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
    "scl": "sa-santiago-1",
    "vcp": "sa-vinhedo-1",
    "lfi": "us-langley-1",
    "luf": "us-luke-1",
    "ric": "us-gov-ashburn-1",
    "pia": "us-gov-chicago-1",
    "tus": "us-gov-phoenix-1",
    "sjc": "us-sanjose-1",
    "brs": "uk-gov-cardiff-1",
    "nja": "ap-chiyoda-1",
    "dxb": "me-dubai-1"
  };

  private static KNOWN_REGIONS: Map<string, Region> = new Map();

  private static hasCalledForImds: boolean = false;
  private static hasUsedConfigFile: boolean = false;
  private static hasUsedEnvVar: boolean = false;
  private static imdsRegionMetadata: RegionMetadataSchema | undefined;
  private static hasWarnedAboutValuesWithoutInstanceMetadataService: boolean = false;

  private static REGIONS_CONFIG_FILE_PATH: string = "~/.oci/regions-config.json";
  private static OCI_REGION_METADATA_ENV_VAR: string = "OCI_REGION_METADATA";
  private static IMDS_BASE_URL: string = "http://169.254.169.254/opc/v2/";
  private static METADATA_AUTH_HEADERS: string = "Bearer Oracle";
  private static AUTHORIZATION: string = "Authorization";
  private static CONTENT_TYPE_HEADER: string = "Content-Type";
  private static CONTENT_TYPE_HEADER_VALUE: string = "application/json";

  private constructor(regionId: string, realm: Realm, regionCode?: string) {
    this._realm = realm;
    this._regionId = regionId;
    Region.KNOWN_REGIONS.set(regionId, this);
    if (regionCode) Region.REGIONS_SHORT_NAMES[regionCode] = regionId;
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
  public static UK_CARDIFF_1: Region = Region.register("uk-cardiff-1", Realm.OC1);
  public static UK_LONDON_1: Region = Region.register("uk-london-1", Realm.OC1);
  public static US_ASHBURN_1: Region = Region.register("us-ashburn-1", Realm.OC1);
  public static US_PHOENIX_1: Region = Region.register("us-phoenix-1", Realm.OC1);
  public static EU_AMSTERDAM_1: Region = Region.register("eu-amsterdam-1", Realm.OC1);
  public static ME_JEDDAH_1: Region = Region.register("me-jeddah-1", Realm.OC1);
  public static US_SANJOSE_1: Region = Region.register("us-sanjose-1", Realm.OC1);
  public static ME_DUBAI_1: Region = Region.register("me-dubai-1", Realm.OC1);
  public static SA_SANTIAGO_1: Region = Region.register("sa-santiago-1", Realm.OC1);
  public static SA_VINHEDO_1: Region = Region.register("sa-vinhedo-1", Realm.OC1);

  // OC2
  public static US_LANGLEY_1: Region = Region.register("us-langley-1", Realm.OC2);
  public static US_LUKE_1: Region = Region.register("us-luke-1", Realm.OC2);

  // OC3
  public static US_GOV_ASHBURN_1: Region = Region.register("us-gov-ashburn-1", Realm.OC3);
  public static US_GOV_CHICAGO_1: Region = Region.register("us-gov-chicago-1", Realm.OC3);
  public static US_GOV_PHOENIX_1: Region = Region.register("us-gov-phoenix-1", Realm.OC3);

  // OC4
  public static UK_GOV_LONDON_1: Region = Region.register("uk-gov-london-1", Realm.OC4);
  public static UK_GOV_CARDIFF_1: Region = Region.register("uk-gov-cardiff-1", Realm.OC4);

  // OC8
  public static AP_CHIYODA_1: Region = Region.register("ap-chiyoda-1", Realm.OC8);

  /**
   * Return all known Regions in this version of the SDK, except possibly the region returned by IMDS (Instance Metadata
   * Service, only available on OCI instances), since IMDS is not automatically contacted by this method.
   *
   * To ensure that this method also returns the region provided by IMDS, call {@link Region#enableInstanceMetadata()}
   * explicitly before calling {@link Region#values()}.
   *
   */
  public static values(): Region[] {
    if (!Region.hasCalledForImds && !Region.hasWarnedAboutValuesWithoutInstanceMetadataService) {
      console.log(
        "Call to Regions.values() without having contacted IMDS (Instance Metadata Service, only available on OCI instances); if you do need the region from IMDS, call Region.enableInstanceMetadata() before calling Region.values()"
      );
      Region.hasWarnedAboutValuesWithoutInstanceMetadataService = true;
    }
    Region.registerAllRegions();

    return Array.from(this.KNOWN_REGIONS.values());
  }

  /**
   *  Register all regions and sets status
   */
  private static registerAllRegions(): void {
    if (!Region.hasUsedConfigFile) {
      Region.addRegionsFromConfigFile();
    }

    if (!Region.hasUsedEnvVar) {
      Region.addRegionFromEnvVar();
    }
  }

  public static fromRegionId(regionId: string): Region {
    /*
     * load provided region from already registered regions if it exists
     * else load provided region from region configuration file if it exists
     * else load provided region from region metadeta environment variable
     * else if instance metadeta service (IMDS) has been opted in, try loading region from IMDS
     */
    if (!regionId) throw Error("RegionId can not be empty or undefined");
    regionId = (regionId.trim() as any).toLocaleLowerCase("en-US");

    let foundRegion = Region.KNOWN_REGIONS.get(regionId);

    if (!foundRegion) {
      Region.addRegionsFromConfigFile();
      foundRegion = Region.KNOWN_REGIONS.get(regionId);
    }

    if (!foundRegion) {
      Region.addRegionFromEnvVar();
      foundRegion = Region.KNOWN_REGIONS.get(regionId);
    }

    if (!foundRegion && Region.hasCalledForImds) {
      Region.addRegionFromImds();
      foundRegion = Region.KNOWN_REGIONS.get(regionId);
    }

    return foundRegion!;
  }

  // Adds regions from the config file
  private static addRegionsFromConfigFile(): void {
    if (!Region.hasUsedConfigFile) {
      Region.hasUsedConfigFile = true;
      let expandedRegionConfigFilePath = ConfigFileReader.expandUserHome(
        Region.REGIONS_CONFIG_FILE_PATH
      );
      if (ConfigFileReader.fileExists(expandedRegionConfigFilePath)) {
        try {
          const fileContent = readFileSync(expandedRegionConfigFilePath, "utf8");
          const regionMetadata = JSON.parse(fileContent) as RegionMetadataSchema[];
          if (regionMetadata && regionMetadata.length > 0 && Array.isArray(regionMetadata)) {
            regionMetadata.map(metadata => {
              if (RegionMetadataSchema.isValidSchema(metadata)) {
                Region.register(
                  metadata.regionIdentifier,
                  Realm.register(metadata.realmKey, metadata.realmDomainComponent),
                  metadata.regionKey
                );
              }
            });
          }
        } catch (error) {
          console.log("error reading or parsing region config file");
        }
      }
    }
  }

  // Adds region from the environment variable
  private static addRegionFromEnvVar(): void {
    if (!Region.hasUsedEnvVar) {
      Region.hasUsedEnvVar = true;
      const envVarRegionMetadata = process.env[Region.OCI_REGION_METADATA_ENV_VAR];
      if (envVarRegionMetadata) {
        try {
          const regionMetadata = JSON.parse(envVarRegionMetadata) as RegionMetadataSchema;
          if (RegionMetadataSchema.isValidSchema(regionMetadata)) {
            Region.register(
              regionMetadata.regionIdentifier,
              Realm.register(regionMetadata.realmKey, regionMetadata.realmDomainComponent),
              regionMetadata.regionKey
            );
          }
        } catch (error) {
          console.log("error reading or parsing region metadata env var config file");
        }
      }
    }
  }

  // Add region from the Instance Metadata Service
  private static addRegionFromImds(): void {
    if (Region.imdsRegionMetadata) {
      Region.register(
        Region.imdsRegionMetadata.regionIdentifier,
        Realm.register(
          Region.imdsRegionMetadata.realmKey,
          Region.imdsRegionMetadata.realmDomainComponent
        ),
        Region.imdsRegionMetadata.regionKey
      );
      Region.imdsRegionMetadata = undefined;
    }
  }

  /*
   * Enable instance metadata lookup for region info
   */
  public static async enableInstanceMetadata(): Promise<void> {
    if (!Region.hasCalledForImds) {
      Region.hasCalledForImds = true;
      try {
        const url: string = Region.IMDS_BASE_URL + "instance/regionInfo/";
        let headers = new Headers();
        headers.append(Region.CONTENT_TYPE_HEADER, Region.CONTENT_TYPE_HEADER_VALUE);
        headers.append(Region.AUTHORIZATION, Region.METADATA_AUTH_HEADERS);
        const httpClient = new FetchHttpClient(null);
        const response = await httpClient.send({
          uri: url,
          method: "GET",
          headers: headers
        });
        const regionMetadata = (await response.json()) as RegionMetadataSchema;
        if (RegionMetadataSchema.isValidSchema(regionMetadata)) {
          Region.imdsRegionMetadata = regionMetadata;
        }
      } catch (error) {
        console.log(
          "Unable to retrieve region metadata from instance metadata service, reason :" + error
        );
      }
    }
  }

  public static register(regionId: string, realm: Realm, regionCode?: string): Region {
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
    if (regionCode) {
      regionCode = (regionCode.trim() as any).toLocaleLowerCase("en-US");
    }
    return new Region(regionId, realm, regionCode);
  }

  /**
   * Function to get regionId based regionStr: regionStr can be a short code or regionId
   * if it is a shortCode then we want to return the corresponding regionId
   * @param regionStr
   * @return regionId
   */
  public static getRegionIdFromShortCode(regionStr: string): string {
    regionStr = regionStr.toLocaleLowerCase();

    // If region short code is not found in the SDK, add regions from the regions config file
    let foundRegionId = Region.REGIONS_SHORT_NAMES[regionStr];
    if (!foundRegionId) {
      Region.addRegionsFromConfigFile();
      foundRegionId = Region.REGIONS_SHORT_NAMES[regionStr];
    }

    // else add region from environment variable, and then check for short code
    if (!foundRegionId) {
      Region.addRegionFromEnvVar();
      foundRegionId = Region.REGIONS_SHORT_NAMES[regionStr];
    }

    // else add region from IMDS if it has been opted in, and then check for short code
    if (!foundRegionId && Region.hasCalledForImds) {
      Region.addRegionFromImds();
      foundRegionId = Region.REGIONS_SHORT_NAMES[regionStr];
    }

    return foundRegionId ? foundRegionId : regionStr;
  }
}
