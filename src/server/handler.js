const { predictNumber } = require('./services/inferenceServices');
const { storeData } = require('./services/storeData');

const predictHandler = async (request, h) => {
    try {
        const prediction = await predictNumber();
        const result = {
            id: prediction.id,
            prediction: prediction.number,
        };
        await storeData(result.id, result);
        return h.response(result).code(200);
    } catch (error) {
        console.error(error);
        return h.response({ error: error.message }).code(500);
    }
};

module.exports = { predictHandler };
