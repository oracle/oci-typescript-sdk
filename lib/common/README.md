# OCI NodeJS client for Common utilities.

## Requirements

To use this module, you must have the following:

- An Oracle Cloud Infrastructure account.
- A user created in that account, in a group with a policy that grants the desired permissions. This can be a user for yourself, or another person/system that needs to call the API. For an example of how to set up a new user, group, compartment, and policy, see [Adding Users](https://docs.cloud.oracle.com/en-us/iaas/Content/GSG/Tasks/addingusers.htm). For a list of typical policies you may want to use, see [Common Policies](https://docs.cloud.oracle.com/en-us/iaas/Content/Identity/Concepts/commonpolicies.htm).
- A key pair used for signing API requests, with the public key uploaded to Oracle. Only the user calling the API should be in possession of the private key. For more information, see [Configuring Credentials](https://docs.cloud.oracle.com/en-us/iaas/Content/API/SDKDocs/typescriptsdkgettingstarted.htm#Configure)

## Installing

Use the following command to install this module:

```
npm install oci-common
```

Alternatively you can git clone this repo.
