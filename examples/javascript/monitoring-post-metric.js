/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/* @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 *  <li>The first argument is the OCID of the compartment.</li>
 * </ul>
 * Refer https://docs.cloud.oracle.com/en-us/iaas/api/#/en/monitoring/20180401/MetricData/PostMetricData for more details.
 * This example uses phoenix metric endpoint https://telemetry-ingestion.us-phoenix-1.oraclecloud.com
 * we can change this to a different region (refer https://docs.cloud.oracle.com/en-us/iaas/api/#/en/monitoring/20180401/).
 */

const mt = require("oci-monitoring");
const common = require("oci-common");

const provider = new common.ConfigFileAuthenticationDetailsProvider();

const args = process.argv.slice(1);
console.log(args);
if (args.length !== 2) {
  console.error(
    "Unexpected number of arguments received. Usage : monitoring-alarm.ts <MetricCompartment>"
  );
  process.exit(-1);
}

const compartmentId = args[1];

const monitoringClient = new mt.MonitoringClient({
  authenticationDetailsProvider: provider
});
monitoringClient.endpoint = "https://telemetry-ingestion.us-phoenix-1.oraclecloud.com";

(async () => {
  try {
    var datenow = new Date();
    var dateutc = new Date(datenow.toUTCString());
    /* The timestamp datapoint format used is defined by RFC3339. 
    https://docs.cloud.oracle.com/en-us/iaas/api/#/en/monitoring/20180401/datatypes/Datapoint
    */

    const MetricDataDetails = [
      {
        "namespace": "<your_namespace_here>",
        "resourceGroup": "<your_resourcegroup_here>",
        "compartmentId": compartmentId,
        "name": "<your_name_of_the_metric_here>",
        "dimensions": {
          "appName": "<your_dimensions>",
          "podName": "<your_dimensions>"
        },
        "metadata": {
          "unit": "count",
          "displayName": "<your_display_name>"
        },
        "datapoints": [
          {
            "timestamp": dateutc,
            "value": 1,
            "count": 1
          }
        ]
      }
    ];

    const PostMetricDataDetails = {
      "metricData": MetricDataDetails
    };

    const PostMetricDataRequest = {
      "postMetricDataDetails": PostMetricDataDetails
    };

    const post_response = await monitoringClient.postMetricData(PostMetricDataRequest);
    //console.log("Retrieved :" + response.postMetricDataResponseDetails.failedMetricsCount);

    console.log(
      "Successfully posted custom metric with name: %s to namespace: %s in region: %s",
      MetricDataDetails[0].name,
      MetricDataDetails[0].namespace,
      monitoringClient.regionId
    );
  } catch (error) {
    console.log(" Not able to run post metric monitoring example. Error: " + error);
  }
})();
