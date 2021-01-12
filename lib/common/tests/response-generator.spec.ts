/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { composeResponse } from "../../common/";
import { expect } from "chai";

describe("Test Request Generator ", () => {
  const OPC_REQUEST_ID = "sample-request-id";
  const OPC_WORK_REQUEST_ID = "sample-work-request-id";
  it("should compose response properly ", function() {
    const sdkResponse = composeResponse({
      responseObject: <TestResponse>{},
      responseHeaders: [
        {
          value: OPC_WORK_REQUEST_ID,
          key: "opcWorkRequestId",
          dataType: "string"
        },
        {
          value: OPC_REQUEST_ID,
          key: "opcRequestId",
          dataType: "string"
        }
      ]
    });
    expect(sdkResponse.opcRequestId).equals(OPC_REQUEST_ID);
    expect(sdkResponse.opcWorkRequestId).equals(OPC_WORK_REQUEST_ID);
  });
});

class TestResponse {
  "opcWorkRequestId": string;
  "opcRequestId": string;
}
