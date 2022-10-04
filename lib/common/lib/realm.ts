/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

export class Realm {
  /**
   * The id of the realm.
   */
  private readonly _realmId: string;
  /**
   * The second level domain of the realm.
   */
  private readonly _secondLevelDomain: string;

  private constructor(realmId: string, secondLevelDomain: string) {
    this._secondLevelDomain = secondLevelDomain;
    this._realmId = realmId;
    Realm.KNOWN_REALMS.set(realmId, this);
  }

  get secondLevelDomain(): string {
    return this._secondLevelDomain;
  }

  get realmId(): string {
    return this._realmId;
  }

  private static KNOWN_REALMS: Map<string, Realm> = new Map();

  public static OC1: Realm = Realm.register("oc1", "oraclecloud.com");
  public static OC2: Realm = Realm.register("oc2", "oraclegovcloud.com");
  public static OC3: Realm = Realm.register("oc3", "oraclegovcloud.com");
  public static OC4: Realm = Realm.register("oc4", "oraclegovcloud.uk");
  public static OC8: Realm = Realm.register("oc8", "oraclecloud8.com");
  public static OC9: Realm = Realm.register("oc9", "oraclecloud9.com");
  public static OC10: Realm = Realm.register("oc10", "oraclecloud10.com");
  public static OC14: Realm = Realm.register("oc14", "oraclecloud14.com");
  public static register(realmId: string, secondLevelDomain: string): Realm {
    if (!realmId) throw Error("Realm Id can not be empty or undefined");
    if (!secondLevelDomain) throw Error("secondLevelDomain can not be empty or undefined");

    realmId = (realmId.trim() as any).toLocaleLowerCase("en-US");
    secondLevelDomain = (secondLevelDomain.trim() as any).toLocaleLowerCase("en-US");
    const realm = Realm.KNOWN_REALMS.get(realmId);
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
    return new Realm(realmId, secondLevelDomain);
  }
}
