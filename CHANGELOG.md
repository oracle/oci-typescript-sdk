# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## 2.49.0 - 2022-12-06
### Added
- Support for the Container Instances service
- Support for the Document Understanding service
- Support for creating stacks from OCI DevOps service and Bitbucket Cloud/Server as source control management in the Resource Manager service
- Support for deployment stage level parameters in the DevOps service
- Support for PeopleSoft discovery in the Stack Monitoring service
- Support for Apache Tomcat discovery in the Stack Monitoring service
- Support for SQL Server discovery in the Stack Monitoring service
- Support for OpenId Connect in the API Gateway service
- Support for returning compartment ids when listing backups in the MySQL Database service
- Support for adding a load balancer endpoint to a DB system in the MySQL Database service
- Support for managed read replicas in the MySQL Database service
- Support for setting replication filters on channels in the MySQL Database service
- Support for replicating from a source configured without global transaction identifiers into a channel in the MySQL Database service
- Support for time zone and language preferences in the Announcements service
- Support for adding report schedules for activity auditing and alerts reports in the Data Safe service
- Support for bulk operations on alerts in the Data Safe service
- Support for Java server usage reporting in the Java Management service
- Support for Java library usage reporting in the Java Management service
- Support for cryptographic roadmap impact analysis in the Java Management service
- Support for Java Flight Recorder recordings in the Java Management service
- Support for post-installation steps in the Java Management service
- Support for restricting management of advanced functionality in the Java Management service
- Support for plugin improvements in the Java Management service
- Support for collecting diagnostics on deployments in the GoldenGate service
- Support for onboarding Exadata Public Cloud (ExaCS) targets to the Operations Insights service
  
### Breaking Changes
- A required property `CompartmentId` was added to `PatchAlertsDetails` model in the Data Safe service
- The property `items` is changed from optional to required in `PatchAlertsDetails` model in the Data Safe service
- The property `datasafePrivateEndpointId` is changed from optional to required in the `PrivateEndpoint` model in the Data Safe service
- The properties `ListenerPort` and `ServiceName` were made required in `InstalledDatabaseDetails` model in the Data Safe service
- The property `serviceName` is is changed from optional to required in `DatabaseCloudServiceDetails` model in the Data Safe service
- The property `AutonomousDatabaseId` was made required in `AutonomousDatabaseDetails` model in the Data Safe service


## 2.48.1 - 2022-11-15
### Added
- Support for mTLS authentication with listeners during Autonomous VM Cluster creation on Exadata Cloud at Customer in the Database service
- Support for providing custom values for TLS and non-TLS ports during Autonomous VM Cluster creation on Exadata Cloud at Customer in the Database service
- Support for creating multiple Autonomous VM Clusters in the same Exadata infrastructure in the Database service
- Support for listing resources associated with a job in the Resource Manager service
- Support for listing resources associated with a stack in the Resource Manager service
- Support for listing outputs associated with a job in the Resource Manager service
- Support for the Oracle distribution of Apache Hadoop 2.0 in the Big Data service


## 2.48.0 - 2022-11-08
### Added
- Support for listing local and cross-region refreshable clones in the Database service
- Support for adding multiple cloud VM clusters in the Database service
- Support for creating rollback jobs in the Resource Manager service
- Support for edge nodes in the Big Data service
- Support for Single Client Access Name (SCAN) in the Data Flow service
- Support for additional filters when listing application dependencies in the Application Dependency Management service
- Support for additional properties when reading Vulnerability Audit resources in the Application Dependency Management service
- Support for optionally passing compartment IDs when creating Vulnerability Audit resources in the Application Dependency Management service

### Breaking Changes
- The property `certificateId` is changed from optional to required in the `PrivateServerConfigDetails` model in Resource Manager service


## 2.47.0 - 2022-11-01
### Added
- Support for cloning from a backup from the last available timestamp in the Database service
- Support for third-party scanning using Qualys in the Vulnerability Scanning service
- Support for customer-provided encryption keys in the Logging Analytics service
- Support for connections for database resources in the GoldenGate service
  
### Breaking Changes
- The properties `dataType`, `timeDataEnded`, `compartmentId` is made from required to optional from the `StorageWorkRequestSummary` model in Log Analytics service



## 2.46.0 - 2022-10-25
### Added
- Support for the Disaster Recovery service
- Support for running code interactively with session applications using statements in the Data Flow service
- Support for language custom models and language translation in the AI Language service
 
### Breaking Changes
- The type of property `Documents` was changed from an Array of `TextClassificationDocument` to an Array of `TextDocument` in `BatchDetectLanguageTextClassificationDetails` model in the AI Language service
- The type of property `Documents` was changed from an Array of `SentimentsDocument` to an Array of `TextDocument` in `BatchDetectLanguageSentimentsDetails` model in the AI Language service
- The type of property `Documents` was changed from an Array of `KeyPhraseDocument` to an Array of `TextDocument` in `BatchDetectLanguageKeyPhrasesDetails` model in the AI Language service
- The type of property `Documents` was changed from an Array of `EntityDocument` to an Array of `TextDocument` in `BatchDetectLanguageEntitiesDetails` model in the AI Language service

## 2.45.0 - 2022-10-04
### Added
- Support for calling Oracle Cloud Infrastructure services in the eu-dcc-milan-1 region
- Support for target host identification and SOCKS support on dynamic port forwarding sessions in the Bastion service
- Support for viewing top processes running at a particular point of time in the Operations Insights service
- Support for filtering top processes by a single process to view that process's trend over time in the Operations Insights service
- Support for creating Enterprise Manager-based Windows host targets in the Operations Insights service
- Support for creating Management Agent Cloud-based Windows and Solaris host targets in the Operations Insights service

### Breaking Changes
- The property `TargetResourcePort` was removed from the models `TargetResourceDetails` and `CreateSessionTargetResourceDetails` in the Bastion service

## 2.44.0 - 2022-09-27
### Added
- Support for search capabilities for monitored resources in the Stack Monitoring service
- Support for deleting monitored resources with their members in the Stack Monitoring service
- Support for creating host-type monitored resources in the Stack Monitoring service
- Support for associating external resources during creation of monitored resources in the Stack Monitoring service
- Support for uploading bulk data in the NoSQL Database Cloud service
- Support for examining query execution plans in the NoSQL Database Cloud service
- Support for starting and stopping clusters in the Big Data service
- Support for additional compute shapes in the Big Data service
- Support for backwards pagination in the Search service
- Support for elastic compute for Exadata Cloud at Customer in the Database service 
 
### Breaking Changes
- Support for default retries on operations of the NoSQL Database Cloud service
- The property `vlanId`, `netmask`, `domainName` is changed from required to optional in the `VmNetworkDetails` model for the database service

## 2.43.0 - 2022-09-20
### Added
- Support for the Cloud Bridge service
- Support for the Cloud Migrations service
- Support for display banners, trails, and sizes in the GoldenGate service
- Support for generic REST data assets, flattening of data in Data Flow, and runtime information on pipelines in the Data Integration service
- Support for expanded search functionality in the Threat Intelligence service
- Support for ingest-time rules and specifying logsets and query strings during recalls in the Logging Analytics service
- Support for repository mirroring from Visual Builder Studio in the DevOps service
- Support for running a managed build stage with the source code hosted in a Visual Builder Studio repository in the DevOps service
- Support for triggering a build run based on an event in a Visual Builder Studio repository in the DevOps service
- Support for additional parameters during cost management scheduling in the Usage service
 
### Breaking Changes
- Support for retries by default on operations of the GoldenGate service
- Support for retries by default on operations of the Threat Intelligence service
- The properties `FlattenProjectionPreferences`, `FlattenAttributeRoot`, `FlattenAttributePath`, `FlattenColumns` were made optional in `FlattenDetails` model in the Data Integration service
- The property `threatTypes` is change from an Array of `model.ThreatType` to an Array of `string` in the IndicatorSummary model in the Threat Intelligence service
- The property `PreviousDeploymentId` was made a required parameter in the `CreateDeployPipelineRedeploymentDetails` model in the DevOps service
- The property `DeployStageId` was made a required parameter in `CreateSingleDeployStageDeploymentDetails` and `CreateSingleDeployStageRedeploymentDetails` model in the DevOps service


## 2.42.0 - 2022-09-13
### Added
- Support for calling Oracle Cloud Infrastructure services in the eu-madrid-1 region
- Support for exporting and importing larger model artifacts in the model catalog in the Data Science service
- Support for Request Based Authorization in the API Gateway service
- Support for Dynamic Authentication in the API Gateway service
- Support for Dynamic Routing Backend in the API Gateway service
 
### Breaking Changes
- Support for retries by default on some operations of the Data Science service

## 2.41.0 - 2022-09-06
### Added
- Support for generic REST, OCI Streaming service, and Lake House connectors in the Data Connectivity Management service
- Support for connecting to the Data Catalog service in the Data Connectivity Management service
- Support for Kerberos and SSL for HDFS operations in the Data Connectivity Management service
- Support for excel-formatted data and default columns in the Data Connectivity Management service
- Support for reporting connector usage in the Data Connectivity Management service
- Support for preferred credentials for performing privileged operations in the Database Management service
- Support for passing a content encoding when posting metrics in the Monitoring service
 
