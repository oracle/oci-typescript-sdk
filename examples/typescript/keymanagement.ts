/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import kms = require("oci-keymanagement");
import common = require("oci-common");

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();

/* These examples assume you already have a Vault in ACTIVE state. If you need to create a new Vault, please
 * refer to the createVaultTest method in this file. Please keep in mind that KMS does not support immediate
 * deletion of Vaults because of the high risk; instead, you need to schedule the deletion of a Vault and a
 * retention period of 7-30 days will be enforced before the Vault is deleted. During the retention period, you
 * can cancel the deletion and the Vault will be ACTIVE again. Be careful before creating a Vault to avoid
 * unnecessary expenses.
 *
 *  Please pass in the compartmentId and the vaultId as the first and second argument
 */

const DEFAULT_KEY_LENGTH: number = 32;
const TRANSIENT_STATE_WAIT_TIME_MS: number = 1000 * 60;

let KEY_SHAPE: kms.models.KeyShape = {
  algorithm: kms.models.KeyShape.Algorithm.Aes,
  length: DEFAULT_KEY_LENGTH
};

const args = process.argv.slice(2);
console.log(args);
if (args.length !== 2) {
  console.error(
    "Unexpected number of arguments received. Consult the script header comments for expected arguments"
  );
  process.exit(-1);
}

const compartmentId: string = args[0];
const vaultId: string = args[1];

// Initialize the KMS Clients. KMS has three clients as following:
//      * KmsVaultClient: The client for Vault management
//      * KmsManagementClient: The client for Key management (ControlPlane)
//      * KmsCryptoClient: The client for data encryption and decryption (DataPlane)
const kmsVaultClient = new kms.KmsVaultClient({ authenticationDetailsProvider: provider });
const kmsManagementClient = new kms.KmsManagementClient({
  authenticationDetailsProvider: provider
});
const kmsCryptoClient = new kms.KmsCryptoClient({ authenticationDetailsProvider: provider });

(async () => {
  try {
    // Get the details of the given Vault
    const vault: kms.models.Vault = await getVaultTest(kmsVaultClient, vaultId);

    // The ManagementClient and CryptoClient use Vault specific endpoints; Set them now.
    kmsCryptoClient.endpoint = vault.cryptoEndpoint;
    kmsManagementClient.endpoint = vault.managementEndpoint;

    // Vault Operations
    await updateVaultResetTagsTest(kmsVaultClient, vault.id);
    await delay(TRANSIENT_STATE_WAIT_TIME_MS);

    await updateVaultTest(kmsVaultClient, vault.id);
    await delay(TRANSIENT_STATE_WAIT_TIME_MS);

    await listVaultsTest(kmsVaultClient, compartmentId);
    await scheduleVaultDeletionTest(kmsVaultClient, vault.id);
    // After scheduling deletion, the Vault will stay in SCHEDULING_DELETION state shortly and then
    // transit to PENDING_DELETION state. Wait a bit for the transition to happen.
    console.log("Wait a bit for the deletion scheduling to finish");
    await delay(TRANSIENT_STATE_WAIT_TIME_MS);

    await cancelVaultDeletionTest(kmsVaultClient, vault.id);
    // After cancelling deletion, the Vault will stay in CANCELLING_DELETION state shortly and then
    // transit to ACTIVE state. Wait a bit for the transition to happen.
    console.log("Wait a bit for the deletion cancelling to finish");
    await delay(TRANSIENT_STATE_WAIT_TIME_MS);

    // Management / Key Operations
    const keyId: string = await createKeyTest(kmsManagementClient, compartmentId);
    // After creating a Key, the Key will stay in CREATING state shortly and then
    // transit to ENABLED state. Wait a bit for the transition to happen.
    console.log("Wait a bit for Key creation to finish");
    await delay(TRANSIENT_STATE_WAIT_TIME_MS);

    await getKeyTest(kmsManagementClient, keyId);
    await updateKeyResetTagsTest(kmsManagementClient, keyId);
    await delay(TRANSIENT_STATE_WAIT_TIME_MS);

    await updateKeyTest(kmsManagementClient, keyId);
    await delay(TRANSIENT_STATE_WAIT_TIME_MS);

    await listKeysTest(kmsManagementClient, compartmentId);
    await disableKeyTest(kmsManagementClient, keyId);
    // After disabling a Key, the Key will stay in DISABLING state shortly and then
    // transit to DISABLED state. Wait a bit for the transition to happen.
    console.log("Wait a bit for Key disabling to finish");
    await delay(TRANSIENT_STATE_WAIT_TIME_MS);

    await enableKeyTest(kmsManagementClient, keyId);
    // After enabling a Key, the Key will stay in ENABLING state shortly and then
    // transit to ENABLED state. Wait a bit for the transition to happen.
    console.log("Wait a bit for Key enabling to finish");
    await delay(TRANSIENT_STATE_WAIT_TIME_MS);

    await scheduleKeyDetetionTest(kmsManagementClient, keyId);
    // After scheduling deletion, the Key will stay in SCHEDULING_DELETION state shortly and then
    // transit to PENDING_DELETION state. Wait a bit for the transition to happen.
    console.log("Wait a bit for the deletion scheduling to finish");
    await delay(TRANSIENT_STATE_WAIT_TIME_MS);

    await cancelKeyDetetionTest(kmsManagementClient, keyId);
    // After cancelling deletion, the Key will stay in CANCELLING_DELETION state shortly and then
    // transit to Enabled state. Wait a bit for the transition to happen.
    console.log("Wait a bit for the deletion cancelling to finish");
    await delay(TRANSIENT_STATE_WAIT_TIME_MS);

    await createKeyVersionTest(kmsManagementClient, keyId);
    await delay(TRANSIENT_STATE_WAIT_TIME_MS);
    await listKeyVersionsTest(kmsManagementClient, keyId);

    // Crypto Operations
    const ciphertext: string = await encryptTest(kmsCryptoClient, keyId);
    await decryptTest(kmsCryptoClient, keyId, ciphertext);
    await generateDataEncryptionKeyTest(kmsCryptoClient, keyId);
  } catch (error) {
    console.log("Error Running KMS example");
  }
})();

