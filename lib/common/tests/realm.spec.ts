import { expect } from "chai";
import { Realm } from "../lib/realm";

describe("Test Realm ", () => {
  const realmId = "ocx";
  const secondLevelDomain = "ocx-cloud.com";
  const existingRealmID = "oc1";

  it("should register a Realm sucessfully ", function() {
    const realm = Realm.register(realmId, secondLevelDomain);
    expect(realm.realmId).equals(realmId);
  });

  it("should not register an  empty realmId", function() {
    const realm = function() {
      Realm.register("", secondLevelDomain);
    };
    expect(realm).to.throw("Realm Id can not be empty or undefined");
  });

  it("should not register an  empty secondLevelDomain", function() {
    const realm = function() {
      Realm.register(realmId, "");
    };
    expect(realm).to.throw("secondLevelDomain can not be empty or undefined");
  });

  it("should not register an existing realmId with other domain", function() {
    const realm = function() {
      Realm.register(existingRealmID, secondLevelDomain);
    };
    expect(realm).to.throw(
      "RealmId oc1 is already registered with  oraclecloud.com It cannot be re-registered with a different secondLevelDomain"
    );
  });
});
