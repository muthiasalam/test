const tf = require('@tensorflow/tfjs-node');
const { loadModel } = require('./loadModel');
const { v4: uuidv4 } = require('uuid');

const predictNumber = async () => {
    const model = await loadModel();
    const input = tf.randomUniform([1, 10]);  // Assuming the input shape is [1, 10]
    const output = model.predict(input);
    const number = output.dataSync()[0];
    return {
        id: uuidv4(),
        number: number,
    };
};

module.exports = { predictNumber };
