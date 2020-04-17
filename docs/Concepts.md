# Concepts

This topic explains some of the key concepts for using the Oracle Cloud Infrastructure SDK for TypeScript and JavaScript.

## Raw Requests

Raw requests are useful, and in some cases necessary. Typical use cases are: when using your own HTTP client, making a OCI-authenticated request to an alternate endpoint, and making a request to a OCI API that is not currently supported in the SDK. The SDK for TypeScript exposes the DefaultRequestSigner class that you can use to create an instance and call signHttpRequest.

The [Raw Request](https://google.com) example on GitHub shows how to create an instance of DefaultRequestSigner and call signHttpRequest

## Setting Endpoints

Service endpoints can be set in three ways.

- Set .endpoint = '<YOUR_ENDPOINT>' on the service instance. This lets you specify a full host name (for example, https://www.example.com).

- Set .region = '<YOUR_REGION_ID> on the service instance. This selects the appropriate host name for the service for the given region. However, if the service is not supported in the region you set, the TypeScript SDK returns an error. You can refer to the list of regionIds in: ./oci-typescript-sdk/common/lib/region.ts

- Pass the region in the configuration file. For more information, see SDK and CLI Configuration File.

Note that a service instance cannot be used to communicate with different regions. If you need to make requests to different regions, create multiple service instances.

## New Region Support

If you are using a version of the SDK released prior to the announcement of a new region, you can use a workaround to reach it.

A region is a localized geographic area. For more information on regions and how to identify them, see [Regions and Availability Domains](https://docs.cloud.oracle.com/en-us/iaas/Content/General/Concepts/regions.htm).

A _realm_ is a set of regions that share entities. You can identify your realm by looking at the domain name at the end of the network address. For example, the realm for xyz.abc.123.oraclecloud.com is oraclecloud.com.

You must first call _Region.register_ to register the new region, and then you can set the region by either using the configuration file or by set .region = <Your_new_registered_region>.

## oraclecloud.com Realm

For regions in the _oraclecloud.com_ realm, you can pass new region names just as you would pass ones that are already defined in the [Region](https://google.com/OracleTypeScriptSDKClassRegionAPIPage) enum for your SDK version.

To set the region:

    identityClient = await new identity.IdentityClient({ authenticationDetailsProvider: provider });
    identityClient.region = 'us-phoenix-1'

## Other realms

For regions in realms other than oraclecloud.com, you can use the following workarounds to reach new regions with earlier versions of the SDK.

To set the endpoint:

    // Instantiate an identity client
    identityClient = await new identity.IdentityClient({ authenticationDetailsProvider: provider });
    identityClient.endpoint = 'https://<your_endpoint>.com'

## Paginated Responses

Sometimes it is better to lazy load a result. In order to retrieve more data from lazy load, you have to continue to make calls to the list operation, passing in the value of the most recent response's next token. The pagination module allows you:

- Eagerly load all possible results from a list call
- Lazily load results

For an example on how to use these functions, please check [GitHub](https://google.com)

## Exception Handling

When handling an exception, you can get more information about the HTTP request that caused it, such as the status code or timeout. You can also get the request ID when handling an exception by looking at the opcRequestId property of the error object.

    try {
      const response = await identityClient.listAllUsersResponses(listUserReq);
    } catch (err) {
      console.log('requestId: ', err.opcRequestId);
    }
