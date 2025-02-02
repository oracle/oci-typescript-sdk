/**
 * Vision API
 * Using Vision, you can upload images to detect and classify objects in them. If you have lots of images, you can process them in batch using asynchronous API endpoints. Vision's features are thematically split between Document AI for document-centric images, and Image Analysis for object and scene-based images. Pretrained models and custom models are supported.
 * OpenAPI spec version: 20220125
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
 * Detected label in a video.
 */
export interface VideoLabel {
  /**
   * Detected label name.
   */
  "name": string;
  /**
   * Label segments in a video.
   */
  "segments": Array<model.VideoLabelSegment>;
}

export namespace VideoLabel {
  export function getJsonObj(obj: VideoLabel): object {
    const jsonObj = {
      ...obj,
      ...{
        "segments": obj.segments
          ? obj.segments.map(item => {
              return model.VideoLabelSegment.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VideoLabel): object {
    const jsonObj = {
      ...obj,
      ...{
        "segments": obj.segments
          ? obj.segments.map(item => {
              return model.VideoLabelSegment.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