### Breaking Changes
- Support for default retries in operations of the Data Connectivity Management service
- Model `ConnectionValidationSummaryCollection` has been removed in the Data Connectivity Management service
- Method `public async deleteConnectionValidation` has been removed in the Data Connectivity Management service
- Method `public async listConnectionValidations` has been removed in the Data Connectivity Management service
- Method `public async getConnectionValidation` has been removed in the Data Connectivity Management service

## 2.40.1 - 2022-08-30
### Added
- Support for opting out of guest VM event collection, health metrics, diagnostics logs, and traces in the Database service
- Support for in-place upgrades for software-defined data centers in the VMWare Solution service
- Support for single-client access name protocol as a data source for private access channels in the Analytics Cloud service
- Support for network security groups, egress control on public datasources, and GitHub access in the Analytics Cloud service
- Support for performance-based autotuning of block and boot volumes in the Block Storage service

## 2.40.0 - 2022-08-23
### Added
- Support for the Enterprise Manager Warehouse service
- Support for additional configuration variables in the MySQL Database service
- Support for file filters in the DevOps service
- Support for support rewards redemption summaries in the Usage service
- Support for the parent tenancy of an organization to view child tenancy categories, recommendations, and resource actions in the Optimizer service
- Support for choosing prior versions during infrastructure maintenance on Exadata Cloud at Customer in the Database service

### Breaking Changes
- EmDataLakeClient is renamed to EmWarehouseClient for the EM Warehouse service.
- The property `parameters` has its object value type changed from `string` to `any`.

## 2.39.0 - 2022-08-16
### Added
- Support for Logging Analytics as a streaming source target in the Service Connector Hub service
- Support for data sources for logging query registration in the Cloud Guard service
- Support for custom detector rules on insight detector recipes in the Cloud Guard service
- Support for fetching data source events and problem entities in the Cloud Guard service
- Support for E3, E4, Standard3, and Optimized3 flexible compute shapes on notebooks, model deployment, and jobs in the Data Science service
- Support for streaming application logs to the Logging service in the Data Flow service
 
### Changed
- The OCI TypeScript SDK will now proceed with the serialization and deserialization of a request and response when an unknown enum is given to the request or response. An 'Unknown Value' enum will be logged to notify the user if an enum was not recognized by the SDK is used.

### Breaking Changes
- Support for retries by default on operations of the Dataflow service

## 2.38.0 - 2022-08-09
### Added
- Support for single-host software-defined data centers in the VMWare Solution service
- Support for Java download and installation in the Java Management service
- Support for lifecycle management for Windows in the Java Management service
- Support for installation scripts in the Java Management service
- Support for unlimited-installation keys in the Java Management service
- Support for configuring automatic usage tracking in the Java Management service
- Support for STANDARDX and ENTERPRISEX instance types in Integration service
- Support for additional languages and multimedia formats in transcription jobs in the AI Speech service
- Support for maintenance run history for Exadata Cloud at Customer in the Database service
- Support for Optimizer statistics monitoring and management on various database administration operations in the Database Management service
- Support for OCI Compute instances in the Operations Insights service
- Support for moving resources in the Console Dashboard service
- Support for round-robin alerting in the Application Performance Monitoring service
- Support for aggregated network data of synthetic monitors in the Application Performance Monitoring service
- Support for etags on operations in the Load Balancing service
 
### Breaking Changes
- The enum `UsageUnit` was replaced by `UsageUnitEnum` in the Operations Insights service
- Property `hostType` changed from type Array of `ListHostInsightsRequest.HostType` to Array of `string` in the model `ListHostInsightsRequest` in Operations Insights service.
- Property `inventoryLog` changed from optional to required in the model `CreateFleetDetails` in Java Management Service

## 2.37.0 - 2022-08-02
### Added
- Support for OpenSearch in the Search service
- Support for child tables in the NoSQL Database Cloud service
- Support for private repositories in the DevOps service
 
### Breaking Changes
- Support for retries by default on operations of the Quotas service

## 2.36.0 - 2022-07-26
### Added
- Support for the Fusion Apps as a Service service
- Support for the Digital Media service
- Support for accessing all Terraform providers from Hashicorp Registry, as well as bringing your own providers, in the Resource Manager service
- Support for runtime configurations in notebook sessions in the Data Science service
- Support for compartmentIdInSubtree and accessLevel filters when listing management agents in the Management Agent Cloud service
- Support for filtering by type when listing work requests in the Management Agent Cloud service
- Support for filtering by agent id when listing management agent plugins in the Management Agent Cloud service
- Support for specifying size preference when requesting a data transfer appliance in the Data Transfer service
- Support for encryption of boot and block volumes associated with a cluster using customer-specified KMS keys in the Big Data service
- Support for the VM.Standard.E4.Flex shape for Cloud SQL (CSQL) nodes in the Big Data service
- Support for listing block and boot volumes, as well as block and boot volume replicas, within a volume group in the Block Volume service
- Support for dedicated autonomous databases in the Operator Access Control service
- Support for viewing automatic workload repository (AWR) data for databases added to AWRHub in the Operations Insights service
- Support for ports, protocols, roles, and SSL secrets when enabling or modifying database management in the Database service
- Support for monthly security maintenance runs in the Database service
- Support for monthly infrastructure patching for Exadata Cloud at Customer resources in the Database service
 
### Breaking Changes
- Properties `addressee`, `address1`, `cityOrLocality`, `stateOrRegion`, `zipcode`, `country` are changed from optional to required for ShippingAddress model in Data Transfer Service.
- `DataMaskingActivityClient`,`FusionEnvironmentClient`, `FusionEnvironmentFamilyClient`, `RefreshActivityClient`,`ScheduledActivityClient`, and `ServiceAttachmentClient` clients were merged into a single client `FusionApplicationsClient` for the Fusion Apps as a Service service

## 2.35.1 - 2022-07-19
### Added
- Support for calling Oracle Cloud Infrastructure services in the `mx-queretaro-1` region
- Support for the Process Automation service
- Support for the Managed Access service
- Support for extending maintenance reboot due dates on virtual machines in the Compute service
- Support for ingress routing tables on NAT gateways and internet gateways in the Networking service
- Support for container database and pluggable database discovery in the Stack Monitoring service
- Support for displaying rack serial numbers for Exadata infrastructure resources in the Database service
- Support for grace periods for wallet rotation on autonomous databases in the Database service
- Support for hosting models on flexible compute shapes with customizable OCPUs and memory in the Data Science service

## 2.35.0 - 2022-07-12
### Added
- Support for DBCS databases in the Operations Insights service
- Support for point-in-time recovery for non-highly-available database systems in the MySQL Database service
- Support for triggering reboot migration on instances with pending maintenance in the Compute service
- Support for native pod networking in the Container Engine for Kubernetes service
- Support for creating Data Guard associations with new database systems in the Database service
 
### Breaking Changes
- Property `preserveDataVolumes` is removed from the model `TerminateInstanceRequest` in the Core service.
- Property `hostType` is changed from type Array of `strings` to type Array of `ListHostInsightsRequest.HostType` in the Operations Insights service.

## 2.34.0 - 2022-07-05
### Added
- Support for backup policies returned as part of the database system list operation in the MySQL Database service
 
### Breaking Changes
- Default retry enable for operations of the Bastion service

## 2.33.0 - 2022-06-27
### Added
- Support for the Network Monitoring service
- Support for specifying application scan settings when creating or updating host scan recipes in the Vulnerability Scanning service
- Support for moving data into an autonomous data warehouse in the Operations Insights service
- Support for shared infrastructure autonomous database character sets in the Database service
- Support for data collection logging events on Exadata instances in the Database service
- Support for specifying boot volume VPUs when launching instances from images in the Compute service
- Support for safe-deleting nodes in the Container Engine for Kubernetes service

### Breaking Changes
- Support for retries by default on operations of the Logging Analytics service

## 2.32.0 - 2022-06-21
### Added
- Support for the Network Firewall service
- Support for smaller and larger HeatWave cluster nodes in the MySQL Database service
- Support for CSV file type datasets for text labeling and JSONL in the Data Labeling service
- Support for diagnostics in the Database Management service
 
### Breaking Changes
- Support for retries by default on operations of the Network Firewall service
- Support for retries by default on the createAnnotation operation of the Data Labeling service

## 2.31.0 - 2022-06-14
### Added
- Support for the Web Application Acceleration (WAA) service
- Support for the Governance Rules service
- Support for the OneSubscription service
- Support for resource locking in the Identity service
- Support for quota resource locking in the Limits service
- Support for returning the backup with the requested changes in the MySQL Database service
- Support for time zone in Cloud Autonomous VM (CAVM) clusters in the Database service
- Support for configuration options in the Application Performance Monitoring service
- Support for MySQL connections in the Database Tools service

### Breaking Changes
- Support for retries by default on operations in the Database Tools service
- Model `DatabaseToolsAllowedNetworkSources` removed in Database Tools service
- Model `DatabaseToolsVirtualSource` removed in Database Tools service
- Model `ServiceCapability` removed in Database Tools service

## 2.30.0 - 2022-06-07
### Added
- Support for calling Oracle Cloud Infrastructure services in the eu-paris-1 region
- Support for private endpoints in Resource Manager service
- Support downloading generated Terraform plan output in JSON or binary format in Resource Manager service
- Support for querying OPSI Data Objects in the Operations Insights service

### Changed
- Network security groups (NSGs) are now optional for autonomous databases on private endpoints in the Database service

