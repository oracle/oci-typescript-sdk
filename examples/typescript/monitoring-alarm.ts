/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import mt = require("oci-monitoring");
import common = require("oci-common");

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();
/**
 * This class demonstrates how to use the Monitoring api in the SDK for TypeScript. This will cover:
 *
 * <ul>
 *   <li>Creating, updating, retrieving, listing and deleting alarms</li>
 *   <li>Retrieving alarm state history</li>
 *   <li>Listing status of alarms</li>
 * </ul>
 *
 * This class makes the following assumptions:
 * <ul>
 *   <li>
 *      Alarms will be created in the compartment specified by the user.
 *   </li>
 *   <li>
 *      The user has the appropriate permissions to create alarms in the compartment specified by user,
 *      read metrics in the metric compartment specified by user, and publish message in the destination
 *      specified by user.
 *   </li>
 * <ul>
 */

const DISPLAY_NAME: string = "Alarm for SDK for TypeScript sample";
const NAME_SPACE: string = "oci_computeagent";
const METRIC_QUERY: string = "CpuUtilization[1m].max() > 75";
const RESOLUTION: string = "1m";
const PENDING_DURATION: string = "PT10M";
const ALERT_SEVERITY: mt.models.Alarm.Severity = mt.models.Alarm.Severity.Error;
const BODY: string = "notification body";
const REPEAT_DURATION: string = "PT4H";
// Suppress from now.
const SUPPRESS_FROM: Date = new Date();
// Suppress for one day.
const SUPPRESS_UNTIL: Date = new Date(SUPPRESS_FROM.getTime() + 1440000); // added one day

const args = process.argv.slice(2);
console.log(args);
if (args.length !== 3) {
  console.error(
    "Unexpected number of arguments received. Usage : monitoring-alarm.ts <AlarmCompartment> <MetricCompartment> <NotificationDestination> "
  );
  process.exit(-1);
}

const compartmentId: string = args[0];
const metricCompartmentId: string = args[1];
const destination: string = args[2]; // Note: This is a topic OCID i.e: ocid1.onstopic.oc1.phx.aaaaaaaa...

const monitoringClient: mt.MonitoringClient = new mt.MonitoringClient({
  authenticationDetailsProvider: provider
});
let alarmId: any;

(async () => {
  try {
    console.log(" Creating Alarm");
    const createAlarmDetails: mt.models.CreateAlarmDetails = {
      displayName: DISPLAY_NAME,
      compartmentId: compartmentId,
      metricCompartmentId: metricCompartmentId,
      namespace: NAME_SPACE,
      query: METRIC_QUERY,
      resolution: RESOLUTION,
      pendingDuration: PENDING_DURATION,
      severity: ALERT_SEVERITY.toString(),
      body: BODY,
      isEnabled: true,
      destinations: [destination],
      repeatNotificationDuration: REPEAT_DURATION
    };
    const createAlarmRequest: mt.requests.CreateAlarmRequest = {
      createAlarmDetails: createAlarmDetails
    };
    const createAlarmResponse = await monitoringClient.createAlarm(createAlarmRequest);
    console.log(" Created Alarm : " + createAlarmResponse.alarm);
    alarmId = createAlarmResponse.alarm.id;

    // Update the alarm
    const suppression: mt.models.Suppression = {
      description: "Suppress Alarm",
      timeSuppressFrom: SUPPRESS_FROM,
      timeSuppressUntil: SUPPRESS_UNTIL
    };
    const updateAlarmDetails: mt.models.UpdateAlarmDetails = { suppression: suppression };
    const updateAlarmRequest: mt.requests.UpdateAlarmRequest = {
      updateAlarmDetails: updateAlarmDetails,
      alarmId: alarmId
    };
    const updateAlarmResponse = await monitoringClient.updateAlarm(updateAlarmRequest);
    console.log(" Updated Alarm :: " + updateAlarmResponse.alarm);

    // removed suppression for alarm
    const removeSuppressionRequest: mt.requests.RemoveAlarmSuppressionRequest = {
      alarmId: alarmId
    };
    const removeAlarmSuppressionResponse = await monitoringClient.removeAlarmSuppression(
      removeSuppressionRequest
    );
    console.log("Removed Suppression successfully for alarm " + alarmId);

    // Get the new alarm.
    const getAlarmRequest: mt.requests.GetAlarmRequest = { alarmId: alarmId };
    const getAlarmResponse = await monitoringClient.getAlarm(getAlarmRequest);
    console.log(" Retrieved Alarm " + alarmId + " :: " + getAlarmResponse.alarm);

    // Get alarm history.
    const getAlarmHistoryRequest: mt.requests.GetAlarmHistoryRequest = { alarmId: alarmId };
    const getAlarmHistoryResponse = await monitoringClient.getAlarmHistory(getAlarmHistoryRequest);
    console.log(
      " Alarm history for id " +
        alarmId +
        " :: " +
        getAlarmHistoryResponse.alarmHistoryCollection.entries
    );

    // List alarams
    const listAlarmRequest: mt.requests.ListAlarmsRequest = {
      compartmentId: compartmentId,
      displayName: DISPLAY_NAME
    };
    const listAlarmResponse = await monitoringClient.listAlarms(listAlarmRequest);
    console.log("Retrieved alarms: " + listAlarmResponse.items);

    // List Alarm Status
    const listAlarmStatusRequest: mt.requests.ListAlarmsStatusRequest = {
      displayName: DISPLAY_NAME,
      compartmentId: compartmentId
    };
    const listAlarmStatusResponse = await monitoringClient.listAlarmsStatus(listAlarmStatusRequest);
    console.log("Retrieved status of alarms:" + listAlarmStatusResponse.items);

    // Delete alarm
    const deleteAlarmRequest: mt.requests.DeleteAlarmRequest = { alarmId: alarmId };
    await monitoringClient.deleteAlarm(deleteAlarmRequest);

    console.log("Deleted Alarm" + alarmId);
  } catch (error) {
    console.log(" Not able to run monitoring alarm example. Error: " + error);
  }

  monitoringClient.close();
})();
