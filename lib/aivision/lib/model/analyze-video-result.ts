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
 * Video analysis results.
 */
export interface AnalyzeVideoResult {
  "videoMetadata": model.VideoMetadata;
  /**
   * Detected labels in a video.
   */
  "videoLabels"?: Array<model.VideoLabel>;
  /**
   * Detected objects in a video.
   */
  "videoObjects"?: Array<model.VideoObject>;
  /**
   * Tracked objects in a video.
   */
  "videoTrackedObjects"?: Array<model.VideoTrackedObject>;
  /**
   * Detected text in a video.
   */
  "videoText"?: Array<model.VideoText>;
  /**
   * Detected faces in a video.
   */
  "videoFaces"?: Array<model.VideoFace>;
  /**
   * The ontologyClasses of video labels.
   */
  "ontologyClasses"?: Array<model.OntologyClass>;
  /**
   * Label Detection model version.
   */
  "labelDetectionModelVersion"?: string;
  /**
   * Object Detection model version.
   */
  "objectDetectionModelVersion"?: string;
  /**
   * Object Tracking model version.
   */
  "objectTrackingModelVersion"?: string;
  /**
   * Text Detection model version.
   */
  "textDetectionModelVersion"?: string;
  /**
   * Face Detection model version.
   */
  "faceDetectionModelVersion"?: string;
  /**
   * Array of possible errors.
   */
  "errors"?: Array<model.ProcessingError>;
}

export namespace AnalyzeVideoResult {
  export function getJsonObj(obj: AnalyzeVideoResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "videoMetadata": obj.videoMetadata
          ? model.VideoMetadata.getJsonObj(obj.videoMetadata)
          : undefined,
        "videoLabels": obj.videoLabels
          ? obj.videoLabels.map(item => {
              return model.VideoLabel.getJsonObj(item);
            })
          : undefined,
        "videoObjects": obj.videoObjects
          ? obj.videoObjects.map(item => {
              return model.VideoObject.getJsonObj(item);
            })
          : undefined,
        "videoTrackedObjects": obj.videoTrackedObjects
          ? obj.videoTrackedObjects.map(item => {
              return model.VideoTrackedObject.getJsonObj(item);
            })
          : undefined,
        "videoText": obj.videoText
          ? obj.videoText.map(item => {
              return model.VideoText.getJsonObj(item);
            })
          : undefined,
        "videoFaces": obj.videoFaces
          ? obj.videoFaces.map(item => {
              return model.VideoFace.getJsonObj(item);
            })
          : undefined,
        "ontologyClasses": obj.ontologyClasses
          ? obj.ontologyClasses.map(item => {
              return model.OntologyClass.getJsonObj(item);
            })
          : undefined,

        "errors": obj.errors
          ? obj.errors.map(item => {
              return model.ProcessingError.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AnalyzeVideoResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "videoMetadata": obj.videoMetadata
          ? model.VideoMetadata.getDeserializedJsonObj(obj.videoMetadata)
          : undefined,
        "videoLabels": obj.videoLabels
          ? obj.videoLabels.map(item => {
              return model.VideoLabel.getDeserializedJsonObj(item);
            })
          : undefined,
        "videoObjects": obj.videoObjects
          ? obj.videoObjects.map(item => {
              return model.VideoObject.getDeserializedJsonObj(item);
            })
          : undefined,
        "videoTrackedObjects": obj.videoTrackedObjects
          ? obj.videoTrackedObjects.map(item => {
              return model.VideoTrackedObject.getDeserializedJsonObj(item);
            })
          : undefined,
        "videoText": obj.videoText
          ? obj.videoText.map(item => {
              return model.VideoText.getDeserializedJsonObj(item);
            })
          : undefined,
        "videoFaces": obj.videoFaces
          ? obj.videoFaces.map(item => {
              return model.VideoFace.getDeserializedJsonObj(item);
            })
          : undefined,
        "ontologyClasses": obj.ontologyClasses
          ? obj.ontologyClasses.map(item => {
              return model.OntologyClass.getDeserializedJsonObj(item);
            })
          : undefined,

        "errors": obj.errors
          ? obj.errors.map(item => {
              return model.ProcessingError.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