## 2.29.0 - 2022-05-31
### Added
- Support for in-depth monitoring, diagnostics capabilities, and advanced management functionality for on-premise Oracle databases in the Database Management service
- Support for using Oracle Cloud Agent to perform iSCSI login and logout for non-multipath-enabled iSCSI attachments in the Container Engine for Kubernetes service
- Support for Fault Domain placement in the Container Engine for Kubernetes service
- Support for worker node images in the Container Engine for Kubernetes service
- Support for flexible shapes using the driverShapeConfig and executorShapeConfig properties in the Data Flow service

### Breaking Changes
- Support for retries by default on operations in the Application Dependency Management service

## 2.28.0 - 2022-05-24
### Added
- Support for the License Manager service
- Support for usage plans in the API Gateway service
- Support for packaged skill and instance metadata management, role-based access options on instance creation, and assigned ownership in the Digital Assistant service
- Support for compute capacity reservations in the VMWare Solution service
- Support for Oracle Linux 8 application streams in the OS Management service
 
### Breaking Changes
- Support for retries by default on operations in the API Gateway service
- Property `specification` is changed from optional to required from model `Deployment` and `CreateDeploymentDetails` in the API Gateway service.

## 2.27.0 - 2022-05-17
### Added
- Support for information requests in the Operator Access Control service
- Support for Helm charts and repositories on deployments in the DevOps service
- Support for Application Dependency Management service scan results on builds in the DevOps service
- Support for build resources to use Bitbucket Cloud repositories for source code in the DevOps service
- Support for character set selection on autonomous dedicated databases in the Database service
- Support for listing autonomous dedicated database supported character sets in the Database service
- Support for AMD E4 flex shapes on virtual machine database systems in the Database service
- Support for terraform and improvements for cross-region ADGs in the Database service
 
### Breaking Changes
- Support for retries by default on GET and LIST operations in the Visual Builder service

## 2.26.0 - 2022-05-10
### Added
- Support for getting usage information for autonomous databases and Cloud at Customer autonomous databases in the Database service
- Support for the `standby` lifecycle state on autonomous databases in the Database service
- Support for BIP connections and dataflow operators in the Data Integration service
 
### Breaking Changes
- Support for retries by default on WAF Edge Policy GET, LIST operations in the Web Application Acceleration and Security service
- Support for retries by default on some operations in the Stack Monitoring service
- Support for retries by default on some resource discovery and monitoring operations in the Application Management service
- Support for retries by default on some operations in the MySQL Database service
- The property `outputPorts` in `operater` model was changed from Array of `OutputPort` to Array of `TypedObject` in the Data Integration service

## 2.25.0 - 2022-05-03
### Added
- Support for the Application Dependency Management service
- Support for platform configuration options on some bare metal shapes in the Compute service
- Support for shielded instances for BM.Standard.E4.128 and BM.Standard3.64 shapes in the Compute service
- Support for E4 dense VMs on launch and update instance operations in the Compute service
- Support for reboot migration on DenseIO shapes in the Compute service
- Support for an increased database name maximum length, from 14 to 30 characters, in the Database service
- Support for provisioned concurrency in the Functions service
 
### Breaking Changes
- Support for retries by default on operations in the Vault service
- Support for retries by default on operations in the DNS service
- Support for retries by default on operations in the Content Management service
- Support for retries by default on operations in the Console Dashboard service
- Support for retries by default on Web Application Firewall operations in the Web Application Acceleration and Security service
- Support for retries by default on operations in the Data Science service

## 2.24.0 - 2022-04-26
### Added
- Support for the Service Mesh service
- Support for security zones in the Cloud Guard service
- Support for virtual test access points (VTAPs) in the Networking service
- Support for monitoring as a source in the Service Connector Hub service
- Support for creating budgets that target subscriptions and child tenancies in the Budgets service
- Support for listing shapes and specifying a shape during creation of a node in the Roving Edge Infrastructure service
- Support for bringing your own key in the Roving Edge Infrastructure service
- Support for enabling inspection of HTTP request bodies in the Web Application Acceleration and Security
- Support for cost management schedules in the Usage service
- Support for TCPS on external containers as well as non-container and pluggable databases in the Database service
- Support for autoscaling on Open Data Hub (ODH) clusters in the Big Data service
- Support for creating Open Data Hub (ODH) 0.9 clusters in the Big Data service
- Support for Open Data Hub (ODH) patch management in the Big Data service
- Support for customizable Kerberos realm names in the Big Data service
- Support for dedicated vantage points in the Application Performance Monitoring service
- Support for reactivating child tenancies in the Organizations service
- Support for punctuation and the SRT transcription format in the AI Speech service

### Breaking Changes
- Support for default retries on some operations in the Networking service
- Support for default retries on all operations in the Data Safe service
- Support for default retries on some additional operations in the Application Performance Monitoring service
- Property `riskScore` is removed from model `Sighting` in the Cloud Guard service
- Property `subscriptionId` is changed from optional to required from model `ListSubscriptionMappingsRequest` in the Tenant Manager Control Plane service
- Property `nodeType` is a required parameter for the model `AddWorkerNodesRequest` and `AddWorkerNodesDetails` in the Big Data Service

## 2.23.0 - 2022-04-19
### Added
- Support for the Stack Monitoring service
- Support for stack monitoring on external databases in the Database service
- Support for upgrading VM database systems in place in the Database service
- Support for viewing supported VMWare software versions when listing host shapes in the VMWare Solution service
- Support for choosing compute shapes when creating SDDCs and ESXi hosts in the VMWare Solution service
- Support for work requests on delete operations in the Vulnerability Scanning service
- Support for additional scan metadata in reports, including CVE descriptions, in the Vulnerability Scanning service
- Support for redemption codes in the Usage service
 
### Breaking Changes
- Removed field `etag` from `ListRedeemableUsersResponse` model from Usage service

## 2.22.0 - 2022-04-12
### Added
- Support for bringing your own IPv6 addresses in the Networking service
- Support for specifying database edition and maximum CPU core count when creating or updating an autonomous database in the Database service
- Support for enabling and disabling data collection options when creating or updating Exadata Cloud at Customer VM clusters in the Database service
 
### Breaking Changes
- Support for retries by default on operations in the Identity service
- Support for retries by default on operations in the Operations Insights service

## 2.21.0 - 2022-04-05
### Added
- Fixed the lifecycle state values for target databases in the Data Safe service
- Support for content length and content type response headers when downloading PDFs in the Account Management service
- Support for creating Enterprise Manager-based zLinux host targets, creating alarms, and viewing top process analytics in the Operations Insights service
- Support for diagnostic reboots on VM instances in the Compute service

### Breaking Changes
- The data type of property `lifecycleState` in `ListTargetDatabasesRequest` was changed from `model.LifecycleState` to `model.TargetDatabaseLifecycleState` in the Data Safe service
- The data type of property `lifecycleState` in `TargetDatabase` was changed from `model.LifecycleState` to `model.TargetDatabaseLifecycleState` in the Data Safe service
- The data type of property `lifecycleState` in `TargetDatabaseSummary` was changed from `model.LifecycleState` to `model.TargetDatabaseLifecycleState` in the Data Safe service

## 2.20.0 - 2022-03-29
### Added
- Support for returning the number of network ports as part of listing shapes in the Compute service
- Support for Java runtime removal and custom logs in the Java Management service
- Support for new parameters for BGP admin state and enabling/disabling BFD in the Networking service
- Support for private OKE clusters and blue-green deployments in the DevOps service
- Support for international customers to consume and launch third-party paid listings in the Marketplace service
- Support for additional fields on entities, attributes, and folders in the Data Catalog service
 
### Breaking Changes
- Support for retries by default on operations in the Marketplace service

## 2.19.0 - 2022-03-22
### Added
- Support for getting the storage utilization of a deployment on deployment list and get operations in the GoldenGate service
- Support for virtual machines, bare metal machines, and Exadata databases with private endpoints in the Operations Insights service
- Support for setting deletion policies on database systems in the MySQL Database service
 
### Breaking Changes
- Support for retries by default on operations in the Data Labeling service (data plane and control plane)

## 2.18.0 - 2022-03-15
### Added
- Support for Ubuntu platforms and unlimited installation keys in the Management Agent Cloud service
- Support for shielded instances in the VMWare Solution service
- Support for application resources in the Data Integration service
- Support for multi-AVM on Exadata Cloud at Customer infrastructure in the Database service
- Support for heterogeneous (VM and AVM) clusters on Exadata Cloud at Customer infrastructure in the Database service
- Support for custom maintenance schedules for AVM clusters on Exadata Cloud at Customer infrastructure in the Database service
- Support for listing vulnerabilities, vulnerability-impacted containers, and vulnerability-impacted hosts in the Vulnerability Scanning service
- Support for specifying an image count when creating or updating container scan recipes in the Vulnerability Scanning service

### Breaking Changes
- `supportedPlatformTypes` data type was changed from an Array of `model.PlatformTypes` to an Array of `ManagementAgentPlugin.SupportedPlatformTypes` in management-agent-plugin in the Management Agent Cloud service

