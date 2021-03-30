/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

"use strict";

// Common
export import common = require("oci-common");
export import SimpleAuthenticationDetailsProvider = common.SimpleAuthenticationDetailsProvider;
export import signer = common.DefaultRequestSigner;
export import DefaultRequestSigner = common.DefaultRequestSigner;
export import OciError = common.OciError;
export import HandleErrorResponse = common.handleErrorResponse;
export import ConvertStringToType = common.convertStringToType;
export import LOG = common.LOG;
export import ConfigFileAuthenticationDetailsProvider = common.ConfigFileAuthenticationDetailsProvider;
// Analytics Service
export import analytics = require("oci-analytics");

// Announcement Service
export import announcementsservice = require("oci-announcementsservice");

// API Gateway Service
export import apigateway = require("oci-apigateway");

// Application Migration Service
export import applicationmigration = require("oci-applicationmigration");

// Audit Service
export import audit = require("oci-audit");

// Autoscaling Service
export import autoscaling = require("oci-autoscaling");

// Budget Service
export import budget = require("oci-budget");

// Container Engine
export import containerengine = require("oci-containerengine");

// Core
export import core = require("oci-core");

// Database
export import database = require("oci-database");

// Dataflow Service
export import dataflow = require("oci-dataflow");

// Data Science Service
export import datascience = require("oci-datascience");

// Data Catalog Service
export import datacatalog = require("oci-datacatalog");

// DNS
export import dns = require("oci-dns");

// DTS
export import dts = require("oci-dts");

// Email
export import email = require("oci-email");

// Events
export import events = require("oci-events");

// File Storage
export import filestorage = require("oci-filestorage");

//Functions
export import functions = require("oci-functions");

//Health checks
export import healthchecks = require("oci-healthchecks");

// Identity
export import identity = require("oci-identity");

// Integration  Service
export import integration = require("oci-integration");

// Key-Management
export import keymanagement = require("oci-keymanagement");

// Limits
export import limits = require("oci-limits");

// Load Balancer
export import loadbalancer = require("oci-loadbalancer");

// Marketplace
export import marketplace = require("oci-marketplace");

// Monitoring
export import monitoring = require("oci-monitoring");

// OCE
export import oce = require("oci-oce");

// Object Storage
export import objectstorage = require("oci-objectstorage");

// ODA
export import oda = require("oci-oda");

// ONS
export import ons = require("oci-ons");

// OS Management
export import osmanagement = require("oci-osmanagement");

// Resource manager
export import resourcemanager = require("oci-resourcemanager");

// Resource Reseach
export import resourcesearch = require("oci-resourcesearch");

//Streaming
export import streaming = require("oci-streaming");

// WAAS
export import waas = require("oci-waas");

// Work Requests
export import workrequests = require("oci-workrequests");
export import cims = require("oci-cims");
export import datasafe = require("oci-datasafe");
export import bds = require("oci-bds");
export import mysql = require("oci-mysql");
export import nosql = require("oci-nosql");
export import vault = require("oci-vault");
export import secrets = require("oci-secrets");
export import dataintegration = require("oci-dataintegration");
export import ocvp = require("oci-ocvp");
export import usageapi = require("oci-usageapi");
export import blockchain = require("oci-blockchain");
export import loganalytics = require("oci-loganalytics");
export import logging = require("oci-logging");
export import loggingingestion = require("oci-loggingingestion");
export import loggingsearch = require("oci-loggingsearch");
export import managementagent = require("oci-managementagent");
export import managementdashboard = require("oci-managementdashboard");
export import sch = require("oci-sch");
export import cloudguard = require("oci-cloudguard");
export import opsi = require("oci-opsi");
export import computeinstanceagent = require("oci-computeinstanceagent");
export import optimizer = require("oci-optimizer");
export import tenantmanagercontrolplane = require("oci-tenantmanagercontrolplane");
export import rover = require("oci-rover");
export import databasemanagement = require("oci-databasemanagement");
export import artifacts = require("oci-artifacts");
export import apmcontrolplane = require("oci-apmcontrolplane");
export import apmsynthetics = require("oci-apmsynthetics");
export import apmtraces = require("oci-apmtraces");
export import goldengate = require("oci-goldengate");
export import networkloadbalancer = require("oci-networkloadbalancer");
export import vulnerabilityscanning = require("oci-vulnerabilityscanning");
