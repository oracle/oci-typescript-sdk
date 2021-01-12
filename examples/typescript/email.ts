/*
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/*
  This script provides a basic example of how to use the Email Service in the TypeScript SDK.
  This will demonstrate:
   * Creating, retrieving, updating, listing, and deleting email senders
   * Creating, retrieving, listing, and deleting email suppressions
   * Creating, updating, listing, and deleting SMTP credentials.
     See https://docs.cloud.oracle.com/iaas/Content/Email/Tasks/configuresmtpconnection.htm for more
     information on sending emails with your IAM user

 This script accepts four arguments:
   * The compartment ID where email senders will be created
   * The target compartmentId to change compartments
   * The address of the email sender
   * The address of the email suppression

 Note that email senders are created in the compartment which you specify, but the suppressions are always created at the tenancy
 level. The tenancy will be read from your configuration file.
*/

import identity = require("oci-identity");
import common = require("oci-common");
import email = require("oci-email");

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();

const args = process.argv.slice(2);
if (args.length !== 4) {
  console.error(
    "Unexpected number of arguments received. Consult the script header comments for expected arguments"
  );
  process.exit(-1);
}

const compartmentId = args[0];
const targetCompartmentId = args[1];
const senderEmailAddress = args[2];
const suppressionEmailAddress = args[3];

const emailClient = new email.EmailClient({ authenticationDetailsProvider: provider });
const identityClient = new identity.IdentityClient({ authenticationDetailsProvider: provider });

async function delay(s: number) {
  return new Promise(resolve => setTimeout(resolve, s * 1000));
}

async function createEmailSender(compartmentId: string, senderEmailAddress: string) {
  const request: email.requests.CreateSenderRequest = {
    createSenderDetails: {
      compartmentId: compartmentId,
      emailAddress: senderEmailAddress
    }
  };

  // Try to add a generic waiter here or use delay of 2min 30s
  const response = await emailClient.createSender(request);
  await delay(240); // Give some time to createSender.
  console.log("Created Sender: ", response);
  return response;
}

async function updateEmailSender(sender: email.responses.CreateSenderResponse) {
  const request: email.requests.UpdateSenderRequest = {
    senderId: sender.sender.id!,
    updateSenderDetails: {
      freeformTags: {
        department: "Finance"
      }
    }
  };
  const response = await emailClient.updateSender(request);
  console.log("Updated Sender with freeformTags: ", response.sender.freeformTags);
  return response;
}

async function changeSenderCompartment(sender: email.responses.CreateSenderResponse) {
  const request: email.requests.ChangeSenderCompartmentRequest = {
    senderId: sender.sender.id!,
    changeSenderCompartmentDetails: {
      compartmentId: targetCompartmentId
    }
  };
  const response = await emailClient.changeSenderCompartment(request);
  console.log(`Change sender compartment to: ${targetCompartmentId}`);
  return response;
}

async function listAllSender(compartmentId: string, emailAddress: string) {
  const request: email.requests.ListSendersRequest = {
    compartmentId: compartmentId
  };
  if (emailAddress) {
    request["emailAddress"] = emailAddress;
  }

  const senders = await common.paginatedRecordsWithLimit(request, req =>
    emailClient.listSenders(request)
  );
  console.log("Listing all senders: ");
  senders.forEach(sender => {
    console.log("Sender: ", sender);
  });
  return;
}

async function createSuppresion(compartmentId: string, emailAddress: string) {
  const request: email.requests.CreateSuppressionRequest = {
    createSuppressionDetails: {
      compartmentId: compartmentId,
      emailAddress: emailAddress
    }
  };
  const response = await emailClient.createSuppression(request);
  console.log("Created suppression: ", response.suppression);
  return response;
}

async function listAllSuppressions(compartmentId: string, emailAddress: string) {
  const request: email.requests.ListSuppressionsRequest = {
    compartmentId: compartmentId
  };
  if (emailAddress) {
    request["emailAddress"] = emailAddress;
  }
  const suppressions = await common.paginatedRecordsWithLimit(request, req =>
    emailClient.listSuppressions(request)
  );
  console.log("List suppressions: ");
  suppressions.forEach(suppression => {
    console.log("Suppression: ", suppression);
  });
}