async function createVaultTest(
  client: kms.KmsVaultClient,
  compartmentId: string
): Promise<kms.models.Vault> {
  console.log("create vault Test");
  const createVaultDetails: kms.models.CreateVaultDetails = {
    compartmentId: compartmentId,
    displayName: " Test-Vault-V1",
    vaultType: kms.models.CreateVaultDetails.VaultType.VirtualPrivate,
    freeformTags: await getSampleFreeformTagData()
  };
  const request: kms.requests.CreateVaultRequest = { createVaultDetails: createVaultDetails };
  const response = await client.createVault(request);
  console.log(" Newly Created Vault");
  return response.vault;
}

async function getVaultTest(client: kms.KmsVaultClient, vault: string): Promise<kms.models.Vault> {
  console.log("GetVault Test: ");
  const getVaultRequest: kms.requests.GetVaultRequest = { vaultId: vault };
  const response = await client.getVault(getVaultRequest);
  console.log("Vault Retrieved: ");
  return response.vault;
}

async function updateVaultResetTagsTest(client: kms.KmsVaultClient, vault: string) {
  console.log("UpdateVault Test: ");
  const freeFormTags: { [key: string]: string } = {};
  const updateVaultDetails: kms.models.UpdateVaultDetails = { freeformTags: freeFormTags };
  const updateVaultRequest: kms.requests.UpdateVaultRequest = {
    updateVaultDetails: updateVaultDetails,
    vaultId: vault
  };
  const response = await client.updateVault(updateVaultRequest);
  console.log("updated Vault" + response.vault);
}

async function updateVaultTest(client: kms.KmsVaultClient, vault: string) {
  console.log("Update Vault Test");
  const freeFormTag: { [key: string]: string } = getSampleFreeformTagData();
  freeFormTag.dummyfreeformkey3 = "dummyfreeformvalue3";
  const updateVaultDetails: kms.models.UpdateVaultDetails = { freeformTags: freeFormTag };
  const request: kms.requests.UpdateVaultRequest = {
    updateVaultDetails: updateVaultDetails,
    vaultId: vault
  };
  const response = await client.updateVault(request);
  console.log(" Update Vault :" + response.vault);
}

