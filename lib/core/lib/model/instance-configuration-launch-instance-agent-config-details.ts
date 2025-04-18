/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](https://docs.oracle.com/iaas/Content/Network/Concepts/overview.htm),
[Compute](https://docs.oracle.com/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](https://docs.oracle.com/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](https://docs.oracle.com/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Configuration options for the Oracle Cloud Agent software running on the instance.
 */
export interface InstanceConfigurationLaunchInstanceAgentConfigDetails {
  /**
    * Whether Oracle Cloud Agent can gather performance metrics and monitor the instance using the
* monitoring plugins. Default value is false (monitoring plugins are enabled).
* <p>
These are the monitoring plugins: Compute Instance Monitoring
* and Custom Logs Monitoring.
* <p>
The monitoring plugins are controlled by this parameter and by the per-plugin
* configuration in the {@code pluginsConfig} object.
* <p>
- If {@code isMonitoringDisabled} is true, all of the monitoring plugins are disabled, regardless of
* the per-plugin configuration.
* - If {@code isMonitoringDisabled} is false, all of the monitoring plugins are enabled. You
* can optionally disable individual monitoring plugins by providing a value in the {@code pluginsConfig}
* object.
* 
    */
  "isMonitoringDisabled"?: boolean;
  /**
    * Whether Oracle Cloud Agent can run all the available management plugins.
* Default value is false (management plugins are enabled).
* <p>
These are the management plugins: OS Management Service Agent and Compute Instance
* Run Command.
* <p>
The management plugins are controlled by this parameter and by the per-plugin
* configuration in the {@code pluginsConfig} object.
* <p>
- If {@code isManagementDisabled} is true, all of the management plugins are disabled, regardless of
* the per-plugin configuration.
* - If {@code isManagementDisabled} is false, all of the management plugins are enabled. You
* can optionally disable individual management plugins by providing a value in the {@code pluginsConfig}
* object.
* 
    */
  "isManagementDisabled"?: boolean;
  /**
    * Whether Oracle Cloud Agent can run all the available plugins.
* This includes the management and monitoring plugins.
* <p>
To get a list of available plugins, use the
* {@link #listInstanceagentAvailablePlugins(ListInstanceagentAvailablePluginsRequest) listInstanceagentAvailablePlugins}
* operation in the Oracle Cloud Agent API. For more information about the available plugins, see
* [Managing Plugins with Oracle Cloud Agent](https://docs.oracle.com/iaas/Content/Compute/Tasks/manage-plugins.htm).
* 
    */
  "areAllPluginsDisabled"?: boolean;
  /**
   * The configuration of plugins associated with this instance.
   */
  "pluginsConfig"?: Array<model.InstanceAgentPluginConfigDetails>;
}

export namespace InstanceConfigurationLaunchInstanceAgentConfigDetails {
  export function getJsonObj(obj: InstanceConfigurationLaunchInstanceAgentConfigDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "pluginsConfig": obj.pluginsConfig
          ? obj.pluginsConfig.map(item => {
              return model.InstanceAgentPluginConfigDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: InstanceConfigurationLaunchInstanceAgentConfigDetails
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "pluginsConfig": obj.pluginsConfig
          ? obj.pluginsConfig.map(item => {
              return model.InstanceAgentPluginConfigDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
