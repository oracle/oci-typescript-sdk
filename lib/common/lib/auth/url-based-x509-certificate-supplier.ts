/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
import { parsePrivateKey, parseCertificate, Certificate, PrivateKey } from "sshpk";
import { FetchHttpClient } from "../http";
import X509CertificateSupplier from "./models/X509-certificate-supplier";
import CertificateAndPrivateKeyPair from "./certificate-and-privatekey-pair";
import Refreshable from "./models/refreshable";
import { getStringFromResponseBody } from "../helper";
import CircuitBreaker from "../circuit-breaker";

/**
 * A class that retrieves certificate based on metadata service url
 */

export class URLBasedX509CertificateSupplier implements X509CertificateSupplier, Refreshable {
  private certificateAndKeyPair!: CertificateAndPrivateKeyPair;
  constructor(
    private certificateDetails: ResourceDetails,
    private privateKeyDetails: ResourceDetails | null,
    private privateKeyPassphraseCharacters: string | null
  ) {}

  /**
   * So far we don't care whether the certificate is current or not.
   * @return false always.
   */
  isCurrent(): boolean {
    return false;
  }

  /**
   * A method to refresh the X509 certificate and return the certificate
   * @returns Promise<URLBasedX509CertificateSupplier>
   */
  async refresh(): Promise<URLBasedX509CertificateSupplier> {
    const certificate: Certificate = await this.readRawCertificate(this.certificateDetails);
    const privateKey: PrivateKey | null = await this.readPrivateKey(
      this.privateKeyDetails,
      this.privateKeyPassphraseCharacters
    );
    this.certificateAndKeyPair = new CertificateAndPrivateKeyPair(certificate, privateKey);
    return this;
  }

  async readRawCertificate(certificateDetails: ResourceDetails): Promise<Certificate> {
    const certificateStream = await certificateDetails.send();
    // Convert responseStream to actual certificate string
    const certificateString = await getStringFromResponseBody(certificateStream.body);
    const certificate = parseCertificate(certificateString, "pem");
    return certificate;
  }

  async readPrivateKey(
    privateKeyResourceDetails: ResourceDetails | null,
    privateKeyPassphrase: string | null
  ): Promise<PrivateKey | null> {
    let options = {};
    if (!privateKeyResourceDetails || !privateKeyResourceDetails.getUrl()) {
      return null;
    }
    if (privateKeyPassphrase) {
      Object.assign(options, { passphrase: privateKeyPassphrase });
    }
    try {
      const privateKeyStream = await privateKeyResourceDetails.send();
      // Convert privateKeyStream to privateKey string
      const privateKeyString = await getStringFromResponseBody(privateKeyStream.body);
      const privateKey = parsePrivateKey(privateKeyString, "auto", options);
      return privateKey;
    } catch (e) {
      throw Error(`Unable to obtain private key, error: , ${e}`);
    }
  }

  getCertificateAndKeyPair(): CertificateAndPrivateKeyPair {
    return this.certificateAndKeyPair;
  }
}

export class ResourceDetails {
  constructor(
    private url: string,
    private headers: Headers,
    private circuitBreaker: CircuitBreaker
  ) {}

  async send(): Promise<Response> {
    const httpClient = new FetchHttpClient(null, this.circuitBreaker);
    const response = await httpClient.send({
      uri: this.url,
      method: "GET",
      headers: this.headers
    });
    return response;
  }

  getUrl(): string {
    return this.url;
  }
}
