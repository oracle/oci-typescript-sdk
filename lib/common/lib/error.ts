/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
import { version } from "../package.json";
const TROUBLESHOOT_LINK = "https://docs.oracle.com/iaas/Content/API/References/apierrors.htm";

export class OciError extends Error {
  public clientVersion = `Oracle-TypeScriptSDK/${version}`;
  public loggingTips =
    "To get more info on the failing request, refer to https://docs.oracle.com/en-us/iaas/Content/API/SDKDocs/typescriptsdkconcepts.htm#typescriptsdkconcepts_topic_Logging for ways to log the request/response details.";
  public troubleshootingTips: string;

  constructor(
    public statusCode: number,
    public serviceCode: string,
    public message: string,
    public opcRequestId: string | null,
    public targetService: string,
    public operationName: string,
    public timestamp: string,
    public requestEndpoint: string,
    apiReferenceLink: string
  ) {
    super(message);

    const apiErrorsInfo = `See ${TROUBLESHOOT_LINK}#apierrors_${statusCode}__${statusCode}_${serviceCode.toLowerCase()} for more information about resolving this error`;
    const contactInfo = `If you are unable to resolve this ${targetService} issue, please contact Oracle support and provide them this full error message.`;

    if (apiReferenceLink) {
      this.troubleshootingTips = `${apiErrorsInfo} Also see ${apiReferenceLink} for details on this operation's requirements. ${contactInfo}`;
    } else {
      this.troubleshootingTips = `${apiErrorsInfo} ${contactInfo}`;
    }
  }
}