## 2.17.0 - 2022-03-08
### Added
- Support for the Sales Accelerator license option in the Content Management service
- Support for VCN hostname cluster endpoints in the Container Engine for Kubernetes service
- Support for optionally specifying an admin username and password when creating a database system during a restore operation in the MySQL Database service
- Support for automatic tablespace creation on non-autonomous and autonomous database dedicated targets in the Database Migration service
- Support for reporting excluded objects based on static exclusion rules and dynamic exclusion settings in the Database Migration service
- Support for removing, listing, and adding database objects reported by the Cloud Premigration Advisor Tool (CPAT) in the Database Migration service
- Support for migrating Oracle databases from the AWS RDS service to OCI as autonomous databases, using the AWS S3 service and DBLINK for data transfer, in the Database Migration service
- Support for querying additional fields of a resource using return clauses in the Search service
- Support for clusters and station clusters in the Roving Edge Infrastructure service
- Support for creating database systems and database homes using customer-managed keys in the Database service
 
### Breaking Changes
- Support for retries enabled by default on operations in the Container Engine for Kubernetes service
- Support for retries enabled by default on operations in the Resource Manager service
- Support for retries enabled by default on operations in the Search service
- The type of Property LifecycleState was changed from `LifecycleStateEnum` to `LifecycleState` in the ListOceInstancesRequest model in Content Management service
- The property `LifecycleState` was replaced by `LifecycleDetails` in the OceInstanceSummary and OceInstance model in Content Management service
- The type of the parameter targetStates was changed from `OceInstance.LifecycleStateEnum[]` to `LifecycleState[]` in OceInstanceWaiters call for ForOceInstance in Content Management service

## 2.16.0 - 2022-03-01
### Added
- Support for DRG route distribution statements to be specified with a new match type 'MATCH_ALL' for matching criteria in the Networking service
- Support for VCN route types on DRG attachments for deciding whether to import VCN CIDRs or subnet CIDRs into route rules in the Networking service
- Support for CPS offline reports in the Database service
- Support for infrastructure patching v2 features in the Database service
- Support for auto-scaling the storage of an autonomous database, as well as shrinking an autonomous database, in the Database service
- Support for managed egress via a default networking option on jobs and notebooks in the Data Science service
- Support for more types of saved search enums in the Management Dashboard service
 
### Breaking Changes
- Support for retries enabled by default on some operations in the AI Vision service

## 2.15.0 - 2022-02-22
### Added
- Support for the Data Connectivity Management service
- Support for the AI Speech service
- Support for disabling crash recovery in the MySQL Database service
- Support for detector recipes of type 'threat', new detector rule of type 'rogue user', and sightings operations in the Cloud Guard service
- Support for more VM shape configurations when listing shapes in the Compute service
- Support for customer-managed encryption keys in the Analytics Cloud service
- Support for FastConnect device information in the Networking service
 
### Breaking Changes
- Update the property `riskLevel` from required to optional in `TargetDetectorDetails` in Cloud Guard service.
- Update the property `riskLevel` from required to optional in `DetectorDetails` in Cloud Guard service.
- Support for retries enabled by default on all operations in the Application Performance Monitoring control plane service

## 2.14.0 - 2022-02-15
### Added
- Support for the AI Vision service
- Support for the Threat Intelligence service
- Support for creation of NoSQL database tables with on-demand throughput capacity in the NoSQL Database Cloud service
- Support for tagging features in the Oracle Container Engine for Kubernetes (OKE) service
- Support for trace snapshots in the Application Performance Monitoring service
- Support for auditing and alerts in the Data Safe service
- Support for data discovery and data masking in the Data Safe service
- Support for customized subscriptions and delivery of announcements by email and SMS in the Announcements service
 
### Breaking Changes
- The deprecated API `QueryOld` from `QueryClient` and its request model `QueryOldRequest` were removed in the Application Performance Monitoring service

## 2.13.0 - 2022-02-08
### Added
- Support for managing tablespaces in the Database Management service
- Support for upgrading and managing payment for subscriptions in the Account Management service
- Support for listing fast launch job configurations in the Data Science service

### Breaking Changes
- Support for retries enabled by default on all operations in the Application Performance Monitoring service
- The data type of the property BillToAddress was changed from `Address` to `BillToAddress` for the Invoice model of the Account Management service

## 2.12.1 - 2022-02-01
### Added
- Support for calling Oracle Cloud Infrastructure services in the ap-dcc-canberra-1 region
- Support for the Console Dashboard service
- Support for capacity reservation in the Container Engine for Kubernetes service
- Support for tagging in the Container Engine for Kubernetes service
- Support for fetching listings by image OCID in the Marketplace service
- Support for underscores and hyphens in project resource names in the DevOps service
- Support for cross-region cloning in the Database service

## 2.12.0 - 2022-01-25
### Added
- Support for OneSubscription services
- Support for retries enabled by default on all operations in the Object Storage service (Breaking change, only for python, go, java, typescript)
- Support for specifying if a run or application is streaming or batch in the Data Flow service
- Support for updating the Instance Configuration of an Instance Pool within a Cluster Network in the Compute Management service
- Updated documentation for Cross Region ADG feature for Autonomous Database in the Database service
 
### Breaking Changes
- Support for retries enabled by default on all operations in the Object Storage service

## 2.11.1 - 2022-01-18
### Added
- Support for calling Oracle Cloud Infrastructure services in the me-dcc-muscat-1 region
- Support for the Visual Builder service
- Support for cross-region replication of volume groups in the Block Storage service
- Support for boot volume encryption in the Container Engine for Kubernetes service
- Support for adding metadata to records when creating and updating records in the Data Labeling service
- Support for global export formats in snapshot datasets in the Data Labeling service
- Support for adding labeling instructions to datasets in the Data Labeling service
- Support for updating autonomous dataguard associations for autonomous container databases in the Database service
- Support for setting up automatic failover when creating autonomous container databases in the Database service
- Support for setting the RECO storage size when updating a database system in the Database service
- Support for reconnecting refreshable clones to source for autonomous databases on shared infrastructure in the Database service
- Support for checking if an autonomous database on shared infrastructure can be reconnected to source, in the Database service

## 2.11.0 - 2022-01-11
### Added
- Support for calling Oracle Cloud Infrastructure services in the af-johannesburg-1 and eu-stockholm-1 regions
- Support for multiple protocols on the same listener in the Network Load Balancing service
- IPv6 support in the Network Load Balancing service
- Support for creating Enterprise Manager-based Solaris and SunOS host targets in the Operations Insights service
- Support for choosing Data Guard type (Active Data Guard or regular) on databases in the Database service
 
### Breaking Changes
- Support for retries enabled by default on all operations in the Java Management 

## 2.10.0 - 2021-12-14
### Added
- Support for node replacement in the VMWare Solution service
- Support for ingestion of SQL stats metrics in the Operations Insights service
- Support for AWR hub integration in the Operations Insights service
- Support for automatically generating logical entities from filename patterns and relationships between business terms across glossaries in the Data Catalog service
- Support for automatic start/stop at scheduled times in the Database service
- Support for cloud VM cluster resources on autonomous dedicated databases in the Database service
- Support for external Hive metastores in the Big Data service
- Support for batch detection/inference in the AI Language service
- Support for dimensions on monitoring targets in the Service Connector Hub service
- Support for invoice operations in the Account Management service
- Support for custom CA trust stores in the API Gateway service
- Support for generating scoped database tokens in the Identity service
- Support for database passwords for users, for logging into database accounts, in the Identity service

### Breaking changes
- Support for retries enabled by default on some operations in the Data Catalog service
- Support for retries enabled by default on all operations in the Ocvp service

## 2.9.1 - 2021-12-07
### Added
- Support for the Application Management service
- Support for getting the inventory of JMS resources and listing Java runtime usage in a specified host in the Java Management service
- Support for categories, entity topology, and verifying scheduled tasks in the Logging Analytics service
- Support for RAC databases in the GoldenGate service
- Support for querying additional fields of a resource using return clauses in the Search service
- Support for key versions and key version OCIDs in the Key Management service

## 2.9.0 - 2021-11-30
### Added
- Support for SQL Tuning Advisor in the Database Management service
- Support for listing users and getting user details in the Database Management service
- Support for autonomous databases in the Database Management service
- Support for enabling and disabling Database Management features on autonomous databases in the Database service
- Support for the Solaris platform in the Management Agent Cloud service
- Support for cross-compartment operations in the Operations Insights service
- Support for listing deployment backups in the GoldenGate service
- Support for standard tags in the Identity service
- Support for viewing problems for deleted targets in the Cloud Guard service
- Support for choosing a platform version while creating a platform instance in the Blockchain Platform service
- Support for custom IPSec connection tunnel internet key exchange phase 1 and phase 2 encryption algorithms in the Networking service
- Support for pagination when listing work requests corresponding to an APM domain in the Application Performance Monitoring service
- Support for the "deleted" lifecycle state on APM domains in the Application Performance Monitoring service
- Support for calling Oracle Cloud Infrastructure services in the eu-milan-1 and me-abudhabi-1 regions

### Breaking Changes
- Support for retries enabled by default in all operations of the DevOps, Build, and Source Code Management services

## 2.8.0 - 2021-11-17
### Added
- Support for getting subnet topology in the Networking service
- Support for encrypted FastConnect resources in the Networking service
- Support for performance and high availability, as well as recommendation metrics, in the Optimizer service
- Support for optional TDE wallet passwords in the Database service
- Support for Object Storage service integration in the Big Data service

### Breaking Changes
- Support for circuit breakers enabled by default in all services except Streaming and Compute
- Support for retries enabled by default in all operations of the Functions and Roving Edge services, and in some operations of the Streaming service

