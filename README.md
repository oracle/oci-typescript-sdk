# Oracle Cloud Infrastructure SDK for TypeScript and JavaScript

[![wercker status](https://app.wercker.com/status/09bc4818e7b1d70b04285331a9bdbc41/s/master "wercker status")](https://app.wercker.com/project/byKey/09bc4818e7b1d70b04285331a9bdbc41)

This is Oracle Cloud Infrastructure SDK for TypeScript and JavaScript. This project is open source and maintained by Oracle Corp.
The home page for the project is [Oracle Cloud Infrastructure SDK for TypeScript and JavaScript](https://github.com/oracle/oci-typescript-sdk/).

## Installation

Use the following command to install this SDK:

```
npm install oci-sdk
```

Alternatively you can git clone this repo.

## Working with the SDK for TypeScript and JavaScript

To start working with the SDK for TypeScript and JavaScript, you import the service package, create a client, and then use that client to make calls. [Refer to examples section](https://github.com/oracle/oci-typescript-sdk/tree/master/examples) for examples on how to make requests.

### Configuring

Before using the SDK, set up a config file with the required credentials. See [SDK and Tool Configuration](https://docs.cloud.oracle.com/Content/API/Concepts/sdkconfig.htm) for instructions.

## Organization of the SDK

The `oci-typescript-sdk` contains the following:

- **Service packages**: All packages except `common` and any other package found inside `lib`. These packages represent
  the Oracle Cloud Infrastructure services supported by the SDK for TypeScript and JavaScript. Each package represents a service.
  These packages include methods to interact with the service, structs that model
  input and output parameters, and a client struct that acts as receiver for the above methods.

- **Common package**: Found in the `common` directory. The common package provides supporting functions and structs used by service packages.
  Includes HTTP request/response (de)serialization, request signing, JSON parsing, pointer to reference and other helper functions. Most of the functions
  in this package are meant to be used by the service packages.

## Examples

Examples can be found [in the examples section](https://github.com/oracle/oci-typescript-sdk/tree/master/examples)

## Documentation

Full documentation can be found [on the sdk for typescript and javascript documentation site](https://docs.cloud.oracle.com/en-us/iaas/Content/API/SDKDocs/typescriptsdk.htm).

## Versions Supported

The SDK for TypeScript and JavaScript currently supports NodeJS version 14, 16, 18, 20 and TypeScript version 4.1.3.

## Node & Browser Support

The SDK for TypeScript and JavaScript currently supports NodeJS but does not have browser support.

## Help

- The [Issues](https://github.com/oracle/oci-typescript-sdk/issues) page of this GitHub repository.
- [Stack Overflow](https://stackoverflow.com/), use the [oracle-cloud-infrastructure](https://stackoverflow.com/questions/tagged/oracle-cloud-infrastructure) and [oci-typescript-sdk](https://stackoverflow.com/questions/tagged/oci-typescript-sdk) tags in your post.
- [Developer Tools](https://community.oracle.com/community/cloud_computing/bare-metal/content?filterID=contentstatus%5Bpublished%5D~category%5Bdeveloper-tools%5D&filterID=contentstatus%5Bpublished%5D~objecttype~objecttype%5Bthread%5D) section of the Oracle Cloud forums.
- [My Oracle Support](https://support.oracle.com).

## Contributing

`oci-typescript-sdk` welcomes contributions from the community. Before submitting a pull request, please [review our contribution guide](./CONTRIBUTING.md)

Oracle gratefully acknowledges the contributions to oci-typescript-sdk that have been made by the community.

## Security

Please consult the [security guide](./SECURITY.md) for our responsible security vulnerability disclosure process

## License

Copyright (c) 2020, Oracle and/or its affiliates. All rights reserved.
This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl
or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.

See [LICENSE](https://github.com/oracle/oci-typescript-sdk/tree/master/LICENSE.txt) for more details.

## Changes

See [CHANGELOG](https://github.com/oracle/oci-typescript-sdk/tree/master/CHANGELOG.md).

## Known Issues

- You can find information on any known issues with the SDK at [Oracle Cloud Infrastructure Known Issues](https://docs.cloud.oracle.com/en-us/iaas/Content/knownissues.htm) and under the [Issues](https://github.com/oracle/oci-typescript-sdk/issues) tab of this project's GitHub repository.
- JavaScript numbers have rounding issues for number greater than Number.MAX_SAFE_INTEGER, APIs with responses that contain number greater than Number.MAX_SAFE_INTEGER may result in rounding issues.
