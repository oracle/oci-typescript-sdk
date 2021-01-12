/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 * The purpose of this file is to help taken in the delegated task of assigning a true auth provider to the
 * authentication provider.
 */
import auth = require("../auth");
import InstancePrincipalsAuthenticationDetailsProviderBuilder from "../instance-principals-authentication-detail-provider";

export async function delegateAuthProvider(
  authenticationDetailsProvider: auth.AuthenticationDetailsProvider
): Promise<auth.AuthenticationDetailsProvider | null> {
  // Always make the check to see if there is a true authenticationDetailsProvider to use
  let provider = null;
  if (authenticationDetailsProvider.getProvider && authenticationDetailsProvider.getProvider()) {
    provider = authenticationDetailsProvider.getProvider!();
  } else if (
    authenticationDetailsProvider.getAuthType &&
    authenticationDetailsProvider.getAuthType()
  ) {
    // Check if authenticationDetialsProvider contain a auth_type,
    // if so, we want to set and use the appropriate auth provider.
    const authType = authenticationDetailsProvider.getAuthType();
    if (authType === "instance_principal") {
      provider = await new InstancePrincipalsAuthenticationDetailsProviderBuilder().build();
      authenticationDetailsProvider.setProvider!(provider);
    }
  }
  return provider;
}