## 2.7.0 - 2021-11-09
### Added
- Support for drill down metadata in the Management Dashboard service
- Support for operator access control on dedicated autonomous databases in the Operator Access Control service

### Breaking Changes
- Update the property `isFullyPreApproved`, `approverGroupsList`, `operatorControlName` from optional to required in `UpdateOperatorControlDetails` in Operator Access Control service.
- Update the property `isEnforcedAlways` from optional to required in `UpdateOperatorControlAssignmentDetails` in Operator Access Control service.
- Update the property `approverGroupsList` from optional to required in `CreateOpereatorControlDetails` in Operator Access Control service.
- Update the property `resourceType` from optional to required in `CreateOpereatorControlAssignmentDetails` in Operator Access Control service.
- Update the property `resourceType` from type `string` to  type`model.ResourceTypes` in `OperatorControlAssignmentSummary` in Operator Access Control service.

## 2.6.1 - 2021-11-02
### Added
- Support for the Database Tools service 
- Support for scan listener port TCP and TCP SSL on cloud VM clusters in the Database service 
- Support for domains in the Identity service 
- Support for redeemable users and support rewards in the Usage service 
- Support for calling Oracle Cloud Infrastructure services in the ap-singapore-1 and eu-marseille-1 regions

### Changed
- Endpoint for Identity service changed to include `.oci` subdomain

## 2.6.0 - 2021-10-26
### Added
- Support for the Source Code Management service
- Support for the Build service
- Support for the Certificates service
- Support to create child tenancies in an organization and manage subscriptions in the Organizations service
- Support for Certificates service integration in the Load Balancing service
- Support for creating hosts in specific availability domains in the VMWare Solution service
- Support for user-defined functions and libraries, as well as scheduling and orchestration, in the Data Integration service
- Support for EM-managed Exadatas and EM-managed hosts in the Operations Insights service

### Breaking Changes
- The cases `COMPUTE_INSTANCE_GROUP_BLUE_GREEN_TRAFFIC_SHIFT`, `COMPUTE_INSTANCE_GROUP_CANARY_DEPLOYMENT`, `COMPUTE_INSTANCE_GROUP_CANARY_TRAFFIC_SHIFT`, `RUN_VALIDATION_TEST_ON_COMPUTE_INSTANCE`, `RUN_DEPLOYMENT_PIPELINE`, and `COMPUTE_INSTANCE_GROUP_BLUE_GREEN_DEPLOYMENT` were removed in the field `deployStageType` in the `DeployStageExecutionProgress` model from the DevOps service.

## 2.5.2 - 2021-10-19
### Added
- Support for creating database systems from backups with database software images in the Database service
- Support for optionally providing a SID prefix during Exadata database creation in the Database service
- Support for node subsetting on VM clusters in the Database service
- Support for non-CDB to PDB conversion in the Database service
- Support for default homepages, unprocessed data buckets, and parsing geostats in the Logging Analytics service

## 2.5.1 - 2021-10-12
### Added
- Support for the Data Labeling Service
- Support for querying and setting Application Performance Monitoring configurations in the Application Performance Monitoring service
- Support for the run-once monitor feature and network data collection in the Application Performance Monitoring service
- Support for Oracle Enterprise Manager bridges, source auto-association, source event types mapping, and partitioning and searching data by LogSet in the Logging Analytics service
- Support for Log events APIs used by plugins like fluentd, fluentbit, etc. to upload data in the Logging Analytics service
- Support for a new ActionType: FAILED in work requests in the VMware Provisioning service
- Support for calling Oracle Cloud Infrastructure services in the il-jerusalem-1 region

## 2.5.0 - 2021-10-05
### Added
- Support for configuring Binlog variables in the MySQL Database service.
- Support new response value "OPERATOR" for backup creationType in list and get MDS backup API in the MySQL Database service.
- Support for SetAutoUpgradableConfig and GetAutoUpgradableConfig operations in Management Agent Cloud service.
- Support for additional installType filter for List Management Agents, Images and Count API operations in Management Agent Cloud service.
- Support for list and read DeploymentUpgrade, cancel and restore DeploymentBackup in the Golden Gate service.
- Support for non-autonomous databases targets, executing Pre-Migration advisor, uploading Datapump logs into Object Storage bucket, and filtering Database Objects in the Database Migration service.
- Support for calling Oracle Cloud Infrastructure services in the ap-ibaraki-1 region.

### Breaking Changes
- Removed field `isAgentAutoUpgradable` from `UpdateManagementAgentDetails` model from Management Agent service
- Removed field `TimeCreated` and `DisplayName` in `SortBy` enum and `displayName` from `ListWorkRequestsRequest` request model from Database Migration service.
- Removed field `TimeCreated` and `DisplayName` in `SortBy` enum and `displayName` from `ListWorkRequestsLogRequest` request model from Database Migration service.
- Removed field `TimeCreated` and `DisplayName` in `SortBy` enum and `displayName` from `ListWorkRequestsErrorsRequest` request model from Database Migration service.
- Update field `lifecycleState` to use `model.MigrationLifecycleStates` instead of `model.LifecycleStates` from `ListMigrationsRequest` request model from Database Migration service.
- Update field `lifecycleState` to use `model.MigrationLifecycleStates` instead of `model.LifecycleStates` from `Migration` and `MigrationSummary` model from Database Migration service.
- Update field `timeStamp` to `timestamp` from `WorkRequestLogEntry` and `WorkRequestError` model from Database Migration service.
- Removed field `compartmentId` from `UpdateAgentDetails` model from Database Migration service.
- Mark listAll* paginator functions as deprecated in favor of Iterator paginator functions.

## 2.4.0 - 2021-09-28
### Added
- Support for autonomous databases and clones on shared infrastructure not requiring mTLS in the Database service
- Support for server-side encryption using object-specific KMS keys in the Object Storage service
- Support for Windows in the Java Management service
- Support for using network security groups in the API Gateway service
- Support for network security groups in the Functions service
- Support for signed container images in the Functions service
- Support for setting message format when creating and updating alarms in the Monitoring service
- Support for user and security assessment features in the Data Safe service

### Breaking Changes
- The `RequestSummarizedApplicationUsage`, `RequestSummarizedInstallationUsage`, `RequestSummarizedJreUsage`, `RequestSummarizedManagedInstanceUsage` were removed from the `JavaManagementServiceClient` in the Java Management service
- The `RequestSummarizedApplicationUsageDetails`, `RequestSummarizedInstallationUsageDetails`, `RequestSummarizedJreUsageDetails` and `RequestSummarizedManagedInstanceUsageDetails` models were removed in the Java Management service
- The `RequestSummarizedApplicationUsageDetails`, `RequestSummarizedInstallationUsageDetails`, `RequestSummarizedJreUsageDetails` and `RequestSummarizedManagedInstanceUsageDetails` request models were removed in the Java Management service
- The `RequestSummarizedApplicationUsageDetails`, `RequestSummarizedInstallationUsageDetails` and `RequestSummarizedManagedInstanceUsageDetails` response models were removed in the Java Management service

## 2.3.1 - 2021-09-14
### Added
- Support for serviceHostKeyFingerprint property for InstanceConsoleConnection in Core service
- Support for Shielded Instances in Core service
- Support for ML Jobs in the Data Science service

## 2.3.0 - 2021-09-07
### Added
- Support for terraform advanced options (detailed log level, refresh, and parallelism) on jobs in the Resource Manager service
- Support for forced cancellation when cancelling jobs in the Resource Manager service
- Support for getting the detailed log content of a job in the Resource Manager service
- Support for provider information in the responses of list operations in the Management Dashboard service
- Support for scheduled jobs in Database Management service
- Support for monitoring and management of OCI virtual machine, bare metal, and ExaCS databases in the Database Management service
- Support for a unified way of managing both external and cloud databases in the Database Management service
- Support for metrics and Performance Hub on virtual machine, bare metal, and ExaCS databases in the Database Management service

### Breaking changes
- The property `ociSplatGeneratedOcids` has been removed from `CreateTemplateRequest` in the Resource Manager service

## 2.2.2 - 2021-08-31
### Added
- Support for Oracle Analytics Cloud and OCI Vault integration on connections in the Data Catalog service
- Support for critical event monitoring in the OS Management service

## 2.2.1 - 2021-08-24
### Added
- Support for generating recommended VM cluster networks in the Database service
- Support for creating VM cluster networks with a specified listener port in the Database service

## 2.2.0 - 2021-08-17
### Added
- Support for getting management agent hosts which are eligible to create Operations Insights host resources on, in the Operations Insights service
- Support for getting summarized agent counts and summarized plugin counts in the Management Agent Cloud service

### Breaking changes
- Removed default retries and default circuit breakers from all the services
- The model `WorkSubmissionKey` has been removed from the Management Agent Cloud service
- The data type of property `pluginName` in `ListManagementAgentsRequest` has been changed to `Array<string>` in the Management Agent Cloud service
- The data type of property `version` in `ListManagementAgentsRequest` has been changed to `Array<string>` in the Management Agent Cloud service
- The data type of property `platformType` in `ListManagementAgentsRequest` has been changed to `Array<model.PlatformTypes>` in the Management Agent Cloud service

