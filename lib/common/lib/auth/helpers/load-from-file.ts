/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { readFileSync } from "fs";

export function loadFromFile(filePath: string): string {
  try {
    const fileContent = readFileSync(filePath, "utf8");

    return fileContent;
  } catch (e) {
    throw Error(`Failed to read file contents, error: ${e}`);
  }
}
