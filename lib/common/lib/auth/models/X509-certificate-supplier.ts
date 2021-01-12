/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import CertificateAndPrivateKeyPair from "../certificate-and-privatekey-pair";

/**
 * An interface to provide X509 certificate for a federated client.
 */

export default interface X509CertificateSupplier {
  /**
   * Returns the X509 certificate and private key.  The X509 certificate will always
   * be valid.  The private key may be null for intermediate certificates.  For leaf
   * certificates, the private key will always be valid.
   * @return an object with the certificate and private key pair.
   */
  getCertificateAndKeyPair(): CertificateAndPrivateKeyPair;

  /**
   * optional refresh method.
   * @return the object
   */
  refresh?(): any;
}
