const { predictHandler } = require('./handler');

module.exports = [
    {
        method: 'GET',
        path: '/predict',
        handler: predictHandler,
    }
];
