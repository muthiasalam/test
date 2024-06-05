const Hapi = require('@hapi/hapi');
const { predict } = require('./services/inferenceServices');

(async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    // Endpoint untuk prediksi
    server.route({
        method: 'POST',
        path: '/predict',
        handler: async (request, h) => {
            try {
                // Memproses data dari permintaan POST
                const data = request.payload; // Anda harus mengambil data dari payload permintaan POST sesuai dengan format yang diharapkan

                // Membuat prediksi menggunakan model
                const prediction = await predict(data);

                // Mengembalikan prediksi sebagai respons
                return { prediction };
            } catch (error) {
                console.error('Prediction error:', error);
                return h.response('Error during prediction').code(500);
            }
        }
    });

    await server.start();
    console.log(`Server start at: ${server.info.uri}`);
})();
