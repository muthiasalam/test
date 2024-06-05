const handler = require('./handler');

module.exports = [
    {
        method: 'POST',
        path: '/predict',
        handler: handler.predict
    }
];