## 2.1.0 - 2021-08-03
### Added
- Support for manually copying volume group backups across regions in the Block Volume service
- Support for work requests for the copy volume backup and copy boot volume backup operations in the Block Volume service
- Support for specifying external Hive metastores during application creation in the Data Flow service
- Support for changing the compartment of a backup in the MySQL Database service
- Support for model catalog features including provenance, metadata, schemas, and artifact introspection in the Data Science service
- Support for Exadata system network bonding in the Database service
- Support for creating autonomous databases with early patching enabled in the Database service

### Breaking changes
- Default retries and circuit breakers in the SDK removed for the following services : Functions, Streaming, Big Data and Notifications

## 2.0.1 - 2021-07-27
### Added
- Support for filtering by tag on capacity planning and SQL warehouse list operations in the Operations Insights service
- Support for creating cross-region autonomous data guards in the Database service
- Support for the customer contacts feature on cloud exadata infrastructure in the Database service
- Support for cost analysis custom tables in the Usage service

## 2.0.0 - 2021-07-20
### Added
- Support for schedules, schedule tasks, REST tasks, operators, S3, and Fusion Apps in the Data Integration service
- Support for getting available updates and update histories for VM clusters in the Database service
- Support for downloading network validation reports for Exadata network resources in the Database service
- Support for patch and upgrade of Grid Infrastructure (GI), and update of DomU OS software for VM clusters in the Database service
- Support for updating data guard associations in the Database service

### Breaking Changes
- Support for retries by default in the SDK. To disable default retries, set the environment variable `OCI_SDK_DEFAULT_RETRY_ENABLED` to `false` or programmatically set the value of `common.GenericRetrier.defaultRetryConfiguration`
- Support for circuit breaker by default in the SDK. To disable default circuit breaker, set the environment variable `OCI_SDK_DEFAULT_CIRCUITBREAKER_ENABLED` to `false` or programmatically set the value of `common.CircuitBreaker.defaultConfiguration`
- Removed the property `isFilePattern` from `CsvFormatAttribute` model under the Data Integration service
- Removed the property `bucketName` from `OracleAtpWriteAttributes` model under the Data Integration service
- Removed the property `bucketName` from `OracleAdwcWriteAttributes` model under the Data Integration service
- Changed the data type of  property `type` in `ShapeField` model from `string` to `any` under the Data Integration service
- Changed the data type of  property `type` in `NativeShapeField` model from `string` to `any` under the Data Integration service
- Changed the data type of property `lifecycleState` in `ListWorkspacesRequest` from `ListWorkspacesRequest.LifecycleState` to `string` under the Data Integration service

## 1.23.0 - 2021-07-13
### Added
- Support for the AI Anomaly Detection service
- Support for retrieving a DNS zone as a zone file in the DNS service
- Support for querying manual adjustments in the Usage service
- Support for searching Marketplace listings in the Marketplace service
- Support for new cluster type 'ODH' in the Big Data service
- Support for availability domain as an optional parameter when creating VLANs in the Networking service
- Support for search domain type on DHCP options, to support multi-level domain search in the Networking service

### Breaking Changes
- Removed the property `tsig` from `ExternalMaster` model under the DNS service
- Removed the model `TSIG` from the DNS service
- Removed the models `CreateCustomTableDetails`, `CustomTableCollection`, `CreateScheduleReportDetails`, `CustomTableCollection`,`CustomTableSummary`, `CustomTable`, `SavedScheduleReport`, `ScheduleReportCollection`, `ScheduleReportSummary`, `ScheduleReport`, `UpdateCustomTableDetails`, `UpdateScheduleReportDetails` from the Usage service

## 1.22.1 - 2021-07-06
### Added
- Support for order activation in the Organizations service
- Support for resource principal authorization on Enterprise Manager bridge resources in the Operations Insights service
- Support for the starter edition license type in the Content and Experience service
- Support for the Generic Artifacts service's new domain name

## 1.22.0 - 2021-06-29
### Added
- Support for the DevOps service
- Support for configuring network security groups for node pools in the Container Engine for Kubernetes service
- Support for optionally specifying CPU core count and data storage size when creating autonomous databases in the Database service
- Support for metastore and initial data asset import/export in the Data Catalog service
- Support for associating domain names to emails and managing email domain names / DKIM in the Email Delivery service
- Support for email domain names on senders and suppressions in the Email Delivery service

### Breaking Changes
- `Displayname` enum was removed from the SortBy property in ListJobExecutionsRequest under the Data Catalog service
- `sortOrder` field was changed to `model.SortOrderEnum` to `model.SortOrder` in ListSuppressionsRequest under the Email Delivery service
- `sortOrder` field was changed to `model.SortOrderEnum` to `model.SortOrder` in ListSendersRequest under the Email Delivery service
- The property `CpuCoreCount` was made optional in CreateAutonomousDatabaseBase model in the Database service

## 1.21.1 - 2021-06-22
### Added
- Support for virtual machine and bare metal pluggable databases in the Database service

## 1.21.0 - 2021-06-15
### Added
- Support for elastic storage on Exadata Infrastructure resources for Cloud at Customer in the Database service
- Support for registration and management of target databases in the Data Safe service
- Support for config on metadata in the Management Dashboard service
- Support for a new work request operation type for node pool reconciliation events in the Container Engine for Kubernetes service
- Support for migrating clusters with a public Kubernetes API endpoint which are not integrated with a customer's VCN to a VCN-native cluster in the Container Engine for Kubernetes service
- Support for getting the spark version of applications, and filtering applications by spark version, in the Data Flow service

### Breaking Changes
- Removed the property `freeformTags` and `definedTags` from ManagementDashboardExportDetails model in the Management Dashboard service

## 1.20.2 - 2021-06-08
### Added
- Support for Java Management service
- Support for resource principals for the Enterprise Manager bridge resource in Operations Insights service
- Support for encryptionInTransitType in BootVolumeAttachment and IScsiVolumeAttachment in Core service
- Support for updating iscsiLoginState for VolumeAttachment in Core service
- Support for a new type of Source called Import for use with the Export tool in Application Migration service

## 1.20.1 - 2021-06-01
### Added
- Support for configuration of autonomous database KMS keys in the Database service
- Support for creating database software images with any supported RUs in the Database service
- Support for creating database software images from an existing database home in the Database service
- Support for listing all NSGs associated with a given VLAN in the Networking service
- Support for a duration windows, task failure reasons, and next execution times on scheduled tasks in the Logging Analytics service
- Support for calling Oracle Cloud Infrastructure services in the sa-vinhedo-1 region

## 1.20.0 - 2021-05-25
### Added
- Support for the Generic Artifacts service
- Support for the Bastion service
- Support for reading secrets by name in the Vault service
- Support for the isDynamic field when listing definitions in the Limits service
- Support for getting billable image sizes in the Compute service
- Support for getting Automatic Workload Repository (AWR) data on external databases in the Database Management service
- Support for the VM.Standard.E3.Flex flexible compute shape with customizable OCPUs and memory on notebooks in the Data Science service
- Support for container images and generic artifacts billing in the Registry service
- Support for the HCX Enterprise add-on in the VMware Solution service

### Breaking Changes
- Updated the property `name ` to use enum `model.Sku` instead of `SupportedSkuSummary.Name`  from the model `SupportedSkuSummary` in the ocvp service
- Update the property `initialSku` from required to optionnal in the model `sddc` in ocvp service.

## 1.19.5 - 2021-05-18
### Added
- Support for spark-submit compatible options in the Data Flow service
- Support for Object Storage as a configuration source in the Resource Manager service

## 1.19.4 - 2021-05-11
### Added
- Support for creating notebook sessions with larger block volumes in the Data Science service
- Support for database maintenance run patch modes in the Database service

## 1.19.3 - 2021-05-04
### Added
- Support for the Operator Access Control service
- Support for the Service Catalog service
- Support for the AI Language service
- Support for autonomous database on Exadata Cloud at Customer infrastructure patching in the Database service

## 1.19.2 - 2021-04-27
### Added
- VCN id parameters were moved from being required to being optional on all list operations in the Networking service
- Support for RACs (real application clusters) for external container, non-container, and pluggable databases in the Database service
- Support for data masking in the Cloud Guard service
- Support for opting out of DNS records during instance launch, as well as attaching secondary VNICs, in the Compute service
- Support for mutable sizes on cluster networks in the Autoscaling service
- Support for auto-tiering on buckets in the Object Storage service
- Upgraded isomorphic-fetch library from v2.2.1 to v3.0.0

## 1.19.1 - 2021-04-20
### Added
- Support for opting in/out of live migration on instances in the Compute service
- Support for enabling/disabling Operations Insights on external non-container and external pluggable databases in the Database service
- Support for a GraphStudio URL as a connection URL on databases in the Database service
- Support for adding customer contacts on autonomous databases in the Database service
- Support for name annotations on harvested objects in the Data Catalog service

## 1.19.0 - 2021-04-13
### Added
- Support for the Database Migration service
- Support for the Networking Topology service
- Support for getting the id of peered VCNs on local peering gateways in the Networking service
- Support for burstable instances in the Compute service
- Support for preemptible instances in the Compute service
- Support for fractional resource usage and availability in the Limits service
- Support for streaming analytics in the Service Connector Hub service
- Support for flexible routing inside DRGs to enable packet flow between any two attachments in the Networking service 
- Support for routing policy to customize dynamic import/export of routes in the Networking service
- Support for IPv6, including on FastConnect and IPsec resources, in the Networking service
- Support for request validation policies in the API Gateway service
- Support for RESP-compliant (e.g. REDIS) response caches, and for configuring response caching per-route in the API Gateway service
- Support for flexible billing in the VMWare Solution service
- Support for new DNS format for the Web Application Acceleration and Security service
- Support for configuring APM tracing on applications and functions in the Functions service
- Support for Enterprise Manager external databases and Management Agent Service managed external databases and hosts in the Operations Insights service
- Support for getting cluster cache metrics for RAC CDB managed databases in the Database Management service