async function listVaultsTest(client: kms.KmsVaultClient, compartmentId: string) {
  console.log("list Vault Test");
  const request: kms.requests.ListVaultsRequest = { compartmentId: compartmentId };
  const response = await client.listVaults(request);
  console.log("ListVault completed");
  console.log(response);
}

async function scheduleVaultDeletionTest(client: kms.KmsVaultClient, vaultId: string) {
  console.log("ScheduleVaultDeletionTest");
  const scheduleVaultDetails: kms.models.ScheduleVaultDeletionDetails = {};
  const request: kms.requests.ScheduleVaultDeletionRequest = {
    scheduleVaultDeletionDetails: scheduleVaultDetails,
    vaultId: vaultId
  };
  const response = await client.scheduleVaultDeletion(request);
  console.log("Deletion Scheduled Successfully, Updated Vault:" + response.vault);
}

async function cancelVaultDeletionTest(client: kms.KmsVaultClient, vaultId: string) {
  console.log("CancelVaultDeletion Test");
  const request: kms.requests.CancelVaultDeletionRequest = { vaultId: vaultId };
  const response = await client.cancelVaultDeletion(request);
  console.log("Deletion Cancelled Successfully, Updated Vault: " + response.vault);
}

async function createKeyTest(
  client: kms.KmsManagementClient,
  compartmentId: string
): Promise<string> {
  console.log("create Key Test");
  const createKeyDetails: kms.models.CreateKeyDetails = {
    keyShape: KEY_SHAPE,
    compartmentId: compartmentId,
    displayName: "Test_Key_v1",
    freeformTags: await getSampleFreeformTagData()
  };
  const request: kms.requests.CreateKeyRequest = { createKeyDetails: createKeyDetails };
  const response = await client.createKey(request);
  console.log(" newly created key: " + response.key);
  return response.key.id;
}

async function getKeyTest(client: kms.KmsManagementClient, keyId: string) {
  console.log(" Get Key Test");
  const request: kms.requests.GetKeyRequest = { keyId: keyId };
  const response = await client.getKey(request);
  console.log(" Key Retrieved" + response.key);
}

async function listKeysTest(client: kms.KmsManagementClient, compartmentId: string) {
  console.log(" LstKeys Test");
  const request: kms.requests.ListKeysRequest = { compartmentId: compartmentId };
  const response = await client.listKeys(request);
  console.log("List Keys response");
  for (const key of response.items) {
    console.log(key);
  }
}

async function updateKeyResetTagsTest(client: kms.KmsManagementClient, keyId: string) {
  console.log("Update Key Test");
  const emptyFreeFormTag = {};
  const updateKeyDetails: kms.models.UpdateKeyDetails = {
    displayName: "Test Key V2",
    freeformTags: emptyFreeFormTag
  };
  const request: kms.requests.UpdateKeyRequest = {
    updateKeyDetails: updateKeyDetails,
    keyId: keyId
  };
  const response = await client.updateKey(request);
  console.log("UpdatedKey: " + response.key);
}

async function updateKeyTest(client: kms.KmsManagementClient, keyId: string) {
  console.log(" update Key Test");
  const newFreeFormTags = await getSampleFreeformTagData();
  newFreeFormTags.dummyfreeformkey3 = "dummyfreeformvalue3";
  const updateKeyDetails: kms.models.UpdateKeyDetails = {
    displayName: " Test_Key_V2",
    freeformTags: newFreeFormTags
  };
  const request: kms.requests.UpdateKeyRequest = {
    updateKeyDetails: updateKeyDetails,
    keyId: keyId
  };
  const response = await client.updateKey(request);
  console.log(" updated Key:" + response.key);
}

async function disableKeyTest(client: kms.KmsManagementClient, keyId: string) {
  console.log("disable Key Test");
  const request: kms.requests.DisableKeyRequest = { keyId: keyId };
  const response = await client.disableKey(request);
  console.log("Disabled Key" + response.key);
}

async function enableKeyTest(client: kms.KmsManagementClient, keyId: string) {
  console.log("Enable Key Test");
  const request: kms.requests.EnableKeyRequest = { keyId: keyId };
  const response = await client.enableKey(request);
  console.log("Enabled Key" + response.key);
}

