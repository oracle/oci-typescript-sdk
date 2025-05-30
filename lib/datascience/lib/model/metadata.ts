/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * Defines properties of each model metadata.
 */
export interface Metadata {
  /**
   * Key of the model Metadata. The key can either be user defined or OCI defined.
   *    List of OCI defined keys:
   *          * useCaseType
   *          * libraryName
   *          * libraryVersion
   *          * estimatorClass
   *          * hyperParameters
   *          * testArtifactresults
   *          * fineTuningConfiguration
   *          * deploymentConfiguration
   *          * readme
   *          * license
   *          * evaluationConfiguration
   *
   */
  "key"?: string;
  /**
    * Allowed values for useCaseType:
*              binary_classification, regression, multinomial_classification, clustering, recommender,
*              dimensionality_reduction/representation, time_series_forecasting, anomaly_detection,
*              topic_modeling, ner, sentiment_analysis, image_classification, object_localization, other
* <p>
Allowed values for libraryName:
*              scikit-learn, xgboost, tensorflow, pytorch, mxnet, keras, lightGBM, pymc3, pyOD, spacy,
*              prophet, sktime, statsmodels, cuml, oracle_automl, h2o, transformers, nltk, emcee, pystan,
*              bert, gensim, flair, word2vec, ensemble, other
* 
    */
  "value"?: string;
  /**
   * Description of model metadata
   */
  "description"?: string;
  /**
   * Category of model metadata which should be null for defined metadata.For custom metadata is should be one of the following values \"Performance,Training Profile,Training and Validation Datasets,Training Environment,Reports,Readme,other\".
   */
  "category"?: string;
  /**
   * list of keywords for searching
   */
  "keywords"?: Array<string>;
  /**
   * Is there any artifact present for the metadata.
   */
  "hasArtifact"?: boolean;
}

export namespace Metadata {
  export function getJsonObj(obj: Metadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Metadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