async function deleteSender(sender: email.responses.CreateSenderResponse) {
  const request: email.requests.DeleteSenderRequest = {
    senderId: sender.sender.id!
  };
  await emailClient.deleteSender(request);
  console.log("Deleted Sender.");
  return;
}

async function deleteSuppression(suppression: email.responses.CreateSuppressionResponse) {
  const request: email.requests.DeleteSuppressionRequest = {
    suppressionId: suppression.suppression.id!
  };
  await emailClient.deleteSuppression(request);
  console.log("Deleted Supression.");
  return;
}

async function createSmtpCredential() {
  const request: identity.requests.CreateSmtpCredentialRequest = {
    userId: provider.getUser(),
    createSmtpCredentialDetails: {
      description: "New Credentials"
    }
  };
  const smptCredential = await identityClient.createSmtpCredential(request);
  console.log("Created smptCredential: ", smptCredential);
  return smptCredential;
}

async function updateSmtpCredential(
  smptCredential: identity.responses.CreateSmtpCredentialResponse
) {
  const request: identity.requests.UpdateSmtpCredentialRequest = {
    userId: provider.getUser(),
    smtpCredentialId: smptCredential.smtpCredential.id!,
    updateSmtpCredentialDetails: {
      description: "Updated Credentials"
    }
  };
  const updatedSmtpCredential = await identityClient.updateSmtpCredential(request);
  console.log("Updated SMTP Credential: ", updatedSmtpCredential.smtpCredentialSummary);
  return;
}

async function listSmtpCredentials() {
  const request: identity.requests.ListSmtpCredentialsRequest = {
    userId: provider.getUser()
  };
  const smtpCredentialsResponse = await identityClient.listSmtpCredentials(request);
  console.log("SMTP Credentials for user: ", smtpCredentialsResponse);
  return;
}

async function deleteSmtpCredential(
  smptCredential: identity.responses.CreateSmtpCredentialResponse
) {
  const request: identity.requests.DeleteSmtpCredentialRequest = {
    userId: provider.getUser(),
    smtpCredentialId: smptCredential.smtpCredential.id!
  };
  await identityClient.deleteSmtpCredential(request);
  console.log("Deleted SMTP Credential");
  return;
}

(async () => {
  // Create a sender
  const sender = await createEmailSender(compartmentId, senderEmailAddress);

  // Update sender
  await updateEmailSender(sender);

  // Change sender compartment
  await changeSenderCompartment(sender);

  // List all senders in a compartment
  await listAllSender(compartmentId, "");

  // List all senders in a compartment filtered by email address
  await listAllSender(compartmentId, senderEmailAddress);

  // Create Suppression
  const suppression = await createSuppresion(compartmentId, suppressionEmailAddress);

  // List Suppression in a compartment
  await listAllSuppressions(compartmentId, "");

  // List Suppression in a compartment filtered by email address
  await listAllSuppressions(compartmentId, suppressionEmailAddress);

  // Delete Sender
  await deleteSender(sender);

  // Delete Suppression
  await deleteSuppression(suppression);

  /*
   * In order to send email, we'll need to create an SMTP credential associated with an IAM user. More
   * information on sending email can be found here: https://docs.cloud.oracle.com/Content/Email/Tasks/configuresmtpconnection.htm
   *
   * Note, also, that an IAM user can only have two active SMTP credentials at any time
   * Also the password for the SMTP credential is ONLY available in the create response, so you should store/save this as it won't be retrievable later
   */
  const smtpCredential = await createSmtpCredential();

  // Update the description of an SMTP credential
  await updateSmtpCredential(smtpCredential);

  // List the credentials for a user
  await listSmtpCredentials();

  // Delete SMTP credential
  await deleteSmtpCredential(smtpCredential);
})();