### Breaking Changes
- Removed the property `isInternetAccessAllowed` from `CreateIpv6Details` model in the core service
- Removed the property `ipv6CidrBlock` from `CreateVcnDetails` model in the core service
- Removed the property `isInternetAccessAllowed` from `Ipv6` model in the core service
- Removed the property `publicIpAddress` from `Ipv6` model in the core service
- Removed the property `ipv6PublicCidrBlock` from `Subnet` model in the core service
- Removed the property `isInternetAccessAllowed` from `UpdateIpv6Details` model in the core service
- Removed the property `ipv6CidrBlock` from `Vcn` model in the core service
- Removed the property `ipv6PublicCidrBlock` from `Vcn` model in the core service

## 1.18.1 - 2021-04-06
### Added
- Support for scheduling the suspension and resumption of compute instance pools based on predefined schedules in the Autoscaling service
- Support for database software images for Cloud@Customer in the Database service
- Support for OCIC IDCS authorization details in the Application Migration service
- Support for cross-region asynchronous volume replication in the Block Storage service
- Support for SDK generation in the API Gateway service
- Support for container image signing in the Registry service
- Support for cluster features as a part of the Container Engine for Kubernetes service
- Support for filtering dedicated virtual machine hosts by remaining memory and OCPUs in the Compute service
- Support for read/write-any object from buckets using pre-authenticated requests in the Object Storage service
- Support for restricting pre-authenticated requests by prefix in the Object Storage service
- Support for route filtering on public virtual circuits in the Virtual Networking service

## 1.18.0 - 2021-03-30
### Added
- Support for the Vulnerability Scanning service
- Support for vSphere 7.0 in the VMware Solution service
- Support for forecasting in the Usage service
- Support for viewing, searching, and modifying parameters for on-premise Oracle databases in the Database Management service
- Support for listing tablespaces of managed databases in the Database Management service
- Support for cross-regional replication of keys in the Key Management service
- Support for highly-available database systems in the MySQL Database service
- Support for Oracle Enterprise Manager bridges, source auto-association, source event type mappings, and plugins to upload data in the Logging Analytics service

### Breaking Changes
- Updated the Status enum `Succesful` to `Successful` from ListLookupsRequest in the log analytics service.
- Updated the property `forcastType` to `forecastType` from Forecast model in the usageapi service.

## 1.17.0 - 2021-03-23
### Added
- Support for the Network Load Balancing service
- Support for maintenance runs on autonomous databases in the Database service
- Support for announcement preferences in the Announcements service
- Support for domain claiming in the Organizations service
- Support for saved reports in the Usage service
- Support for the HeatWave in-memory analytics accelerator in the MySQL Database service
- Support for community applications in the Marketplace service
- Support for capacity reservations in the Compute service

### Breaking Changes
- Update the property `vnicId` from optional to required in `CreateIpv6Details` in core service.
- Removed the property `compartmentId` from `ListWorkRequestLogsRequest` model in the tenantmanagercontrolplane service
- Removed the property `compartmentId` from `ListWorkRequestErrorsRequest` model in the tenantmanagercontrolplane service

## 1.16.2 - 2021-03-16
### Added
- Support for routing policies and HTTP2 listener protocols in the Load Balancing service
- Support for model deployments in the Data Science service
- Support for private clusters in the Container Engine for Kubernetes service
- Support for updating an instance's usage type in the Content and Experience service

## 1.16.1 - 2021-03-09
### Added
- Support for the Application Performance Monitoring service
- Support for the Golden Gate service
- Support for SMS subscriptions in the Notifications service
- Support for friendly-formatted messages in the Service Connector Hub service
- Support for attaching and detaching instances to instance pools in the Autoscaling service

## 1.16.0 - 2021-03-02
### Added
- Support for pipelines, pipeline tasks, and favorites in the Data Integration service
- Support for publishing tasks to OCI Data Flow in the Data Integration service
- Support for clones in the File Storage service

### Breaking Changes
- Changed model `UniqueKey` in the Data Integration service to not inherit from Key.
- Changed model `PrimaryKey` in the Data Integration service to inherit from `UniqueKey`.
- Removed case `UNIQUE_KEY` from modelType in the `key` model in the Data Integration service.

## 1.15.2 - 2021-02-23
### Added
- Support for the OCI Registry service
- Support for exporting an existing running VM, or a copy of VM, into a VMDK, QCOW2, VDI, VHD, or OCI formatted image in the Compute service
- Support for platform configurations on instances in the Compute service
- Support for providing target tags and target compartments on profiles in the Optimizer service
- Support for the 'Fix it' feature in the Optimizer service

## 1.15.1 - 2021-02-16
### Added
- Support for scan DNS names and zone ids on database system, cloud VM cluster, and autonomous Exadata infrastructure responses in the Database service
- Support for specifying ACL rules to limit ingress into public load balancers in the Integration service
- Support for Cloud at Customer as a source type in the Application Migration service
- Support for selective migration of specific resources in the Application Migration service

## 1.15.0 - 2021-02-09
### Added
- Support for the Database Management service
- Support for setting an offset for budget processing in the Budgets service
- Support for enabling and disabling Oracle Cloud Agent plugins in the Compute service
- Support for listing available plugins and for getting the status of plugins in the Oracle Cloud Agent service
- Support for one-off patching in autonomous transaction processing - dedicated databases in the Database service
- Support for additional database upgrade options in the Database service
- Support for glossary term recommendations in the Data Catalog service
- Support for listing errata in the OS Management service

### Breaking Changes
- Removed the model `InstanceAgentCommandContentInfo` from Compute Instance Agent service.
- Update the property `text` from required to optional in `InstanceAgentCommandExecutionOutputViaTextDetails` model in Compute Instance Agent service. 

## 1.14.0 - 2021-02-02
### Added
- Support for checking if a contact for Exadata infrastructure is valid in My Oracle Support in the Database service
- Support for checking if Exadata infrastructure is in a degraded state in the Database service
- Support for updating the operating system on a VM cluster in the Database service
- Support for external databases in the Database service
- Support for uploading objects to the infrequent access storage tier in the Object Storage service
- Support for changing the storage tier of existing objects in the Object Storage service
- Support for private templates in the Resource Manager service
- Support for multiple encryption domains on IPSec tunnels in the Networking service

### Breaking Changes
- Update the property `vnicId` from required to optional in `Ipv6` model in the core service.
- Removed the property `eTag` from `ListAppCatalogListingResourceVersionsResponse` model in the core service
- Removed `exist` method from JavaScript Array prototype.

## 1.13.0 - 2021-01-26
### Added
- Support for creating, managing, and using asymmetric keys in the Key Management service
- Support for peer ACD unique names in Exadata Cloud at Customer in the Database service
- Support for ACLs on autonomous databases in Exadata Cloud at Customer Data Guard in the Database service
- Support for drift detection on individual resources of a stack in the Resource Manager service
- Support for private access channels and vanity URLs in the Analytics Cloud service
- Support for updating load balancer shapes in the Blockchain Platform service
- Support for assigning volume backup policies to volume groups in the Block Volume service


### Breaking Changes
- Update the property `idcsAccessToken` from optional to required in `CreateBlockchainPlatformDetails` in blockchain service.

## 1.12.0 - 2021-01-19
### Added
- Support for Logging Analytics as a target in the Service Connector Hub service
- Support for lookups, agent collection warnings, task commands, and data archive/recall in the Logging Analytics service

### Fixed
- Fixed a bug in the endpoint used for the Management Dashboard service

### Breaking Changes
- Updated the property of `sortBy` type from `string` to `ListSourceMetaFunctionsRequest.SortBy` from the model of `ListSourceMetaFunctionsRequest` in the log analytics service.
- Updated the property of `sortBy` type from `string` to `ListSourceLabelOperatorsRequest.SortBy`,` from the model of `ListSourceLabelOperatorsRequest` in the log analytics service.
- Updated the property of `sortBy` type from `string` to `ListParserMetaPluginsRequest.SortBy`,` from the model of `ListParserMetaPluginsRequest` in the log analytics service.
- Updated the property of `sortBy` type from `string` to `ListParserFunctionsRequest.SortBy`,` from the model of `ListParserFunctionsRequest` in the log analytics service.
- Updated the property of `sortBy` type from `string` to `ListMetaSourceTypesRequest.SortBy`,` from the model of `ListMetaSourceTypesRequest` in the log analytics service.
- Added mandatory field `kind` to the model `UpdateScheduleTaskDetails` in the log analytics service.

## 1.11.0 - 2021-01-12
### Added
- Support for auto-scaling in the Big Data service
- Documentation fixes for the Logging Search service

### Breaking Changes
- Removed the enum `UpdatingInfra` from model BdsInstance in the Big Data Service.
- Removed the enum `Stopping` and `Starting` from model Node in the Big Data Service.

