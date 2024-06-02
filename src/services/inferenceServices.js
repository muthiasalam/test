const { loadModel } = require('./loadModel');

const inferenceServices = {
  async predict(inputData) {
    try {
      const model = await loadModel();

      const prediction = model.predict(inputData);
      return prediction;
    } catch (error) {
      console.error('Prediction error:', error);
      throw new Error('Prediction failed');
    }
  },
};

module.exports = inferenceServices;