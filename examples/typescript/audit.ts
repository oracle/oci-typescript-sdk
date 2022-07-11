/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/* This script retrieves all audit logs across an Oracle Cloud Infrastructure Tenancy.
   for a timespan defined by startTime and endTime.
   This sample script retrieves Audit events for last 5 days.
   This script will work at a tenancy level only.
*/

import * as identity from "oci-identity";
import * as audit from "oci-audit";
import * as common from "oci-common";

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();

const compartmentId = provider.getTenantId();

let identityClient: identity.IdentityClient;
let auditClient: audit.AuditClient;

export async function getSubscriptionRegions(tenancyId: string) {
  // To retrieve the list of all available regions.
  const listRegionSubscriptionsRequest: identity.requests.ListRegionSubscriptionsRequest = {
    tenancyId
  };

  const regions = await identityClient.listRegionSubscriptions(listRegionSubscriptionsRequest);

  return regions.items.map(region => {
    return region.regionName;
  });
}

export async function getCompartments(tenancyId: string) {
  // Retrieve the list of compartments under the tenancy.
  const compartmentOcids: string[] = [tenancyId];
  const listCompartmentsRequest: identity.requests.ListCompartmentsRequest = {
    compartmentId: tenancyId
  };
  const compartments = await identityClient.listCompartments(listCompartmentsRequest);
  for (let i = 0; i < compartments.items.length; i++) {
    compartmentOcids.push(compartments.items[i].id);
  }
  return compartmentOcids;
}

async function getAuditEvents(
  audit: audit.AuditClient,
  compartmentOcids: string[],
  startTime: Date,
  endTime: Date
) {
  /*
    Get events iteratively for each compartment defined in 'compartmentsOcids'
    for the region defined in 'audit'.
    This method eagerly loads all audit records in the time range and it does
    have performance implications of lot of audit records.
    Ideally, the generator method in oci.pagination should be used to lazily
    load results.

      startTime: ("2020-01-15T11:30:00Z" as unknown) as Date,
      endTime: ("2020-01-20T11:30:00Z" as unknown) as Date
  */
  const listOfAuditEvents = [];
  for (let i = 0; i < compartmentOcids.length; i++) {
    const listEventsRequest: audit.requests.ListEventsRequest = {
      compartmentId: compartmentOcids[i],
      startTime: startTime,
      endTime: endTime
    };
    try {
      const response = await audit.listEvents(listEventsRequest);
      listOfAuditEvents.push(response.items);
    } catch (err) {
      // console.log("what is err: ", err);
    }
  }
  return listOfAuditEvents;
}

(async () => {
  identityClient = new identity.IdentityClient({ authenticationDetailsProvider: provider });
  auditClient = new audit.AuditClient({ authenticationDetailsProvider: provider });

  const endTime: Date = new Date();
  const offset = new Date().setDate(new Date().getDate() - 5);
  const startTime: Date = new Date(offset);

  const regions = await getSubscriptionRegions(compartmentId);

  const compartments = await getCompartments(compartmentId);

  for (let region of regions) {
    const x = common.Region.fromRegionId(region);
    auditClient.region = x;
    const auditEvents = await getAuditEvents(auditClient, compartments, startTime, endTime);
    console.log("auditEvent: ", auditEvents);
  }
})();
