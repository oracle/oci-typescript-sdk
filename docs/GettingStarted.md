# Getting Started

This topic describes how to install and configure the Oracle Cloud Infrastructure SDK for TypeScript.

## Downloading the SDK from GitHub

You can download the SDK for TypeScript as a zip archive from [GitHub](https://google.com). It contains the SDK, all of its dependencies, documentation, and examples.

## The SDK for TypeScript is available on NPM

The SDK for TypeScript is available on [NPM](https://google.com)

To use the Oracle Cloud Infrastructure SDK for TypeScript/JavaScript in your project, import any service from ./oci-typescript-sdk/index.ts. For example:

```TypeScript

// Container Engine

export import containerEngine = require("oci-containerengine");

// Core

export import core = require("oci-core");

// Database

export import database = require("oci-database");

```

## Configuring the SDK

The SDK services need two types of configuration: credentials and client-side HTTP settings.

### Configuring Credentials

First, you need to set up your credentials and config file. For instructions, see [SDK and CLI Configuration File](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/sdkconfig.htm).

Using the default configuration location ~/.oci/config you can use ConfigFileReader to load any profile. By default, the 'DEFAULT' profile is used:

```TypeScript

import { ConfigFileReader } from 'oci-common/lib/config-file-reader';
const config = ConfigFileReader.parseDefault(null);
const profile = config.accumulator.configurationsByProfile.get("DEFAULT");

const configurationFilePath = '~/.oci/config';
const configProfile = 'DEFAULT';
const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  configProfile
);
```

```JavaScript
import { ConfigFileReader } from 'oci-common/lib/config-file-reader';
const config = ConfigFileReader.parseDefault(null);
const profile = config.accumulator.configurationsByProfile.get("DEFAULT");

const configurationFilePath = '~/.oci/config';
const configProfile = 'DEFAULT';
const provider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  configProfile
);

```

### Configuring Custom Options

In the config file, you can insert custom key-value pairs that you define, and then reference them as necessary. For example, you could specify a frequently used compartment ID in the config file like so:

    [DEFAULT]
    user=ocid1.user.oc1..aaaaaaaat5nvwcna5j6aqzjcmdy5eqbb6qt2jvpkanghtgdaqedqw3rynjq
    fingerprint=20:3b:97:13:55:1c:5b:0d:d3:37:d8:50:4e:c5:3a:34
    key_file=~/.oci/oci_api_key.pem
    tenancy=ocid1.tenancy.oc1..aaaaaaaaba3pv6wkcr4jqae5f15p2bcmdyt2j6rx32uzr4h25vqstifsfdsq
    customCompartmentId=ocid1.compartment.oc1..aaaaaaaayzfqeibduyox6iib3olcmdar3ugly4fmameq4h7lcdlihrvur7xq

Then you can retrieve the value like so:

    TypeScript:
    const customCompartmentId = profile?.get("customCompartmentId") || "";
    or for JavaScript:
    const customCompartmentId = profile.get("customCompartmentId") || "";
