/**
 *
 *
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/artifacts/ListContainerImageSignatures.ts.html |here} to see how to use ListContainerImageSignaturesRequest.
 */
export interface ListContainerImageSignaturesRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * When set to true, the hierarchy of compartments is traversed
   * and all compartments and subcompartments in the tenancy are
   * inspected depending on the the setting of {@code accessLevel}.
   * Default is false. Can only be set to true when calling the API
   * on the tenancy (root compartment).
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * A filter to return a container image summary only for the specified container image OCID.
   *
   */
  "imageId"?: string;
  /**
   * A filter to return container images only for the specified container repository OCID.
   *
   */
  "repositoryId"?: string;
  /**
 * A filter to return container images or container image signatures that match the repository name.
* <p>
Example: {@code foo} or {@code foo*}
* 
 */
  "repositoryName"?: string;
  /**
 * The digest of the container image.
* <p>
Example: {@code sha256:e7d38b3517548a1c71e41bffe9c8ae6d6d29546ce46bf62159837aad072c90aa}
* 
 */
  "imageDigest"?: string;
  /**
   * A filter to return only resources that match the given display name exactly.
   *
   */
  "displayName"?: string;
  /**
 * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the kmsKeyVersionId used to sign the container image.
* <p>
Example: {@code ocid1.keyversion.oc1..exampleuniqueID}
* 
 */
  "kmsKeyId"?: string;
  /**
 * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the kmsKeyVersionId used to sign the container image.
* <p>
Example: {@code ocid1.keyversion.oc1..exampleuniqueID}
* 
 */
  "kmsKeyVersionId"?: string;
  /**
   * The algorithm to be used for signing. These are the only supported signing algorithms for container images.
   */
  "signingAlgorithm"?: ListContainerImageSignaturesRequest.SigningAlgorithm;
  /**
 * For list pagination. The maximum number of results per page, or items to return in a paginated
* \"List\" call. For important details about how pagination works, see
* [List Pagination](https://docs.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: {@code 50}
* 
 */
  "limit"?: number;
  /**
   * For list pagination. The value of the {@code opc-next-page} response header from the previous \"List\"
   * call. For important details about how pagination works, see
   * [List Pagination](https://docs.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * Unique identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The field to sort by. You can provide one sort order ({@code sortOrder}). Default order for
   * TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME
   * sort order is case sensitive.
   * <p>
   **Note:** In general, some \"List\" operations (for example, {@code ListInstances}) let you
   * optionally filter by availability domain if the scope of the resource type is within a
   * single availability domain. If you call one of these \"List\" operations without specifying
   * an availability domain, the resources are grouped by availability domain, then sorted.
   *
   */
  "sortBy"?: ListContainerImageSignaturesRequest.SortBy;
  /**
   * The sort order to use, either ascending ({@code ASC}) or descending ({@code DESC}). The DISPLAYNAME sort order
   * is case sensitive.
   *
   */
  "sortOrder"?: ListContainerImageSignaturesRequest.SortOrder;
}

export namespace ListContainerImageSignaturesRequest {
  export enum SigningAlgorithm {
    Sha224RsaPkcsPss = "SHA_224_RSA_PKCS_PSS",
    Sha256RsaPkcsPss = "SHA_256_RSA_PKCS_PSS",
    Sha384RsaPkcsPss = "SHA_384_RSA_PKCS_PSS",
    Sha512RsaPkcsPss = "SHA_512_RSA_PKCS_PSS"
  }

  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
