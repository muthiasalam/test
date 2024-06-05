const tf = require('@tensorflow/tfjs-node');
require('dotenv').config();
const axios = require('axios');

let model;

const loadModel = async () => {
    if (!model) {
        const modelJsonUrl = process.env.MODEL_JSON_URL;
        const modelWeightsUrl = process.env.MODEL_WEIGHTS_URL;

        model = await tf.loadLayersModel(modelJsonUrl, {
            weightPathPrefix: modelWeightsUrl
        });
    }
    return model;
};

module.exports = { loadModel };
