/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import "isomorphic-fetch";
import common = require("oci-common");
import * as identity from "oci-identity";
import { HttpRequest } from "oci-common";

// Please input your region here. i.e: common.Region.US_PHOENIX_1
const region = common.Region.US_PHOENIX_1;

class ConsoleFetchHttp implements common.HttpClient {
  public async send(req: HttpRequest): Promise<Response> {
    // Just call console.fetch API which do http signing and send request.
    // Here we just use some mock data
    const user: identity.models.User = {
      id: "ocid1.user.oc1..aaaaaaaa63m3bviigc4tehztp2r6gdvnvr3cq3ybvz4amxliykhz2iahgczq",
      compartmentId:
        "ocid1.tenancy.oc1..aaaaaaaa5nfwo53cezleyy6t73v6rn6knhu3molvptnl3kcq34l5zb7ptiaq",
      name: "Mock User1",
      description: "Mock USer",
      timeCreated: new Date(),
      lifecycleState: identity.models.User.LifecycleState.Active,
      isMfaActivated: true
    };

    return new Response(JSON.stringify([user]), {
      headers: {
        "opc-request-id": "/2B46C9E93A8041228D2FE96D8C93D4A6/BDEBB2FE90D6F43F6340821757496006"
      },
      status: 200
    });
  }
}

const httpClient: ConsoleFetchHttp = new ConsoleFetchHttp();
const identityClient = new identity.IdentityClient({ httpClient: httpClient });
identityClient.region = region;

const listUsersRequest: identity.requests.ListUsersRequest = {
  compartmentId:
    "ocid1.compartment.oc1..aaaaaaaazpbmt2urchrvht3nie37sjksf5syfr5nrfzjl4ut2lzf665ys3ba"
};

(async () => {
  try {
    const listUsersResponse = await identityClient.listUsers(listUsersRequest);
    console.log(listUsersResponse);
  } catch (err) {
    console.log(err);
  }
})();
