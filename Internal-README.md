# This is TypeScript SDK for Oracle Cloud Infrastructure.

### Build Typescript

After you have cloned the repo on your local, follow these steps.

1.  `cd oci-typescript-sdk`
2.  Run the foillowing command to se the registry to point to our artifactory.

        `npm config set registry https://artifactory.oci.oraclecorp.com/api/npm/global-release-npm`
        `npm config set @types:registry https://registry.npmjs.org/`

3.  Run `npm install` . This will install all the required dependency mentioned in _package.json_
4.  `npm run build` . This will build the code and run the unit tests inside /tests folder.
5.  `npm run integration-tests` . This will run integration tests residing in /integration-test folder. Before running this make sure testing-service is running onnyour local machine. To find how to run testing-service on your local follow this documentation
    _https://confluence.oci.oraclecorp.com/display/DEX/OCI+Testing+Service+Usage#OCITestingServiceUsage-RunOCITestingService_

### Installing package dependency on nightly builds

    npm install pkg-name@version --registry https://artifactory.oci.oraclecorp.com/api/npm/global-dev-npm

### Testing the SDK Locally without publlishing it.

To Test the common package locally before publishing it, run command

    npm run common

We have added a hook (`rm-local-modules`) that removes refrences to all local packages and installs the common module afresh. Running this command will remove `oci-common` from `node_modules/` folder and point oci-common to the local package. This makes sure you always have latest change included in your module. <pre> <b>Make sure you do not commit the pakcage.json file which points oci-common to "file:./lib/common" </b> </pre>

### Installing the SDK

To install oci-sdk from artifactory, run following commands on terminal

    npm config set registry https://artifactory.oci.oraclecorp.com/api/npm/global-release-npm
    npm config set @types:registry https://registry.npmjs.org/
    npm install oci-sdk

### Developer Tools

    Install extension `Prettier - Code formatter` for VScode. This will prettify the code while saving the file.
    Install `Mocha Sidebar` for running/debugging integration tests.

### Browser Tests

    We run unit tests in browser to make sure all functionalities are supported for browser too. We use Karma to run browser tests. To add any test in browser,
      1. Add browser test file inside tests/ folder for that service.
      2. For browser-only tests, follow the naming convention as `browser*.spec.ts`
      3. For Node-only tests, follow the naming convention as `node*.spec.ts`
      4. Make sure an entry in webpack.conf.browser.js for corresponding service exists, Add if it does not. `for eg {"service": "./lib/service/tests/index.ts"}`
      5. npm run browser-test will run all unit tests on browser.(Chrome for now).
      6. npm run node-test will run all unit tests on Node.
      7. npm run all-test will run both.

### Code Generation

In the event the swagger specs are updated, or you've modified the codegen tool/templates, you can regenerate all of the APIs/models/impls using the '_codegen_' profile in the 'codegen' module:

    # install bmc-sdk-swagger from the following branch which is still kind of old and not catch the latest master branch
    # https://bitbucket.oci.oraclecorp.com/projects/SDK/repos/bmc-sdk-swagger/browse?at=refs%2Fheads%2Fdayfu-typescript-prototype
    mvn clean install -DskipTests


    cd codegen
    mvn process-sources -Pcodegen

If you only want to run codegen on a specific service, do

    cd codegen/<service>-codegen
    mvn process-sources -Pcodegen

As now you should see the following services can be generated:

```
[INFO]
[INFO] Oracle Cloud Infrastructure SDK - Codegen Template 0.1.0-preview1-SNAPSHOT SUCCESS [  0.642 s]
[INFO] Oracle Cloud Infrastructure SDK - Audit Codegen .... SUCCESS [  8.441 s]
[INFO] Oracle Cloud Infrastructure SDK - Container Engine Codegen SUCCESS [  2.741 s]
[INFO] Oracle Cloud Infrastructure SDK - Core Codegen ..... SUCCESS [ 10.776 s]
[INFO] Oracle Cloud Infrastructure SDK - Database Codegen . SUCCESS [  4.534 s]
[INFO] Oracle Cloud Infrastructure SDK - DNS Codegen ...... SUCCESS [  2.598 s]
[INFO] Oracle Cloud Infrastructure SDK - Email Codegen .... SUCCESS [  1.180 s]
[INFO] Oracle Cloud Infrastructure SDK - File Storage Codegen SUCCESS [  1.673 s]
[INFO] Oracle Cloud Infrastructure SDK - Identity Codegen . SUCCESS [  4.385 s]
[INFO] Oracle Cloud Infrastructure SDK - Identity Data Plane Codegen SUCCESS [  0.762 s]
[INFO] Oracle Cloud Infrastructure SDK - Load Balancer Codegen SUCCESS [  2.326 s]
[INFO] Oracle Cloud Infrastructure SDK - Key Management Codegen SUCCESS [  0.870 s]
[INFO] Oracle Cloud Infrastructure SDK - Metering Codegen . SUCCESS [  0.826 s]
[INFO] Oracle Cloud Infrastructure SDK - Object Storage Codegen SUCCESS [  1.980 s]
[INFO] Oracle Cloud Infrastructure SDK - Resource Query Codegen SUCCESS [  0.730 s]
[INFO] Oracle Cloud Infrastructure SDK - Resourcemanager Codegen SUCCESS [  1.169 s]
[INFO] Oracle Cloud Infrastructure SDK - Monitoring Codegen SUCCESS [  1.659 s]
[INFO] Oracle Cloud Infrastructure SDK - Work Requests Codegen SUCCESS [  0.719 s]
[INFO] Oracle Cloud Infrastructure SDK - Ons Codegen ...... SUCCESS [  1.003 s]
[INFO] Oracle Cloud Infrastructure SDK - Healthchecks Codegen SUCCESS [  1.621 s]
[INFO] Oracle Cloud Infrastructure SDK - Cloud Events Codegen SUCCESS [  1.126 s]
[INFO] Oracle Cloud Infrastructure SDK - Streaming Codegen  SUCCESS [  1.095 s]
[INFO] Oracle Cloud Infrastructure SDK - Cache Codegen .... SUCCESS [  0.962 s]
[INFO] Oracle Cloud Infrastructure SDK - Marketplace Codegen SUCCESS [  1.192 s]
[INFO] Oracle Cloud Infrastructure SDK - Autoscaling Codegen SUCCESS [  0.958 s]
[INFO] Oracle Cloud Infrastructure SDK - Usage Codegen .... SUCCESS [  0.582 s]
[INFO] Oracle Cloud Infrastructure SDK - Announcements Service Codegen SUCCESS [  0.757 s]
[INFO] Oracle Cloud Infrastructure SDK - Waas Codegen ..... SUCCESS [  2.918 s]
[INFO] Oracle Cloud Infrastructure SDK - Batch Codegen .... SUCCESS [  1.828 s]
[INFO] Oracle Cloud Infrastructure SDK - Functions Codegen  SUCCESS [  1.385 s]
[INFO] Oracle Cloud Infrastructure SDK - Budget Codegen ... SUCCESS [  0.914 s]
[INFO] Oracle Cloud Infrastructure SDK - Datasafe Codegen . FAILURE [  0.324 s]
[INFO] Oracle Cloud Infrastructure SDK - Limits Codegen 0.1.0-preview1-SNAPSHOT SKIPPED
```
