const fs = require('fs');
const path = require('path');
const tf = require('@tensorflow/tfjs-node');

function loadModel() {
    const modelPath = path.join(__dirname, '../simple_model.json'); // Sesuaikan dengan lokasi penyimpanan model Anda
    const modelConfig = JSON.parse(fs.readFileSync(modelPath, 'utf-8'));

    const model = tf.sequential();
    for (const layerConfig of modelConfig.config.layers) {
        model.add(tf.layers[layerConfig.class_name].fromConfig(layerConfig.config));
    }

    return model;
}

module.exports = { loadModel };
