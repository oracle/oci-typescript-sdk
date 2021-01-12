/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import lb = require("oci-loadbalancer");
import common = require("oci-common");

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();

/**
 * Please refer to https://docs.cloud.oracle.com/iaas/api/#/en/loadbalancer/latest/RuleSet/CreateRuleSet
 * for information about using the API to create a rule set.
 * This example requires an existing LoadBalancer and it will do the following
 * 1) Create new rule set.
 * 2) Create a new listener with a reference to the new rule set.
 *
 * @param args
 *
 */

const loadBalancerId: string = "<INSERT_LOAD_BALANCER_OCID>";
const ruleSetName: string = "RandomRuleSet";

const listenerPort: number = 8080; // Make sure this port does not conflict with other existing port.
const listenerName: string = "newListenter";
const backendSetName: string = "<INSERT_BACKEND_SET_NAME>"; // This backendSetName should already be made before doing this example.
const listenerProtocol: string = "HTTP"; // Rules in this example are applicable to HTTP or HTTP2 protocols

const lbClient = new lb.LoadBalancerClient({ authenticationDetailsProvider: provider });
const lbWaiter = lbClient.createWaiters();
console.log("Creating new rule set " + ruleSetName + "...");

(async () => {
  try {
    const ruleSet: lb.models.RuleSet = await createRuleSetDetails(
      lbClient,
      loadBalancerId,
      ruleSetName
    );

    console.log("Rule set " + ruleSetName + " is created...");
    console.log("Creating new listener " + listenerName + " with rule set " + ruleSetName + "...");

    await createListener(
      lbClient,
      loadBalancerId,
      listenerPort,
      listenerName,
      backendSetName,
      listenerProtocol,
      ruleSet
    );

    console.log("Listener " + listenerName + " with rule set " + ruleSetName + " is created...");
  } catch (error) {
    console.log(" Not able to run Loadbalancer Example " + error);
  }
})();

async function createRuleSetDetails(
  client: lb.LoadBalancerClient,
  loadBalancerId: string,
  ruleSetName: string
): Promise<lb.models.RuleSet> {
  let rules: Array<lb.models.Rule> = new Array();
  const httpRequestHeaderRule: lb.models.AddHttpRequestHeaderRule = {
    header: "someRequestHeader",
    value: "/example/1",
    action: "ADD_HTTP_REQUEST_HEADER"
  };
  const extendedHttpRequestHeaderRule: lb.models.ExtendHttpRequestHeaderValueRule = {
    header: "someResponseHeader",
    suffix: "Some-static-suffix-value",
    prefix: "Some-static-prefix-value",
    action: "EXTEND_HTTP_REQUEST_HEADER_VALUE"
  };
  const removeHttpResponseHeaderValue: lb.models.RemoveHttpResponseHeaderRule = {
    header: "someResponseHeader",
    action: "REMOVE_HTTP_REQUEST_HEADER"
  };

  rules.push(httpRequestHeaderRule);
  rules.push(extendedHttpRequestHeaderRule);
  rules.push(removeHttpResponseHeaderValue);

  const createRuleSetDetails: lb.models.CreateRuleSetDetails = { name: ruleSetName, items: rules };
  const createRuleSetRequest: lb.requests.CreateRuleSetRequest = {
    createRuleSetDetails: createRuleSetDetails,
    loadBalancerId: loadBalancerId
  };
  const response = await client.createRuleSet(createRuleSetRequest);

  // Wait for some time
  const getWorkRequestRequest: lb.requests.GetWorkRequestRequest = {
    workRequestId: response.opcWorkRequestId
  };

  await lbWaiter.forWorkRequest(getWorkRequestRequest);

  const getRuleSetRequest: lb.requests.GetRuleSetRequest = {
    loadBalancerId: loadBalancerId,
    ruleSetName: ruleSetName
  };
  const getRuleSetResponse = await client.getRuleSet(getRuleSetRequest);
  return getRuleSetResponse.ruleSet;
}

async function createListener(
  client: lb.LoadBalancerClient,
  loadBalancerId: string,
  listenerPort: number,
  listenerName: string,
  backendSetName: string,
  listenerProtocol: string,
  ruleSet: lb.models.RuleSet
) {
  const createListenerDetails: lb.models.CreateListenerDetails = {
    name: listenerName,
    defaultBackendSetName: backendSetName,
    port: listenerPort,
    protocol: listenerProtocol,
    ruleSetNames: [ruleSet.name]
  };
  const createListenerRequest: lb.requests.CreateListenerRequest = {
    createListenerDetails: createListenerDetails,
    loadBalancerId: loadBalancerId
  };
  const response = await client.createListener(createListenerRequest);

  // Wait for some time for listeners to be created.
  const getWorkRequestRequest: lb.requests.GetWorkRequestRequest = {
    workRequestId: response.opcWorkRequestId
  };

  await lbWaiter.forWorkRequest(getWorkRequestRequest);
}
