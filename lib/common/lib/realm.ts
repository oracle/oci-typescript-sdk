/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import {
  developerToolConfiguration,
  useOnlyDeveloperToolConfigurationRegions
} from "./developertoolconfiguration";

export class Realm {
  /**
   * The id of the realm.
   */
  private readonly _realmId: string;
  /**
   * The second level domain of the realm.
   */
  private readonly _secondLevelDomain: string;

  private constructor(
    realmId: string,
    secondLevelDomain: string,
    isDeveloperToolConfigurationRealm: boolean = false
  ) {
    this._secondLevelDomain = secondLevelDomain;
    this._realmId = realmId;
    if (isDeveloperToolConfigurationRealm) {
      Realm.DEVELOPER_TOOL_CONFIGURATION_REALMS.set(realmId, this);
    } else {
      Realm.KNOWN_REALMS.set(realmId, this);
    }
  }

  public get secondLevelDomain(): string {
    return this._secondLevelDomain;
  }

  public get realmId(): string {
    return this._realmId;
  }

  private static KNOWN_REALMS: Map<string, Realm> = new Map();
  private static DEVELOPER_TOOL_CONFIGURATION_REALMS: Map<string, Realm> = new Map();

  public static OC1: Realm = Realm.register("oc1", "oraclecloud.com");
  public static OC2: Realm = Realm.register("oc2", "oraclegovcloud.com");
  public static OC3: Realm = Realm.register("oc3", "oraclegovcloud.com");
  public static OC4: Realm = Realm.register("oc4", "oraclegovcloud.uk");
  public static OC8: Realm = Realm.register("oc8", "oraclecloud8.com");
  public static OC9: Realm = Realm.register("oc9", "oraclecloud9.com");
  public static OC10: Realm = Realm.register("oc10", "oraclecloud10.com");
  public static OC14: Realm = Realm.register("oc14", "oraclecloud14.com");
  public static OC20: Realm = Realm.register("oc20", "oraclecloud20.com");
  public static OC19: Realm = Realm.register("oc19", "oraclecloud.eu");
  public static OC24: Realm = Realm.register("oc24", "oraclecloud24.com");
  public static OC21: Realm = Realm.register("oc21", "oraclecloud21.com");
  public static OC26: Realm = Realm.register("oc26", "oraclecloud26.com");
  public static OC15: Realm = Realm.register("oc15", "oraclecloud15.com");
  public static OC29: Realm = Realm.register("oc29", "oraclecloud29.com");
  public static OC23: Realm = Realm.register("oc23", "oraclecloud23.com");
  public static OC35: Realm = Realm.register("oc35", "oraclecloud35.com");

  public static values(): Realm[] {
    if (useOnlyDeveloperToolConfigurationRegions()) {
      return Array.from(this.DEVELOPER_TOOL_CONFIGURATION_REALMS.values());
    }
    var allowedRealms = Array.from(this.KNOWN_REALMS.values());
    allowedRealms.concat(Array.from(this.DEVELOPER_TOOL_CONFIGURATION_REALMS.values()));
    return allowedRealms;
  }

  public static register(
    realmId: string,
    secondLevelDomain: string,
    isDeveloperToolConfigurationRealm: boolean = false
  ): Realm {
    if (!realmId) throw Error("Realm Id can not be empty or undefined");
    if (!secondLevelDomain) throw Error("secondLevelDomain can not be empty or undefined");

    realmId = (realmId.trim() as string).toLocaleLowerCase("en-US");
    secondLevelDomain = (secondLevelDomain.trim() as string).toLocaleLowerCase("en-US");
    const realm = isDeveloperToolConfigurationRealm
      ? Realm.DEVELOPER_TOOL_CONFIGURATION_REALMS.get(realmId)
      : Realm.KNOWN_REALMS.get(realmId);
    if (realm) {
      if (realm.secondLevelDomain !== secondLevelDomain) {
        throw Error(
          "RealmId " +
            realmId +
            " is already registered with  " +
            realm.secondLevelDomain +
            " It cannot be re-registered with a different secondLevelDomain"
        );
      }
      return realm;
    }
    return new Realm(realmId, secondLevelDomain, isDeveloperToolConfigurationRealm);
  }

  public static resetDeveloperToolConfiguration(): void {
    Realm.DEVELOPER_TOOL_CONFIGURATION_REALMS.clear();
  }
}
