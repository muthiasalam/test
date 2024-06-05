const tf = require('@tensorflow/tfjs-node');
const loadModel = require('./loadModel');

let model;

const predict = async (numbers) => {
    if (!model) {
        model = await loadModel();
    }

    const input = tf.tensor2d([numbers], [1, 10]);
    const prediction = model.predict(input);
    const result = prediction.dataSync()[0];

    return { prediction: result };
};

module.exports = { predict };
