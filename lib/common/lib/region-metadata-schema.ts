/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/*
 * This interface defines the schema for region info from external sources
 */
export interface RegionMetadataSchema {
  realmKey: string;
  realmDomainComponent: string;
  regionKey: string;
  regionIdentifier: string;
}

export namespace RegionMetadataSchema {
  /*
   * Checks if the region info is valid
   */
  export function isValidSchema(regionMetadataSchema: RegionMetadataSchema) {
    if (regionMetadataSchema.realmKey === undefined || regionMetadataSchema.realmKey.length <= 0)
      return false;
    if (
      regionMetadataSchema.realmDomainComponent === undefined ||
      regionMetadataSchema.realmDomainComponent.length <= 0
    )
      return false;
    if (regionMetadataSchema.regionKey === undefined || regionMetadataSchema.regionKey.length <= 0)
      return false;
    if (
      regionMetadataSchema.regionIdentifier === undefined ||
      regionMetadataSchema.regionIdentifier.length <= 0
    )
      return false;
    return true;
  }
}
