/*
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates. All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { RegionMetadataSchema } from "./region-metadata-schema";

export interface AlloyConfigFileSchema {
  /**
   * Class representing AlloyConfigFileSchema blob that can be used for parsing out alloy regions, enabled services,
   * and the alloy provider name
   */
  regions: RegionMetadataSchema[];
  services: string[];
  alloyProvider: string;
  ociRegionCoexist: string;
}