## 1.10.0 - 2020-12-15
### Added
- Support for filtering listKeys based on KeyShape in KeyManagement service
- Support for the Oracle Roving Edge Infrastructure service
- Support for flexible ShapeDetails in Load Balancer service
- Support for listing of harvested Rules, additional filtering for Logical Entity list calls in Data Catalog service
- Support second level domain for audit SDK
- Support for listing flex components in Database service
- Support for APEX service for ADBS on OCI console for Database service
- Support for Customer-Managed Key features as a part of the Database service
- Support for Github configuration source provider as part of the Resource Manager service
 
### Breaking Changes
- Removing deprecated createAutonomousDataWarehouse API from Database service
- Removing deprecated createAutonomousDataWarehouseBackup API from Database service
- Removing deprecated deleteAutonomousDataWarehouse API from Database service
- Removing deprecated generateAutonomousDataWarehouseWallet API from Database service
- Removing deprecated getAutonomousDataWarehouse API from Database service
- Removing deprecated getAutonomousDataWarehouseBackup API from Database service
- Removing deprecated listAutonomousDataWarehouseBackups API from Database service
- Removing deprecated listAutonomousDataWarehouses API from Database service
- Removing deprecated restoreAutonomousDataWarehouse API from Database service
- Removing deprecated startAutonomousDataWarehouse API from Database service
- Removing deprecated stopAutonomousDataWarehouse API from Database service
- Removing deprecated updateAutonomousDataWarehouse API from Database service

## 1.9.1 - 2020-12-08
### Added
- Support for Integration Service custom endpoint feature
- Support for metadata field in IdentityProvider Get and List response
- Support for fine-grained data analysis and improved SQL insights
- Support for ADB Dedicated - ORDS and SSL cert rotation at AEI
- Support for Maintenance Schedule feature for Exadata Infrastructure resources for ExaCC

## 1.9.0 - 2020-12-01
### Added
- Support for calling Oracle Cloud Infrastructure services in the sa-santiago-1 region
- Support for peer and OSN resources, as well as retry tokens, in the Blockchain Platform service
- Support for getting the availability status of management agents in the Management Agent service
- Support for the on-prem-connector resource type in the Data Safe service
- Support for service channels in the MySQL Database service
- Support for getting the creation type of backups, and for filtering backups by creation type in the MySQL Database service


### Breaking
- Update the property `compartmentId` from optional to required in `ListDataSafePrivateEndpointsRequest` and `ListWorkRequestsRequest` in datasafe service.
- Deleted the property `freeformTags` and `definedTags` from `EnableDataSafeConfigurationDetails` model in datasafe service

## 1.8.0 - 2020-11-17
### Added
- Support for specifying memory for AMD E3 shapes during node pool creation and update in the Container Engine for Kubernetes service
- Support for upgrading a database on a VM database system in the Database service
- Support for listing autonomous database clones in the Database service
- Support for Data Guard with autonomous container databases on Exadata Cloud at Customer in the Database service
- Support for getting the last login time of a user in the Identity service
- Support to bulk editing tags on resources in the Identity service


### Breaking
- Updated the property of `status` type from `Array<model.WorkRequestStatus>` to `Array<string>` from the model of `ListWorkRequestsRequest` in the container engine service
- The models `AgentUpload`, `Attribute`, `FieldMap`, `GenerateAgentObjectNameDetails`, `LogAnalytics`, `LogAnalyticsSummary`, `OutOfBoxEntityTypeDetails`, `Query`, `QueryWorkRequestResource`, `ServiceTenancy`, `SortOrders`, `StringListDetails`, `CreateNamespaceDetails`, `RegisterEntityTypeDetails` are removed from the Log Analytics service
- Attribute `errorDetails` in models `DeleteAssociationsResponse` is removed from the Log Analytics service

## 1.7.0 - 2020-11-10
### Added
- Support for the 21C autonomous database version in the Database service
- Support for creating a Data Guard association with a standby database from a database software image in the - Database service
- Support for specifying a TDE wallet password when creating a database or database system in the Database service
- Support for enabling access control lists for autonomous databases on Exadata Cloud At Customer in the Database - service
- Support for private DNS resolvers, resolver endpoints, and views in the DNS service
- Support for getting a VCN and resolver association in the Networking service
- Support for additional parameters when updating subnets and VLANs in the Networking service
- Support for analytics clusters (database accelerators) in the MySQL Database service
- Support for migrations to Java Cloud Service and Oracle Weblogic Server instances that use existing databases in the Application Migration service
- Support for specifying reserved IPs when creating load balancers in the Load Balancing service


### Breaking
- Updated the property of `lifecycleState` type from `string` to `model.MigrationLifecycleStates` from the model of `ListMigrationsRequest` in the application migration service
- Updated the property of `lifecycleState` type from `string` to `model.SourceLifecycleStates`  from the model of `ListSourcesRequest` in the application migration service

## 1.6.3 - 2020-11-03
### Added
- Support for calling Oracle Cloud Infrastructure services in the uk-cardiff-1 region
- Support for the Organizations service
- Support for the Optimizer service
- Support for tenancy ID and name on responses in the Usage service
- Support for object versioning in object lifecycle management in the Object Storage service
- Support for specifying a syslog URL for applications in the Functions service
- Support for creation of always-free NoSQL database tables in the NoSQL Database service

## 1.6.2 - 2020-10-27
### Added
- Support for the Compute Instance Agent service
- Support for key store resources and operations in the Database service
- Support for specifying a key store when creating autonomous container databases in the Database service

## 1.6.1 - 2020-10-20
### Added
- Support for the Operations Insights service
- Support for updating autonomous databases to enable/disable Operations Insights service integration, in the Database service
- Support for the NEEDS_ATTENTION lifecycle state on database systems in the Database service
- Support for HCX in the VMware Solutions service

## 1.6.0 - 2020-10-13
### Added
- Support for API definitions in the API Gateway service
- Support for pattern-based logical entities, namespace-bound custom properties, and faceted search in the Data Catalog service
- Support for autonomous Data Guard on autonomous infrastructure in the Database service
- Support for creating a Data Guard association on an existing standby database home in the Database service
- Support for upgrading cloud VM cluster grid infrastructure in the Database service
- Support for Circuit Breakers


### Breaking
- Attribute `isQuickStart` in models `CreateLogSavedSearchDetails`, `LogSavedSearchSummary`,`UpdateLogSavedSearchDetails` and `LogSavedSearch` is removed from the Logging Management service
- Lifecycle State `DELETED` is removed from the Logging Management service

## 1.5.7 - 2020-10-06
### Added
- Support for calling Oracle Cloud Infrastructure services in the me-dubai-1 region
- Support for rotating keys on autonomous container databases and autonomous databases in the Database service
- Support for cloud Exadata infrastructure and cloud VM clusters in the Database service
- Support for controlling the display of tax banners in the Marketplace service
- Support for application references, patch changes, generic JDBC and MySQL data asset types, and publishing tasks to OCI Dataflow in the Data Integration service
- Support for disabling the legacy Instance Metadata endpoints v1 in the Compute service
- Support for instance configurations specifying instance options in the Compute Management service

## 1.5.6 - 2020-09-29
### Added
- Support for specifying custom content dispositions when downloading objects in the Object Storage service
- Support for the “bring your own IP address” feature in the Virtual Networking service
- Support for updating the tags of instance console connections in the Compute service
- Support for custom SSL certificates on gateways in the API Gateway service

## 1.5.5 - 2020-09-22
### Added
- Support for software keys in the Key Management service
- Support for customer contacts on Exadata Cloud at Customer in the Database service
- Support for updating open modes and permission levels of autonomous databases in the Database service
- Support for flexible memory on VM instances in the Compute and Compute Management services

## 1.5.4 - 2020-09-15
### Added
- Support for the Cloud Guard service
- Support for specifying desired consumption models when creating instances in the Integration service
- Support for dynamic shapes in the Load Balancing service
- Support for existing code / samples which call the SDK to work in Cloud Shell without changes

## 1.5.3 - 2020-09-08
### Added
- Support for Logging Service
- Support for Logging Analytics Service
- Support for Logging Search Service
- Support for Logging Ingestion Service
- Support for Management Agent Cloud Service
- Support for Management Dashboard Service
- Support for Service Connector Hub service
- Support for Policy based Request/Response transformation in the API Gateway Service
- Support for sending diagnostic interrupt to a VM instance in the Compute Service
- Support for custom Database Software Images in the Database Service
- Support for getting and listing container database patches for Autonomous Container Database resources in the Database Service
- Support for updating patch id on maintenance run for Autonomous Container Database resources in the Database Service
- Support for searching Oracle Cloud resources across tenancies in the Search Service
- Documentation update for Logging Policies in the API Gateway service

## 1.5.2 - 2020-09-01
### Added
- Support for calling Oracle Cloud Infrastructure services in the ap-chiyoda-1 region
- Support for VM database cloning in the Database service
- Support for the MAINTENANCE_IN_PROGRESS lifecycle state on database systems, VM clusters, and Cloud Exadata in the Database service
- Support for provisioning refreshable clones in the Database service
- Support for new options on listeners and backend sets for specifying SSL protocols, SSL cipher suites, and server ordering preferences in the Load Balancing service
- Support for AMD flexible shapes with configurable CPU in the Container Engine for Kubernetes service
- Support for network sources in authentication policies in the Identity service

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
