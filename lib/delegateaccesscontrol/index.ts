/**
 * Oracle Delegate Access Control API
 * Oracle Delegate Access Control allows ExaCC and ExaCS customers to delegate management of their Exadata resources operators outside their tenancies. 
With Delegate Access Control, Support Providers can deliver managed services using comprehensive and robust tooling built on the OCI platform. 
Customers maintain control over who has access to the delegated resources in their tenancy and what actions can be taken. 
Enterprises managing resources across multiple tenants can use Delegate Access Control to streamline management tasks.
Using logging service, customers can view a near real-time audit report of all actions performed by a Service Provider operator. 

 * OpenAPI spec version: 20230801
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as requests from "./lib/request";
import * as models from "./lib/model";
import * as responses from "./lib/response";
import * as client from "./lib/client";
import * as delegateaccesscontrol_waiter from "./lib/delegateaccesscontrol-waiter";
import * as workrequest_waiter from "./lib/workrequest-waiter";

export { models };
export { requests };
export { responses };
export import DelegateAccessControlClient = client.DelegateAccessControlClient;
export import DelegateAccessControlWaiter = delegateaccesscontrol_waiter.DelegateAccessControlWaiter;
export import WorkRequestClient = client.WorkRequestClient;
export import WorkRequestWaiter = workrequest_waiter.WorkRequestWaiter;
