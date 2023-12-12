/*
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates. All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { RegionMetadataSchema } from "./region-metadata-schema";

export interface DeveloperToolConfigurationFileSchema {
  /**
   * Class representing DeveloperToolConfigurationFileSchema blob that can be used for parsing out developer tool configuration regions, enabled services,
   * and the developer tool configuration provider name
   */
  regions: RegionMetadataSchema[];
  services: string[];
  developerToolConfigurationProvider: string;
  allowOnlyDeveloperToolConfigurationRegions: string;
}
