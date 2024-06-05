const { loadModel } = require('./loadModel');

const inferenceServices = {
  async predict(inputData) {
    try {
      const model = await loadModel();

      const prediction = model.predict(tf.tensor(inputData));
      return prediction.arraySync();
    } catch (error) {
      console.error('Prediction error:', error);
      throw new Error('Prediction failed');
    }
  },
};

module.exports = inferenceServices;
