import * as requests from "./request";
import * as responses from "./response";
import { WorkRequestWaiter } from "./workrequest-waiter";
import { WorkRequestClient } from "./client";
import { WaiterConfiguration } from "oci-common";

export async function waitForWorkRequest(
  config: WaiterConfiguration | undefined,
  client: WorkRequestClient,
  workRequestId: string
): Promise<responses.GetWorkRequestResponse> {
  const workRequestWaiter = new WorkRequestWaiter(client, config);
  const getWorkRequestRequest: requests.GetWorkRequestRequest = {
    workRequestId: workRequestId
  };
  return workRequestWaiter.forWorkRequest(getWorkRequestRequest);
}
