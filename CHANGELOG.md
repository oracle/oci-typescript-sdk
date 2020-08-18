# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## 1.5.1 - 2020-08-18
### Added
- Support for custom boot volume size and other node pool updates in the Container Engine for Kubernetes service
- Support for Data Guard on Exadata Cloud at Customer VM clusters in the Database service
- Support for stopping VM instances after scheduled maintenance or hypervisor reboots in the Compute service
- Support for creating and managing private endpoints in the Data Flow service

## 1.5.0 - 2020-08-11
### Added
- Support for autonomous json databases in the Database service
- Support for cleaning up uncommitted multipart uploads in the Object Storage service
- Support for additional list API filters in the Data Catalog service


### Breaking
- Some unusable region enums were removed from the Support Management service

## 1.4.0 - 2020-08-04
### Added
- Support for calling Oracle Cloud Infrastructure services in the uk-gov-cardiff-1 region
- Support for creating and managing private endpoints in the Data Flow service
- Support for changing instance shapes and restarting nodes in the Big Data service
- Support for additional versions (for example CSQL) in the Big Data service
- Support for creating stacks from compartments in the Resource Manager service
- Support for retry mechanism


### Breaking
- Updated the property of `LifeCycleDetails` to `LifecycleDetails` from the model of `BlockchainPlatformSummary` and `BlockchainPlatformByHostname` in the blockchain service
- Change all enums to pascal case.

## 1.3.0 - 2020-07-28
### Added
- Support for calling Oracle Cloud Infrastructure services in the us-sanjose-1 region
- Support for updating the fault domain and launch options of VM instances in the Compute service
- Support for image capability schemas and schema versions in the Compute service
- Support for 'Patch Now' maintenance runs for autonomous Exadata infrastructure and autonomous container database resources in the Database service
- Support for automatic performance and cost tuning on volumes in the Block Storage service
- Support for Ephemeral Resource Principal


### Breaking
- Removed the accessToken field from the GitlabAccessTokenConfigurationSourceProvider model in the Resource Manager service

## 1.2.4 - 2020-07-21
### Added
- Support for license types on instances in the Content and Experience service

## 1.2.3 - 2020-07-14
### Added
- Support for Instance Principal
- Support for the Blockchain service
- Support for failing over an autonomous database that has Data Guard enabled in the Database service
- Support for switching over an autonomous database that has Data Guard enabled in the Database service
- Support for git configuration sources in the Resource Manager service
- Support for optionally specifying a VCN id on list operations of DHCP options, subnets, security lists, route tables, internet gateways, and local peering gateways in the Networking service

## 1.2.2 - 2020-07-07
### Added
- Support for registering and deregistering autonomous dedicated databases with Data Safe in the Database service
- Support for switching between non-private-endpoints and private endpoints on autonomous databases in the Database service
- Support for returning group names when listing identity provider groups in the Identity service
- Support for server-side object re-encryption in the Object Storage service
- Support for private endpoint (ingress) and public endpoint whitelisting in the Analytics Cloud service

## 1.2.1 - 2020-06-30
### Added
- Support for the Usage service
- Support for the VMware Provisioning service
- Support for applying one-off patches to databases in the Database service
- Support for layer-2 virtualization features on vlans in the Networking service
- Support for all AttachVolumeDetails and ParavirtualizedAttachVolumeDetails properties on instance configurations in the Compute Management service
- Support for setting HTTP header size and allowing invalid characters in HTTP request headers in the Load Balancing service

## 1.2.0 - 2020-06-23
### Added
- Support for the Data Integration service
- Support for updating database home IDs on databases in the Database service
- Support for backing up autonomous databases on Cloud at Customer in the Database service
- Support for managing autonomous VM clusters on Cloud at Customer in the Database service
- Support for accessing data assets via private endpoints in the Data Catalog service
- Support for dependency archive zip files to be specified for use by applications in the Data Flow service


### Breaking
- Attribute LifecycleState in the Data Catalog service has restricted values to LifecycleState ENUMs (CREATING, ACTIVE, INACTIVE, UPDATING, DELETING, DELETED, FAILED, MOVING, UNKNOWN_VALUE)
- Attribute HarvestStatus in the Data Catalog service has restricted values to HarvestStatus ENUMs (COMPLETE, ERROR, IN_PROGRESS, DEFERRED, UNKNOWN_VALUE)
- Attribute TermWorkflowStatus in the Data Catalog service has restricted values to TermWorkflowStatus ENUMs (NEW, APPROVED, UNDER_REVIEW, ESCALATED, UNKNOWN_VALUE)
- Attribute JobType in the Data Catalog service has restricted values to JobType ENUMs (HARVEST, PROFILING, SAMPLING, PREVIEW, IMPORT, EXPORT, INTERNAL, PURGE, IMMEDIATE, SCHEDULED, IMMEDIATE_EXECUTION, SCHEDULED_EXECUTION, SCHEDULED_EXECUTION_INSTANCE, UNKNOWN_VALUE)
- Attribute JobExecutionState in the Data Catalog service has restricted values to JobExecutionState ENUMs (CREATED, IN_PROGRESS, INACTIVE, FAILED, SUCCEEDED, CANCELED, UNKNOWN_VALUE)

## 1.1.1 - 2020-06-16
### Added
- Support for creating a new database from an existing database based on a given timestamp in the Database service
- Support for enabling archive log backups of databases in the Database service
- Support for returning the database version on autonomous container databases in the Database service
- Support for the new DNS format of the Data Transfer service
- Support for scheduled autoscaling, which allows for scaling actions triggered at particular times based on CRON expressions, in the Compute Autoscaling service
- Support for filtering of list APIs for groups, identity providers, identity provider groups, compartments, dynamic groups, network sources, policies, and users by name or lifecycle state in the Identity Service

## 1.1.0 - 2020-06-09
### Added
- Support for returning the database version of backups in the Database service
- Support for patching on Exadata Cloud at Customer resources in the Database service
- Support for new lifecycle substates on instances in the Digital Assistant service
- Support for file servers in the Integration service
- Support for deleting non-empty tag namespaces and bulk deleting tags in the Identity service
- Support for bulk move and bulk delete of resources by compartment in the Identity service


### Breaking
- Parameter LifecycleState removed state OFFLINE and added DISCONNECTED in the Database service

## 1.0.2 - 2020-06-02
### Added
- Support for optionally supplying a signature when deleting an agreement in the Marketplace service
- Support for launching paid listings in non-US regions in the Marketplace service
- Support for returning the image id of packages in the Marketplace service
- Support for calling Oracle Cloud Infrastructure services in the ap-chuncheon-1 region

## 1.0.1 - 2020-05-27
### Added
- Initial Release
