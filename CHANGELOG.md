# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

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