async function cancelKeyDetetionTest(client: kms.KmsManagementClient, keyId: string) {
  console.log(" Cancel Key Deletion Test");
  const request: kms.requests.CancelKeyDeletionRequest = { keyId: keyId };
  const response = await client.cancelKeyDeletion(request);
  console.log("Key Cancelled deletion Successfully, Updated Key:" + response.key);
}

async function scheduleKeyDetetionTest(client: kms.KmsManagementClient, keyId: string) {
  console.log(" Schedule Key Deletion Test");
  const scheduleKeyDeletionDetails: kms.models.ScheduleKeyDeletionDetails = {};
  const request: kms.requests.ScheduleKeyDeletionRequest = {
    keyId: keyId,
    scheduleKeyDeletionDetails: scheduleKeyDeletionDetails
  };
  const response = await client.scheduleKeyDeletion(request);
  console.log("Key Scheduled deletion Successfully, Updated Key:" + response.key);
}

async function createKeyVersionTest(client: kms.KmsManagementClient, keyId: string) {
  console.log("Create Key Version Test");
  const request: kms.requests.CreateKeyVersionRequest = { keyId: keyId };
  const response = await client.createKeyVersion(request);
  console.log(" Newly Created Version " + response.keyVersion);
}

async function listKeyVersionsTest(client: kms.KmsManagementClient, keyId: string) {
  console.log("List Key Version Test");
  const request: kms.requests.ListKeyVersionsRequest = { keyId: keyId };
  const response = await client.listKeyVersions(request);
  console.log(" listKeyVersions Response");
  for (const keyVersion of response.items) {
    console.log(keyVersion);
  }
}

async function encryptTest(client: kms.KmsCryptoClient, keyId: string): Promise<string> {
  console.log("Encrypt Test");
  const plainText: string = " I Love OCI";
  const encryptDataDetails: kms.models.EncryptDataDetails = {
    keyId: keyId,
    plaintext: Buffer.from(plainText).toString("base64"),
    loggingContext: getSampleLoggingContext()
  };
  const request: kms.requests.EncryptRequest = { encryptDataDetails: encryptDataDetails };
  const response = await client.encrypt(request);
  console.log("plain Test" + plainText);
  console.log("Cipher Test:" + response.encryptedData.ciphertext);
  return response.encryptedData.ciphertext;
}

async function decryptTest(client: kms.KmsCryptoClient, keyId: string, ciphertext: string) {
  console.log("Decrypt Test");
  const decryptDataDetails: kms.models.DecryptDataDetails = {
    ciphertext: ciphertext,
    keyId: keyId
  };
  const request: kms.requests.DecryptRequest = { decryptDataDetails: decryptDataDetails };
  const response = await client.decrypt(request);
  console.log("Decrypted Test:" + response.decryptedData.plaintext);
}

async function generateDataEncryptionKeyTest(client: kms.KmsCryptoClient, keyId: string) {
  console.log("GenerateDataEncryptionKey Test");
  const generateKeyDetails: kms.models.GenerateKeyDetails = {
    keyId: keyId,
    keyShape: KEY_SHAPE,
    includePlaintextKey: true,
    loggingContext: getSampleLoggingContext()
  };
  const request: kms.requests.GenerateDataEncryptionKeyRequest = {
    generateKeyDetails: generateKeyDetails
  };
  const response = await client.generateDataEncryptionKey(request);
  console.log("GenerateDataEncryptionKey Response" + response.generatedKey);
}

function getSampleFreeformTagData(): { [key: string]: string } {
  let freeformTags: { [key: string]: string } = {};
  freeformTags.dummyfreeformkey1 = "dummyfreeformvalue1";
  freeformTags.dummyfreeformkey2 = "dummyfreeformvalue2";
  return freeformTags;
}

function getSampleLoggingContext(): { [key: string]: string } {
  let loggingContext: { [key: string]: string } = {};
  loggingContext.loggingContextKey1 = "loggingContextValue1";
  loggingContext.loggingContextKey2 = "loggingContextValue2";
  return loggingContext;
}

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
