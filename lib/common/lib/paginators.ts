/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

interface hasLimit {
  limit?: number;
}

interface hasPage {
  page?: string;
}

interface hasStart {
  start?: string;
}

type Request = hasPage | hasStart;

async function* genericPaginate<
  ListRequest extends hasLimit,
  ListResponse,
  TResult extends { items?: []; listObjects?: { objects?: [] } }
>(
  request: ListRequest,
  listCall: (request: ListRequest) => Promise<ListResponse>,
  getNextPageToken: (response: ListResponse) => string | undefined,
  setNextPageToken: (request: ListRequest, nextPageToken: string) => void,
  getResults: (response: ListResponse) => TResult[],
  limitedRecord?: number
): AsyncIterableIterator<TResult> {
  let iteration = 0;
  const pageSize = request.limit || 0;
  if (limitedRecord && pageSize) {
    // We don't want to request a page size bigger than limitedRecord
    request.limit = Math.min(limitedRecord, pageSize);
  } else if (limitedRecord) {
    // If we do not have a page size, but we do have a limitedRecord, we will set page size = limitedRecord
    request.limit = limitedRecord;
  }

  while (true) {
    //  Return early if user does not want any records...
    if (limitedRecord === 0) return;

    //  If our request pageSize is bigger than the remaining records we need
    //  Set pageSize to the recordsRemaining to not retrieve more than necessary.
    if (request.limit && limitedRecord) {
      let recordsRemaining = limitedRecord - iteration;
      if (request.limit > recordsRemaining) {
        request.limit = recordsRemaining;
      }
    }

    const response = await listCall(request);
    for (const result of getResults(response)) {
      if (result.items && result.items.length > 0) {
        iteration += result.items.length;
      } else if (result.listObjects && result.listObjects.objects) {
        iteration += result.listObjects.objects.length;
      } else {
        iteration++;
      }
      yield result;

      if (limitedRecord && iteration > limitedRecord - 1) {
        return;
      }
    }

    const nextPageToken = getNextPageToken(response);
    if (!nextPageToken) {
      break;
    }
    setNextPageToken(request, nextPageToken);
  }
}

export function genericPaginateRecords<ListRequest, ListResponse, ItemSummary>(
  request: ListRequest,
  listCall: (request: ListRequest) => Promise<ListResponse>,
  getNextPageToken: (response: ListResponse) => string | undefined,
  setNextPageToken: (request: ListRequest, nextPageToken: string) => void,
  getItems: (response: ListResponse) => ItemSummary[],
  limitedRecord?: number
): AsyncIterableIterator<ItemSummary> {
  return genericPaginate(
    request,
    listCall,
    getNextPageToken,
    setNextPageToken,
    getItems,
    limitedRecord
  );
}

export function paginateRecords<ListRequest extends Request, ListResponse, ItemSummary = any>(
  request: ListRequest,
  listCall: (request: ListRequest) => Promise<ListResponse>,
  limitedRecord?: number
): AsyncIterableIterator<ItemSummary> {
  return genericPaginateRecords(
    request,
    listCall,
    res => findNextPageToken(res),
    (req, nextPageToken) => findSetPageToken(req, nextPageToken),
    res => findResult(res),
    limitedRecord
  );
}

export function genericPaginateResponses<ListRequest, ListResponse>(
  request: ListRequest,
  listCall: (request: ListRequest) => Promise<ListResponse>,
  getNextPageToken: (response: ListResponse) => string | undefined,
  setNextPageToken: (request: ListRequest, nextPageToken: string) => void,
  limitedRecord?: number
): AsyncIterableIterator<ListResponse> {
  return genericPaginate(
    request,
    listCall,
    getNextPageToken,
    setNextPageToken,
    res => [res],
    limitedRecord
  );
}

export function paginateResponses<ListRequest extends Request, ListResponse>(
  request: ListRequest,
  listCall: (request: ListRequest) => Promise<ListResponse>,
  limitedRecord?: number
) {
  return genericPaginateResponses(
    request,
    listCall,
    response => findNextPageToken(response),
    (req, nextPageToken) => findSetPageToken(req, nextPageToken),
    limitedRecord
  );
}

// Return a list of records up to limitedRecord. limitedRecord is optional. Do not pass limitedRecord if
// want to retrieve all records.
export async function paginatedRecordsWithLimit<ListRequest extends Request, ListResponse>(
  request: ListRequest,
  listCall: (request: ListRequest) => Promise<ListResponse>,
  limitedRecord?: number
) {
  const records = [];
  const response = paginateRecords(request, listCall, limitedRecord);
  let record = await response.next();
  while (record.done === false) {
    records.push(record);
    record = await response.next();
  }
  return records;
}

export async function paginatedResponsesWithLimit<ListRequest extends Request, ListResponse>(
  request: ListRequest,
  listCall: (request: ListRequest) => Promise<ListResponse>,
  limitedRecord?: number
) {
  let records: any = [];
  const response = await paginateResponses(request, listCall, limitedRecord);
  let iterator = await response.next();
  let record = iterator.value;
  while (iterator.done === false) {
    record = iterator.value;
    records.push(record);
    iterator = await response.next();
  }
  return records;
}

// Not all function contains a property called ocpNextPage. ObjectStorage for example have an equivalence in listObject.nextStartWith
function findNextPageToken(res: any): string {
  if ("listObjects" in res) {
    return res.listObjects.nextStartWith;
  }

  return res.opcNextPage;
}

// Not all function contain a property called 'page'. Object storage for example, uses 'start' to fetch the next pagination.
function findSetPageToken(req: any, nextPageToken: string): void {
  if (req.start) {
    req.start = nextPageToken;
  } else {
    req.page = nextPageToken;
  }
}

function findResult(res: any) {
  if (res.listObjects && res.listObjects.objects) {
    return res.listObjects.objects;
  }
  return res.items;
}
