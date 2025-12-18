'use strict'
const Prediccion = require('../models/prediccion');

async function add_product(fecha, latencia, timestamp, prediccion, features, dataid){
    const predict_saved = await Prediccion.create({
        fecha: fecha,
        latencia: latencia,
        timestamp: timestamp,
        prediccion: prediccion,
        features: features,
        data_id : dataid
    })

    return predict_saved._id.toString();
}
module.exports = { add_product };