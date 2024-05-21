/**
 * MarketplacePrivateOffer API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20220901
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as requests from "./lib/request";
import * as models from "./lib/model";
import * as responses from "./lib/response";
import * as client from "./lib/client";
import * as attachment_waiter from "./lib/attachment-waiter";
import * as offer_waiter from "./lib/offer-waiter";

export { models };
export { requests };
export { responses };
export import AttachmentClient = client.AttachmentClient;
export import AttachmentWaiter = attachment_waiter.AttachmentWaiter;
export import OfferClient = client.OfferClient;
export import OfferWaiter = offer_waiter.OfferWaiter;